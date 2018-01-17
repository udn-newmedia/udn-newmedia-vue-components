[![NPM](https://nodei.co/npm/udn-newmedia-vue-components.png)](https://npmjs.org/package/udn-newmedia-vue-components)

# udn-newmedia-vue-components
聯合報新媒體中心 vue.js 組件

## Install

```
$ npm install udn-newmedia-vue-components --save
```

## Usage

import 想用的 components，EX:

```js
<template>
	<App>
		<Indicator color="#FFFFFF" />
		<Quote text="引言" />
	</App>
</template>

import {Indicator, Content, Quote} from 'udn-newmedia-vue-components'

new Vue({
	components: {
    	Indicator, Content, Quote
    }
})
```

### Components

+ Indicator

	頁面上方進度條

	###### - Props

	* [color] 進度條顏色 預設: #AA4444

+ HeadBar
	
    ##### - Props

	* [BgColor] 頁頭背景色 預設: #000
  	* [MenuSlideFrom] 選單滑入點 預設: top , value: top, left, right, bottom

+ ContentContainer

	用於包內文，內含內文行高等CSS設定
    
    ##### - Props
    
    * [background-color] 區塊背景色 預設: 無

+ Quote

	內文引言區塊，內含引言CSS設定
    
    ##### - Props

	* [text] 引言內文
  	* [refer] 引言者
  	* [color] 引言文字顏色 預設:#888888
  	* [border-color] 引言框顏色

+ Editor
	
    作者區塊，內含CSS設定
    
    ##### - Props
    
    * None

+ Logo

	頁面 Logo 區塊
    
    ##### - Props
    
    * None

+ Relate

	延伸閱讀區塊，內含CSS設定
    
    ##### - Props
    
    * [title] 延伸閱讀

+ Share

	FB and Line 分享區塊。
    
    ##### - Props
    
    * [href] 分享用網址 (必填)

+ FBComment

	FB 留言 plugin。
    
    ##### - Props
    
    * [href] 分享用網址 (必填)

+ Foot

	頁腳

	##### - Props

	* [background-color] 區塊背景色 預設: 無

+ Bodymovin
	
	使用 Bodymovin 套件，產生網頁動畫。(需要import lottie-web)

	##### - Props

	* [jsonfile] 輸入`.json`檔

+ EmbededVideo

	嵌入文章中之影片

	##### - Props

	* [src] 影片位址 (mobile版)

	* [srcWeb] 影片位址 (pc版)

	* [srcPad] 影片位址 (pad版)

	* [poster] 影片預覽圖 (mobile版)

	* [posterWeb] 影片預覽圖 (pc版)

	* [posterPad] 影片預覽圖 (pad版)

	* [dataTarget] 影片編號 (可自行指定1, 2, ...etc)

	* [background-color] 背景色

+ ImageContain

	嵌入文章中的圖片

	##### - Props

	* [width] 圖片寬 (mobile版)

	* [height] 圖片高 (mobile版)

	* [widthWeb] 圖片寬 (pc版)

	* [heightWeb] 圖片高 (pc版)

	* [src] 圖片位址 (mobile版)

	* [srcWeb] 圖片位址 (pc版)

+ PhotoComparison

	兩張照片互相比對 (ex. 新舊照片對照)

	##### - Props

	* [text] 出現在最下方的說明文字

	* [src-old] 舊照片位址 (mobile版)

	* [src-new] 新照片位址 (mobile版)

	* [src-web-new] 新照片位址 (pc版)

	* [src-web-old] 舊照片位址 (pc版)

	* [src-mob-width] 照片寬 (mobile版)

	* [src-mob-height] 照片高 (mobile版)

	* [src-web-width] 照片寬 (pc版)

	* [src-web-height] 照片高 (pc版)

	* [data-target] 可賦予編號



