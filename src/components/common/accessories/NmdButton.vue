<template>
  <button
    :class="buttonClassAttr"
    :style="{
      'border-color': theme === 'contained' ?  'transparent' : bgColor,
      'background-color': theme === 'contained' ? bgColor : 'transparent',
    }"
    :ariaLabel="ariaLabel"
    :name="name"
    @click="clickEvent"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div :class="rippleClassAttr"></div>
    <div class="nmd-button__text">
      <p class="small" :style="{ 'color': textColor }" >
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
      default: 'm' /* xs, s, m, l, xl */
    },
    extendWidth: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: 'btn'
    },
    name: {
      type: String,
      default: 'btn'
    },
    clickEvent: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      hoverFlag: false,
    };
  },
  computed: {
    buttonClassAttr() {
      return {
        'nmd-button': true,
        'nmd-button--outlined': this.theme === 'outlined',
        'nmd-button--contained': this.theme === 'contained',
        'nmd-button--border-s': this.border === 's',
        'nmd-button--border-m': this.border === 'm',
        'nmd-button--border-l': this.border === 'l',
        'nmd-button--size-xs': this.size === 'xs',
        'nmd-button--size-s': this.size === 's',
        'nmd-button--size-m': this.size === 'm',
        'nmd-button--size-l': this.size === 'l',
        'nmd-button--size-xl': this.size === 'xl',
        'nmd-button--extend-width': this.extendWidth === true
      }
    },
    rippleClassAttr() {
      return {
        'nmd-button__ripple': true,
        'nmd-button__ripple--light': this.theme === 'contained',
        'nmd-button__ripple--dark': this.theme === 'outlined',
        'nmd-button__ripple--hover': this.hoverFlag,
      }
    }
  },
  methods: {
    handleHover(flag) {
      this.hoverFlag = flag;
    }
  }
}
</script>

<style lang="scss" scoped>
.nmd-button {
  overflow: hidden;
  position: relative;
  height: 35px;
  padding: 0 64px;
  @include clean-btn;
  border-style: solid;
  border-width: 1px;
  background-color: #ffffff;
  white-space: nowrap;

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

  &.nmd-button--extend-width {
    width: 100%;
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
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    transition: .5s ease-in-out;
    &.nmd-button__ripple--light {
      background-color: #434343;
    }
    &.nmd-button__ripple--dark {
      background-color: #ababab;
    }
    &.nmd-button__ripple--hover {
      opacity: 0.2;
      transform: translate(-50%, -50%) scale(1.25);
    }
  }
}
</style>