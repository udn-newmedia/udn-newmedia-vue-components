<template>
  <header
    :class="{
      'header-bar': true,
      'header-bar--hide': !headerActiveFlag,
      'header-bar--theme-dark': theme === 'dark',
      'header-bar--theme-light': theme === 'light'
    }"
  >
    <div class="header-bar__logo">
      <UdnLogo :color="logoColor" />
    </div>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import autoResize from '@/mixins/autoResize_2.js';
import HeaderHamburger from '@/components/header/HeaderHamburger.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import UdnLogo from '@/components/ui/UdnLogo.vue';

export default {
  name: 'HeaderBar',
  mixins: [autoResize],
  components: {
    HeaderHamburger,
    HeaderMenu,
    UdnLogo
  },
  props: {
    theme: {
      type: String,
      default: 'transparent'
    }
  },
  data() {
    return {
      headerActiveFlag: true,
      lastPosition: window.pageYOffset,
      ticking: false,
    }
  },
  computed: {
    logoColor() {
      if (this.theme === 'dark') return '#ffffff';
      if (this.theme === 'light') return '#aaaaaa';
    },
  },
  methods: {
    handleScroll: _debounce(function() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          if (this.lastPosition > window.pageYOffset) this.headerActiveFlag = true;
          else this.headerActiveFlag = false;
          this.lastPosition = window.pageYOffset;
          this.ticking = false;
        });
      }
      this.ticking = true;
    }, 100),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 4999;
  transition: .333s ease-in;
  &.header-bar--hide {
    transform: translateY(-100%);
  }
  &.header-bar--theme-dark {
    background-color: #000000;
  }
  &.header-bar--theme-light {
    background-color: #ffffff;
  }


  .header-bar__logo {
    position: relative;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .333s ease-in;
    cursor: pointer;
    &:hover {
      transform: rotate(20deg);
    }
  }
}
</style>