
# udn-newmedia-vue-components
聯合報新媒體中心 vue.js 組件


## Usage

- 工程師

	clone 整個專案 把new_comp 複製到你新的專案資料夾
  >所有components皆有一個jsonProps 詳細自行看程式碼
- 其他操作者

	download 整個專案, 保留資料夾dist, static, index.html 其他檔案刪除

### Demo Page

  [Demo](http://nmdap.udn.com.tw/demo/new_comp/)


### Components

#### - Indicator
>頁面上方進度條
```js
<Indicator color="#bf2923"></Indicator>
```
+ Props
  + [color] 變更進度條的顏色

#### - BackTop
>回到頁面最上方的按鈕
```js
<back-top arrow-color="#fff" arrow-box-color="#e5e5e5"></back-top>
```
+ Props
  + [arrow-color] 變更箭頭顏色
  + [arrow-box-color] 變更外框背景顏色

#### - Anchor
>告知head-bar內滾的物件
>將目標以anchor包起來
```js
<anchor title="佈滿青紫傷痕的孩子">
 <h2>佈滿青紫傷痕的孩子</h2>
</anchor>
```
+ Props
  + [title] head-bar 內滾按鈕名稱

#### - Head-Bar
> 網頁的頁首
```js
<Head-Bar head-color="#fff" icon-color="#000">
  <a slot="logo" href="https://vision.udn.com/" target="_blank"><img class="other_logo" src="../static/visual-logo.png" alt="聯合報系願景工程"></a>
  <a href="https://udn.com">聯合新聞網</a>
  <a href="https://udn.com">聯合新聞網2</a>
</Head-Bar>
```
+ Props
   + [head-color] 變更header的背景色
   + [icon-color] 變更icon的顏色
+ Slot
   + [default] 外連結區塊
   + [logo] 將放置圈圈聯合報旁 size: 220px*40px

#### - Cover
> 非滾動視差過場也可作為首頁大圖
```js
<Cover use-arrow="yes" use-animate="yes" use-hint="yes"
	     arrow-color="#e5e5e5"
       src="./static/CoverBg/cover_mob.jpg"
       src-web="./static/CoverBg/cover_pc.jpg">
  <h1>我是大標題</h1>
  <h2>我是副標題</h2>
</Cover>
```
+ Props  
  + [position] 標題位置
    + leftTop, centerTop, rightTop, leftCenter, centerCenter, rightCenter, leftBottom, centerBottom, rightBottom
  + [src] 手機板背景圖
  + [src-web] 電腦版背景圖
  + [arrow-color] 箭頭顏色
  + [use-arrow] 是否使用箭頭提示
    + yes : 顯示
    + no : 不顯示
  + [use-animate] 是否使用箭頭動態
    + yes : 使用
    + no : 不使用
  + [use-hint] 是否使用箭頭文字題是
    + yes : 使用
    + no : 不使用
+ Slot
   + default 標題區塊 
   + DIY 可以在內新增自己要的樣式 記得用absolute

#### - Parallax-Bg
> 滾動視差過場
```js
<parallax-bg 
  position="centerCenter"
  src="https://udn.com/upf/newmedia/2018_data/childabuse/static/img/cover_3.f045088.jpg"   src-web="https://udn.com/upf/newmedia/2018_data/childabuse/static/img/cover_3.7c34b9e.jpg">
  <h2 style="color: #fff">第一層傷：不是外人才打得兇</h2>
</parallax-bg>
```
+ Props
  + [position] 標題位置
    + leftTop, centerTop, rightTop, leftCenter, centerCenter, rightCenter, leftBottom, centerBottom, rightBottom
  + [src] 手機板背景圖
  + [src-web] 電腦版背景圖

+ Slot
  + default 標題區塊 
  + DIY 可以在內新增自己要的樣式 記得用absolute

#### - Content-Container
> 用於包內文，內含內文行高等CSS設定
```js
<Content-Container>
  <p>再過43年，台灣幾乎人人都可以活到90歲，但活得長，卻不一定能活得好。高齡化下一階段最大挑戰，將變成「活著要幹嘛」？</p>
  <p><br/></p>
  <p>面對變長的人生下半場，有些人不退也不休，利用上半場累積的經驗與智慧，開創第二春傳承給下一代。有人則急流勇退，人生下半場追求自我實現。</p>
</Content-Container>
```  
+ Props     
  + none

#### - Column-One
>1格圖片排列
```js
<Column-One description="有段時間阿邦很怕人家問他「家在哪？」「爸爸媽媽呢？」只能笑而帶過" src="./static/SectionBg/SectionBg_mob.jpg" src-web="./static/SectionBg/SectionBg_pc.jpg"></Column-One>
```
+ Props
  + [description] 圖說
  + [src] 手機板圖片
  + [src-web] 電腦版圖片

#### - Column-Two
>2格圖片排列
```js
<Column-Two description="有段時間阿邦很怕人家問他「家在哪？」「爸爸媽媽呢？」只能笑而帶過" src_1="./static/SectionBg/SectionBg_mob.jpg" src-web_1="./static/SectionBg/SectionBg_pc.jpg"
src_2="./static/SectionBg/SectionBg_mob.jpg" src-web_2="./static/SectionBg/SectionBg_pc.jpg"></Column-Two>
```
+ Props
  + [description] 圖說
  + [src_1] 第一張手機板圖片
  + [src-web_1] 第一張電腦版圖片
  + [src_2] 第二張手機板圖片
  + [src-web_2] 第二張電腦版圖片
  


#### - Column-Three
>3格圖片排列
```js
<Column-Three description="有段時間阿邦很怕人家問他「家在哪？」「爸爸媽媽呢？」只能笑而帶過" src_1="./static/SectionBg/SectionBg_mob.jpg" src-web_1="./static/SectionBg/SectionBg_pc.jpg"
src_2="./static/SectionBg/SectionBg_mob.jpg" src-web_2="./static/SectionBg/SectionBg_pc.jpg"
src_3="./static/SectionBg/SectionBg_mob.jpg" src-web_3="./static/SectionBg/SectionBg_pc.jpg"></Column-Three>
```
+ Props
  + [description] 圖說
  + [src_1] 第一張手機板圖片
  + [src-web_1] 第一張電腦版圖片
  + [src_2] 第二張手機板圖片
  + [src-web_2] 第二張電腦版圖片
  + [src_3] 第三張手機板圖片
  + [src-web_3] 第三張電腦版圖片   

#### - Quote
>內文引言區塊，內含引言CSS設定
```js
<Quote img="./static/lee.png" text="＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂＂未來老人不會忙著生病，會愈來愈健康＂" refer="-- 陳亮恭"></Quote>
``` 
+ Props
  
	+ [img] 人頭圖
	+ [text] 引言內文
	+ [refer] 引言者
	+ [color] 引言文字顏色 預設:#888888
	+ [border-color] 引言框顏色


#### - Youtube
>Youtube嵌入
```js
<Youtube src="https://www.youtube.com/embed/kMguxxwW_-A" showinfo="no" controls="yes" autoplay="yes" muted="yes"></Youtube>
```
+ Props
	+ [src] 連結網址
	+ [showinfo] 是否顯示標題 ex: showinfo="yes"
	+ [controls] 是否顯示控制板 ex: controls="yes"
  + [muted] 是否靜音 ex: muted="yes"
  + [autoplay] 是否自動撥放 ex: autoplay="yes"


#### - Question
>橢圓形button
```js
<Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
```
>問卷問題
+ Props
  + [href] 表單連結位置
  + [text] 文字

#### - Editor
>作者區塊，內含CSS設定
```js
<Editor>
  <div>文字：蔡佩蓉、洪欣慈</div>
  <div>視覺設計、影音：張心慈、許瑋琳</div>
  <div>網頁製作：鄭偉廷</div>
  <div>攝影：許正宏</div>
  <div>場地提供：一直是晴天</div>
  <div>2017.10.30</div>
</Editor>
```   
+ Props
  + None

#### - Logo
>頁面 Logo 區塊
```js
<Logo vision="true" ubrand="true">
  <div class="logo">
    <a href="https://udn.com/news/index" target="_blank"><img src="./static/nightlogo.svg"></a>
  </div> 
</Logo>
```
+ Props
 + [vision] 願景logo
 + [ubrand] 融媒體logo
 + 如果要增加外連連結 就如範例所示 增加 `div` 和 `a` Tag

#### - Relate
>延伸閱讀區塊，內含CSS設定
```js
<Relate title="延伸閱讀" color="#363434" 
  href1="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img1="./static/web/bg_wang.jpg" text1="我們長大，把光亮帶回黑暗家鄉" 
  href2="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img2="./static/web/bg_wang.jpg" text2="助脫貧…教技能 推存錢帳戶" 
  href3="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img3="./static/web/bg_wang.jpg" text3="兒少發展帳戶推動3個月 申請率25%" 
  href4="https://p.udn.com.tw/upf/newmedia/2016_data/20161003_quicksand_middle_age/index.html" img4="./static/web/bg_wang.jpg" text4="流沙中年 棄6萬月新顧爸媽，我在貧窮線下度日" > 
</Relate>
```
+ Props
  + [title] 延伸閱讀
  + [color] 文字顏色
  + [href1 ~ 4] 連結 1 ~ 4
  + [img1 ~ 4] 圖片 1 ~ 4
  + [text1 ~ 4] 文字 1 ~ 4

#### - Share
>FB and Line 分享區塊。
```js
<Share href="https://udn.com/upf/newmedia/2017_data/ideal/index.html"></Share>
```
+ Props
  + [href] 分享用網址 (必填)

#### - Fb-Comment
>FB 留言 plugin。
```js
<Fb-Comment href="https://udn.com/upf/newmedia/2017_data/ideal/index.html"></Fb-Comment>
```
+ Props
  + [href] 分享用網址 (必填)

#### - Foot
>頁腳
```js
<Foot></Foot>
```
+ Props
  + none
