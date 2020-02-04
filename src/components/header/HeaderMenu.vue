<template>
  <div
    :class="{
      'header-menu': true,
      'header-menu--active': menuActiveFlag,
    }"
  >
    <slot />
  </div>
</template>

<script>
import autoResize from '@/mixins/autoResize_2.js';
import sendGaMethods from "@/mixins/sendGaMethods.js";

export default {
  name: 'HeaderMenu',
  mixins: [autoResize, sendGaMethods],
  props: {
    menuActiveFlag: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    menuActiveFlag: function(value) {
      if (value) document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      else document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  },
}
</script>

<style lang="scss" scoped>
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
  background-color: #ffffff;
  transform: translateY(-100vh);
  transition: .666s ease-in-out;
  &.header-menu--active {
    transform: translateY(0);
  }
  a {
    display: block;
    outline: none;
    text-decoration: none;
    color: #000000;
    cursor: pointer;
    &.active {
      color: blue;
      border-bottom: solid 1px #000000;
    }
  }
}
</style>