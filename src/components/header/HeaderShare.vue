<template>
  <div class="header-share">
    <!-- mob -->
    <div
      v-if="isMob"
      :class="{
        'header-share__container': true,
        'header-share__container--active': toggleFlag && headerActiveFlag,
      }"
    >
      <div class="header-share__share-icon custom-button header-share__share-text">分享</div>
      <div class="header-share__share-icon custom-button">
        <ShareFb />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareLine />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareTwitter />
      </div>
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
      <div class="header-share__share-icon custom-button">
        <ShareFb :theme="theme" />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareLine :theme="theme" />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareTwitter :theme="theme" />
      </div>
    </div>
  </div>
</template>

<script>
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';
import ShareFb from '@/components/pinhead/ShareFb.vue';
import ShareLine from '@/components/pinhead/ShareLine.vue';
import ShareTwitter from '@/components/pinhead/ShareTwitter.vue';

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
@import '~/style/_mixins.scss';
.header-share {
  position: relative;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 12px;
  @include pc {
    width: auto;
  }
  .header-share__container {
    pointer-events: none;
    overflow: hidden;
    box-sizing: content-box;
    display: none;

    position: relative;
    width: 0;
    height: 35px;
    padding: 0 37px 0 8px;
    border-radius: 17.5px;
    opacity: 0;
    transform: translateX(100%);
    transition: .333s ease-in-out;
    @include pc {
      pointer-events: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: flex-end;
      padding-right: 0;
      background-color: initial;
      border-radius: initial;
      opacity: 1;
      transform: translateX(0);
    }


    &.header-share__container--active {
      pointer-events: auto;      
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f6f6f6;
      transform: translateX(0);
      animation: slide-out .333s ease-in-out forwards;
      @keyframes slide-out {
        30% {
          opacity: 0;
        }
        100% {
          opacity: 1;
          width: 100%;
        }
      }
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
    
    &.header-share__share-icon__toggle {
      position: absolute;
      z-index: 5;
      top: 50%;
      right: 0;
      color: #aaaaaa;
      line-height: 0.5;
      transform: translateY(-52%);
      transition: .333s ease-in-out;

      &.header-share__share-icon__toggle--active {
        color: #000000;
      }
      i {
        font-size: 22px; 
      }
    }
    &.header-share__share-text {
      width: 30px;
      line-height: 1;
      font-size: 10px;
      cursor: initial;
    }
  }
}
</style>