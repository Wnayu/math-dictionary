import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-expect-error Quartz bundles .inline.ts files as browser script strings.
import script from "./scripts/dictionary-welcome.inline"

export default (() => {
  const Welcome: QuartzComponent = ({ fileData }) => {
    if (fileData.slug !== "index") return null
    return (
      <div class="dictionary-welcome">
        <p class="dictionary-kicker">定义 · 命题 · 证明</p>
        <button class="dictionary-search-launch" type="button" data-dictionary-search>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>
          <span>搜索中文、英文术语</span>
          <kbd>Ctrl K</kbd>
        </button>
        <p class="dictionary-search-hint">例如：条件期望、Borel measure、Itô 公式</p>
      </div>
    )
  }
  Welcome.afterDOMLoaded = script
  return Welcome
}) satisfies QuartzComponentConstructor
