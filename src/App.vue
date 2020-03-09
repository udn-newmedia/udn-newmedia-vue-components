<template>
  <div id="app">
    <HeaderTypeA
      page-title="這一頁的標題"
      :outlink="menuOutlink"
    >

    </HeaderTypeA>
    <PageCover
      :srcMob="img.imgCoverMob"
      :srcPad="img.imgCoverPad"
      :srcPc="img.imgCoverPc"
      pos="25,25"
      pos-pad="50,50"
      pos-pc="75,75"
      text-color="#dedede"
      writing-mode="vrl"
    > 
      <h1>這是很長的大標題大標題<br></h1>
      <h2>這是很長很長的副標題副標題副標題</h2>
    </PageCover>
    <article-container>
      <p>最後一戰系列（英語：Halo，中國大陸譯作「光環」，中國大陸舊譯「光暈」），是由Bungie開發，由微軟發行的科幻第一人稱射擊遊戲系列。故事發生在「Halo 宇宙」中。這個「宇宙」是由Bungie為這個系列所創造的。</p>
      <article-cast-anchor title="系列作品發行時間"></article-cast-anchor>
      <h3>系列作品發行時間</h3>
      <p>最初的作品《外星戰爭：戰鬥進化》<article-dictionary>《最後一戰：戰鬥進化》（英語：Halo: Combat Evolved）是跨平台電子遊戲，在2001年11月15日與主機Xbox同步發售的第一人稱射擊遊戲[1]，相隔兩年後移植到Windows和Mac OS上。該作在開發時曾經打算過製成即時戰略遊戲。</article-dictionary>於2001年11月15日在XBOX發行。不久後，該作品在Windows和Mac上發行。</p>
      <p>第二款作品《最後一戰2》<article-dictionary>《最後一戰2》（英語：Halo 2）是《最後一戰：戰鬥進化》的續作。</article-dictionary>於2004年11月9日發行，打破了以往遊戲的首周售量紀錄。</p>
      <p>第三款作品《最後一戰3<article-dictionary>《最後一戰3》（英語：Halo 3，中國大陸譯作「光環3」，中國大陸又譯作「光暈3」）是一款由Bungie開發的Xbox 360獨占第一人稱射擊遊戲，2007年9月25日午夜在北美首發。</article-dictionary>》於2007年9月25日發行，從此該系列僅能於XBOX 360平台遊玩。[1]</p>
      <article-column-one
        :srcMob="img.imgClnMob"
        :srcPad="img.imgClnPad"
        :srcPc="img.imgClnPc"
        alt="Halo Infinite"
      >
        Halo Infinite is an upcoming first-person shooter video game co-developed by 343 Industries and SkyBox Labs, published by Xbox Game Studios for Microsoft Windows, Xbox One and 4th-generation Xbox models, including the Xbox Series X.
      </article-column-one>
      <p>第四款作品《最後一戰：星環戰役》於2009年3月3日發行，為即時戰略類型遊戲。</p>
      <p>第五款作品《最後一戰3：ODST》於2009年9月22日發行，為最後一戰2~3之間的資料片。</p>
      <p>第六款作品《最後一戰：瑞曲之戰》於2010年9月14日發行，為《最後一戰：戰鬥進化》的前部曲。</p>
      <p>第七款作品《最後一戰 復刻版》於2011年11月15日發行，為《最後一戰：戰鬥進化》的重製版。</p>
    </article-container>
  </div>
</template>

<script>
import imgCoverMob from '~/img/cover/mob.jpg';
import imgCoverPad from '~/img/cover/mob.jpg';
import imgCoverPc from '~/img/cover/mob.jpg';
import imgClnMob from '~/img/halo/1.jpg';
import imgClnPad from '~/img/halo/1.jpg';
import imgClnPc from '~/img/parallax.jpg';

import ArticleCastAnchor from '@/components/layout/ArticleCastAnchor.vue';
import ArticleColumnOne from '@/components/layout/ArticleColumnOne.vue';
import ArticleContainer from '@/components/layout/ArticleContainer.vue';
import ArticleDictionary from '@/components/layout/ArticleDictionary.vue';
import HeaderTypeA from '@/components/header/HeaderTypeA.vue';
import PageCover from '@/components/layout/PageCover.vue';

export default {
  name: 'app',
  components: {
    ArticleCastAnchor,
    ArticleColumnOne,
    ArticleContainer,
    ArticleDictionary,
    HeaderTypeA,
    PageCover,
  },
  data() {
    return {
      img: {
        imgCoverMob: imgCoverMob,
        imgCoverPad: imgCoverPad,
        imgCoverPc: imgCoverPc,
        imgClnMob: imgClnMob,
        imgClnPad: imgClnPad,
        imgClnPc: imgClnPc,
      },
      menuOutlink: [
        {
          title: '外連1',
          url: 'https://udn.com',
          active: false,
        },
        {
          title: '外連2',
          url: 'https://udn.com',
          active: false,
        },
        {
          title: '自己這頁',
          url: null,
          active: true,
        }
      ],
    }
  },
}
</script>

<style lang="scss">

</style>
