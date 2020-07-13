<template>
  <header
    :class="{
      'header-bar': true,
      'header-bar--hide': !activeFlag,
    }"
  >
    <div class="header-bar__nav__container">
      <nav class="header-bar__nav">
        <div
          class="header-bar__logo"
          @click="sendGA(formatGA('HeaderUdnLogo'))"
        >
          <a
            :href="href"
            target="_self"
            rel="noopener"
            aria-label="聯logo"
            name="聯logo"
          >
            <UdnLogo />
          </a>
        </div>
      </nav>
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
      </nav>
    </div>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import { sendGaMethods } from '@/mixins/masterBuilder.js';
import UdnLogo from '@/components/common/accessories/UdnLogo.vue';
import ShareFb from '@/components/common/accessories/ShareFb.vue';
import ShareLine from '@/components/common/accessories/ShareLine.vue';
import ShareTwitter from '@/components/common/accessories/ShareTwitter.vue';

export default {
  name: 'HeaderTypeB',
  mixins: [sendGaMethods],
  props: {
    href: {
      type: String,
      default: document.querySelector('meta[property="og:url"]').content,
    },
  },
  components: {
    UdnLogo,
    ShareFb,
    ShareLine,
    ShareTwitter
  },
  data() {
    return {
      activeFlag: true,
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
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
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

  transition: .333s linear;

  &.header-bar--hide {
    pointer-events: none;
    transition: .333s .666s linear;
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
    transition: .333s ease-in;
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
    margin-right: 8px;
    transition: .333s ease-in-out;
    .header-bar-share__share-icon {
      flex-shrink: 0;
      position: relative;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @include clean-btn
    }
  }

  .header-bar__hamburder-container {
    position: relative;
  }
}
</style>