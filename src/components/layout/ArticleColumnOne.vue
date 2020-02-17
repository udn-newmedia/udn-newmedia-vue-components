<template>
  <div class="article-column-one">
    <div class="article-column-one__img">
      <img
        :src="selectSrc_3(srcMob, srcPad, srcPc)"
        :alt="alt"
      >
    </div>
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
  .article-column-one__img {
    position: relative;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .article-column-one__description {
    p {
      color: #7b7a7a;
    }
  }
}
</style>