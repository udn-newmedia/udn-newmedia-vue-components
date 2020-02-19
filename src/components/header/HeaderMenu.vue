<template>
  <div
    v-if="!simplified"
    :class="{
      'header-menu': true,
      'header-menu--theme-dark': theme === 'dark',
      'header-menu--theme-light': theme === 'light',
      'header-menu--active': menuActiveFlag,
    }"
  >
    <slot />
  </div>
  <div
    v-else
    :class="{
      'header-manu-simplified': true,
      'header-menu-simplified--theme-dark': theme === 'dark',
      'header-menu-simplified--theme-light': theme === 'light',
      'header-manu-simplified--active': menuActiveFlag,
    }"
  >
    <slot />
  </div>
</template>

<script>
import { autoResize_3, sendGaMethods } from '@/mixins/masterBuilder.js';

export default {
  name: 'HeaderMenu',
  mixins: [autoResize_3, sendGaMethods],
  props: {
    menuActiveFlag: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
    },
    simplified: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    menuActiveFlag: function(value) {
      if (this.deviceType === 'mob') {
        if (value) document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        else document.getElementsByTagName('body')[0].style.overflow = 'auto';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.header-menu {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 120px 56px;
  transform: translateY(-100vh);
  transition: .666s ease-in-out;

  @include pad {
    height: 40%;
    min-height: 375px;
    padding: 150px 56px;
  }
  @include pc {
    width: 475px;
    padding: 176px 56px;
  }

  &.header-menu--active {
    z-index: 1;
    transform: translateY(0);
    @include pc {
      transform: translateY(0);
    }
  }
  &.header-menu--theme-dark {
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: blur(23px);
      background-color: rgba(#000000, 0.6);
    }
    a {
      color: #f6f6f6;
      opacity: 0.7;
      &.active {
        color: #ffffff;
        opacity: 1;
        border-bottom: solid 1px #e9e9e9;
      }
    }
  }
  &.header-menu--theme-light {
    background-color: #ffffff;
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: blur(8px);
      box-shadow: 0 0 10px 0 rgba(165, 165, 165, 0.23);
      background-color: rgba(#ffffff, 0.8);
    }
    a {
      color: #000000;
      &.active {
        color: #787878;
        border-bottom: solid 1px #000000;
      }
    }
  }

  a {
    display: block;
    width: 100%;
    padding: 8px 0;
    margin-bottom: 8px 0;
    outline: none;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    @include clean-tap;

    @include pad {
      width: 35%;
    }
    @include pc {
    width: 75%;
  }
  }
}
.header-manu-simplified {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 85px;
  background-color: #f6f6f6;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    backdrop-filter: blur(8px);
    box-shadow: 0 0 10px 0 rgba(165, 165, 165, 0.23);
    background-color: rgba(#f6f6f6, 0.8);
  }
  opacity: 0;
  transition: .333s ease-out;
  pointer-events: none;
  @include pad {
    width: 60%;
    min-width: 450px;
    padding: 0 45px;
    transform: translateX(100%);
    transition: .666s ease-out;
  }
  @include pc {
    width: 35%;
    min-width: 450px;
    padding: 0 100px;
    transform: translateX(100%);
    transition: .666s ease-out;
  }
  a {
    display: block;
    margin: 12px 0;
    outline: none;
    text-decoration: none;
    line-height: 1;
    font-size: 18px;
    opacity: 0.7;
    color: #333333;
    cursor: pointer;
    @include clean-tap;

    @include pad {
      font-size: 24px;
      margin: 8px 0;
    }
    @include pc {
      font-size: 24px;
      margin: 8px 0;
    }

    &.active {
      color: #333333;
      opacity: 1;
      border-bottom: solid 1px #000000;
    }
  }
}
.header-manu-simplified--active {
  opacity: 1;
  pointer-events: auto;
  @include pad {
    opacity: 1;
    transform: translateX(0);
  }
  @include pc {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>