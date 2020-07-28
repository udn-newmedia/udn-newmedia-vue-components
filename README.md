# 【聯合報新媒體中心 共用元件使用手冊】

```=
udn-newmedia-vue-components
version: v4.1
```

## Demo

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

## Project setup

```=
npm install
```

### Compiles and hot-reloads for development

```=
npm run dev
```

### Compiles and minifies for production

```=
npm run build
```

### Run your unit tests

```=
npm run test:unit
```

## Initial

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

> Loading動畫，加在 index.html 裡，不需要可以拿掉。

```js
<script src="https://udn.com/cms_assets/nmd_loading/nmd-loading.min.js"></script>
<link rel="stylesheet" href="https://udn.com/newmedia/cms_assets/icons_v4/icons.css" />
<link rel="stylesheet" href="https://udn.com/cms_assets/nmd_loading/nmd-loading.css" />
```

### pages_config

index.html 對應欄位

```=
|—pages_config
  |—contents
    |—main.html
    |—monitor.html
    |—noIndex.html
  |—utils
    |—contentGenerator.js
  |—page.js
```

#### monitor.html

加入 `<div id="app">[程式碼]</div>` 內全部程式碼

#### page.js

pages:

+ mainPage : 主頁根目錄路徑 (只有單頁的話同 `pathRoot`)
+ pageUrl : 分頁路徑
+ entry : 通常是 `src/main.js`
+ template : 通常是 `public/index.html`
+ filename : 通常是 `index.html`
+ title : `title`、`meta`、`json-ld` title欄位
+ description : `meta`、`json-ld` description欄位
+ keywords : `meta` keywords欄位
+ datePublished : `json-ld` 發布時間欄位
+ dateModified : `json-ld` 更新時間欄位
+ theme : 顏色主題欄位
+ MONITOR : 新聞網監控程式碼、GA 程式碼欄位
+ CONTENT : SEO 內容欄位
+ noIndex : 是否使用 `noIndex`

#### contents/main.html

#### contents/monitor.html

#### contents/noIndex.html

#### utils/contentGenerator.js

## Components Usage

### Header

Header 相關元件
> Issues: 等待新的設計

### Footer

Footer 相關元件
> Issues: 等待新的設計

### ui

版型相關元件

#### ArticleColumnOne

一張圖版型
> Issues: 未來可以加入 webp 等新的圖片格式

```html
<ArticleColumnOne
  :srcMob="require('@/assets/img/mob.jpg')"
  :srcPad="require('@/assets/img/pad.jpg')"
  :srcPc="require('@/assets/img/pc.jpg')"
  alt="一張有溫度的照片"
> 一段有溫度的文字
</ArticleColumnOne>
```

+ props
  + [ srcMob ] : { String } 手機版背景圖片路徑
  + [ srcPad ] : { String } 平板版背景圖片路徑
  + [ srcPc ] : { String } 桌機版背景圖片路徑
  + [ alt ] : { String } 圖片 alt
+ slot
  + { String } 圖說文字，ex: `資料來源: 聯合報`

#### ArticleColumnTwo

兩張圖版型
> Issues: 未來可以加入 webp 等新的圖片格式

```html
<ArticleColumnTwo
  :srcMob_1="require('@/assets/img/mob1.jpg')"
  :srcPad_1="require('@/assets/img/pad1.jpg')"
  :srcPc_1="require('@/assets/img/pc1.jpg')"

  :srcMob_2="require('@/assets/img/mob2.jpg')"
  :srcPad_2="require('@/assets/img/pad2.jpg')"
  :srcPc_2="require('@/assets/img/pc2.jpg')"

  alt_1="一張有溫度的照片"
  alt_2="一張有故事的照片"
> 一段有溫度的文字
</ArticleColumnTwo>
```

+ props
  + [ srcMob_1 ] : { String } 手機版背景圖片1路徑
  + [ srcPad_1 ] : { String } 平板版背景圖片1路徑
  + [ srcPc_1 ] : { String } 桌機版背景圖片1路徑
  + [ alt_1 ] : { String } 圖片1 alt
  + [ srcMob_2 ] : { String } 手機版背景圖片2路徑
  + [ srcPad_2 ] : { String } 平板版背景圖片2路徑
  + [ srcPc_2 ] : { String } 桌機版背景圖片2路徑
  + [ alt_2 ] : { String } 圖片2 alt
+ slot
  + { String } 圖說文字，ex: `資料來源: 聯合報`

#### ArticleColumnThree

三張圖版型
> Issues: 未來可以加入 webp 等新的圖片格式

