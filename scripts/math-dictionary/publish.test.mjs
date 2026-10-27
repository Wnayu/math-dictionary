import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'
import { EventEmitter } from 'node:events'
import { PassThrough } from 'node:stream'
import { stageAllowedFiles, readExistingGitHubToken, waitForDeployment } from './publish.mjs'
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

test('reads an existing credential through fixed stdin without logging or process arguments', async () => {
  const fakeToken = 'fixture-token-only=with-equals'
  let request = '', optionsSeen, argumentsSeen
  const spawnProcess = (command, args, options) => {
    assert.equal(command, 'git')
    argumentsSeen = args; optionsSeen = options
    const child = new EventEmitter()
    child.stdin = new PassThrough(); child.stdout = new PassThrough()
    child.kill = () => true
    child.stdin.on('data', data => { request += data.toString() })
    child.stdin.on('finish', () => {
      child.stdout.write(`protocol=https\nhost=github.com\nusername=Wnayu\npassword=${fakeToken}\n`)
      child.emit('close', 0)
    })
    return child
  }
  assert.equal(await readExistingGitHubToken({ spawnProcess }), fakeToken)
  assert.deepEqual(argumentsSeen, ['credential', 'fill'])
  assert.equal(request, 'protocol=https\nhost=github.com\nusername=Wnayu\n\n')
  assert.equal(optionsSeen.env.GCM_INTERACTIVE, 'Never')
  assert.equal(optionsSeen.env.GIT_TERMINAL_PROMPT, '0')
  assert.equal(optionsSeen.shell, false)
  assert.equal(optionsSeen.windowsHide, true)
  assert.deepEqual(optionsSeen.stdio, ['pipe', 'pipe', 'ignore'])
  assert.ok(!JSON.stringify({ request, argumentsSeen, optionsSeen }).includes(fakeToken))
})

test('credential process failure returns anonymous fallback without surfacing its output', async () => {
  const spawnProcess = () => {
    const child = new EventEmitter()
    child.stdin = new PassThrough(); child.stdout = new PassThrough(); child.kill = () => true
    child.stdin.on('finish', () => { child.stdout.write('password=fixture-must-not-return\n'); child.emit('close', 1) })
    return child
  }
  assert.equal(await readExistingGitHubToken({ spawnProcess }), null)
})

test('deployment status uses the credential only for GitHub API and never website or events', async () => {
  const sha = 'a'.repeat(40), token = 'fixture-secret-only'
  const calls = [], events = []
  const fetchRequest = async (url, options) => {
    calls.push({ url, options })
    if (url.startsWith('https://api.github.com/')) return { ok: true, status: 200, json: async () => ({ workflow_runs: [{ head_sha: sha, path: '.github/workflows/deploy.yml', status: 'completed', conclusion: 'success', run_number: 1 }] }) }
    return { ok: true, status: 200 }
  }
  const result = await waitForDeployment(sha, 1000, { readCredential: async () => token, fetchRequest, notify: (...event) => events.push(event), log: () => assert.fail('no log expected') })
  assert.equal(result, true)
  assert.equal(calls[0].options.headers.Authorization, 'Bearer ' + token)
  assert.equal(calls[1].options.headers, undefined)
  assert.ok(calls.every(call => !call.url.includes(token)))
  assert.ok(!JSON.stringify(events).includes(token))
  assert.ok(events.some(event => event[0] === 'deployed'))
})

test('missing credentials and anonymous rate limit report pending rather than deployed', async () => {
  const events = [], logs = []
  const result = await waitForDeployment('b'.repeat(40), 1000, {
    readCredential: async () => null,
    fetchRequest: async (_, options) => { assert.equal(options.headers.Authorization, undefined); return { ok: false, status: 403 } },
    notify: (...event) => events.push(event), log: message => logs.push(message),
  })
  assert.equal(result, false)
  assert.ok(events.some(event => event[1].includes('暂时无法确认')))
  assert.ok(!events.some(event => event[0] === 'deployed'))
  assert.ok(logs.some(message => message.includes('403')))
})

test('rejected existing credential falls back to anonymous without exposing the credential', async () => {
  const token = 'fixture-rejected-only', events = [], requests = []
  const result = await waitForDeployment('c'.repeat(40), 1000, {
    readCredential: async () => token,
    fetchRequest: async (_, options) => { requests.push(options.headers); return { ok: false, status: options.headers.Authorization ? 401 : 403 } },
    notify: (...event) => events.push(event), log: message => assert.ok(!message.includes(token)),
  })
  assert.equal(result, false)
  assert.equal(requests[0].Authorization, 'Bearer ' + token)
  assert.equal(requests[1].Authorization, undefined)
  assert.ok(!JSON.stringify(events).includes(token))
})
