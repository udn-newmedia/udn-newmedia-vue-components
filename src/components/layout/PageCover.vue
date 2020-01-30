<template>
  <div class="page-cover"
    :style="{
      backgroundImage: 'url(' + selectSrc_3 + ')'
    }"
  >
    page
  </div>  
</template>

<script>
import autoResize from '@/mixins/autoResize_3.js';
import selectSrcMethods from '@/mixins/selectSrcMethods.js';

export default {
  name: 'PageCover',
  mixins: [autoResize, selectSrcMethods],
  props: {
    src: {
      type: String,
    },
    srcPad: {
      type: String
    },
    srcPc: {
      type: String
    },
    useAnimate: {
      type: Boolean,
      default: true,
    },
    useArrow: {
      type: Boolean,
      default: true,
    },
    useHint: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-cover {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>