```html
<ArticleColumnThree
  :srcMob_1="require('@/assets/img/mob1.jpg')"
  :srcPad_1="require('@/assets/img/pad1.jpg')"
  :srcPc_1="require('@/assets/img/pc1.jpg')"

  :srcMob_2="require('@/assets/img/mob2.jpg')"
  :srcPad_2="require('@/assets/img/pad2.jpg')"
  :srcPc_2="require('@/assets/img/pc2.jpg')"

  :srcMob_3="require('@/assets/img/mob3.jpg')"
  :srcPad_3="require('@/assets/img/pad3.jpg')"
  :srcPc_3="require('@/assets/img/pc3.jpg')"

  alt_1="一張有溫度的照片"
  alt_2="一張有故事的照片"
  alt_3="一張不怎麼樣的照片"
> 一段有溫度的文字
</ArticleColumnThree>
```

+ props
  + [ srcMob_1 ] : { String } 手機版背景圖片1路徑
  + [ srcPad_1 ] : { String } 平板版背景圖片1路徑
  + [ srcPc_1 ] : { String } 桌機版背景圖片1路徑
  + [ alt_1 ] : { String } 圖片1 alt
  + [ srcMob_2 ] : { String } 手機版背景圖片2路徑
  + [ srcPad_2 ] : { String } 平板版背景圖片2路徑
  + [ srcPc_2 ] : { String } 桌機版背景圖片2路徑
  + [ alt_2 ] : { String } 圖片2 alt
  + [ srcMob_3 ] : { String } 手機版背景圖片3路徑
  + [ srcPad_3 ] : { String } 平板版背景圖片3路徑
  + [ srcPc_3 ] : { String } 桌機版背景圖片3路徑
  + [ alt_3 ] : { String } 圖片3 alt
+ slot
  + { String } 圖說文字，ex: `資料來源: 聯合報`

#### ArticleContainer

100%螢幕寬的內文段落，`slot` 會放在 `<article class="article"></article>` 裡

```html
<ArticleContainer bgColor="#434343" textColor="#ffffff">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab quos ullam natus impedit, autem tempore vel corrupti consectetur ea vero numquam ex adipisci perspiciatis. Quibusdam ad sit excepturi aperiam.
</ArticleContainer>
```

+ props
  + [ bgColor ] : { String } 背景顏色，ex: `"#434343"`
  + [ textColor ] : { String } 文字文字顏色，ex: `"#ffffff"`
+ slot
  + 任何內容，ex: `<p>段落<p>`

#### ArticleDictionary

段落內插入小辭典功能

```html
<p>聯合報<ArticleDictionary>是在中華民國台灣地區發行的中文報紙，由前中國國民黨中央常務委員王惕吾於1951年9月16日創立</ArticleDictionary></p>
```

#### ArticleParallax

滾動視差

```html

```

#### ArticleQuote

引言

```html
<ArticleQuote
  :img="require('@/assets/img/cortana.jpg')"
  text="＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂"
  refer="Cortana"
/>
```

+ props
  + [ borderColor ] : { String } 人頭圖
  + [ img ] : { String } 引言內文
  + [ refer ] : { String } 引言者
  + [ text ] : { String } 引言文字顏色，預設:#888888
  + [ color ] : { String } 引言框顏色

#### ArticleYoutube

嵌入 Youtube 影片

```html
<ArticleYoutube
  src="https://www.youtube.com/embed/44oJi5w2Wjc"
  showinfo="no"
  controls="no"
/>
```

+ props
  + [ src ] : { String } 連結網址
  + [ showinfo ] : { String } 是否顯示標題 ex: showinfo="yes"
  + [ controls ] : { String } 是否顯示控制板 ex: controls="yes"
  + [ muted ] : { String } 是否靜音 ex: muted="yes"
  + [ autoplay ] : { String } 是否自動撥放 ex: autoplay="yes"

#### PageBackTop

回到最上方按鈕

```html
<PageBackTop />
```

#### PageCover

滿版封面

```html
<PageCover
  :srcMob="require('@/assets/img/cover/mob.jpg')"
  :srcPad="require('@/assets/img/cover/pad.jpg')"
  :srcPc="require('@/assets/img/cover/pc.jpg')"
  posMob="25,25"
  posPad="50,50"
  posPc="75,75"
  textColor="#dedede"
  writingMode="vrl"
>
  <h1>這是很長的大標題大標題<br></h1>
  <h2>這是很長很長的副標題副標題副標題</h2>
</PageCover>
```

