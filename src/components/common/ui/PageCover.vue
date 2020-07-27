<template>
  <section class="page-cover"
    :style="{
      backgroundImage: 'url(' + selectSrc_3(srcMob, srcPad, srcPc) + ')'
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
    <div class="page-cover__arrow" @click="handleScroll">
      <NmdArrow />
    </div>
    <div class="page-cover__enter-anchor" id="enter-anchor" />
  </section>
</template>

<script>
import { autoResize_3, selectSrcMethod_3, sendGaMethods } from '@/mixins/masterBuilder.js';
import NmdArrow from '@/components/common/accessories/NmdArrow.vue';
import vueScrollTo from 'vue-scrollto';

export default {
  name: 'PageCover',
  mixins: [autoResize_3, selectSrcMethod_3, sendGaMethods],
  components: {
    NmdArrow,
  },
  props: {
    srcMob: {
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
    posMob: {
      type: String,
      default: null,
    },
    posPad: {
      type: String,
      default: null,
    },
    posPc: {
      type: String,
      default: null,
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
      if (!this.posMob && !this.posPad && !this.posPc) return 0;
      if (this.deviceType === 'mob') return this.posMob.split(',')[1].concat('vh');
      if (this.deviceType === 'pad') return this.posPad.split(',')[1].concat('vh');
      if (this.deviceType === 'pc') return this.posPc.split(',')[1].concat('vh');
      return 0;
    },
    titleLeft() {
      if (!this.posMob && !this.posPad && !this.posPc) return 0;
      if (this.deviceType === 'mob') return this.posMob.split(',')[0].concat('vw');
      if (this.deviceType === 'pad') return this.posPad.split(',')[0].concat('vw');
      if (this.deviceType === 'pc') return this.posPc.split(',')[0].concat('vw');
      return 0;
    },
    titleTranslate() {
      return 'translate(' + this.titleLeft + ',' + this.titleTop + ')'
    },
    titleWritingMode() {
      if (this.writingMode === 'vrl') return 'vertical-rl'
      if (this.writingMode === 'vlr') return 'vertical-lr'
      return 'horizontal-tb'
    }
  },
  methods: {
    handleScroll() {
      vueScrollTo.scrollTo('#enter-anchor');
      this.sendGA(this.formatGA('CoverArrow'));
    }
  }
};
</script>

<style lang="scss" scoped>
.page-cover {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 48px;
  @include pad {
    margin-bottom: 0;
  }
  @include pc {
    margin-bottom: 0;
  }
  .page-cover__title {
    position: relative;
    display: inline-block;
    p, h1, h2, h3, h4, h5 {
      color: inherit;
    }
  }
  .page-cover__arrow {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  .page-cover__enter-anchor {
    position: absolute;
    bottom: 0;
  }
}
</style>