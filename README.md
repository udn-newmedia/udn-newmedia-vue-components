# udn-newmedia-vue-components
Udn NewMedia Vue Components

## Install

```
$ npm install udn-newmedia-vue-components --save
```

## Usage

import 想用的 components，EX:

```js
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


+ Content

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
