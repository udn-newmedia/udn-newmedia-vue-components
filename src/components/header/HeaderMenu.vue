<template>
  <div
    :class="{
      'header-menu': true,
      'header-menu--theme-dark': theme === 'dark',
      'header-menu--theme-light': theme === 'light',
      'header-menu--active': menuActiveFlag,
    }"
  >
    <slot />
  </div>
</template>

<script>
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';

export default {
  name: 'HeaderMenu',
  mixins: [autoResize_2, sendGaMethods],
  props: {
    menuActiveFlag: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
    },
  },
  watch: {
    menuActiveFlag: function(value) {
      if (this.isMob) {
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
  justify-content: center;
  align-items: center;
  transform: translateY(-100vh);
  transition: .666s ease-in-out;
  &.header-menu--active {
    z-index: 1;
    transform: translateY(0);
    @include pc {
      transform: translateY(0);
    }
  }
  &.header-menu--theme-dark {
    background-color: #000000;
    a {
      color: #ffffff;
      &.active {
        color: rgb(31, 31, 58);
        border-bottom: solid 1px #000000;
      }
    }
  }
  &.header-menu--theme-light {
    background-color: #ffffff;
    a {
      color: #000000;
      &.active {
        color: #787878;
        border-bottom: solid 1px #000000;
      }
    }
  }

  @include pc {
    width: 475px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 150px 0 0 50px;
  }

  a {
    display: block;
    outline: none;
    text-decoration: none;
    color: inherit;
    margin-right: 25px;
    cursor: pointer;
    &.active {
      border-bottom: solid 1px #000000;
    }
  }
}
</style>