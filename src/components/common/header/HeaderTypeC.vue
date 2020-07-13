<template>
  <header class="header-bar">
    <HeaderMenu
      :menuActiveFlag="menuActiveFlag"
      :theme="theme"
      :outlink="outlink"
    >
      <slot />
    </HeaderMenu>
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
        'header-bar__nav': true,
        'header-bar__nav--hide': !activeFlag,
        'header-bar__nav--theme-dark': theme === 'dark',
        'header-bar__nav--theme-light': theme === 'light'
      }"
    >
      <div class="header-bar__nav__section">
        <div class="header-bar__logo-seat">
          <!-- <UdnLogo :theme="theme" /> -->
        </div>
        <div class="haeder-bar__menu-button-container">
          <button class="haeder-bar__menu-button"
            @click="handleMenuButtonClick()"
            name="menu-toggle-button"
          >
            <p :class="{
              'small': true,
              'white': theme === 'dark'
              }"
            >
              {{pageTitle}}
              <i
                :class="{
                  'haeder-bar__menu-button__arrow': true,
                  'haeder-bar__menu-button__arrow--white': theme === 'dark',
                  'haeder-bar__menu-button__arrow--black': theme === 'light',
                  'haeder-bar__menu-button__arrow--up': menuActiveFlag,
                  'haeder-bar__menu-button__arrow--down': !menuActiveFlag,
                }"
              />
            </p>
          </button> 
        </div>
        <div
          v-if="deviceType !== 'mob'"
          class="header-bar__anchor-pc"
        >
          <HeaderAnchor :theme="theme" />
        </div>
      </div>
      <div class="header-bar__nav__section">
        <div class="header-bar__share-container">
          <HeaderShare :headerActiveFlag="activeFlag" :theme="theme" />
        </div>
      </div>
    </nav>
    <nav
      v-if="deviceType === 'mob'"
      :class="{
        'header-bar__anchor-mob': true,
        'header-bar__anchor-mob--hide': !activeFlag,
        'header-bar__anchor-mob--theme-dark': theme === 'dark',
        'header-bar__anchor-mob--theme-light': theme === 'light',
      }"
    >
      <HeaderAnchor :theme="theme" />
    </nav>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import { autoResize_3, sendGaMethods } from '@/mixins/masterBuilder.js';
import HeaderAnchor from '@/components/common/header/HeaderAnchor.vue';
import HeaderShare from '@/components/common/header/HeaderShare.vue';
import HeaderMenu from '@/components/common/header/HeaderMenu.vue';
import UdnLogo from '@/components/common/accessories/UdnLogo.vue';

export default {
  name: 'HeaderTypeC',
  mixins: [autoResize_3, sendGaMethods],
  components: {
    HeaderAnchor,
    HeaderShare,
    HeaderMenu,
    UdnLogo
  },
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    pageTitle: {
      type: String,
    },
    href: {
      type: String,
      default: document.querySelector('meta[property="og:url"]').content,
    },
    outlink: {
      type: Array,
      default: null
    }
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
    handleScroll: _debounce(function() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          // activeFlag
          if (!this.menuActiveFlag) {
            if (this.lastPosition >= window.pageYOffset) this.activeFlag = true;
            else this.activeFlag = false;
            this.lastPosition = window.pageYOffset;
          }

          this.ticking = false;
        });
      }
      this.ticking = true;
    }, 30,  {'leading': true, 'trailing': false, 'maxWait': 30}),
    handleMenuButtonClick() {
      this.menuActiveFlag = !this.menuActiveFlag;

      if (this.menuActiveFlag) this.sendGA(this.formatGA('HeaderMenuOpen'));
      else this.sendGA(this.formatGA('HeaderMenuClose'));
    }
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
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 4999;
  .header-bar__logo {
    position: absolute;
    z-index: 10;
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
  .header-bar__nav {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    transition: .333s linear;
    &.header-bar__nav--hide {
      pointer-events: none;
      transition: .333s .666s linear;
      transform: translateY(-100%);
    }
    &.header-bar__nav--theme-dark {
      background-color: #000000;
    } 
    &.header-bar__nav--theme-light {
      background-color: #ffffff;
    }
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

  .header-bar__anchor-mob {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    padding: 0 20px 0 55px;
    transform: translateY(45px);
    transition: .333s ease-in-out;
    &.header-bar__anchor-mob--hide {
      transform: translateY(-100%);
    }
    &.header-bar__anchor-mob--theme-dark {
      background-color: #000000;
    }
    &.header-bar__anchor-mob--theme-light {
      background-color: #ffffff;
    }
  }
  .header-bar__anchor-pc {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 15px;
    transition: .333s ease-in-out;
  }
  .header-bar__logo-seat {
    flex-shrink: 0;
    position: relative;
    width: 50px;
    height: 100%;
  }
  .haeder-bar__menu-button-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px 0 5px;
    @include pc {
      margin: 0 30px 0 15px;
    }

    .haeder-bar__menu-button {
      background-color: transparent;
      cursor: pointer;
      @include clean-btn;
      .haeder-bar__menu-button__arrow {
        border-style: solid;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        margin-left: 3px;
        transition: .333s ease-in-out;

        &.haeder-bar__menu-button__arrow--white {
          border-color: #ededed;
        }
        &.haeder-bar__menu-button__arrow--black {
          border-color: #121212;
        }

        &.haeder-bar__menu-button__arrow--up {
          transform: translateY(1px) rotate(-135deg);
        }
        &.haeder-bar__menu-button__arrow--down {
          transform: translateY(-2px) rotate(45deg);
        }
      }
      .haeder-bar__menu-button__split {
        margin-left: 15px;
      }
    }
  }
}
</style>