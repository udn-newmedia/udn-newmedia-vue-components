<template>
  <div id="app">
    <PageIndicator />
    <!-- <HeaderTypeA
      :outlink="menuOutlink"
    /> -->
    <!-- <HeaderTypeB /> -->
    <HeaderTypeC
      page-title="這一頁的標題"
      theme="light"
      :outlink="menuOutlink"
    />
    <!-- <HeaderTypeD
      :outlink="menuOutlink"
    /> -->
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
    <ArticleContainer>
      <p>最後一戰系列（英語：Halo，中國大陸譯作「光環」，中國大陸舊譯「光暈」），是由Bungie開發，由微軟發行的科幻第一人稱射擊遊戲系列。故事發生在「Halo 宇宙」中。這個「宇宙」是由Bungie為這個系列所創造的。</p>
      <ArticleCastAnchor title="系列作品發行時間"></ArticleCastAnchor>
      <h3>系列作品發行時間</h3>
      <p>最初的作品《外星戰爭：戰鬥進化》<article-dictionary>《最後一戰：戰鬥進化》（英語：Halo: Combat Evolved）是跨平台電子遊戲，在2001年11月15日與主機Xbox同步發售的第一人稱射擊遊戲[1]，相隔兩年後移植到Windows和Mac OS上。該作在開發時曾經打算過製成即時戰略遊戲。</article-dictionary>於2001年11月15日在XBOX發行。不久後，該作品在Windows和Mac上發行。</p>
      <p>第二款作品《最後一戰2》<article-dictionary>《最後一戰2》（英語：Halo 2）是《最後一戰：戰鬥進化》的續作。</article-dictionary>於2004年11月9日發行，打破了以往遊戲的首周售量紀錄。</p>
      <p>第三款作品《最後一戰3<article-dictionary>《最後一戰3》（英語：Halo 3，中國大陸譯作「光環3」，中國大陸又譯作「光暈3」）是一款由Bungie開發的Xbox 360獨占第一人稱射擊遊戲，2007年9月25日午夜在北美首發。</article-dictionary>》於2007年9月25日發行，從此該系列僅能於XBOX 360平台遊玩。[1]</p>
      <ArticleColumnOne
        :srcMob="img.imgClnMob"
        :srcPad="img.imgClnPad"
        :srcPc="img.imgClnPc"
        alt="Halo Infinite"
      >
        Halo Infinite is an upcoming first-person shooter video game co-developed by 343 Industries and SkyBox Labs, published by Xbox Game Studios for Microsoft Windows, Xbox One and 4th-generation Xbox models, including the Xbox Series X.
      </ArticleColumnOne>
      <p>第四款作品《最後一戰：星環戰役》於2009年3月3日發行，為即時戰略類型遊戲。</p>
      <p>第五款作品《最後一戰3：ODST》於2009年9月22日發行，為最後一戰2~3之間的資料片。</p>
      <p>第六款作品《最後一戰：瑞曲之戰》於2010年9月14日發行，為《最後一戰：戰鬥進化》的前部曲。</p>
      <p>第七款作品《最後一戰 復刻版》於2011年11月15日發行，為《最後一戰：戰鬥進化》的重製版。</p>
    </ArticleContainer>
    <PageFooter>
      <FooterNextArticle
        type="2"
        title="空服人生"
        :img="img.imgNextArticle"
        href="https://udn.com"
      />
      <FooterEditor>
        <div>
          <p>製作人</p>
          <p>洪欣慈</p>
        </div>
        <div>
          <p>採訪團隊</p>
          <p>洪敬浤、郭政芬、<br>黃瑞典、張裕珍、<br>吳淑君</p>
        </div>
        <div>
          <p>視覺設計</p>
          <p>張心慈</p>
        </div>
        <div>
          <p>網頁製作</p>
          <p>胡凈悟</p>
        </div>
        <div>
          <p>製作單位</p>
          <p>聯合報新媒體中心、<br>視覺設計中心</p>
        </div>
        <div>
          <p>監製</p>
          <p>聯合報新聞部</p>
        </div>
        <div>
          <p></p>
          <p>2019.11.26</p>
        </div>
      </FooterEditor>
      <FooterShare />
      <FooterRelatedArticle
        title="系列報導"

        img1="./assets/img/r1.jpg"
        title1="報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1報導-1"
        text1="地震後成為父母雙亡的孤兒如今都已長大，走過成長過程裡的淚水。"
        href1="https://udn.com"

        img2="./assets/img/r2.jpg"
        title2="報導-2"
        text2="地震後成為父母雙亡的孤兒如今都已長大，走過成長過程裡的淚水。"
        href2="https://udn.com"

        img3="./assets/img/r3.jpg"
        title3="報導-3"
        text3="地震後成為父母雙亡的孤兒如今都已長大，走過成長過程裡的淚水。"
        href3="https://udn.com"

        img4="./assets/img/r4.jpg"
        title4="報導-4"
        text4="地震後成為父母雙亡的孤兒如今都已長大，走過成長過程裡的淚水。"
        href4="https://udn.com"
      >
      </FooterRelatedArticle>
      <FooterQuestionnaire href="https://www.surveycake.com/s/KpQKN" />
      <FooterFbComment />
      <FooterLogo />
    </PageFooter>
    <PageBackTop />
  </div>
</template>

<script>
import imgCoverMob from '~/img/cover/mob.jpg';
import imgCoverPad from '~/img/cover/mob.jpg';
import imgCoverPc from '~/img/cover/mob.jpg';
import imgClnMob from '~/img/halo/1.jpg';
import imgClnPad from '~/img/halo/1.jpg';
import imgClnPc from '~/img/parallax.jpg';
import imgNextArticle from '~/img/parallax.jpg';

import ArticleCastAnchor from '@/components/layout/ArticleCastAnchor.vue';
import ArticleColumnOne from '@/components/layout/ArticleColumnOne.vue';
import ArticleContainer from '@/components/layout/ArticleContainer.vue';
import ArticleDictionary from '@/components/layout/ArticleDictionary.vue';
import FooterEditor from './components/footer/FooterEditor.vue';
import FooterFbComment from './components/footer/FooterFbComment.vue';
import FooterLogo from './components/footer/FooterLogo.vue';
import FooterNextArticle from '@/components/footer/FooterNextArticle.vue';
import FooterQuestionnaire from './components/footer/FooterQuestionnaire.vue';
import FooterRelatedArticle from './components/footer/FooterRelatedArticle.vue';
import FooterShare from './components/footer/FooterShare.vue';
import HeaderTypeA from '@/components/header/HeaderTypeA.vue';
import HeaderTypeB from '@/components/header/HeaderTypeB.vue';
import HeaderTypeC from '@/components/header/HeaderTypeC.vue';
import HeaderTypeD from '@/components/header/HeaderTypeD.vue';
import PageBackTop from '@/components/layout/PageBackTop.vue';
import PageCover from '@/components/layout/PageCover.vue';
import PageFooter from '@/components/footer/PageFooter.vue';
import PageIndicator from '@/components/layout/PageIndicator.vue';

export default {
  name: 'app',
  components: {
    ArticleCastAnchor,
    ArticleColumnOne,
    ArticleContainer,
    ArticleDictionary,
    FooterEditor,
    FooterFbComment,
    FooterLogo,
    FooterNextArticle,
    FooterQuestionnaire,
    FooterRelatedArticle,
    FooterShare,
    HeaderTypeA,
    HeaderTypeB,
    HeaderTypeC,
    HeaderTypeD,
    PageBackTop,
    PageCover,
    PageFooter,
    PageIndicator,
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
        imgNextArticle: imgNextArticle,
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
