
# udn-newmedia-vue-components
聯合報新媒體中心 vue.js 組件

[![github version](https://img.shields.io/github/release/udn-newmedia/udn-newmedia-vue-components.svg)](https://github.com/udn-newmedia/udn-newmedia-vue-components/releases/) [![npm version](https://img.shields.io/npm/v/udn-newmedia-vue-components.svg)](https://www.npmjs.com/package/taiwan-vue-components) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/udn-newmedia/udn-newmedia-vue-components/pulls) [![code with hearth by Udn Newmedia Eng.](https://img.shields.io/badge/Udn%20Newmedia-Eng.-brightgreen.svg)](https://github.com/udn-newmedia)

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

### Demo Page

[Demo LongForm](https://udn-newmedia.github.io/udn-newmedia-vue-components/)

[Demo Page](https://udn-newmedia.github.io/udn-newmedia-vue-components/page.html)


### Components

+ Indicator

	頁面上方進度條
```js
	<Indicator color="#FF0000"></Indicator>
```
	###### - Props

	* [color] 進度條顏色 預設: #AA4444

+ Head-Bar
```js
	<Head-Bar Menu-Slide-From="top" Bg-Color="transparent"></Head-Bar>
```
    ##### - Props

	* [BgColor] 頁頭背景色 預設: #000
  	* [MenuSlideFrom] 選單滑入點 預設: top , value: top, left, right, bottom

+ Cover

	封面
```js
	<Cover title="好好說再見" subtitle="插畫記林杰樑走後1500天" bg="./static/bg_wang.jpg" bgweb="./static/web/bg_wang.jpg" position="middle"></Cover>
```
	##### Props

	* [title] 大標
	* [subtitle] 副標
	* [bg] 手機板封面
	* [bgweb] 網頁版封面
	* [position] 標題位置 有 top middle bottom center 4種

+ Content-Container

	用於包內文，內含內文行高等CSS設定
```js
	<Content-Container background-color="#FFFFFF">
```  
    ##### - Props
    
    * [background-color] 區塊背景色 預設: 無

+ Column-Two

	2格圖片排列
```js
	<Column-Two imgsay="圖說" img1="./static/bg_wang.jpg" img2="./static/bg_wang.jpg" imgweb1="./static/web/bg_wang.jpg" imgweb2="./static/web/bg_wang.jpg"></Column-Two>
```
	##### - Props

	* [img1~2] 圖片1~2
	* [imgsay] 圖說

+ Column-Three

	3格圖片排列
```js
	<Column-Three imgsay="圖說" img1="./static/bg_wang.jpg" img2="./static/bg_wang.jpg" img3="./static/bg_wang.jpg" imgweb1="./static/web/bg_wang.jpg" imgweb2="./static/web/bg_wang.jpg" imgweb3="./static/web/bg_wang.jpg"></Column-Three>
```
	##### - Props

	* [img1~3] 圖片1~3
	* [imgsay] 圖說

+ Quote

	內文引言區塊，內含引言CSS設定
```js
	<Quote text="＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂" refer="-- 陳亮恭"/>
``` 
    ##### - Props

	* [text] 引言內文
  	* [refer] 引言者
  	* [color] 引言文字顏色 預設:#888888
  	* [border-color] 引言框顏色

+ Youtube

	youtube嵌入
```js
	<Youtube src="https://www.youtube.com/embed/kMguxxwW_-A"></Youtube>
```
	##### - Props

	* [src] 連結網址

+ Section-Fixed-Bg

	滾動視差過場
```js
	<Section-Fixed-Bg text="王琄認為，大齡這個階段，是人生中最好、最穩定的狀態。" bg="./static/bg_wang.jpg" bgweb="./static/web/bg_wang.jpg" position="center"></Section-Fixed-Bg>
```
	##### - Props

	* [text] 過場文字
	* [bg] 手機圖
	* [bgweb] 網頁圖
	* [position] 文字位置 有 center 跟 bottom 兩種

+ Section-Bg

	滿版圖過場
```js
	<Section-Bg bg="./static/bg_wang.jpg" bgweb="./static/web/bg_wang.jpg" imgsay="陳智遠（左圖）將老港味轉為深度旅遊的商機，頗受遊客歡迎。"></Section-Bg>
```
	##### - Props

	* [bg] 手機圖
	* [bgweb] 網頁圖
	* [imgsay] 圖說

+ Question

	問卷問題

	##### - Props

	* [href] 連結位置
	* [text] 文字

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
```js
	<Relate title="延伸閱讀" color="#363434" 
		href1="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img1="./static/web/bg_wang.jpg" text1="我們長大，把光亮帶回黑暗家鄉" 
		href2="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img2="./static/web/bg_wang.jpg" text2="助脫貧…教技能 推存錢帳戶" 
		href3="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img3="./static/web/bg_wang.jpg" text3="兒少發展帳戶推動3個月 申請率25%" 
		href4="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img4="./static/web/bg_wang.jpg" text4="流沙中年 棄6萬月新顧爸媽，我在貧窮線下度日" > 
	</Relate>
```
    ##### - Props
    
    * [title] 延伸閱讀
	* [color] 文字顏色
	* [href1~4] 連結 1~4
	* [img1~4] 圖片 1~4
	* [text1~4] 文字 1~4

+ Share

	FB and Line 分享區塊。
```js
	<Share href="https://udn.com/upf/newmedia/2017_data/ideal/index.html"></Share>
```
    ##### - Props
    
    * [href] 分享用網址 (必填)

+ Fb-Comment

	FB 留言 plugin。
```js
	<Fb-Comment href="https://udn.com/upf/newmedia/2017_data/ideal/index.html"></Fb-Comment>
```
    ##### - Props
    
    * [href] 分享用網址 (必填)

+ Foot

	頁腳
```js
	<Foot background-color="#FFFFFF"></Foot>
```
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

+ Page

	開啟滿版滾動，所有的版面都要放在裡面。
```js
    <Page>
        <Page-Cover title="好好說再見" subtitle="插畫記林杰樑走後1500天" bg="./static/bg_wang.jpg" bgWeb="./static/web/bg_wang.jpg" position="bottom" fontcolor="#fff"></Page-Cover>
        <Page-Intro fontcolor="#fff" Bg-Color="#000"></Page-Intro>
        <Page-Card Video-Src='static/video.mp4'></Page-Card>
    </Page>
```

+ PageArrow

	向下提示箭頭。

	注意：要放在 Page外面
```js
	<div id="app">
		<Page>
			<Page1>
			<Page2>
			<Page3>
		</Page>
		<Page-Arrow src="./static/ic-keyboard-arrow-down-white-24-px@3x.png"/>
	</div>
```

	##### - Props

	* [src] 箭頭的圖片

+ PageIntro

	滿版標題Cover
```js
	<Page-Cover title="好好說再見" subtitle="插畫記林杰樑走後1500天" bg="./static/bg_wang.jpg" bgWeb="./static/web/bg_wang.jpg" position="bottom" fontcolor="#fff"></Page-Cover>
```
	##### Props

	* [title] 大標
	* [subtitle] 副標
	* [fontcolor] 大/副題顏色
	* [bg] 手機板封面
	* [bgweb] 網頁版封面
	* [position] 標題位置 有 top middle bottom 4種	

+ PageCard

	滿版影片卡片，影片說明請用 <p></p>
```js
    <Page-Card Video-Src='static/video.mp4'>
        <p>專注地盯著眼前的鞍馬，深吸一大口氣，為自己注入信心，緊握把手、一躍而上，雙腿在空中如疾風般旋轉。世大運前十天，李智凱在競技體操測試賽中，展現獨家招式「湯瑪士迴旋」，華麗美技讓外國選手讚嘆。</p>
    </Page-Card>
```
    ##### Props

    * [Video-Src] 影片來源