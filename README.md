# 【聯合報新媒體中心 共用元件使用手冊】
```
udn-newmedia-vue-components
version: v4.0
```

## 目錄
```
|—dist
  |—assets
  |—index.html
  |—nmd-components.min.js
|—assets
  |—img
  |—style
|—src
  |—components
    |—footer
    |—header
    |—layout
    |—ui
  |—mixins
  |—utils
  |—App.vue
  |—store.js
  |—main.js
|—index.html
|—package-lock.json
|—package.json
|—webpack.common.js
|—webpack.dev.js
|—webpack.prod.js
|—manual.md
|—README.md
```

## 使用方式
> 1. 新建vue spa project(vue-cli)
> 2. 直接使用公版修改(webpack)

### Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run dev
```
### Compiles and minifies for production
```
npm run buil
```

## Loading
```html=
<script src="https://newmedia.udn.com.tw/cms_assets/nmd_loading/nmd-loading.min.js"></script>
<link rel="stylesheet" href="https://newmedia.udn.com.tw/cms_assets/nmd_loading/nmd-loading.css">
```

## Initial
### main.js
```javascript=
import '~/style/main.scss';
import store from './store'; // for anchor
import { rwdMethods } from '@/mixins/masterBuilder.js';
Window.Promise = Promise; // for vuex

new Vue({
  el: '#app',
  store, // for anchor
  components: {
    App
  },
  mixins: [rwdMethods]
});
```
### webpack config
> set alias
```javascript=
.set('~', resolve('src/assets'))
```
### assets
> style
```
|—assets
  |—img
  |—style
    |—_base.scss
    |—_mixins.scss
    |—_ui.scss
    |—_variables.scss
    |—main.js
```
> img
```
|—assets
  |—img
    |—logo
      |—dot_com.jpg
      |—nmd.jpg
      |—vision.jpg
  |—style
```


## Class
```html=
<div class="article">
  <p>正常字</p>
  <p class="small">小字</p>
</div>
```

## Components
### Header頁首
+ header-type-a
> 有 outlink 沒 anchor 的 header
```html=
<header-bar
  theme="dark"
  page-title="這一頁的標題"
/>

<header-bar>
```
  + props:
    1. theme
    2. page-title
  + slot:




+ header-type-b
> 沒 outlink 沒 anchor 的 header



+ header-type-c
> 有 outlink 有 anchor 的 header


+ header-type-d
> 沒 outlink 有 anchor 的 header
















### Footer
### Layout