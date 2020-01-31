<template>
  <div class="header-hamburger" @click="handleClick()">
    <span
      :class="{
        'header-hamburger__line': true,
        'header-hamburger__line--white': theme === 'dark',
        'header-hamburger__line-1': true,
        'header-hamburger__line-1--active': activeFlag,
      }"
    />
    <span
      :class="{
        'header-hamburger__line': true,
        'header-hamburger__line--white': theme === 'dark',
        'header-hamburger__line-2': true,
        'header-hamburger__line-2--active': activeFlag,
      }"
    />
    <span
      :class="{
        'header-hamburger__line': true,
        'header-hamburger__line--white': theme === 'dark',
        'header-hamburger__line-3': true,
        'header-hamburger__line-3--active': activeFlag,
      }"
    />
  </div>
</template>

<script>
import sendGaMethods from "@/mixins/sendGaMethods.js";

export default {
  name: 'HeaderHamburger',
  mixins: [sendGaMethods],
  props: {
    theme: {
      type: String,
    },
  },
  data() {
    return {
      activeFlag: false,  
    }
  },
  methods: {
    handleClick() {
      this.activeFlag = !this.activeFlag;
      this.sendGA(this.formatGA('HeaderHamburger'));
    },
  },
};
</script>

<style lang="scss" scoped>
.header-hamburger {
  position: relative;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 17px 14px;
  cursor: pointer;

  .header-hamburger__line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #121212;
    transition: .333s ease-in-out;
    &.header-hamburger__line--white {
      background-color: #ffffff;
    }
  }

  .header-hamburger__line-1 {
    transform-origin: 5% 70%;
    &.header-hamburger__line-1--active {
      transform: rotate(45deg);
    }
  }

  .header-hamburger__line-2 {
    width: 65%;
    &.header-hamburger__line-2--active {
      opacity: 0;
    }
  }

  .header-hamburger__line-3 {
    transform-origin: 5% 30%;
    &.header-hamburger__line-3--active {
      transform: rotate(-45deg);
    }
  }
}
</style>