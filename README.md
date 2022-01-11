# mizutoki-ui

测试项目，基于 Dumi，由 React + React Hooks + TypeScript 开发的组件库demo 🔥。

🌹 [点击预览](https://wongabner.github.io/mizutoki-ui)


### 📦 安装

使用 npm 或 yarn 安装

```bash
npm install mizutoki-ui --save
```

```bash
yarn add mizutoki-ui
```

### ✨ 示例

```javascript
// 加载样式
import 'mizutoki-ui/es/styles/index.less'

// 引入组件
import { Button } from 'mizutoki-ui'

const App = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)
```

## 🎉 开始

安装依赖项

```bash
$ npm i
```

启动本地环境

```bash
$ npm start
```

构建文档

```bash
$ npm run docs:build
```

单元测试

```bash
$ npm test
```

打包es

```bash
$ npm run build
```
