<template>
  <div class="header-share">
    <!-- mob -->
    <div
      v-if="isMob"
      :class="{
        'header-share__container': true,
        'header-share__container--theme-dark': theme === 'dark',
        'header-share__container--theme-light': theme === 'light',
        'header-share__container--active': toggleFlag && headerActiveFlag,
      }"
    >
      <div
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
      <div class="header-share__share-icon custom-button">
        <ShareTwitter />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareFb />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareLine />
      </div>
    </div>
    
    <!-- pc -->
    <div v-else class="header-share__container">
      <div class="header-share__share-icon custom-button">
        <ShareTwitter :theme="theme" />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareFb :theme="theme" />
      </div>
      <div class="header-share__share-icon custom-button">
        <ShareLine :theme="theme" />
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
    position: relative;
    overflow: hidden;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 42px;
    border-radius: 17.5px;
    transition: .333s ease-in-out;
    @include pc {
      width: auto;
      justify-content: flex-end;
      padding-right: 0;
      background-color: initial;
      border-radius: initial;
    }


    &.header-share__container--active {
      &.header-share__container--theme-dark {
        background-color: #ffffff;
      }
      &.header-share__container--theme-light {
        background-color: #434343;
      }
      width: 100%;
    }
  }
  .header-share__share-icon {
    flex-shrink: 0;
    position: relative;
    width: 35px;
    height: 35px;
    margin: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &.header-share__share-icon__toggle {
      position: absolute;
      z-index: 5;
      top: 0;
      right: 0;
      color: #ffffff;
      font-family: Arial, 微軟正黑體, sans-serif;
      transition: .333s ease-in-out;
      &.header-share__share-icon__toggle--active {
        color: #000000;
      }
      i {
        font-size: 25px; 
      }
    }
  }
}
</style>