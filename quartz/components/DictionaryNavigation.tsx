import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { joinSegments, pathToRoot } from "../util/path"

export default (() => {
  const Navigation: QuartzComponent = ({ fileData }) => {
    const base = pathToRoot(fileData.slug!)
    const links = [
      ["首页", "index"],
      ["测度论", "测度论导航"],
      ["概率论与随机分析", "概率论导航"],
      ["中英术语索引", "词条索引"],
      ["记号索引", "记号索引"],
    ]
    return (
      <nav class="dictionary-navigation" aria-label="数学词典导航">
        <p class="dictionary-nav-label">按主题查阅</p>
        {links.map(([label, slug]) => (
          <a
            class="internal"
            href={joinSegments(base, slug === "index" ? "" : slug)}
            aria-current={fileData.slug === slug ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    )
  }
  return Navigation
}) satisfies QuartzComponentConstructor
