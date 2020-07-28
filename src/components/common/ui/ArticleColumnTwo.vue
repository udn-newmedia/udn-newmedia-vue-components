<template>
  <figure class="article-column-two">
    <div class="article-column__image__container">
      <div class="article-column__image">
        <BasePicture
          :srcMob="srcMob_1"
          :srcPad="srcPad_1"
          :srcPc="srcPc_1"
          :alt="alt_1"
        />
      </div>
      <div class="article-column__image">
        <BasePicture
          :srcMob="srcMob_2"
          :srcPad="srcPad_2"
          :srcPc="srcPc_2"
          :alt="alt_2"
        />
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
import BasePicture from '@/components/common/accessories/BasePicture.vue';

export default {
  name: 'ArticleColumnTwo',
  components: {
    BasePicture
  },
  props: {
    srcMob_1: {
      type: String
    },
    srcPad_1: {
      type: String
    },
    srcPc_1: {
      type: String
    },
    srcMob_2: {
      type: String
    },
    srcPad_2: {
      type: String
    },
    srcPc_2: {
      type: String
    },
    alt_1: {
      type: String,
      default: document.querySelector('title').innerHTML,
    },
    alt_2: {
      type: String,
      default: document.querySelector('title').innerHTML,
    },
  },
};
</script>

<style lang="scss" scoped>
.article-column-two {
  position: relative;
  margin: 0;
  @include layout-padding;
  .article-column__image__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include pc {
      flex-direction: row;
    }
    .article-column__image {
      &:first-child {
        margin-bottom: 12px;
        @include pc {
          margin-right: 12px;
          margin-bottom: 0;
        }
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