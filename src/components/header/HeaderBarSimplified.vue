<template>
  <header
    :class="{
      'header-bar-simplified': true,
      'header-bar-simplified--hide': !activeFlag,
    }"
  >
    <HeaderMenuSimplified :menuActiveFlag="menuActiveFlag"><slot /></HeaderMenuSimplified>
    <nav class="header-bar-simplified__nav">
      <div class="header-bar-simplified__logo">
        <UdnLogo :theme="theme" />
      </div>
    </nav>
    <nav class="header-bar-simplified__nav">
      <div class="header-bar-simplified-share__container">
        <div class="header-bar-simplified-share__share-icon custom-button">
          <ShareTwitter />
        </div>
        <div class="header-bar-simplified-share__share-icon custom-button">
          <ShareFb />
        </div>
        <div class="header-bar-simplified-share__share-icon custom-button">
          <ShareLine />
        </div>
      </div>
      <div class="header-bar-simplified__hamburder-container" @click="handleHamburgerClick">
        <HeaderHamburger :theme="theme" :menuActiveFlag="menuActiveFlag" />
      </div>
    </nav>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import autoResize from '@/mixins/autoResize_2.js';
import sendGaMethods from "@/mixins/sendGaMethods.js";
import HeaderHamburger from '@/components/header/HeaderHamburger.vue';
import HeaderMenuSimplified from '@/components/header/HeaderMenuSimplified.vue';
import UdnLogo from '@/components/ui/UdnLogo.vue';
import ShareFb from '@/components/ui/ShareFb.vue';
import ShareLine from '@/components/ui/ShareLine.vue';
import ShareTwitter from '@/components/ui/ShareTwitter.vue';

export default {
  name: 'HeaderBarSimplified',
  mixins: [sendGaMethods],
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    useMenu: {
      type: String,
      default: 'true'
    }
  },
  components: {
    HeaderHamburger,
    HeaderMenuSimplified,
    UdnLogo,
    ShareFb,
    ShareLine,
    ShareTwitter
  },
  data() {
    return {
      activeFlag: true,
      menuActiveFlag: false,
      lastPosition: window.pageYOffset,
      ticking: false,
    }
  },
  methods: {
    handleHamburgerClick() {
      this.menuActiveFlag = !this.menuActiveFlag;
      this.sendGA(this.formatGA('HeaderHamburger'));
    },
    handleScroll: _debounce(function() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          // activeFlag
          if (this.lastPosition >= window.pageYOffset) this.activeFlag = true;
          else this.activeFlag = false;
          this.lastPosition = window.pageYOffset;

          this.ticking = false;
        });
      }
    }, 100,  {'leading': true, 'trailing': false, 'maxWait': 100}),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.header-bar-simplified {
  position: fixed;
  z-index: 4999;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .333s linear;

  @include pc {
    height: 80px;
  }

  &.header-bar-simplified--hide {
    transition: .333s .333s linear;
    transform: translateY(-100%);
  }

  .header-bar-simplified__nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-bar-simplified__logo {
    position: relative;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .333s ease-in;
    cursor: pointer;
    @include clean-tap;

    &:hover {
      transform: rotate(20deg);
    }
  }

  .header-bar-simplified-share__container {
    position: relative;
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: .333s ease-in-out;

    .header-bar-simplified-share__share-icon {
      flex-shrink: 0;
      position: relative;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .header-bar-simplified__hamburder-container {
    position: relative;
  }
}
</style>