+ props
  + [ srcMob ] : { String } 手機版背景圖片路徑
  + [ srcPad ] : { String } 平板版背景圖片路徑
  + [ srcPc ] : { String } 桌機版背景圖片路徑
  + [ useArrow ] : { String } 是否使用箭頭提示
  + [ useAnimate ] : { String } 是否使用箭頭動態
  + [ posMob ] : { String } 手機版標題文字位置，ex: `"50, 50"`
  + [ posPad ] : { String } 平板版標題文字位置，ex: `"50, 50"`
  + [ posPc ] : { String } 桌機版標題文字位置，ex: `"50, 50"`
  + [ textColor ] : { String } 文字顏色，ex: `"#434343"`
  + [ writingMode ] : { String } 文字方向
    + "vrl" : 垂直由右至左
    + "vlr" : 垂直由左至右

#### PageIndicator

置頂進度條，帶 `閱讀進度 GA`

```html
<PageIndicator color="#434343"></PageIndicator>
```

+ props
  + [ color ] : { String } 進度條顏色，ex: `"#434343"`

### accessories

最小元件

#### BasePicture

圖片最小元件

```html
<BasePicture
  :srcMob="srcMob"
  :srcPad="srcPad"
  :srcPc="srcPc"
  :alt="alt"
/>
```

+ props
  + [ srcMob ] : { String } 手機版背景圖片路徑
  + [ srcPad ] : { String } 平板版背景圖片路徑
  + [ srcPc ] : { String } 桌機版背景圖片路徑
  + [ size ] : { String } 設定 `object-size`，預設不設定
    + `cover`
    + `contain`
  + [ alt ] : { String } 圖片 alt

#### CastAnchor

加入錨點

```html
<CastAnchor title="免費的最貴" />
```

+ props
  + [ title ] : { String } 傳入 `Vue.prototype.$anchorList` 作為錨點名稱。

#### NmdArrow

常用箭頭

```html
<NmdArrow iconColor="#434343" />
```

+ props
  + [ iconColor ] : { String } 箭頭顏色，ex: `"#434343"`

#### NmdButton

常用按鈕

```html
<NmdButton
  textColor="#ffffff"
  bgColor="#434343"
  theme="contained"
  size="xl"
  ariaLabel="問卷按鈕"
  name="問卷按鈕"
  :clickEvent="handleClick"
>
  請填寫閱讀問卷
</NmdButton>
```

+ props
  + [ textColor ] : { String } 文字顏色
  + [ bgColor ] : { String } 按鈕顏色
  + [ theme ] : { String } 按鈕主題
    + "contained" : 實心按鈕
    + "outlined" : 邊框按鈕
  + [ border ] : { String } 設定 `border-radius`
    + s : `0px`
    + m : `8px`
    + l : `100px`
  + [ size ] : { String } 按鈕大小(高度)
    + xs : `25px`
    + s : `40px`
    + m : `56px`
    + l : `64px`
    + xl : `72px`
  + [ ariaLabel ] : { String } 按鈕 `aria-label` 屬性
  + [ name ] : { String } 按鈕 `name` 屬性
  + [ clickEvent ] : { function } 按鈕事件
+ slot
  + { String } 按鈕文字，ex: `請填寫閱讀問卷`

#### ShareFb

Facebook icon
> Issues: 未來可以把 theme 改成直接設定顏色

```html
<!-- 相依 -->
<link rel="stylesheet" href="https://udn.com/newmedia/cms_assets/icons_v4/icons.css" />
```

```html
<ShareFb theme="dark" />
```

+ props
  + [ textColor ] : { String } 文字顏色
    + "dark" : `#ffffff`
    + "light" : `#000000`

#### ShareLine

Line icon
> Issues: 未來可以把 theme 改成直接設定顏色

```html
<!-- 相依 -->
<link rel="stylesheet" href="https://udn.com/newmedia/cms_assets/icons_v4/icons.css" />
```

```html
<ShareLine theme="dark" />
```

+ props
  + [ textColor ] : { String } 文字顏色
    + "dark" : `#ffffff`
    + "light" : `#000000`

#### ShareTwitter

Twitter icon
> Issues: 未來可以把 theme 改成直接設定顏色

```html
<!-- 相依 -->
<link rel="stylesheet" href="https://udn.com/newmedia/cms_assets/icons_v4/icons.css" />
```

```html
<ShareTwitter theme="dark" />
```

+ props
  + [ textColor ] : { String } 文字顏色
    + "dark" : `#ffffff`
    + "light" : `#000000`

#### UdnLogo

圓形聯 logo

```html
<!-- 相依 -->
<link rel="stylesheet" href="https://udn.com/newmedia/cms_assets/icons_v4/icons.css" />
```

```html
<UdnLogo theme="dark" />
```

+ props
  + [ textColor ] : { String } 文字顏色
    + default : `#000000`
    + "dark" : `#ffffff`
    + "light" : `#aaaaaa`
