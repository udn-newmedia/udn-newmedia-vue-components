<template>
  <div id="app">
    <PageIndicator></PageIndicator>
    <HeaderTypeC></HeaderTypeC>
    <div class="middle">
      <NmdArrow />
    </div>
    <ArticleCastAnchor title="123" />
    <article class="article">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet <ArticleDictionary>consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis</ArticleDictionary> accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
    </article>
    <ArticleCastAnchor title="456" />

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
      <ArticleCastAnchor title="789" />
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
  </div>
</template>

<script>

import ArticleCastAnchor from '@/components/common/ui/ArticleCastAnchor.vue'
import ArticleColumnOne from '@/components/common/ui/ArticleColumnOne.vue'
import ArticleColumnTwo from '@/components/common/ui/ArticleColumnTwo.vue'
import ArticleColumnThree from '@/components/common/ui/ArticleColumnThree.vue'
import ArticleDictionary from '@/components/common/ui/ArticleDictionary.vue'
import HeaderTypeC from '@/components/common/header/HeaderTypeC.vue'
import NmdButton from '@/components/common/accessories/NmdButton.vue'
import NmdArrow from '@/components/common/accessories/NmdArrow.vue'
import PageIndicator from '@/components/common/ui/PageIndicator.vue'

export default {
  name: 'App',
  components: {
    ArticleCastAnchor,
    ArticleColumnOne,
    ArticleColumnTwo,
    ArticleColumnThree,
    ArticleDictionary,
    HeaderTypeC,
    NmdButton,
    NmdArrow,
    PageIndicator
  },
}
</script>

<style lang="scss">
.middle {
  text-align: center;
}
</style>
