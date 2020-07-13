<template>
  <header class="header-bar-container">
    <div
      :class="{
        'header-bar__logo': true,
        'header-bar__logo--active': activeFlag,
      }"
      @click="sendGA(formatGA('HeaderUdnLogo'))"
    >
      <a
        :href="href"
        target="_self"
        rel="noopener"
        aria-label="聯logo"
        name="聯logo"
      >
        <UdnLogo :theme="theme" />
      </a>
    </div>
    <nav
      :class="{
        'header-bar': true,
        'header-bar--hide': !activeFlag,
        'header-bar--theme-dark': theme === 'dark',
        'header-bar--theme-light': theme === 'light'
      }"
    >
      <div class="header-bar__nav">
        <div class="header-bar__nav__section">
          <div class="header-bar__logo-seat">
            <!-- <UdnLogo :theme="theme" /> -->
          </div>
          <div class="header-bar__anchor">
            <HeaderAnchor :theme="theme" />
          </div>
        </div>
        <div class="header-bar__nav__section">
          <div class="header-bar__share-container">
            <HeaderShare :headerActiveFlag="activeFlag" :theme="theme" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';
import HeaderAnchor from '@/components/common/header/HeaderAnchor.vue';
import HeaderShare from '@/components/common/header/HeaderShare.vue';
import UdnLogo from '@/components/common/accessories/UdnLogo.vue';
export default {
  name: 'HeaderTypeD',
  mixins: [autoResize_2, sendGaMethods],
  components: {
    HeaderAnchor,
    HeaderShare,
    UdnLogo
  },
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    href: {
      type: String,
      default: document.querySelector('meta[property="og:url"]').content,
    },
  },
  data() {
    return {
      activeFlag: false,
      lastPosition: window.pageYOffset,
      ticking: false,
    }
  },
  methods: {
    handleScroll: _debounce(function() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          // activeFlag
          if (this.lastPosition > window.pageYOffset) this.activeFlag = true;
          else this.activeFlag = false;
          this.lastPosition = window.pageYOffset;
          
          this.ticking = false;
        });
      }
      this.ticking = true;
    }, 30,  {'leading': true, 'trailing': false, 'maxWait': 30}),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
};
</script>

<style lang="scss" scoped>
.header-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 4999;
}
.header-bar {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: .333s linear;
  &.header-bar--hide {
    pointer-events: none;
    transition: .333s .666s linear;
    transform: translateY(-100%);
  }
  &.header-bar--theme-light {
    background-color: #ffffff;
  }
  &.header-bar--theme-dark {
    background-color: #000000;
  }
  .header-bar__nav {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    .header-bar__nav__section {
      position: relative;
      min-width: 50px;
      height: 100%;
      display: flex;
    }
  }
  .header-bar__share-container {
    position: absolute;
    top: 0;
    right: 0;
  }
  .header-bar__anchor {
    position: relative;
    width: calc(100% - 60px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 5px;
    transition: .333s ease-in-out;
    @include pc {
      margin: 0 15px;
    }
  }
  .header-bar__logo-seat {
    flex-shrink: 0;
    position: relative;
    width: 50px;
    height: 100%;
  }
}
.header-bar__logo {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transform: scale(0.75);
  transition: .333s ease-in;
  &:hover {
    transform: rotate(20deg);
  }
  a {
    text-decoration: none;
    cursor: pointer;
    @include clean-tap;
  }
  &.header-bar__logo--active {
    opacity: 1;
    transform: scale(1);
    &:hover {
      transform: rotate(20deg) scale(1.05);
    }
  }
}
</style>