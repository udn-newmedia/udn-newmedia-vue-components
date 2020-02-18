# 【聯合報新媒體中心 共用元件使用手冊】
```
udn-newmedia-vue-components
version: v4.0
```

## Usage
1. Download(clone) 整個專案
2. 保留資料夾dist，其他檔案刪除
3. 打開dist資料夾，目錄如下：
```
  |—assets
  |—index.html
  |—nmd-components.min.js
```
4. 編輯index.html，使用到的圖片、影片放assets裡

## Demo
[demo]()

## Loading
```html=
<script src="https://newmedia.udn.com.tw/cms_assets/nmd_loading/nmd-loading.min.js"></script>
<link rel="stylesheet" href="https://newmedia.udn.com.tw/cms_assets/nmd_loading/nmd-loading.css">
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
+ header-bar
> 有 anchor 的 header
```html=
<header-bar
  theme="dark"
  page-title="這一頁的標題"
/><header-bar>
```
  + props:
    1. theme
    2. page-title
    3. useMenu
  + slot:

+ header-bar-simplified
> 無 anchor 的 header
```html=
<header-bar-simplified
  theme="light"
  useMenu="false"
/><header-bar-simplified>
```
+ props:
    1. theme
    2. useMenu
+ slot:

### Footer
### Layout