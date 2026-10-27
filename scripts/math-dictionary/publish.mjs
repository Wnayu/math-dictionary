import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { exportVault, SITE_ROOT, publicPath } from './export.mjs'
import { verifyBuild } from './verify-build.mjs'

const REPOSITORY = 'Wnayu/math-dictionary'
const WEBSITE = 'https://wnayu.github.io/math-dictionary/'
const CONFIG_FILES = [
  'scripts/math-dictionary/export.mjs', 'scripts/math-dictionary/publish.mjs',
  'scripts/math-dictionary/verify-build.mjs', 'scripts/math-dictionary/README.md',
  'scripts/math-dictionary/export.test.mjs', 'scripts/math-dictionary/export-manifest.json',
  'scripts/math-dictionary/verify-build.test.mjs',
  'quartz.config.yaml', 'quartz.ts', 'quartz.lock.json', 'package.json', 'package-lock.json',
  'quartz/components/DictionaryNavigation.tsx', 'quartz/components/DictionaryWelcome.tsx',
  'quartz/components/scripts/dictionary-welcome.inline.ts',
  'quartz/styles/custom.scss', 'quartz/static/icon.svg', 'quartz/static/icon.png',
  '.github/workflows/deploy.yml', '.gitignore', 'README.md',
]

export function emit(event, message, extra = {}) {
  process.stdout.write(JSON.stringify({ event, message, ...extra }) + '\n')
}

let childProcess = null
let interrupted = false
const interactiveEnv = { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never' }
function run(command, args, { quiet = false, allowFailure = false } = {}) {
  if (interrupted) return Promise.reject(new Error('发布已停止。'))
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: SITE_ROOT, shell: false, windowsHide: true, env: interactiveEnv, stdio: ['ignore', 'pipe', 'pipe'] })
    childProcess = child
    let stdout = '', stderr = ''
    child.stdout.setEncoding('utf8')
    child.stderr.setEncoding('utf8')
    child.stdout.on('data', data => { stdout += data.toString('utf8'); if (!quiet) process.stderr.write(data) })
    child.stderr.on('data', data => { stderr += data.toString('utf8'); if (!quiet) process.stderr.write(data) })
    child.on('error', reject)
    child.on('close', code => {
      if (childProcess === child) childProcess = null
      if (interrupted) reject(new Error('发布已停止。'))
      else if (code !== 0 && !allowFailure) reject(new Error(`步骤执行失败：${command === process.execPath ? 'Node.js' : command} ${args.slice(0, 2).join(' ')}；${stderr.trim().slice(-1800) || '请查看发布日志。'}`))
      else resolve({ code, stdout: stdout.trim(), stderr: stderr.trim() })
    })
  })
}

async function acquireLock() {
  const gitDirectory = (await run('git', ['rev-parse', '--absolute-git-dir'], { quiet: true })).stdout
  const filename = path.join(gitDirectory, 'math-dictionary-publish.lock')
  const token = crypto.randomUUID()
  async function create() {
    const handle = await fs.open(filename, 'wx')
    await handle.writeFile(JSON.stringify({ pid: process.pid, token, started: new Date().toISOString() }))
    await handle.close()
  }
  try { await create() } catch (error) {
    if (error.code !== 'EEXIST') throw error
    let old
    try { old = JSON.parse(await fs.readFile(filename, 'utf8')) } catch { throw new Error('已有发布锁且无法读取，请检查是否有其他发布任务。') }
    let alive = true
    try { process.kill(old.pid, 0) } catch (error) { if (error.code === 'ESRCH') alive = false }
    if (alive) throw new Error('已有一个数学词典发布任务正在运行，请等待完成。')
    await fs.unlink(filename)
    await create()
  }
  return async () => {
    try { const lock = JSON.parse(await fs.readFile(filename, 'utf8')); if (lock.token === token) await fs.unlink(filename) } catch (error) { if (error.code !== 'ENOENT') process.stderr.write('发布锁清理失败，请查看 .git/math-dictionary-publish.lock。\n') }
  }
}

