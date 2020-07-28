<template>
  <section class="header-share">
    <!-- mob -->
    <div
      v-if="isMob"
      :class="{
        'header-share__container': true,
        'header-share__container--active': toggleFlag && headerActiveFlag,
      }"
    >
      <div class="header-share__share-icon"><ShareFb /></div>
      <div class="header-share__share-icon"><ShareLine /></div>
      <div class="header-share__share-icon"><ShareTwitter /></div>
    </div>
    <div
      v-if="isMob"
      :class="{
        'header-share__share-icon': true,
        'header-share__share-icon__toggle': true,
        'header-share__share-icon__toggle--active': toggleFlag && headerActiveFlag,
        'custom-button': true,
      }" 
      @click="toggle()"
    >
      <i class="icon-share-alt-solid" />
    </div>

    <!-- pc -->
    <div v-if="!isMob" class="header-share__container">
      <div class="header-share__share-icon">
        <ShareFb :theme="theme" />
      </div>
      <div class="header-share__share-icon">
        <ShareLine :theme="theme" />
      </div>
      <div class="header-share__share-icon">
        <ShareTwitter :theme="theme" />
      </div>
    </div>
  </section>
</template>

<script>
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';
import ShareFb from '@/components/common/accessories/ShareFb.vue';
import ShareLine from '@/components/common/accessories/ShareLine.vue';
import ShareTwitter from '@/components/common/accessories/ShareTwitter.vue';

export default {
  name: 'HeaderShare',
  mixins: [autoResize_2, sendGaMethods],
  components: {
    ShareFb,
    ShareLine,
    ShareTwitter,
  },
  props: {
    theme: {
      type: String,
    },
    headerActiveFlag: {
      type: Boolean,
    },
  },
  data() {
    return {
      toggleFlag: false,
    }
  },
  watch: {
    headerActiveFlag: function(value) {
      if (!value) this.toggleFlag = false;
    }
  },
  methods: {
    toggle() {
      this.toggleFlag = !this.toggleFlag;
    },
  },
}
</script>

<style lang="scss" scoped>
.header-share {
  position: relative;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @include pc {
    margin-right: 12px;
    width: auto;
  }
  .header-share__container {
    pointer-events: none;
    box-sizing: content-box;
    position: absolute;
    top: 50%;
    right: 0;
    height: 35px;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 80px;
    opacity: 0;
    transform-origin: 100% 0;
    transform: translate(100%, -50%) scale(0);
    transition: .333s ease-in-out;
    @include pc {
      position: relative;
      top: auto;
      right: auto;
      pointer-events: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: flex-end;
      padding: 0 0 0 8px;
      background-color: initial;
      border-radius: initial;
      opacity: 1;
      transform: translateX(0);
    }

    &.header-share__container--active {
      pointer-events: auto;
      padding: 0 56px 0 8px;
      opacity: 1;
      background-color: #f6f6f6;
      transform: translate(0%, -50%) scale(1.35);
    }
  }
  .header-share__share-icon {
    flex-shrink: 0;
    position: relative;
    width: 35px;
    height: 35px;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @include clean-btn;
    &.header-share__share-icon__toggle {
      position: absolute;
      z-index: 5;
      top: 50%;
      right: 0;
      color: #aaaaaa;
      line-height: 0.5;
      transform: translateY(-52%);
      transform-origin: 100% 0;
      transition: .333s ease-in-out;
      &.header-share__share-icon__toggle--active {
        right: 28%;
        transform: translateY(-52%) scale(1.35);
        color: #000000;
      }
      i {
        font-size: 19px;
        @include pad {
          font-size: 22px;
        }
        @include pc {
          font-size: 22px;
        }
      }
    }
  }
}
</style>