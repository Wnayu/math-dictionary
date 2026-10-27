import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fromHtml } from 'hast-util-from-html'
import { slugifyFilePath } from '@quartz-community/utils/path'
import { parse as parseYaml } from 'yaml'
import { SITE_ROOT, inside } from './export.mjs'

async function allFiles(directory, relative = '') {
  const result = []
  for (const entry of await fs.readdir(path.join(directory, relative), { withFileTypes: true })) {
    const name = path.join(relative, entry.name)
    if (entry.isSymbolicLink()) throw new Error('构建结果中不允许符号链接。')
    if (entry.isDirectory()) result.push(...await allFiles(directory, name))
    else result.push(name.split(path.sep).join('/'))
  }
  return result
}

function treeNodes(root) {
  const nodes = []
  function walk(node) { nodes.push(node); for (const child of node.children ?? []) walk(child) }
  walk(root)
  return nodes
}

function cssUnescape(value) {
  return value.replace(/\\(?:\r\n|\n|\r|\f)/g, '').replace(/\\([\da-fA-F]{1,6})(?:\r\n|[\t\n\r\f ])?|\\([^\n\r\f])/g, (_, hex, character) => {
    if (!hex) return character
    const code = Number.parseInt(hex, 16)
    return code === 0 || code > 0x10ffff || (code >= 0xd800 && code <= 0xdfff) ? '\uFFFD' : String.fromCodePoint(code)
  })
}

