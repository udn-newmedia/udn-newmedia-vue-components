<template>
  <div id="app">
    <PageIndicator></PageIndicator>
    <HeaderTypeC pageTitle="你的數位隱私保障了嗎？">
      <a
        class="active"
        aria-label="outlink"
        name="outlink"
      > 數位隱私變商品
      </a>
      <a
        href="#"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_2'))"
      > 政府正在監控你
      </a>
      <a
        href="#"
        target="_blank" rel="noopener"
        aria-label="outlink"
        name="outlink"
        @click="sendGA(formatGA('MenuLink_3'))"
      > 測驗透明人指數
      </a>
    </HeaderTypeC>
    <PageCover></PageCover>
    <div class="middle">
      <NmdArrow />
    </div>
    <CastAnchor title="免費的最貴" />
    <article class="article">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet <ArticleDictionary>consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis</ArticleDictionary> accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
    </article>
    <CastAnchor title="數位足跡變金礦" />

    <NmdButton>緊張緊張緊張</NmdButton>
    <div class="a123">
      <ArticleColumnOne
        :srcMob="require('@/assets/img/halo/1.jpg')"
        :srcPad="require('@/assets/img/halo/2.jpg')"
        :srcPc="require('@/assets/img/parallax.jpg')"
        alt="123"
      > 123
      </ArticleColumnOne>
      <ArticleColumnTwo
        :srcMob_1="require('@/assets/img/halo/1.jpg')"
        :srcPad_1="require('@/assets/img/halo/2.jpg')"
        :srcPc_1="require('@/assets/img/parallax.jpg')"

        :srcMob_2="require('@/assets/img/halo/1.jpg')"
        :srcPad_2="require('@/assets/img/halo/2.jpg')"
        :srcPc_2="require('@/assets/img/parallax.jpg')"

        alt_1="123"
        alt_2="123"
      > 123
      </ArticleColumnTwo>
      <CastAnchor title="智慧生活" />
      <ArticleColumnThree
        :srcMob_1="require('@/assets/img/halo/1.jpg')"
        :srcPad_1="require('@/assets/img/halo/2.jpg')"
        :srcPc_1="require('@/assets/img/parallax.jpg')"

        :srcMob_2="require('@/assets/img/halo/1.jpg')"
        :srcPad_2="require('@/assets/img/halo/2.jpg')"
        :srcPc_2="require('@/assets/img/parallax.jpg')"

        :srcMob_3="require('@/assets/img/halo/1.jpg')"
        :srcPad_3="require('@/assets/img/halo/2.jpg')"
        :srcPc_3="require('@/assets/img/parallax.jpg')"

        alt_1="123"
        alt_2="123"
        alt_3="123"
      > 123
      </ArticleColumnThree>
    </div>
    <PageFooter>
      <FooterRelatedArticle />
    </PageFooter>
    <PageBackTop />
  </div>
</template>

<script>

import ArticleColumnOne from '@/components/common/ui/ArticleColumnOne.vue'
import ArticleColumnTwo from '@/components/common/ui/ArticleColumnTwo.vue'
import ArticleColumnThree from '@/components/common/ui/ArticleColumnThree.vue'
import ArticleDictionary from '@/components/common/ui/ArticleDictionary.vue'
import CastAnchor from '@/components/common/accessories/CastAnchor.vue'
import FooterRelatedArticle from '@/components/common/footer/FooterRelatedArticle.vue'
import HeaderTypeC from '@/components/common/header/HeaderTypeC.vue'
import NmdButton from '@/components/common/accessories/NmdButton.vue'
import NmdArrow from '@/components/common/accessories/NmdArrow.vue'
import PageBackTop from '@/components/common/ui/PageBackTop.vue'
import PageCover from '@/components/common/ui/PageCover.vue'
import PageFooter from '@/components/common/footer/PageFooter.vue'
import PageIndicator from '@/components/common/ui/PageIndicator.vue'

export default {
  name: 'App',
  components: {
    ArticleColumnOne,
    ArticleColumnTwo,
    ArticleColumnThree,
    ArticleDictionary,
    CastAnchor,
    FooterRelatedArticle,
    HeaderTypeC,
    NmdButton,
    NmdArrow,
    PageBackTop,
    PageCover,
    PageFooter,
    PageIndicator
  },
}
</script>

<style lang="scss">
.middle {
  text-align: center;
}
</style>
