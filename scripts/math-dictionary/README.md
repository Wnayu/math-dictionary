# 数学词典发布流程

知识库是编辑源，网站仓库保存允许公开的导出副本。按钮使用本机 Node.js 与 Git 已登录的账号，不保存 GitHub 密钥。

## 使用

在 Obsidian 左侧点击“发布数学词典”，或从命令面板选择同名命令。发布前先保存正在编辑的文件。

“检查数学词典（不发布）”会导出并生成本地网站，检查成功也不会提交或推送。

脚本也可以单独运行：

```text
node scripts/math-dictionary/publish.mjs --vault <知识库绝对路径> --check-only
node scripts/math-dictionary/publish.mjs --vault <知识库绝对路径>
```

## 发布范围

仅选择 `词条/` 中的 Markdown，以及八个读者入口；页面必须同时满足 `publish: true` 和非草稿。首页导出为 `content/index.md`，相应首页链接自动转换。只从导出副本删除与属性标题完全相同的首个一级标题，原稿不改动。

维护文件、应用配置、原始教材和原始 TeX 不进入导出范围。正文中若仍链接到未发布页面，导出会停止并指出问题，不会自动公开目标页面。要撤回一篇已发布词条，将它设为 `publish: false`，并处理其他页面对它的链接后再发布。

`export-manifest.json` 只含相对页面路径与指纹，不包含知识库位置或登录凭证。脚本只删除该清单记载的上轮导出文件，不镜像清空整个目录；发现来源符号链接、越界路径或网站内容目录中的未知文件时会停止。

## 检查与状态

发布依次执行：来源页面及链接检查、脚注检查、KaTeX 公式检查、Quartz 全量构建、输出页面和锚点检查、受限文件提交与推送、等待 GitHub Pages。

发布只允许 `Wnayu/math-dictionary` 的 `main` 分支，拒绝覆盖远端新增提交，也不使用强制推送。若检测到已有暂存修改，会停止，让用户先处理已有工作。

“已推送”表示内容已到 GitHub；“已发布”表示本次提交的 Pages 工作流成功，且网址已能访问。网络状态读取失败或等待超时只报告前一种状态，稍后仍可查看网站与 Actions。失败步骤不会被当作上线成功。

公开网站：https://wnayu.github.io/math-dictionary/

## 开发检查

```text
node --test scripts/math-dictionary/export.test.mjs
node scripts/math-dictionary/export.mjs --vault <知识库绝对路径>
node quartz/bootstrap-cli.mjs build
node scripts/math-dictionary/verify-build.mjs
```

测试覆盖未发布链接、私有材料、符号链接、越界删除、公式与脚注错误、撤回已发布页和源文件不变性。静态与显示检查不等同于数学证明验证。
