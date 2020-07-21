# 【聯合報新媒體中心 共用元件使用手冊】

```=
udn-newmedia-vue-components
version: v4.0
```

## 目錄

```=
|—pages_config
  |—contents
    |—main.html
    |—monitor.html
    |—noIndex.html
  |—utils
    |—contentGenerator.js
|—src
  |—assets
    |—img
    |—style
  |—components
    |—accessories
    |—footer
    |—header
    |—ui
  |—mixins
  |—utils
  |—App.vue
  |—store.js
  |—main.js
|—tests
  |—mocks
  |—unit
    |—components
    |—mixins
|—babel.config.json
|—jest.config.json
|—package.json
|—README.md
|—vue.config.js
```

### Project setup

```=
npm install
```

#### Compiles and hot-reloads for development

```=
npm run dev
```

#### Compiles and minifies for production

```=
npm run build
```

### Run your unit tests

```=
npm run test:unit
```

## Initial

### main.js

```js=
import "~/style/main.scss";
import store from "./store"; // for anchor
import { rwdMethods } from "@/mixins/masterBuilder.js";
Window.Promise = Promise; // for vuex

new Vue({
  el: "#app",
  store, // for anchor
  components: {
    App,
  },
  mixins: [rwdMethods],
});
```

### assets

> style

```=
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

```=
|—assets
  |—img
    |—logo
      |—dot_com.jpg
      |—nmd.jpg
      |—vision.jpg
  |—style
```

### mixins

> add "masterBuilder.js"

```=
|—mixins
  |—masterBuilder.js
```

### utils

> add "gaFormator.js", "udn-newmedia-utils.js"

```=
|—utils
  |—gaFormator.js
  |—udn-newmedia-utils.js
```

### Loading

```html=
<script src="https://newmedia.udn.com.tw/cms_assets/nmd_loading/nmd-loading.min.js"></script>
<link
  rel="stylesheet"
  href="https://newmedia.udn.com.tw/cms_assets/nmd_loading/nmd-loading.css"
/>
```

## Usage

### Class

#### 段落、字級

```html=
<div class="article">
  <p>正常字</p>
  <p class="small">小字</p>
</div>
```

### Components

#### Header

等待新的設計

#### Footer

#### Layout
