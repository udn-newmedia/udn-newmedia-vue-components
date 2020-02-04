<template>
  <header
    :class="{
      'header-bar': true,
      'header-bar--hide': !headerActiveFlag,
      'header-bar--theme-dark': theme === 'dark',
      'header-bar--theme-light': theme === 'light'
    }"
  >
    <nav class="header-bar__nav">
      <div class="header-bar__nav__section">
        <div class="header-bar__logo">
          <UdnLogo :color="logoColor" />
        </div>
        <div class="haeder-bar__link-list">
          <p :class="{
            'small': true,
            'white': theme === 'dark'
            }"
          >
            {{pageTitle}}
          </p>
        </div>
      </div>
      <div class="header-bar__nav__section">
        <HeaderShare :headerActiveFlag="headerActiveFlag" />
        <HeaderHamburger :theme="theme" />
      </div>
    </nav>
    <nav class="header-bar__anchor">
      <HeaderAnchor :theme="theme" />
    </nav>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import autoResize from '@/mixins/autoResize_2.js';
import HeaderAnchor from '@/components/header/HeaderAnchor.vue';
import HeaderHamburger from '@/components/header/HeaderHamburger.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import HeaderShare from '@/components/header/HeaderShare.vue';
import UdnLogo from '@/components/ui/UdnLogo.vue';

export default {
  name: 'HeaderBar',
  mixins: [autoResize],
  components: {
    HeaderAnchor,
    HeaderHamburger,
    HeaderMenu,
    HeaderShare,
    UdnLogo
  },
  props: {
    theme: {
      type: String,
      default: 'transparent'
    },
    pageTitle: {
      type: String,
    },
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
      if (this.theme === 'light') return '#000000';
    },
  },
  methods: {
    handleScroll: _debounce(function() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          // headerActiveFlag
          if (this.lastPosition >= window.pageYOffset) this.headerActiveFlag = true;
          else this.headerActiveFlag = false;
          this.lastPosition = window.pageYOffset;

          // anchor
          const list = this.$store.state.anchorList;
          const pageYOffset = window.pageYOffset;
          
          list.forEach((e, i) => {
            switch (true) {
              case (+i === 0):
                if (pageYOffset >= 0 && pageYOffset < list[1].position) this.handleUpdateAnchor(i, true);
                else this.handleUpdateAnchor(i, false);
                break;
            
              case (+i === list.length - 1):
                if (pageYOffset >= list[list.length - 1].position) this.$store.dispatch('updateAnchorStatus', {index: i, status: true});
                else this.handleUpdateAnchor(i, false);
                break;

              default:
                if (pageYOffset >= list[i].position && pageYOffset < list[i + 1].position) this.handleUpdateAnchor(i, true);
                else this.handleUpdateAnchor(i, false);
                break;
            }
          });

          this.ticking = false;
        });
      }
      this.ticking = true;
    }, 100,  {'leading': true, 'trailing': false, 'maxWait': 100}),
    handleUpdateAnchor(index, status) {
      this.$store.dispatch('updateAnchorStatus', {index: index, status: status});
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
};
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';

.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  z-index: 4999;
  transition: .333s linear;
  @include pc {
    height: 50px;
  }
  &.header-bar--hide {
    transition: .333s 1s linear;
    transform: translateY(-100%);
  }
  &.header-bar--theme-dark {
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: blur(23px);
      background-color: rgba(#000000, 0.6);
    }
  }
  &.header-bar--theme-light {
    background-color: #ffffff;
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: blur(8px);
      box-shadow: 0 0 10px 0 rgba(165, 165, 165, 0.23);
      background-color: rgba(#ffffff, 0.8);
    }
  }

  .header-bar__nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    .header-bar__nav__section {
      position: relative;
      height: 100%;
      display: flex;
    }
  }

  .header-bar__anchor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    transform: translateY(50px);
  }
  .header-bar__logo {
    position: relative;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .333s ease-in;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: #ffffff00;
    cursor: pointer;
    &:hover {
      transform: rotate(20deg);
    }
  }
  .haeder-bar__link-list {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>