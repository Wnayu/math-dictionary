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
  'scripts/math-dictionary/publish.test.mjs',
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
      else if (code !== 0 && !allowFailure) reject(Object.assign(new Error(`步骤执行失败：${command === process.execPath ? 'Node.js' : command} ${args.slice(0, 2).join(' ')}；${stderr.trim().slice(-1800) || '请查看发布日志。'}`), { stderr, exitCode: code }))
      else resolve({ code, stdout: stdout.trim(), stderr: stderr.trim() })
    })
  })
}

export async function stageAllowedFiles(files, { gitRun = run, pause = ms => new Promise(resolve => setTimeout(resolve, ms)), notify = message => emit('progress', message) } = {}) {
  const paths = [...new Set(files)].sort()
  if (!paths.length) return
  if (paths.some(file => typeof file !== 'string' || file.includes('\0') || (!CONFIG_FILES.includes(file) && !(file.startsWith('content/') && publicPath(file.slice('content/'.length)))))) throw new Error('暂存清单包含未授权路径，已停止。')
  const gitDirectory = (await gitRun('git', ['rev-parse', '--absolute-git-dir'], { quiet: true })).stdout
  const filename = path.join(gitDirectory, `math-dictionary-stage-${process.pid}-${crypto.randomUUID()}.paths`)
  const handle = await fs.open(filename, 'wx', 0o600)
  try {
    await handle.writeFile(paths.join('\0') + '\0', 'utf8')
    await handle.close()
    const args = ['--literal-pathspecs', 'add', `--pathspec-from-file=${filename}`, '--pathspec-file-nul']
    const delays = [300, 600, 1200]
    for (let attempt = 0; ; attempt++) {
      try { await gitRun('git', args, { quiet: true }); break }
      catch (error) {
        const lockConflict = /index\.lock[^\r\n]*(?:File exists|already exists)/i.test(error.stderr ?? '')
        if (!lockConflict) throw error
        if (attempt >= delays.length) throw new Error('Git 索引仍被其他操作占用，已停止发布。请等待其他 Git 操作结束后重试；不会删除它的 index.lock。', { cause: error })
        notify(`Git 正在处理其他操作，稍后重试暂存（${attempt + 1}/${delays.length}）。`)
        await pause(delays[attempt])
      }
    }
  } finally {
    await handle.close().catch(() => {})
    await fs.unlink(filename).catch(error => { if (error.code !== 'ENOENT') process.stderr.write('临时暂存清单未能清理，请检查 .git/math-dictionary-stage-*.paths。\n') })
  }
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

export function readExistingGitHubToken({ spawnProcess = spawn, timeoutMs = 15000 } = {}) {
  if (interrupted) return Promise.resolve(null)
  // Deliberately separate from run(): credential stdout must never become a log.
  return new Promise(resolve => {
    let child
    try {
      child = spawnProcess('git', ['credential', 'fill'], { cwd: SITE_ROOT, shell: false, windowsHide: true, env: interactiveEnv, stdio: ['pipe', 'pipe', 'ignore'] })
    } catch { resolve(null); return }
    childProcess = child
    let output = '', finished = false
    const finish = token => {
      if (finished) return
      finished = true
      clearTimeout(timer)
      output = ''
      if (childProcess === child) childProcess = null
      resolve(token)
    }
    const timer = setTimeout(() => { child.kill('SIGTERM'); finish(null) }, timeoutMs)
    child.stdout.setEncoding('utf8')
    child.stdout.on('data', chunk => {
      if (finished) return
      output += chunk
      if (output.length > 65536) { child.kill('SIGTERM'); finish(null) }
    })
    child.once('error', () => finish(null))
    child.once('close', code => {
      if (finished) return
      let token = null
      if (code === 0) {
        const fields = Object.create(null)
        for (const line of output.split(/\r?\n/)) {
          const equal = line.indexOf('=')
          if (equal >= 0) fields[line.slice(0, equal)] = line.slice(equal + 1)
        }
        if (fields.username?.toLowerCase() === 'wnayu' && fields.password) token = fields.password
      }
      finish(token)
    })
    child.stdin.once('error', () => { child.kill('SIGTERM'); finish(null) })
    try { child.stdin.end('protocol=https\nhost=github.com\nusername=Wnayu\n\n') }
    catch { child.kill('SIGTERM'); finish(null) }
  })
}

export async function waitForDeployment(sha, timeoutMs = 180000, { fetchRequest = fetch, readCredential = readExistingGitHubToken, notify = emit, log = message => process.stderr.write(message), pause = ms => new Promise(resolve => setTimeout(resolve, ms)) } = {}) {
  const deadline = Date.now() + timeoutMs
  notify('progress', '内容已推送，正在等待 GitHub Pages 完成构建与上线。')
  // Use only the already configured Git credential, in memory, for github.com.
  // It is never passed in process arguments, URLs, settings, logs or website requests.
  let token = await readCredential().catch(() => null)
  if (!token) notify('progress', '暂未读取到本机 GitHub 登录状态，尝试公开查询；若遇限额，将保留“已推送、待确认上线”状态。')
  const apiUrl = `https://api.github.com/repos/${REPOSITORY}/actions/runs?head_sha=${sha}&per_page=20`
  const requestStatus = async credential => {
    const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'MathDictionaryPublisher' }
    if (credential) headers.Authorization = `Bearer ${credential}`
    return fetchRequest(apiUrl, { headers, signal: AbortSignal.timeout(15000) })
  }
  while (Date.now() < deadline && !interrupted) {
    try {
      let response = await requestStatus(token)
      if (token && (response.status === 401 || response.status === 403)) {
        token = null
        notify('progress', '当前登录状态未能读取部署信息，尝试公开查询。')
        response = await requestStatus(null)
      }
      if (!response.ok) {
        log(`部署状态暂不可读取（HTTP ${response.status}）。\n`)
        notify('progress', '内容已推送；暂时无法确认 GitHub Pages 是否上线，可稍后打开网站或查看 GitHub Actions。', { url: WEBSITE })
        return false
      }
      const data = await response.json()
      const runs = (data.workflow_runs ?? []).filter(run => run.head_sha === sha && run.path === '.github/workflows/deploy.yml').sort((a, b) => b.run_number - a.run_number)
      const latest = runs[0]
      if (latest?.status === 'completed') {
        if (latest.conclusion !== 'success') throw Object.assign(new Error(`内容已推送，但 GitHub Pages 构建未成功（${latest.conclusion}）。请打开 ${latest.html_url} 查看。`), { deploymentFailed: true })
        const page = await fetchRequest(WEBSITE + '?published=' + sha.slice(0, 12), { signal: AbortSignal.timeout(15000), cache: 'no-store' })
        if (page.ok) { notify('deployed', '数学词典已发布，固定网址现在可以访问。', { url: WEBSITE, commit: sha }); return true }
      }
    } catch (error) {
      if (error.deploymentFailed) throw error
      log('部署状态读取暂时失败，稍后重试。\n')
    }
    await pause(10000)
  }
  if (interrupted) throw new Error('发布状态等待已停止；已推送的 GitHub 构建仍可能继续。')
  notify('progress', '内容已推送；本次等待内尚未确认上线，可稍后打开网站或查看 GitHub Actions。', { url: WEBSITE })
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
    // One Git index transaction; NUL-delimited literal pathspecs preserve Unicode
    // filenames and avoid per-file index-lock races or shell argument limits.
    await stageAllowedFiles(stage)
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