// Read actual CSS url() tokens, skipping comments and unrelated quoted strings.
// This handles escaped quotes, escaped parentheses and CSS hexadecimal escapes.
export function cssUrls(css) {
  const urls = []
  function quoted(start) {
    const quote = css[start]
    let index = start + 1
    for (; index < css.length; index++) {
      if (css[index] === '\\') { index++; continue }
      if (css[index] === quote) return { value: css.slice(start + 1, index), end: index + 1 }
    }
    return { value: css.slice(start + 1), end: css.length }
  }
  for (let i = 0; i < css.length;) {
    if (css.startsWith('/*', i)) { const end = css.indexOf('*/', i + 2); i = end < 0 ? css.length : end + 2; continue }
    if (css[i] === '"' || css[i] === "'") { i = quoted(i).end; continue }
    const match = css.slice(i).match(/^url\s*\(/i)
    if (!match || /[\w-]/.test(css[i - 1] ?? '')) { i++; continue }
    i += match[0].length
    while (/\s/.test(css[i] ?? '') && i < css.length) i++
    let value
    if (css[i] === '"' || css[i] === "'") { const token = quoted(i); value = token.value; i = token.end }
    else {
      const start = i
      while (i < css.length && css[i] !== ')') { if (css[i] === '\\') i++; i++ }
      value = css.slice(start, i).trim()
    }
    while (/\s/.test(css[i] ?? '') && i < css.length) i++
    if (css[i] === ')') i++
    urls.push(cssUnescape(value))
  }
  return urls
}

export function verifyCssReferences(css, sourceUrl, baseUrl, available, label = 'stylesheet') {
  const base = new URL(baseUrl)
  const errors = []
  let checked = 0
  for (const value of cssUrls(css)) {
    if (!value || value.startsWith('#') || /^(?:data:|blob:)/i.test(value)) continue
    let target
    try { target = new URL(value, sourceUrl) } catch { errors.push(`${label}: 无效 CSS 资源 ${value}`); continue }
    if (target.origin !== base.origin) continue
    checked++
    const basePrefix = base.pathname.replace(/\/$/, '')
    if (target.pathname !== basePrefix && !target.pathname.startsWith(base.pathname)) { errors.push(`${label}: CSS 资源超出本站发布路径 ${value}`); continue }
    let relative
    try { relative = decodeURIComponent(target.pathname.slice(basePrefix.length)).replace(/^\//, '') } catch { errors.push(`${label}: CSS 资源编码无效 ${value}`); continue }
    if (!available.has(relative)) errors.push(`${label}: 缺少 CSS 资源 ${value}（解析为 ${relative}）`)
  }
  return { checked, errors }
}

export async function verifyBuild(siteRoot = SITE_ROOT) {
  const site = path.resolve(siteRoot)
  const output = path.join(site, 'public')
  const manifest = JSON.parse(await fs.readFile(path.join(site, 'scripts/math-dictionary/export-manifest.json'), 'utf8'))
  const config = parseYaml(await fs.readFile(path.join(site, 'quartz.config.yaml'), 'utf8'))
  const baseValue = config.configuration?.baseUrl
  if (!baseValue) throw new Error('网站缺少固定访问地址 baseUrl。')
  const base = new URL((baseValue.startsWith('https://') ? baseValue : 'https://' + baseValue).replace(/\/+$/, '') + '/')
  const files = await allFiles(output)
  const available = new Set(files)
  for (const name of files) if (/(?:^|\/)(?:\.maintenance|\.obsidian|AGENTS\.md)(?:\/|$)/i.test(name)) throw new Error(`构建输出含私有文件：${name}`)
  const expected = manifest.files.map(row => slugifyFilePath(row.destination) + '.html')
  for (const name of expected) if (!available.has(name)) throw new Error(`没有生成应发布的词条页面：${name}`)
  const pages = new Map()
  for (const name of files.filter(file => file.endsWith('.html'))) {
    const html = await fs.readFile(path.join(output, name), 'utf8')
    if (/class=["'][^"']*\bkatex-error\b/i.test(html)) throw new Error(`页面公式渲染失败：${name}`)
    if (/(?:[A-Za-z]:[\\/](?:Users|Documents|OneDrive)[\\/]|file:\/\/)/i.test(html)) throw new Error(`页面含本机路径：${name}`)
    const nodes = treeNodes(fromHtml(html))
    pages.set(name, { nodes, ids: new Set(nodes.map(n => n.properties?.id).filter(Boolean)) })
  }
  const errors = []
  let cssAssetReferences = 0
  for (const name of files.filter(file => file.endsWith('.css'))) {
    const css = await fs.readFile(path.join(output, name), 'utf8')
    const cssUrl = new URL(name.split('/').map(encodeURIComponent).join('/'), base)
    const result = verifyCssReferences(css, cssUrl, base, available, name)
    cssAssetReferences += result.checked
    errors.push(...result.errors)
  }
  for (const [name, page] of pages) {
    const pageUrl = new URL(name.split('/').map(encodeURIComponent).join('/'), base)
    for (const node of page.nodes) {
      const css = node.tagName === 'style' ? (node.children ?? []).map(child => child.value ?? '').join('') : node.properties?.style
      if (typeof css === 'string' && css) {
        const result = verifyCssReferences(css, pageUrl, base, available, name + ' 内嵌样式')
        cssAssetReferences += result.checked
        errors.push(...result.errors)
      }
      const url = node.properties?.href ?? node.properties?.src
      if (typeof url !== 'string' || !url || /^(?:mailto:|tel:|data:|javascript:)/i.test(url)) continue
      let target
      try { target = new URL(url, pageUrl) } catch { errors.push(`${name}: 无效链接 ${url}`); continue }
      if (target.origin !== base.origin) continue
      const pathname = target.pathname.endsWith('/') ? target.pathname : target.pathname
      const basePrefix = base.pathname.replace(/\/$/, '')
      if (pathname !== basePrefix && !pathname.startsWith(base.pathname)) continue
      let relative
      try { relative = decodeURIComponent(pathname.slice(basePrefix.length)).replace(/^\//, '') } catch { errors.push(`${name}: 无效编码 ${url}`); continue }
      if (!inside(output, path.resolve(output, relative))) { errors.push(`${name}: 越界链接 ${url}`); continue }
      const candidates = relative === '' ? ['index.html'] : [relative, relative + '.html', relative.replace(/\/$/, '') + '/index.html']
      const match = candidates.find(candidate => available.has(candidate))
      if (!match) { errors.push(`${name}: 缺少目标 ${url}`); continue }
      if (target.hash && pages.has(match)) {
        let id
        try { id = decodeURIComponent(target.hash.slice(1)) } catch { errors.push(`${name}: 无效锚点 ${url}`); continue }
        if (!pages.get(match).ids.has(id)) errors.push(`${name}: 缺少锚点 ${url}`)
      }
    }
  }
  if (errors.length) throw new Error(`构建后的站内链接检查未通过（${errors.length} 项）：\n${errors.slice(0, 15).join('\n')}`)
  const result = { pages: manifest.pages, generatedHtml: pages.size, assetsAndPages: files.length, checkedLinks: true, cssAssetReferences, formulaErrors: 0 }
  return result
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { process.stdout.write(JSON.stringify({ event: 'verified', message: '构建页面、站内链接、脚注锚点与公式输出检查通过。', ...await verifyBuild() }) + '\n') }
  catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1 }
}
