import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"
import DictionaryNavigation from "./quartz/components/DictionaryNavigation"
import DictionaryWelcome from "./quartz/components/DictionaryWelcome"
import { readFileSync, readdirSync } from "node:fs"
import path from "node:path"
import { write } from "./quartz/plugins/emitters/helpers"
import { joinSegments, pathToRoot, type FullSlug } from "./quartz/util/path"
import { h } from "preact"

const config = await loadQuartzConfig()
export const layout = await loadQuartzLayout()

const navigation = DictionaryNavigation()
const welcome = DictionaryWelcome()
const left = layout.defaults.left ?? []
left.splice(Math.max(0, left.length - 1), 0, navigation)
layout.defaults.left = left
layout.defaults.beforeBody = [...(layout.defaults.beforeBody ?? []), welcome]

// Index declared synonyms without inserting extra text into the displayed article.
config.plugins.transformers.push({
  name: "DictionarySearchAliases",
  htmlPlugins() {
    return [() => (_tree, file) => {
      const aliases = file.data.frontmatter?.aliases
      if (Array.isArray(aliases)) {
        file.data.text = [file.data.text ?? "", ...aliases.map(String)].join(" ")
      }
    }]
  },
})

// Keep formula CSS, fonts and copy-as-TeX on the same host as the dictionary.
const katexDist = path.join(process.cwd(), "node_modules", "katex", "dist")
const katexCss = readFileSync(path.join(katexDist, "katex.min.css"), "utf8")
const copyTex = readFileSync(path.join(katexDist, "contrib", "copy-tex.min.js"), "utf8")
const latex = config.plugins.transformers.find((plugin) => plugin.name === "Latex")
if (latex) {
  latex.externalResources = (ctx) => ({
    additionalHead: [(pageData) => {
      const baseDir = pageData.slug === "404"
        ? new URL(`https://${ctx.cfg.configuration.baseUrl ?? "example.com"}`).pathname
        : pathToRoot(pageData.slug!)
      return h("link", {
        rel: "stylesheet",
        href: joinSegments(baseDir, "static/katex/katex.min.css"),
        "data-persist": true,
      })
    }],
    js: [{ script: copyTex, contentType: "inline", loadTime: "afterDOMReady" }],
  })
}
config.plugins.emitters.push({
  name: "DictionaryMathResources",
  async *emit(ctx) {
    // The unmodified CSS resolves fonts relative to this file, at every page depth.
    yield await write({
      ctx,
      slug: "static/katex/katex.min" as FullSlug,
      ext: ".css",
      content: katexCss,
    })
    for (const filename of readdirSync(path.join(katexDist, "fonts"))) {
      if (!/^[\w.-]+\.(woff2?|ttf)$/.test(filename)) continue
      yield await write({
        ctx,
        slug: `static/katex/fonts/${filename}` as FullSlug,
        ext: "",
        content: readFileSync(path.join(katexDist, "fonts", filename)),
      })
    }
  },
})

// Recreate the dispatcher with the local dictionary components in its layout.
config.plugins.emitters = config.plugins.emitters.filter((plugin) => plugin.name !== "PageTypeDispatcher")
config.plugins.emitters.push(PageTypeDispatcher(layout))

export default config
