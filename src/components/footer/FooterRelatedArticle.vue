<template>
  <div class="footer-relate-article">
    <h4>{{title}}</h4>
    FooterRelateArticle
  </div>
</template>

<script>
import autoResize from '@/mixins/autoResize_2.js';
import sendGaMethods from "@/mixins/sendGaMethods.js";
export default {
  name: 'FooterRelateArticle',
  mixins: [autoResize, sendGaMethods],
  props: {
    title: {
      type: String,
      default: '延伸閱讀'
    },
    href1: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    text1: {
      type: String,
      required: true,
    },
    href2: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
    href3: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
    },
    text3: {
      type: String,
      required: true,
    },
    href4: {
      type: String,
      required: true,
    },
    img4: {
      type: String,
      required: true,
    },
    text4: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {

    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.footer-relate-article {
  position: relative;
  width: 100%;

  @include pc {

  }
}
</style>