<template>
  <div class="article-parallax">
    <div :class="{
      'article-parallax__bg': true,
      'article-parallax__bg--active': activeFlag,
    }"
      :style="{
        backgroundImage: 'url(' + selectSrc_3(srcMob, srcPad, srcPc) + ')'
      }"
    >
      <div class="article-parallax__title">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from '@/mixins/masterBuilder.js';
export default {
  name: 'ArticleParallax',
  mixins: [autoResize_3, selectSrcMethod_3],
  props: {
    srcMob: {
      type: String
    },
    srcPad: {
      type: String
    },
    srcPc: {
      type: String
    },
    position: {
      type: String,
    },
  },
  data() {
    return {
      ticking: false,
      activeFlag: false,
    };
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const pos = this.$el.getBoundingClientRect();
          const trigger = window.innerHeight;
          if (pos.top < trigger && pos.bottom >= 0) this.activeFlag = true;
          else this.activeFlag = false;
          this.ticking = false;
        });
      }
      this.ticking = true;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.article-parallax {
  position: relative;
  width: 100%;
  height: 100vh;
}
.article-parallax__bg {
  opacity: 0;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  transition: .111s ease-in-out;
  &.article-parallax__bg--active {
    opacity: 1;
  }
}
</style>