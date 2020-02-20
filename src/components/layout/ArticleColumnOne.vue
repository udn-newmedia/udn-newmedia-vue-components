<template>
  <div class="article-column-one">
    <img
      :src="selectSrc_3(srcMob, srcPad, srcPc)"
      :alt="alt"
    >
    <div class="article-column-one__description">
      <p class="small">
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';
export default {
  name: 'ArticleColumnOne',
  mixins: [autoResize_3, selectSrcMethod_3],
  props: {
    srcMob: {
      type: String,
    },
    srcPad: {
      type: String,
    },
    srcPc: {
      type: String,
    },
    alt: {
      type: String,
      default: document.querySelector('title').innerHTML,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.article-column-one {
  position: relative;
  width: 100%;
  @include layout-padding;
  img {
    width: 100%;
    height: auto
  }
  .article-column-one__description {
    margin-top: 8px;
    p {
      color: #7b7a7a;
      margin: 0;
    }
  }
}
</style>