<template>
  <header
    :class="{
      'header-bar': true,
      'header-bar--hide': !activeFlag,
      'header-bar--theme-dark': theme === 'dark',
      'header-bar--theme-light': theme === 'light'
    }"
  >
    <HeaderMenu :menuActiveFlag="menuActiveFlag"><slot /></HeaderMenu>
    <nav class="header-bar__nav">
      <div class="header-bar__nav__section">
        <div class="header-bar__logo">
          <UdnLogo :color="logoColor" />
        </div>
        <div class="haeder-bar__menu-button-container">
          <button
            class="haeder-bar__menu-button custom-button"
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
                  'haeder-bar__menu-button__arrow--up': menuActiveFlag,
                  'haeder-bar__menu-button__arrow--down': !menuActiveFlag,
                }"
              />
            </p>
          </button> 
        </div>
        <div
          v-if="!isMob"
          :class="{
            'header-bar__anchor-pc': true,
            'header-bar__anchor--disabled': menuActiveFlag,          
          }"
        >
          <HeaderAnchor :theme="theme" />
        </div>
      </div>
      <div class="header-bar__nav__section">
        <HeaderShare :headerActiveFlag="activeFlag" :theme="theme" />
      </div>
    </nav>
    <nav
      v-if="isMob"
      :class="{
        'header-bar__anchor-mob': true,
        'header-bar__anchor--disabled': menuActiveFlag,      
      }"
    >
      <HeaderAnchor :theme="theme" />
    </nav>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import autoResize from '@/mixins/autoResize_2.js';
import sendGaMethods from "@/mixins/sendGaMethods.js";
import HeaderAnchor from '@/components/header/HeaderAnchor.vue';
import HeaderShare from '@/components/header/HeaderShare.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import UdnLogo from '@/components/ui/UdnLogo.vue';

export default {
  name: 'HeaderBar',
  mixins: [autoResize, sendGaMethods],
  components: {
    HeaderAnchor,
    HeaderShare,
    HeaderMenu,
    UdnLogo
  },
  props: {
    theme: {
      type: String,
      default: 'white'
    },
    pageTitle: {
      type: String,
    },
    useMenu: {
      type: Boolean,
      default: true
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
          // activeFlag
          if (this.lastPosition >= window.pageYOffset) this.activeFlag = true;
          else this.activeFlag = false;
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
    handleMenuButtonClick() {
      this.menuActiveFlag = !this.menuActiveFlag;
    }
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

  .header-bar__anchor-mob {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    padding: 0 20px 0 55px;
    transform: translateY(50px);
    transition: .333s ease-in-out;
  }
  .header-bar__anchor-pc {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 15px;
    transition: .333s ease-in-out;
  }
  .header-bar__anchor--disabled {
    opacity: 0;
    pointer-events: none;
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
    @include clean-tap;

    &:hover {
      transform: rotate(20deg);
    }
  }
  .haeder-bar__menu-button-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px 0 5px;

    .haeder-bar__menu-button {
      cursor: pointer;
      @include clean-tap;

      .haeder-bar__menu-button__arrow {
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        margin-left: 3px;
        transition: .333s ease-in-out;
        &.haeder-bar__menu-button__arrow--up {
          transform: translateY(1px) rotate(-135deg);
        }
        &.haeder-bar__menu-button__arrow--down {
          transform: translateY(-2px) rotate(45deg);
        }
      }
    }

  }
}
</style>