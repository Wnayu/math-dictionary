import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import { stageAllowedFiles } from './publish.mjs'
import { inside } from './export.mjs'

async function directory(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'math-dictionary-stage-test-'))
  t.after(async () => {
    assert.ok(inside(os.tmpdir(), path.resolve(root)))
    assert.ok(path.basename(root).startsWith('math-dictionary-stage-test-'))
    await fs.rm(root, { recursive: true, force: true })
  })
  return root
}

const conflict = () => Object.assign(new Error('index busy'), { stderr: "fatal: Unable to create 'repo/.git/index.lock': File exists.\n" })
const allowed = ['content/词条/A.md', 'content/index.md', 'scripts/math-dictionary/verify-build.test.mjs']

test('uses one NUL-delimited literal-pathspec Git add transaction and removes its temporary list', async t => {
  const root = await directory(t)
  const calls = []
  let temporary
  const gitRun = async (command, args) => {
    calls.push([command, args])
    if (args[0] === 'rev-parse') return { stdout: root }
    assert.deepEqual(args.slice(0, 2), ['--literal-pathspecs', 'add'])
    assert.equal(args[3], '--pathspec-file-nul')
    temporary = args[2].slice('--pathspec-from-file='.length)
    assert.equal(path.dirname(temporary), root)
    assert.equal(await fs.readFile(temporary, 'utf8'), [...allowed].sort().join('\0') + '\0')
    return { stdout: '', code: 0 }
  }
  await stageAllowedFiles(allowed, { gitRun })
  assert.equal(calls.filter(([, args]) => args.includes('add')).length, 1)
  await assert.rejects(fs.stat(temporary), { code: 'ENOENT' })
})

test('briefly retries explicit index-lock competition without deleting another lock', async t => {
  const root = await directory(t)
  await fs.writeFile(path.join(root, 'index.lock'), 'other process')
  let attempts = 0
  const pauses = [], notifications = []
  const gitRun = async (_, args) => {
    if (args[0] === 'rev-parse') return { stdout: root }
    if (++attempts < 3) throw conflict()
    return { stdout: '', code: 0 }
  }
  await stageAllowedFiles(allowed, { gitRun, pause: async ms => pauses.push(ms), notify: text => notifications.push(text) })
  assert.equal(attempts, 3)
  assert.deepEqual(pauses, [300, 600])
  assert.equal(notifications.length, 2)
  assert.equal(await fs.readFile(path.join(root, 'index.lock'), 'utf8'), 'other process')
  assert.deepEqual(await fs.readdir(root), ['index.lock'])
})

test('stops after four attempts and cleans only its own list on a persistent index lock', async t => {
  const root = await directory(t)
  let attempts = 0
  const pauses = []
  const gitRun = async (_, args) => {
    if (args[0] === 'rev-parse') return { stdout: root }
    attempts++
    throw conflict()
  }
  await assert.rejects(stageAllowedFiles(allowed, { gitRun, pause: async ms => pauses.push(ms), notify: () => {} }), /索引仍被其他操作占用/)
  assert.equal(attempts, 4)
  assert.deepEqual(pauses, [300, 600, 1200])
  assert.deepEqual(await fs.readdir(root), [])
})

test('does not retry unrelated Git errors and still cleans the temporary list', async t => {
  const root = await directory(t)
  let attempts = 0
  const error = Object.assign(new Error('permission denied'), { stderr: 'Permission denied' })
  const gitRun = async (_, args) => {
    if (args[0] === 'rev-parse') return { stdout: root }
    attempts++
    throw error
  }
  await assert.rejects(stageAllowedFiles(allowed, { gitRun, pause: async () => assert.fail('must not retry') }), /permission denied/)
  assert.equal(attempts, 1)
  assert.deepEqual(await fs.readdir(root), [])
})

test('rejects a private path without invoking Git or creating a pathspec file', async () => {
  await assert.rejects(stageAllowedFiles(['.obsidian/plugins/private/data.json'], { gitRun: async () => assert.fail('must not invoke Git') }), /未授权路径/)
})
