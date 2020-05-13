<template>
  <figure class="article-column-two">
    <div class="article-column__image__container">
      <div class="article-column__image">
        <img :src="selectSrc_3(srcMob_1, srcPad_1, srcPc_1)" :alt="alt_1">
      </div>
      <div class="article-column__image">
        <img :src="selectSrc_3(srcMob_2, srcPad_2, srcPc_2)" :alt="alt_2">
      </div>
    </div>
    <figcaption class="article-column__description">
      <p class="small">
        <slot />
      </p>
    </figcaption>
  </figure>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'ArticleColumnTwo',
  mixins: [autoResize_3, selectSrcMethod_3],
  props: {
    srcMob_1: {
      type: String,
      require: true,
    },
    srcPad_1: {
      type: String,
      require: true,
    },
    srcPc_1: {
      type: String,
      require: true,
    },
    srcMob_2: {
      type: String,
      require: true,
    },
    srcPad_2: {
      type: String,
      require: true,
    },
    srcPc_2: {
      type: String,
      require: true,
    },
    alt_1: {
      type: String,
      default: document.querySelector('title').innerHTML,
    },
    alt_2: {
      type: String,
      default: document.querySelector('title').innerHTML,
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.article-column-two {
  position: relative;
  width: 100%;
  @include layout-padding;
  .article-column__image__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include pc {
      flex-direction: row;
    }
    .article-column__image {
      width: 100%;
      &:first-child {
        margin-bottom: 12px;
        @include pc {
          margin-right: 12px;
          margin-bottom: 0;
        }
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .article-column__description {
    margin-top: 8px;
    p {
      color: #7b7a7a;
      margin: 0;
    }
  }
}
</style>