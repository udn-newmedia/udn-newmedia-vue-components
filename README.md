# ***v3.0為開發中版本，公版製作請使用v2.0***

#### - Column-One
>1格圖片排列
```js
<Column-One description="有段<a href='https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4' target='_blank'>時間</a>阿邦很怕人家問他「家在哪？」「爸爸媽媽呢？」只能笑而帶過" src="./static/SectionBg/SectionBg_mob.jpg" src-web="./static/SectionBg/SectionBg_pc.jpg" alt="阿邦站在窗前，朝窗外看，畫面黯淡"></Column-One>
```
+ Props
  + [description] 圖說
    + 可添增超連結，直接將要添增超連結的文字用 `<a>` 標籤含括起來，並在標籤裡寫上 `href`、`target` 屬性。詳細請見上面範例。
  + [src] 手機板圖片
  + [src-web] 電腦版圖片
  + [alt] 替代文字
    + 當圖片因為某些原因出不來，此文字將作為補救說明，讓使用者知道這張圖片的內容是什麼。它也可以讓視障者藉由螢幕閱讀軟體聽到這張圖片的內容。

#### - Column-Two
>2格圖片排列
```js
<Column-Two description="有段<a href='https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4' target='_blank'>時間</a>阿邦很怕人家問他「家在哪？」「爸爸媽媽呢？」只能笑而帶過" src_1="./static/SectionBg/SectionBg_mob.jpg" src-web_1="./static/SectionBg/SectionBg_pc.jpg" alt_1="阿邦站在窗前，朝窗外看，畫面黯淡" src_2="./static/SectionBg/SectionBg_mob.jpg" src-web_2="./static/SectionBg/SectionBg_pc.jpg" alt_2="阿邦站在窗前，朝窗外看，畫面黯淡"></Column-Two>
```
+ Props
  + [description] 圖說
    + 可添增超連結，直接將要添增超連結的文字用 `<a>` 標籤含括起來，並在標籤裡寫上 `href`、`target` 屬性。詳細請見上面範例。
  + [src_1] 第一張手機板圖片
  + [src-web_1] 第一張電腦版圖片
  + [src_2] 第二張手機板圖片
  + [src-web_2] 第二張電腦版圖片
  + [alt_1] 第一張圖片的替代文字
    + 當圖片因為某些原因出不來，此文字將作為補救說明，讓使用者知道這張圖片的內容是什麼。它也可以讓視障者藉由螢幕閱讀軟體聽到這張圖片的內容。
  + [alt_2] 第二張圖片的替代文字
    + 當圖片因為某些原因出不來，此文字將作為補救說明，讓使用者知道這張圖片的內容是什麼。它也可以讓視障者藉由螢幕閱讀軟體聽到這張圖片的內容。
  
#### - Column-Three
>3格圖片排列
```js
<Column-Three description="有段<a href='https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4' target='_blank'>時間</a>阿邦很怕人家問他「家在哪？」「爸爸媽媽呢？」只能笑而帶過" src_1="./static/SectionBg/SectionBg_mob.jpg" src-web_1="./static/SectionBg/SectionBg_pc.jpg"
alt_1="阿邦站在窗前，朝窗外看，畫面黯淡" src_2="./static/SectionBg/SectionBg_mob.jpg" src-web_2="./static/SectionBg/SectionBg_pc.jpg" alt_2="阿邦站在窗前，朝窗外看，畫面黯淡" src_3="./static/SectionBg/SectionBg_mob.jpg" src-web_3="./static/SectionBg/SectionBg_pc.jpg" alt_3="阿邦站在窗前，朝窗外看，畫面黯淡"></Column-Three>
```
+ Props
  + [description] 圖說
    + 可添增超連結，直接將要添增超連結的文字用 `<a>` 標籤含括起來，並在標籤裡寫上 `href`、`target` 屬性。詳細請見上面範例。
  + [src_1] 第一張手機板圖片
  + [src-web_1] 第一張電腦版圖片
  + [src_2] 第二張手機板圖片
  + [src-web_2] 第二張電腦版圖片
  + [src_3] 第三張手機板圖片
  + [src-web_3] 第三張電腦版圖片
  + [alt_1] 第一張圖片的替代文字
    + 當圖片因為某些原因出不來，此文字將作為補救說明，讓使用者知道這張圖片的內容是什麼。它也可以讓視障者藉由螢幕閱讀軟體聽到這張圖片的內容。
  + [alt_2] 第二張圖片的替代文字
    + 當圖片因為某些原因出不來，此文字將作為補救說明，讓使用者知道這張圖片的內容是什麼。它也可以讓視障者藉由螢幕閱讀軟體聽到這張圖片的內容。
  + [alt_3] 第二張圖片的替代文字
    + 當圖片因為某些原因出不來，此文字將作為補救說明，讓使用者知道這張圖片的內容是什麼。它也可以讓視障者藉由螢幕閱讀軟體聽到這張圖片的內容。



#### - HeadBarSimplified
>只有錨點的抬頭 (直接搭配錨點 \<anchor\>\<\\anchor\> 使用即可)
```js
<head-bar-simplified></head-bar-simplified>
```
+ Props
  + 無