<template>
  <div class="nmd-button"
    :class="{
      'nmd-button--outlined': theme === 'outlined',
      'nmd-button--contained': theme === 'contained',
      'nmd-button--border-s': border === 's',
      'nmd-button--border-m': border === 'm',
      'nmd-button--border-l': border === 'l',
      'nmd-button--size-xs': size === 'xs',
      'nmd-button--size-s': size === 's',
      'nmd-button--size-m': size === 'm',
      'nmd-button--size-l': size === 'l',
      'nmd-button--size-xl': size === 'xl',
    }"
    :style="{
      'border-color': theme === 'contained' ?  'transparent' : bgColor,
      'background-color': theme === 'contained' ? bgColor : 'transparent',
    }"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div
      :class="{
        'nmd-button__ripple': true,
        'nmd-button__ripple--hover': hoverFlag
      }"
    />
    <div class="nmd-button__text">
      <p class="small"
        :style="{
          'color': textColor,
        }"
      >
        <slot />
      </p>
    </div>
  </div>
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
      default: 'm' /* xs, x, m, l, xl */
    },
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
@import '~/style/_mixins.scss';
.nmd-button {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  background-color: #ffffff;
  cursor: pointer;
  @include clean-tap;

  // &.nmd-button--outlined {}
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

  &.nmd-button--size-xs {
    height: 25px;
    p {
      font-size: 10px;
    }
  }
  &.nmd-button--size-s {
    height: 40px;    
    p {
      font-size: 10px;
    }
  }
  &.nmd-button--size-m {
    height: 56px;
    p {
      font-size: 15px;
    }
  }
  &.nmd-button--size-l {
    height: 64px;
    p {
      font-size: 20px;
    }
  }
  &.nmd-button--size-xl {
    height: 72px;
    p {
      font-size: 20px;
    }
  }

  .nmd-button__text {
    position: relative;
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
      transform: translate(-50%, -50%) scale(5);
    }
  }
}
</style>