async function waitForDeployment(sha, timeoutMs = 180000) {
  const deadline = Date.now() + timeoutMs
  emit('progress', '内容已推送，正在等待 GitHub Pages 完成构建与上线。')
  while (Date.now() < deadline && !interrupted) {
    try {
      const response = await fetch(`https://api.github.com/repos/${REPOSITORY}/actions/runs?head_sha=${sha}&per_page=20`, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'MathDictionaryPublisher' }, signal: AbortSignal.timeout(15000) })
      if (!response.ok) { process.stderr.write(`部署状态暂不可读取（HTTP ${response.status}）。\n`); return false }
      const data = await response.json()
      const runs = (data.workflow_runs ?? []).filter(run => run.head_sha === sha && run.path === '.github/workflows/deploy.yml').sort((a, b) => b.run_number - a.run_number)
      const latest = runs[0]
      if (latest?.status === 'completed') {
        if (latest.conclusion !== 'success') throw Object.assign(new Error(`内容已推送，但 GitHub Pages 构建未成功（${latest.conclusion}）。请打开 ${latest.html_url} 查看。`), { deploymentFailed: true })
        const page = await fetch(WEBSITE + '?published=' + sha.slice(0, 12), { signal: AbortSignal.timeout(15000), cache: 'no-store' })
        if (page.ok) { emit('deployed', '数学词典已发布，固定网址现在可以访问。', { url: WEBSITE, commit: sha }); return true }
      }
    } catch (error) {
      if (error.deploymentFailed) throw error
      process.stderr.write(`部署状态读取稍后重试：${error.message}\n`)
    }
    await new Promise(resolve => setTimeout(resolve, 10000))
  }
  if (interrupted) throw new Error('发布状态等待已停止；已推送的 GitHub 构建仍可能继续。')
  emit('progress', '内容已推送；本次等待内尚未确认上线，可稍后打开网站或查看 GitHub Actions。', { url: WEBSITE })
  return false
}

