import test from 'node:test'
import assert from 'node:assert/strict'
import { cssUrls, verifyCssReferences } from './verify-build.mjs'

const base = 'https://wnayu.github.io/math-dictionary/'
const files = new Set(['static/katex/fonts/KaTeX_Main-Regular.woff2', 'static/image (1).svg'])

test('external stylesheet resolves font URLs relative to the stylesheet', () => {
  const result = verifyCssReferences('@font-face{src:url(fonts/KaTeX_Main-Regular.woff2)}', base + 'static/katex/katex.min.css', base, files)
  assert.deepEqual(result, { checked: 1, errors: [] })
})

test('inline CSS resolves relative to a deep article and catches the original font regression', () => {
  const result = verifyCssReferences('@font-face{src:url(./static/katex/fonts/KaTeX_Main-Regular.woff2)}', base + '词条/Measure.html', base, files)
  assert.equal(result.checked, 1)
  assert.equal(result.errors.length, 1)
  assert.match(result.errors[0], /词条\/static\/katex\/fonts/)
})

test('inline CSS with the correct parent-relative URL passes', () => {
  const result = verifyCssReferences('@font-face{src:url(../static/katex/fonts/KaTeX_Main-Regular.woff2?v=1)}', base + '词条/Measure.html', base, files)
  assert.deepEqual(result, { checked: 1, errors: [] })
})

test('CSS token reading skips comments and strings while decoding escapes', () => {
  const css = String.raw`/* url(missing-comment.png) */ p:before{content:"url(missing-string.png)"} a{background:url("./static/image \(1\).svg")} b{src: url('./static/katex/fonts/KaTeX_Main-Regular.\77 off2')}`
  assert.deepEqual(cssUrls(css), ['./static/image (1).svg', './static/katex/fonts/KaTeX_Main-Regular.woff2'])
  assert.equal(verifyCssReferences(css, base + 'index.html', base, files).errors.length, 0)
})

test('ignores embedded data and external resources but catches missing or project-escaping local resources', () => {
  const css = `a{background:url("data:image/svg+xml,<svg viewBox='0 0 1 1'></svg>")} b{src:url(https://example.com/font.woff2)} c{filter:url(#filter)} d{src:url(/static/missing.woff2)} e{src:url(missing.woff2)}`
  const result = verifyCssReferences(css, base + 'static/test.css', base, files)
  assert.equal(result.checked, 2)
  assert.equal(result.errors.length, 2)
  assert.match(result.errors[0], /超出本站发布路径/)
  assert.match(result.errors[1], /缺少 CSS 资源/)
})
