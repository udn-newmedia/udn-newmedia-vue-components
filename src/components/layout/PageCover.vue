<template>
  <div class="page-cover"
    :style="{
      backgroundImage: 'url(' + selectSrc_3(src, srcPad, srcPc) + ')'
    }"
  >
    <div
      :class="{
        'page-cover__title': true,
      }"
      :style="{
        transform: titleTranslate,
        color: textColor,
        writingMode: titleWritingMode,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'PageCover',
  mixins: [autoResize_3, selectSrcMethod_3],
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
      type: String,
      default: 'true',
    },
    useArrow: {
      type: String,
      default: 'true',
    },
    useHint: {
      type: String,
      default: 'true',
    },
    pos: {
      type: String,
    },
    posPad: {
      type: String,
    },
    posPc: {
      type: String,
    },
    textColor: {
      type: String,
      default: '#000000',
    },
    writingMode: {
      type: String,
      default: 'horizontal'
    },
  },
  computed: {
    titleTop() {
      if (this.deviceType === 'mob') return this.pos.split(',')[1].concat('vh');
      if (this.deviceType === 'pad') return this.posPad.split(',')[1].concat('vh');
      if (this.deviceType === 'pc') return this.posPc.split(',')[1].concat('vh');
      return 'initial';
    },
    titleLeft() {
      if (this.deviceType === 'mob') return this.pos.split(',')[0].concat('vw');
      if (this.deviceType === 'pad') return this.posPad.split(',')[0].concat('vw');
      if (this.deviceType === 'pc') return this.posPc.split(',')[0].concat('vw');
      return 'initial';
    },
    titleTranslate() {
      return 'translate(' + this.titleLeft + ',' + this.titleTop + ')'
    },
    titleWritingMode() {
      if (this.writingMode === 'vrl') return 'vertical-rl'
      if (this.writingMode === 'vlr') return 'vertical-lr'
      return 'horizontal-tb'
    }
  }
};
</script>

<style lang="scss" scoped>
.page-cover {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;

  .page-cover__title {
    position: relative;
    display: inline-block;
    p, h1, h2, h3, h4, h5 {
      color: inherit;
    }
  }
}
</style>