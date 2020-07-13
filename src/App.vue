<template>
  <div id="app">
    <HeaderTypeA></HeaderTypeA>
    <div class="middle">
      <NmdArrow />
    </div>
    <article class="article">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet <ArticleDictionary>consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis</ArticleDictionary> accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum porro, nam ipsum quam itaque perferendis accusantium vitae ab alias nesciunt quis amet, rerum dicta delectus veniam ex sit omnis!
    </article>

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

import ArticleColumnOne from '@/components/common/layout/ArticleColumnOne.vue'
import ArticleColumnTwo from '@/components/common/layout/ArticleColumnTwo.vue'
import ArticleColumnThree from '@/components/common/layout/ArticleColumnThree.vue'
import ArticleDictionary from '@/components/common/layout/ArticleDictionary.vue'
import HeaderTypeA from '@/components/common/header/HeaderTypeA.vue'
import NmdButton from '@/components/common/accessories/NmdButton.vue'
import NmdArrow from '@/components/common/accessories/NmdArrow.vue'

export default {
  name: 'App',
  components: {
    ArticleColumnOne,
    ArticleColumnTwo,
    ArticleColumnThree,
    ArticleDictionary,
    HeaderTypeA,
    NmdButton,
    NmdArrow
  }
}
</script>

<style lang="scss">
.middle {
  text-align: center;
  background-color: blue;
}
</style>
