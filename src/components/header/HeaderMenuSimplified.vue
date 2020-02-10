<template>
  <div
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
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';

export default {  
  name: 'HeaderMenuSimplified',
  mixins: [autoResize_2, sendGaMethods],
  props: {
    menuActiveFlag: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'dark'
    }
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
.header-manu-simplified {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  opacity: 0;
  transition: .333s ease-out;
  pointer-events: none;
  @include pc {
    transform: translateX(100%);
    transition: .666s ease-out;
  }
}
.header-manu-simplified--active {
  opacity: 1;
  pointer-events: auto;
  @include pc {
    opacity: 1;
    transform: translateX(0);
  }
}
.header-menu-simplified--theme-dark {
  // background-color: #000000;
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: blur(23px);
      background-color: rgba(#000000, 0.6);
    }
  a {
    color: #ffffff;
    &.active {
      color: rgb(31, 31, 58);
      border-bottom: solid 1px #000000;
    }
  }
}
.header-menu-simplified--theme-light {
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
</style>