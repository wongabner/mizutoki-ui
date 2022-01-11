import { defineConfig } from 'dumi';
import { resolve } from 'path'

export default defineConfig({
  title: 'mizutoki UI',
  favicon: 'https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/light.png?download=true',
  logo: 'https://wongabner.coding.net/p/picgo/d/mdimg/git/raw/master/light.png?download=true',
  history: {
    type: 'hash'
  },
  // base: './',
  // publicPath: './',
  hash: true,
  base: '/mizutoki-ui/',
  publicPath: '/mizutoki-ui/',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  alias: {
    '@': resolve(__dirname, './src'),
  },
  // more config: https://d.umijs.org/config
});
