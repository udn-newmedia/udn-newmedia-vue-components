<template>
  <header :class="{
      'header-bar': true,
    }">
    <!-- <header :class="{
      'header-bar': true,
      'header-bar--hide': !activeFlag,
    }">-->
    <HeaderMenu :menuActiveFlag="menuActiveFlag" :simplified="true" :outlink="outlink">
      <slot />
    </HeaderMenu>
    <div class="header-bar__nav__container" style="background:white">
      <!-- <nav class="header-bar__nav" v-if="activeFlag"> -->
      <div style="display:flex">
        <!-- <nav class="header-bar__nav header-bar-logo" :class="{'header-bar-logo-hide':!activeFlag}"> -->
        <nav class="header-bar__nav header-bar-logo" :class="{'header-bar-logo-hide':!isAtTop}">
          <div class="header-bar__logo" @click="sendGA(formatGA('HeaderUdnLogo'))">
            <a :href="href" target="_self" rel="noopener" aria-label="聯logo" name="聯logo">
              <UdnLogo />
            </a>
          </div>
        </nav>

        <nav
          :class="{
        'header-bar__nav': true,
        'header-bar__nav--hide': !activeFlag,
        'header-bar__nav--theme-dark': theme === 'dark',
        'header-bar__nav--theme-light': theme === 'light',
      }"
        >
          <div class="header-bar__nav__section">
            <div class="header-bar__logo-seat">
              <!-- <UdnLogo :theme="theme" /> -->
            </div>
            <!-- <div class="haeder-bar__menu-button-container">
            <button
              class="haeder-bar__menu-button"
              @click="handleMenuButtonClick()"
              name="menu-toggle-button"
            >
              <p
                :class="{
              'small': true,
              'white': theme === 'dark'
              }"
              >
                active anchor
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
            </div>-->
            <div class="header-bar__anchor-pc">
              <template v-if="deviceType !== 'mob'">
                <HeaderAnchor :theme="theme" />
              </template>
              <template v-else>
                <HeaderAnchorMob :theme="theme" :activeFlag="activeFlag" />
              </template>
            </div>
            <!-- <div v-if="deviceType !== 'mob'" class="header-bar__anchor-pc">
            <HeaderAnchor :theme="theme" />
            </div>-->
          </div>
        </nav>
      </div>
      <nav class="header-bar__nav">
        <div class="header-bar-share__container">
          <div class="header-bar-share__share-icon">
            <ShareFb />
          </div>
          <div class="header-bar-share__share-icon">
            <ShareLine />
          </div>
          <div class="header-bar-share__share-icon">
            <ShareTwitter />
          </div>
        </div>
        <div
          v-if="withSubpage"
          class="header-bar__hamburder-container"
          @click="handleHamburgerClick"
        >
          <HeaderHamburger :menuActiveFlag="menuActiveFlag" />
        </div>
        <div v-else style="width:10px;"></div>
      </nav>
    </div>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce'
import { sendGaMethods } from '@/mixins/masterBuilder.js'
import HeaderHamburger from '@/components/common/header/HeaderHamburger.vue'
import HeaderMenu from '@/components/common/header/HeaderMenu.vue'
import UdnLogo from '@/components/common/accessories/UdnLogo.vue'
import ShareFb from '@/components/common/accessories/ShareFb.vue'
import ShareLine from '@/components/common/accessories/ShareLine.vue'
import ShareTwitter from '@/components/common/accessories/ShareTwitter.vue'
import HeaderAnchor from '@/components/common/header/HeaderAnchor.vue'
import HeaderAnchorMob from '@/components/common/header/HeaderAnchorMob.vue'

export default {
  name: 'HeaderTypeA1',
  mixins: [sendGaMethods],
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    pageTitle: {
      type: String,
    },
    href: {
      type: String,
      default: 'https://bit.ly/34ea7d9',
      // default: document.querySelector('meta[property="og:url"]').content,
    },
    outlink: {
      type: Array,
      default: null,
    },
    withSubpage: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    HeaderHamburger,
    HeaderMenu,
    UdnLogo,
    ShareFb,
    ShareLine,
    ShareTwitter,
    HeaderAnchor,
    HeaderAnchorMob,
  },
  data() {
    return {
      activeFlag: true,
      menuActiveFlag: false,
      lastPosition: window.pageYOffset,
      ticking: false,
      deviceType: 'pc',
      isAtTop: true,
    }
  },
  methods: {
    handleHamburgerClick() {
      this.menuActiveFlag = !this.menuActiveFlag

      if (this.menuActiveFlag) this.sendGA(this.formatGA('HeaderMenuOpen'))
      else this.sendGA(this.formatGA('HeaderMenuClose'))
    },
    handleMenuButtonClick() {
      this.menuActiveFlag = !this.menuActiveFlag

      if (this.menuActiveFlag) this.sendGA(this.formatGA('HeaderMenuOpen'))
      else this.sendGA(this.formatGA('HeaderMenuClose'))
    },
    handleScroll: _debounce(
      function () {
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            // activeFlag
            if (!this.menuActiveFlag) {
              if (this.lastPosition >= window.pageYOffset)
                this.activeFlag = true
              else this.activeFlag = false
              this.lastPosition = window.pageYOffset
            }
            this.ticking = false
          })
        }
        this.ticking = true
      },
      30,
      { leading: true, trailing: false, maxWait: 30 },
    ),
    handleDevice() {
      if (window.innerWidth >= 768) {
        this.deviceType = 'pc'
      } else {
        this.deviceType = 'mob'
      }
    },
    handleTop() {
      const { pageYOffset } = window
      if (pageYOffset === 0) {
        this.isAtTop = true
      } else {
        this.isAtTop = false
      }
    },
    checkAnchor() {
      if (this.$anchorList.length === 0) {
        this.isAtTop = true
        window.removeEventListener('scroll', this.handleTop, false)
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
    this.handleTop()
    window.addEventListener('scroll', this.handleTop, false)
    this.handleDevice()
    window.addEventListener('resize', this.handleDevice, false)
    this.checkAnchor()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true)
    window.removeEventListener('scroll', this.handleTop, false)
    window.removeEventListener('resize', this.handleDevice, false)
  },
}
</script>

<style lang="scss" scoped>
.header-bar {
  position: fixed;
  z-index: 4999;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  transition: 0.333s linear;

  &.header-bar--hide {
    pointer-events: none;
    transition: 0.333s 0.666s linear;
    transform: translateY(-100%);
  }
  .header-bar__nav__container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-bar__nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-bar__logo {
    position: relative;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.333s ease-in;
    &:hover {
      transform: rotate(20deg);
    }
    a {
      text-decoration: none;
      cursor: pointer;
      @include clean-tap;
    }
  }

  .header-bar-share__container {
    position: relative;
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: 0.333s ease-in-out;

    .header-bar-share__share-icon {
      flex-shrink: 0;
      position: relative;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @include clean-btn;
    }
  }

  .header-bar__hamburder-container {
    position: relative;
  }
}
.header-bar-logo {
  background-color: white;
  z-index: 10;
  position: absolute !important;
  top: 7.5px;
  left: 32px;
  transition: all 0.5s;
  transform: translateY(0%);
  &.header-bar-logo-hide {
    transform: translateY(-150%);
  }

  padding-right: 500px;
  @media screen and (max-width: 767.98px) {
    padding-right: 100px;
  }
  @media screen and (max-width: 374.98px) {
    padding-right: 90px;
  }
}
</style>