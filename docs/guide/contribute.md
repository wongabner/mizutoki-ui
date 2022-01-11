---
title: '开发指南'
nav:
  title: 开发指南
---

<!--
  感谢你的贡献！😄
-->

# 参与开发

参与开发，请阅读如下说明：

## 分支管理

该项目长期维护两个分支 `master` 和 `dev`。如果你要提一个 pull request，那么请基于 `dev` 分支来做，我会不定时合并 dev 到 master，并发布版本与同步到 npm。

## Pull Request

### 🤔 这个变动的性质是？

- [ ] 新特性提交
- [ ] 日常 bug 修复
- [ ] 站点、文档改进
- [ ] 演示代码改进
- [ ] 组件样式/交互改进
- [ ] TypeScript 定义更新
- [ ] 包体积优化
- [ ] 性能优化
- [ ] 功能增强
- [ ] 重构
- [ ] 代码风格优化
- [ ] 其他改动（是关于什么的改动？）

### 任何 PR 请基于 `dev` 分支来做，`code review` 通过后会合并。

### PR 标题与 commit 信息开头请遵循如下规范：

- ✨ feat：新功能
- 🔧 chore：构建过程或辅助工具的变动
- 📝 docs：仅文档新增/改动
- 🐛 fix：修复 bug
- 🚀 perf：性能优化
- 🔨 refactor：某个已有功能重构
- ⏪ revert：代码回滚
- 🎨 style：代码格式改变
- 📦 build：改变了 build 工具
- 👷 ci：持续集成

🎉 release（only used in PR title）：发布版本提交


## 开发流程

在你 clone 了 mizutoki-ui 的代码并且使用 `yarn install` 安装完依赖后，你还可以运行下面几个常用的命令：

1. `yarn start` 在本地运行 Mizutoki UI 的网站。
2. `yarn lint` 检查代码风格。
3. `yarn test` 运行测试。
4. `yarn build:lib` 编译 TypeScript 与 CSS 代码到 dist 目录。
5. `yarn build:docs` 构建 mizutoki-ui 的组件库文档版本到 docs-dist 目录。
