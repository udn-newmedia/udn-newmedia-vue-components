<template>
  <div class="page-cover"
    :style="{
      backgroundImage: 'url(' + (isMob ? src : srcPc) + ')'
    }"
  >
    page
  </div>  
</template>

<script>
import autoResize from '@/mixins/autoResize.js';

export default {
  name: 'PageCover',
  mixins: [autoResize],
  props: {
    src: {
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