export async function main(args = process.argv.slice(2)) {
  const vaultIndex = args.indexOf('--vault')
  const vault = vaultIndex >= 0 ? args[vaultIndex + 1] : undefined
  const checkOnly = args.includes('--check-only')
  const allowedFlags = new Set(['--vault', '--check-only'])
  for (let i = 0; i < args.length; i++) {
    if (!allowedFlags.has(args[i])) throw new Error(`不认识的选项：${args[i]}`)
    if (args[i] === '--vault') { i++; if (!args[i] || args[i].startsWith('--')) throw new Error('请提供知识库目录。') }
  }
  if (!vault) throw new Error('请先在插件设置中填写知识库和网站目录。')
  const repoRoot = (await run('git', ['rev-parse', '--show-toplevel'], { quiet: true })).stdout
  if (path.resolve(repoRoot).toLowerCase() !== SITE_ROOT.toLowerCase()) throw new Error('当前网站目录不是独立的 Git 仓库根目录。')
  const release = await acquireLock()
  const onSignal = () => { interrupted = true; childProcess?.kill('SIGTERM') }
  process.once('SIGTERM', onSignal)
  process.once('SIGINT', onSignal)
  try {
    if (!checkOnly) {
      const branch = (await run('git', ['branch', '--show-current'], { quiet: true })).stdout
      if (branch !== 'main') throw new Error('请切回网站仓库的 main 分支后发布。')
      const origin = (await run('git', ['remote', 'get-url', 'origin'], { quiet: true })).stdout
      if (!/^(?:https:\/\/github\.com\/|git@github\.com:)Wnayu\/math-dictionary(?:\.git)?\/?$/i.test(origin)) throw new Error('Git origin 不是已授权的 Wnayu/math-dictionary 仓库，已停止。')
      const staged = (await run('git', ['diff', '--cached', '--name-only', '-z'], { quiet: true })).stdout
      if (staged) throw new Error('网站仓库已有暂存但未提交的修改，请先处理，避免混入本次发布。')
      emit('progress', '检查 GitHub 连接与远端版本。')
      await run('git', ['fetch', 'origin', 'main'], { quiet: true })
      const behind = await run('git', ['merge-base', '--is-ancestor', 'origin/main', 'HEAD'], { quiet: true, allowFailure: true })
      if (behind.code !== 0) throw new Error('GitHub 上已有本机尚未合入的更新，请先同步网站仓库后再发布；不会覆盖远端修改。')
    }
    emit('progress', '读取允许发布的词条，检查链接、脚注和公式。')
    const exported = await exportVault(vault)
    emit('progress', `已导出 ${exported.articles} 篇词条和 ${exported.pages - exported.articles} 个入口，正在生成网站。`)
    await run(process.execPath, [path.join(SITE_ROOT, 'quartz/bootstrap-cli.mjs'), 'build', '--concurrency', '2'])
    emit('progress', '检查生成的页面、链接和公式显示。')
    const verified = await verifyBuild()
    if (checkOnly) { emit('checked', `检查完成：${exported.pages} 个页面、${exported.mathExpressions} 段公式通过，未推送到 GitHub。`, { pages: verified.pages }); return }
    const trackedContent = new Set((await run('git', ['ls-files', '-z', '--', 'content'], { quiet: true })).stdout.split('\0').filter(Boolean))
    const stage = new Set()
    for (const file of exported.stagedPaths) {
      const exists = await fs.stat(path.join(SITE_ROOT, file)).then(() => true, error => { if (error.code === 'ENOENT') return false; throw error })
      if (exists || trackedContent.has(file)) stage.add(file)
    }
    // A prior --check-only can already have removed an unpublished page. Stage its
    // tracked deletion even when it no longer occurs in the latest export manifest.
    const deleted = (await run('git', ['diff', '--name-only', '--diff-filter=D', '-z', '--', 'content'], { quiet: true })).stdout.split('\0').filter(Boolean)
    for (const file of deleted) if (file.startsWith('content/') && publicPath(file.slice('content/'.length))) stage.add(file)
    for (const file of CONFIG_FILES) {
      try { if ((await fs.stat(path.join(SITE_ROOT, file))).isFile()) stage.add(file) } catch (error) { if (error.code !== 'ENOENT') throw error }
    }
    // Literal pathspecs prevent filenames from being interpreted as Git options or globs.
    for (const file of stage) await run('git', ['--literal-pathspecs', 'add', '--', file], { quiet: true })
    const stagedNow = (await run('git', ['diff', '--cached', '--name-only', '-z'], { quiet: true })).stdout.split('\0').filter(Boolean)
    if (stagedNow.some(file => !stage.has(file))) throw new Error('发布期间出现了其他暂存文件，已停止提交。请先检查网站仓库的暂存区。')
    const changed = await run('git', ['diff', '--cached', '--quiet'], { quiet: true, allowFailure: true })
    if (changed.code === 1) {
      emit('progress', '保存本次词条更新。')
      await run('git', ['commit', '-m', 'Update published mathematics dictionary'], { quiet: true })
    } else if (changed.code !== 0) throw new Error('不能读取本次待发布内容。')
    emit('progress', '推送到 GitHub，触发网站自动更新。')
    await run('git', ['push', 'origin', 'main'], { quiet: true })
    const sha = (await run('git', ['rev-parse', 'HEAD'], { quiet: true })).stdout
    emit('pushed', '词条已安全推送到 GitHub，网站正在更新。', { url: WEBSITE, commit: sha })
    await waitForDeployment(sha)
  } finally {
    process.removeListener('SIGTERM', onSignal)
    process.removeListener('SIGINT', onSignal)
    await release()
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { await main() }
  catch (error) { emit('error', error.message); process.stderr.write(error.stack + '\n'); process.exitCode = 1 }
}
