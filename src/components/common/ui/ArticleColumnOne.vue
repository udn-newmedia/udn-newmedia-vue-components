<template>
  <figure class="article-column-one">
    <BasePicture
      :srcMob="srcMob"
      :srcPad="srcPad"
      :srcPc="srcPc"
      :alt="alt"
    />
    <figcaption class="article-column-one__description">
      <p class="small">
        <slot />
      </p>
    </figcaption>
  </figure>
</template>

<script>
import BasePicture from '@/components/common/accessories/BasePicture.vue';

export default {
  name: 'ArticleColumnOne',
  components: {
    BasePicture
  },
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
.article-column-one {
  position: relative;
  margin: 0;
  @include layout-padding;
  .article-column-one__description {
    margin-top: 8px;
    p {
      color: #7b7a7a;
      margin: 0;
    }
  }
}
</style>