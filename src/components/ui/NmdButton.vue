<template>
  <button class="nmd-button custom-button"
    :class="{
      'nmd-button--outlined': theme === 'outlined',
      'nmd-button--contained': theme === 'contained',
      'nmd-button--border-s': border === 's',
      'nmd-button--border-m': border === 'm',
      'nmd-button--border-l': border === 'l',
      'nmd-button--size-s': size === 's',
      'nmd-button--size-m': size === 'm',
      'nmd-button--size-l': size === 'l',
    }"
    :style="{
      'border-color': theme === 'contained' ?  'transparent' : bgColor,
      'background-color': theme === 'contained' ? bgColor : 'transparent',
    }"
    :alt="altText"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div :class="{'nmd-button__ripple': true, 'nmd-button__ripple--hover': hoverFlag}" />
    <div class="nmd-button__text">
      <p class="small"
        :style="{
          'color': textColor,
        }"
      >
        <slot />
      </p>
    </div>
  </button>
</template>

<script>
export default {
  name: 'NmdButton',
  props: {
    textColor: {
      type: String,
      default: '#000000'
    },
    bgColor: {
      type: String,
      default: '#ededed'
    },
    theme: {
      type: String,
      default: 'contained' /* contained, outlined */
    },
    border: {
      type: String,
      default: 'm' /* s, m, l */
    },
    size: {
      type: String,
      default: 'm' /* s, m, l */
    },
    altText: {
      type: String,
      default: 'button'
    }
  },
  data() {
    return {
      hoverFlag: false,
    };
  },
  methods: {
    handleHover(flag) {
      this.hoverFlag = flag;
    }
  },
}
</script>

<style lang="scss" scoped>
.nmd-button {
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 35px;
  border-style: solid;
  border-width: 1px;
  background-color: #ffffff;
  cursor: pointer;

  &.nmd-button--outlined {

  }
  &.nmd-button--contained {
    border: none;
  }
  &.nmd-button--border-s {
    border-radius: 0;
  }
  &.nmd-button--border-m {
    border-radius: 8px;
  }
  &.nmd-button--border-l {
    border-radius: 100px;
  }
  &.nmd-button--size-s {
    width: 50px;
  }
  &.nmd-button--size-m {
    width: 75px;
  }
  &.nmd-button--size-l {
    width: 100px;
  }

  .nmd-button__text {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: transparent;
    p {
      margin: 0;
      padding: 0;
    }
  }
  .nmd-button__ripple {
    will-change: transform, opacity;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ababab;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    transition: .333s ease-in-out;
    &.nmd-button__ripple--hover {
      opacity: 0.7;
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>