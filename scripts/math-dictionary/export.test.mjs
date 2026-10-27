import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import crypto from 'node:crypto'
import { exportVault, ENTRY_PAGES, inside } from './export.mjs'

const digest = value => crypto.createHash('sha256').update(value).digest('hex')
const note = (title, body, publish = true) => `---\ntitle: ${title}\npublish: ${publish}\ndraft: ${!publish}\nstatus: needs-review\nverified: false\n---\n\n# ${title}\n\n${body}\n`

async function fixture(t) {
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'math-dictionary-export-test-'))
  const vault = path.join(parent, 'vault'), site = path.join(parent, 'site')
  await fs.mkdir(path.join(vault, '词条'), { recursive: true })
  await fs.mkdir(path.join(site, 'content'), { recursive: true })
  for (const file of ENTRY_PAGES) await fs.writeFile(path.join(vault, file), note(file.slice(0, -3), file === '首页.md' ? '[词条 A](词条/A.md)' : '', file === '首页.md'))
  await fs.writeFile(path.join(vault, '词条/A.md'), note('甲（A）', '设 $f:X\\to Y$。[首页](../首页.md)\n\n$$\nx^2\n$$'))
  t.after(async () => {
    const resolved = path.resolve(parent)
    assert.ok(inside(os.tmpdir(), resolved))
    assert.ok(path.basename(resolved).startsWith('math-dictionary-export-test-'))
    await fs.rm(resolved, { recursive: true, force: true })
  })
  return { vault, site, run: () => exportVault(vault, { siteRoot: site }) }
}

test('exports only approved pages, rewrites home links, preserves source and mathematical content', async t => {
  const f = await fixture(t)
  const source = await fs.readFile(path.join(f.vault, '词条/A.md'))
  const result = await f.run()
  assert.equal(result.pages, 2)
  assert.equal(result.mathExpressions, 2)
  const exported = await fs.readFile(path.join(f.site, 'content/词条/A.md'), 'utf8')
  assert.ok(exported.includes('[首页](../index.md)'))
  assert.ok(exported.includes('设 $f:X\\to Y$'))
  assert.ok(!exported.includes('# 甲（A）'))
  assert.equal(digest(await fs.readFile(path.join(f.vault, '词条/A.md'))), digest(source))
  const first = await fs.readFile(path.join(f.site, 'scripts/math-dictionary/export-manifest.json'))
  await f.run()
  assert.equal(digest(await fs.readFile(path.join(f.site, 'scripts/math-dictionary/export-manifest.json'))), digest(first))
})

test('does not remove a first H1 that differs from metadata title', async t => {
  const f = await fixture(t)
  await fs.writeFile(path.join(f.vault, '词条/A.md'), note('甲（A）', '正文').replace('# 甲（A）', '# 数学内容标题'))
  await f.run()
  assert.ok((await fs.readFile(path.join(f.site, 'content/词条/A.md'), 'utf8')).includes('# 数学内容标题'))
})

test('blocks links to unpublished notes before any export writes', async t => {
  const f = await fixture(t)
  await fs.writeFile(path.join(f.vault, '词条/B.md'), note('乙（B）', '未发布', false))
  await fs.appendFile(path.join(f.vault, '词条/A.md'), '\n[乙](B.md)')
  await assert.rejects(f.run(), /未允许发布/)
  await assert.rejects(fs.stat(path.join(f.site, 'content/index.md')), { code: 'ENOENT' })
})

test('blocks links to private maintenance files', async t => {
  const f = await fixture(t)
  await fs.mkdir(path.join(f.vault, '.maintenance'))
  await fs.writeFile(path.join(f.vault, '.maintenance/private.md'), 'secret')
  await fs.appendFile(path.join(f.vault, '词条/A.md'), '\n[维护](../.maintenance/private.md)')
  await assert.rejects(f.run(), /未纳入范围/)
})

test('blocks absolute source paths but accepts the mathematical mapping f:X', async t => {
  const f = await fixture(t)
  await fs.appendFile(path.join(f.vault, '词条/A.md'), '\nC:\\Users\\Someone\\private.tex')
  await assert.rejects(f.run(), /本机路径/)
})

test('rejects bad formulas before export', async t => {
  const f = await fixture(t)
  await fs.appendFile(path.join(f.vault, '词条/A.md'), '\n$\\UndefinedMathematicalCommand{x}$')
  await assert.rejects(f.run(), /无法显示的公式/)
})

test('rejects missing footnotes', async t => {
  const f = await fixture(t)
  await fs.appendFile(path.join(f.vault, '词条/A.md'), '\n一个结论[^missing]')
  await assert.rejects(f.run(), /脚注/)
})

test('refuses a symlink or junction into a private directory', async t => {
  const f = await fixture(t)
  const privateDir = path.join(f.vault, 'private')
  await fs.mkdir(privateDir)
  await fs.writeFile(path.join(privateDir, 'secret.md'), note('秘密', '不应发布'))
  await fs.symlink(privateDir, path.join(f.vault, '词条/leak'), process.platform === 'win32' ? 'junction' : 'dir')
  await assert.rejects(f.run(), /符号链接/)
})

test('refuses an unmanaged content file rather than deleting or publishing it', async t => {
  const f = await fixture(t)
  await fs.writeFile(path.join(f.site, 'content/private.md'), 'keep me')
  await assert.rejects(f.run(), /不在发布清单/)
  assert.equal(await fs.readFile(path.join(f.site, 'content/private.md'), 'utf8'), 'keep me')
})

test('removes only a formerly exported page when publication is withdrawn', async t => {
  const f = await fixture(t)
  await fs.writeFile(path.join(f.vault, '词条/B.md'), note('乙（B）', '内容'))
  await f.run()
  await fs.writeFile(path.join(f.vault, '词条/B.md'), note('乙（B）', '内容', false))
  const result = await f.run()
  assert.deepEqual(result.removed, ['词条/B.md'])
  await assert.rejects(fs.stat(path.join(f.site, 'content/词条/B.md')), { code: 'ENOENT' })
  assert.ok((await fs.readFile(path.join(f.vault, '词条/B.md'), 'utf8')).includes('内容'))
})

test('refuses a poisoned previous manifest with an outside deletion path', async t => {
  const f = await fixture(t)
  await f.run()
  await fs.writeFile(path.join(f.site, 'outside.md'), 'keep outside')
  await fs.writeFile(path.join(f.site, 'scripts/math-dictionary/export-manifest.json'), JSON.stringify({ files: [{ destination: '../outside.md' }] }))
  await assert.rejects(f.run(), /越界/)
  assert.equal(await fs.readFile(path.join(f.site, 'outside.md'), 'utf8'), 'keep outside')
})
