import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import { parse as parseYaml } from 'yaml'
import { unified } from 'unified'
import remarkParse from 'remark-parse'

export const SITE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
export const ENTRY_PAGES = ['首页.md', '测度论导航.md', '概率论导航.md', '词条索引.md', '记号索引.md', '二级标题清单.md', '范围与来源.md', '概率论范围与来源.md']
const parser = unified().use(remarkParse)
const require = createRequire(import.meta.url)
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex')
const slash = (value) => value.split(path.sep).join('/')

export function inside(root, target) {
  const relative = path.relative(path.resolve(root), path.resolve(target))
  return relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative))
}

async function noSymlink(root, relative, allowMissing = false) {
  const target = path.resolve(root, relative)
  if (!inside(root, target)) throw new Error(`路径超出允许目录：${relative}`)
  let current = path.resolve(root)
  const segments = path.relative(current, target).split(path.sep).filter(Boolean)
  for (const part of [null, ...segments]) {
    if (part) current = path.join(current, part)
    try {
      if ((await fs.lstat(current)).isSymbolicLink()) throw new Error(`发布不接受符号链接：${relative}`)
    } catch (error) {
      if (allowMissing && error.code === 'ENOENT') return
      throw error
    }
  }
}

async function walkMarkdown(root, relative = '词条') {
  await noSymlink(root, relative)
  const result = []
  for (const entry of await fs.readdir(path.join(root, relative), { withFileTypes: true })) {
    const child = path.join(relative, entry.name)
    if (entry.isSymbolicLink()) throw new Error(`词条目录含符号链接，请移出后发布：${slash(child)}`)
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.')) continue
      result.push(...await walkMarkdown(root, child))
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) result.push(slash(child))
  }
  return result
}

export function splitNote(text, name) {
  const match = text.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) throw new Error(`${name} 缺少页面属性区。`)
  const metadata = parseYaml(match[1], { uniqueKeys: true })
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) throw new Error(`${name} 的页面属性不是有效对象。`)
  const source = text.replace(/^\uFEFF/, '')
  return { metadata, header: match[0], body: source.slice(match[0].length) }
}

function nodes(tree) {
  const result = []
  function visit(node) { result.push(node); for (const child of node.children ?? []) visit(child) }
  visit(tree)
  return result
}

function decodeLink(value, file) {
  try { return decodeURIComponent(value) } catch { throw new Error(`${file} 有无法解析的链接：${value}`) }
}

function localTarget(url, source, selected) {
  if (/^(?:https?:|mailto:|tel:)/i.test(url) || url.startsWith('//')) return null
  if (/^[A-Za-z][A-Za-z\d+.-]*:/.test(url) || /^(?:[A-Za-z]:|\\)/.test(url)) throw new Error(`${source} 含不能公开的本地或应用链接：${url}`)
  const split = url.search(/[?#]/)
  const file = decodeLink(split < 0 ? url : url.slice(0, split), source)
  const suffix = split < 0 ? '' : url.slice(split)
  if (!file) return null
  if (file.startsWith('/') || file.includes('\\')) throw new Error(`${source} 的站内链接必须使用相对路径：${url}`)
  const normalized = path.posix.normalize(path.posix.join(path.posix.dirname(source), file))
  const candidates = [normalized, normalized + '.md']
  const target = candidates.find(candidate => selected.has(candidate))
  if (!target) throw new Error(`${source} 链接到不存在、未允许发布或未纳入范围的文件：${url}`)
  return { target, suffix }
}

function validateFootnotes(body, name) {
  const definitions = [...body.matchAll(/^\[\^([^\]]+)\]:/gm)].map(x => x[1])
  const uses = [...body.replace(/^\[\^[^\]]+\]:.*$/gm, '').matchAll(/\[\^([^\]]+)\]/g)].map(x => x[1])
  const definitionSet = new Set(definitions)
  const missing = [...new Set(uses)].filter(x => !definitionSet.has(x))
  const unused = definitions.filter(x => !uses.includes(x))
  if (missing.length || unused.length || definitionSet.size !== definitions.length) throw new Error(`${name} 的脚注存在遗漏、重复或未使用定义，请先修正。`)
}

