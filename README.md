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
	
	###### - porps
	*[BgColor] 選單棒背景色 預設: #000
	*[MenuSlideFrom] 手機版選單滑入方向 預設:上面滑下來 value: top, left , right, bottom

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

	[background-color] 區塊背景色 預設: 無
