<template>
  <div class="article-column-three">
    <div class="article-column__image-container">
      <div class="article-column__image-container__upper-section">
        <div class="article-column__image">
          <img :src="selectSrc_3(srcMob_1, srcPad_1, srcPc_1)" :alt="alt_1">
        </div>
        <div class="article-column__image">
          <img :src="selectSrc_3(srcMob_2, srcPad_2, srcPc_2)" :alt="alt_2">
        </div>
      </div>
      <div class="article-column__image-container__down-section">
        <div class="article-column__image">
          <img :src="selectSrc_3(srcMob_3, srcPad_3, srcPc_3)" :alt="alt_3">
        </div>
      </div>  
      <div class="article-column__description">
        <p class="small">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'ArticleColumnThree',
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
    srcMob_3: {
      type: String,
      require: true,
    },
    srcPad_3: {
      type: String,
      require: true,
    },
    srcPc_3: {
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
    alt_3: {
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
@import '~/style/_mixins.scss';
.article-column-three {
  position: relative;
  width: 100%;
  @include layout-padding;
  .article-column__image-container__upper-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    @include pad {
      flex-direction: row;
    }
    @include pc {
      flex-direction: row;
    }
    .article-column__image {
      &:first-child {
        margin-bottom: 12px;
        @include pad {
          margin-right: 12px;
          margin-bottom: 0;
        }
        @include pc {
          margin-right: 12px;
          margin-bottom: 0;
        }
      }
    }
  }
  .article-column__image-container__down-section {
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
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