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
  |—udn-newmedia-vue-components.min.js
```
4. 編輯index.html，使用到的圖片、影片放assets裡

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
  page-title="這一頁的標題"
/><header-bar-simplified>
```

### Footer
### Layout