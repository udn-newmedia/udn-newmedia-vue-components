<template>
  <header
    :class="{
      'header-bar': true,
      'header-bar--hide': !activeFlag,
      'header-bar--theme-dark': theme === 'dark',
      'header-bar--theme-light': theme === 'light'
    }"
  >
    <HeaderMenu
      v-if="useMenu === 'true'"
      :menuActiveFlag="menuActiveFlag"
      :theme="theme"
    >
      <slot />
    </HeaderMenu>
    <nav
      :class="{
        'header-bar__nav': true,
        'header-bar__nav--theme-dark': theme === 'dark',
        'header-bar__nav--theme-light': theme === 'light'
      }"
    >
      <div class="header-bar__nav__section">
        <div class="header-bar__logo">
          <UdnLogo :theme="theme" />
        </div>
        <div class="haeder-bar__menu-button-container">
          <button
            :class="{
              'haeder-bar__menu-button': true,
              'haeder-bar__menu-button--disabled': useMenu === 'false',
              'custom-button': true,
            }"
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
                v-if="useMenu === 'true'"
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
      v-if="isMob"
      :class="{
        'header-bar__anchor-mob': true,
        'header-bar__anchor-mob--theme-dark': theme === 'dark',
        'header-bar__anchor-mob--theme-light': theme === 'light',
        'header-bar__anchor--disabled': menuActiveFlag,      
      }"
    >
      <HeaderAnchor :theme="theme" />
    </nav>
  </header>
</template>

<script>
import _debounce from 'lodash.debounce';
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';
import HeaderAnchor from '@/components/header/HeaderAnchor.vue';
import HeaderShare from '@/components/header/HeaderShare.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import UdnLogo from '@/components/ui/UdnLogo.vue';

export default {
  name: 'HeaderBar',
  mixins: [autoResize_2, sendGaMethods],
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
    useMenu: {
      type: String,
      default: 'true'
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
    transition: .333s .333s linear;
    transform: translateY(-100%);
  }
  &.header-bar--theme-dark {}
  &.header-bar--theme-light {
    background-color: #ffffff;
  }

  .header-bar__nav {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    &.header-bar__nav--theme-dark {
      background-color: #000000;
    } 
    &.header-bar__nav--theme-light {
      background-color: #ffffff;
    }
    .header-bar__nav__section {
      position: relative;
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
    transform: translateY(50px);
    transition: .333s ease-in-out;
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
    @include pc {
      margin: 0 30px 0 15px;
    }

    .haeder-bar__menu-button {
      cursor: pointer;
      @include clean-tap;

      &.haeder-bar__menu-button--disabled {
        pointer-events: none;
      }

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
      .haeder-bar__menu-button__split {
        margin-left: 15px;
      }
    }
  }
}
</style>