export function validateMath(body, name, katex) {
  const plain = body.replace(/^> ?/gm, '').replace(/```[^\n]*\n[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '')
  let count = 0
  const masked = plain.replace(/\$\$([\s\S]*?)\$\$|(?<!\\)\$([^$]+?)\$/g, (_, display, inline) => {
    const formula = (display ?? inline).trim()
    try { katex.renderToString(formula, { displayMode: display !== undefined, throwOnError: true, strict: 'ignore', trust: false }) }
    catch (error) { throw new Error(`${name} 有无法显示的公式：${formula.slice(0, 150)}；${error.message}`) }
    count++
    return ''
  })
  if (/(?<!\\)\$/.test(masked)) throw new Error(`${name} 存在未配对的数学公式分隔符。`)
  return count
}

function transformBody(body, source, selected, destination, title) {
  const tree = parser.parse(body)
  const edits = []
  let firstHeading = true
  const definitions = new Set(nodes(tree).filter(x => x.type === 'definition').map(x => x.identifier))
  for (const node of nodes(tree)) {
    if (node.type === 'heading') {
      const headingText = body.slice(node.position.start.offset, node.position.end.offset).replace(/^#\s+/, '').trim()
      if (firstHeading && node.depth === 1 && headingText === title && /^\s*$/.test(body.slice(0, node.position.start.offset))) edits.push({ start: node.position.start.offset, end: node.position.end.offset, text: '' })
      firstHeading = false
    }
    if ((node.type === 'linkReference' || node.type === 'imageReference') && !node.identifier.startsWith('^') && !definitions.has(node.identifier)) throw new Error(`${source} 有未定义的引用式链接：${node.identifier}`)
    if (node.type !== 'link' && node.type !== 'image' && node.type !== 'definition') continue
    const local = localTarget(node.url, source, selected)
    if (!local || local.target !== '首页.md') continue
    const mapped = selected.get(local.target).destination
    let replacement = path.posix.relative(path.posix.dirname(destination), mapped)
    if (!replacement) replacement = path.posix.basename(mapped)
    replacement += local.suffix
    const start = node.position.start.offset, end = node.position.end.offset
    const raw = body.slice(start, end)
    const offset = node.type === 'definition' ? raw.indexOf(node.url, raw.indexOf(':') + 1) : raw.lastIndexOf(node.url)
    if (offset < 0) throw new Error(`${source} 的首页链接不能安全转换：${node.url}`)
    edits.push({ start: start + offset, end: start + offset + node.url.length, text: replacement })
  }
  if (/\[\[[^\]]+\]\]/.test(body)) throw new Error(`${source} 含尚未纳入发布校验的 wiki 链接，请使用本库约定的相对 Markdown 链接。`)
  for (const edit of edits.sort((a, b) => b.start - a.start)) body = body.slice(0, edit.start) + edit.text + body.slice(edit.end)
  return body
}

export function publicPath(relative) {
  return relative === 'index.md' || ENTRY_PAGES.filter(p => p !== '首页.md').includes(relative) || /^词条\/(?!\.)[^\\]+\.md$/i.test(relative) && !relative.split('/').some(p => p.startsWith('.') || p === '..')
}

export async function exportVault(vaultPath, options = {}) {
  if (!vaultPath) throw new Error('请指定 Obsidian 知识库目录（--vault）。')
  const vault = path.resolve(vaultPath)
  const site = path.resolve(options.siteRoot ?? SITE_ROOT)
  const content = path.join(site, 'content')
  if (inside(vault, site) || inside(site, vault)) throw new Error('网站目录与知识库必须彼此独立，不能嵌套。')
  await noSymlink(vault, '')
  await noSymlink(site, '')
  await noSymlink(site, 'content', true)
  const candidates = [...ENTRY_PAGES, ...await walkMarkdown(vault)].sort()
  const selected = new Map()
  const sourceHashes = []
  for (const name of candidates) {
    await noSymlink(vault, name)
    const bytes = await fs.readFile(path.join(vault, name))
    const text = bytes.toString('utf8')
    const note = splitNote(text, name)
    if (note.metadata.publish !== true || note.metadata.draft === true) continue
    if (typeof note.metadata.title !== 'string' || !note.metadata.title.trim()) throw new Error(`${name} 缺少有效标题。`)
    if (/(?:[A-Za-z]:[\\/](?:Users|Documents|OneDrive|Windows|Program Files|Temp)[\\/]|file:\/\/|obsidian:\/\/)/i.test(text)) throw new Error(`${name} 含本机路径或应用链接，请移入私有维护记录后再发布。`)
    const destination = name === '首页.md' ? 'index.md' : name
    selected.set(name, { ...note, source: name, destination, sourceHash: hash(bytes) })
    sourceHashes.push({ file: name, sha256: hash(bytes) })
  }
  if (!selected.has('首页.md')) throw new Error('首页尚未允许发布，不能生成词典网站。')
  if (![...selected.keys()].some(p => p.startsWith('词条/'))) throw new Error('没有允许发布的词条，已停止导出。')
  const katex = options.katex ?? require('katex')
  let mathExpressions = 0
  const prepared = []
  for (const note of selected.values()) {
    validateFootnotes(note.body, note.source)
    mathExpressions += validateMath(note.body, note.source, katex)
    const body = transformBody(note.body, note.source, selected, note.destination, note.metadata.title)
    const text = note.header + body
    prepared.push({ destination: note.destination, text, sha256: hash(text), source: note.source, sourceSha256: note.sourceHash })
  }
  const manifestFile = path.join(site, 'scripts/math-dictionary/export-manifest.json')
  let previous = { files: [] }
  try { previous = JSON.parse(await fs.readFile(manifestFile, 'utf8')) } catch (error) { if (error.code !== 'ENOENT') throw error }
  const currentNames = new Set(prepared.map(p => p.destination))
  const managedNames = new Set([...currentNames, ...(previous.files ?? []).map(p => p.destination)])
  const removed = []
  for (const row of previous.files ?? []) {
    if (!publicPath(row.destination) || !inside(content, path.join(content, row.destination))) throw new Error('旧导出清单含越界路径，已停止。')
    if (!currentNames.has(row.destination)) removed.push(row.destination)
  }
  // Complete every check before writing; never clean or mirror the whole content tree.
  await fs.mkdir(content, { recursive: true })
  async function checkContentDirectory(relative = '') {
    for (const entry of await fs.readdir(path.join(content, relative), { withFileTypes: true })) {
      const name = path.posix.join(relative, entry.name)
      if (entry.isSymbolicLink()) throw new Error(`网站内容目录含符号链接：${name}`)
      if (entry.isDirectory()) await checkContentDirectory(name)
      else if (name !== '.gitkeep' && !managedNames.has(name)) throw new Error(`网站内容目录含不在发布清单中的文件：${name}。请先移出，避免意外发布。`)
    }
  }
  await checkContentDirectory()
  for (const row of prepared) await noSymlink(content, row.destination, true)
  for (const name of removed) await noSymlink(content, name, true)
  for (const row of prepared) {
    const target = path.join(content, row.destination)
    await fs.mkdir(path.dirname(target), { recursive: true })
    await fs.writeFile(target, row.text, 'utf8')
  }
  for (const name of removed) await fs.unlink(path.join(content, name)).catch(error => { if (error.code !== 'ENOENT') throw error })
  // Verify the source remained unchanged during the export; it is always read-only.
  for (const row of sourceHashes) if (hash(await fs.readFile(path.join(vault, row.file))) !== row.sha256) throw new Error(`${row.file} 在导出期间发生变化，请保存后重新发布。`)
  const manifest = { schemaVersion: 1, pages: prepared.length, articles: prepared.filter(p => p.source.startsWith('词条/')).length, mathExpressions, files: prepared.map(({ text, ...rest }) => rest) }
  await fs.mkdir(path.dirname(manifestFile), { recursive: true })
  await fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
  return { ...manifest, removed, stagedPaths: [...prepared.map(p => 'content/' + p.destination), ...removed.map(p => 'content/' + p), 'scripts/math-dictionary/export-manifest.json'] }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const index = process.argv.indexOf('--vault')
    const result = await exportVault(index >= 0 ? process.argv[index + 1] : undefined)
    process.stdout.write(JSON.stringify({ event: 'exported', message: `已导出 ${result.articles} 篇词条及 ${result.pages - result.articles} 个入口，${result.mathExpressions} 段公式通过检查。`, pages: result.pages }) + '\n')
  } catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1 }
}
