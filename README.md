# 数学词典

面向日常查阅的中文数学百科，覆盖测度论、概率论与随机分析，包含中英术语、明确的定义与记号、分层证明、例子以及词条间导航。

**在线阅读：[数学词典](https://wnayu.github.io/math-dictionary/)**

网站使用 [Quartz 5](https://quartz.jzhao.xyz/)，由 GitHub Actions 构建并发布到 GitHub Pages。公式、字体、搜索索引和页面资源均随网站提供。

## 内容与阅读

- 从首页按主题进入测度论、概率论与随机分析。
- 使用搜索框查询中文、英文术语或别名。
- 通过中英术语索引、记号索引、页内目录和反向链接查阅关联内容。
- 证明可以折叠展开；小屏幕上的长公式可以横向滚动。
- 具体参考来源和内容范围见网站中的来源说明及各词条参考文献。

词条持续整理中；公开发布不表示已经完成全部数学内容的独立复核。

## 内容维护

原始内容在 Obsidian 知识库中维护，content/ 是受控导出的发布副本。通常应修改知识库原稿，然后使用 Obsidian 中的“发布数学词典”按钮。

发布流程依次保存当前笔记、检查并导出允许发布的页面、构建网站、检查链接与公式、提交版本、推送到本仓库，并等待 GitHub Pages 部署结果。只有 publish: true 且不是 draft: true 的词条与指定入口页面可以导出；私有笔记、维护记录、插件设置和原始书籍不属于发布内容。

详细脚本说明见 [发布流程](scripts/math-dictionary/README.md)。发布依赖 Node.js 22、Git 和已有的 GitHub 登录；凭据不写入本仓库。

```sh
npm ci
node quartz/bootstrap-cli.mjs build
node scripts/math-dictionary/verify-build.mjs
```

上面三个步骤构建并检查已导出的内容。GitHub Actions 使用同样的构建与检查步骤，成功后发布网站。

## 项目说明

Quartz 引擎保留其原有 MIT 许可证和署名。数学词条及所引用材料的权利分别归其作者或权利人；仓库中的 Quartz 许可证不另行授予所引教材的使用权。
