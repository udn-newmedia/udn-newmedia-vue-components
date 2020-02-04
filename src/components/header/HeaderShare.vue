<template>
  <div class="header-share">
    <div
      :class="{
        'header-share__container': true,
        'header-share__container--active': toggleFlag && headerActiveFlag !== false,
      }"
    >
      <div class="header-share__share-icon share-button custom-button" 
        @click="toggle()"
      >
        S
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
  </div>
</template>

<script>
import sendGaMethods from "@/mixins/sendGaMethods.js";
import ShareFb from '@/components/ui/ShareFb.vue';
import ShareLine from '@/components/ui/ShareLine.vue';
import ShareTwitter from '@/components/ui/ShareTwitter.vue';

export default {
  name: 'HeaderShare',
  mixins: [sendGaMethods],
  components: {
    ShareFb,
    ShareLine,
    ShareTwitter,
  },
  props: {
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
  width: 100%;
  min-width: 125px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .header-share__container {
    overflow: hidden;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    border-radius: 17.5px;
    transition: .333s ease-in-out;
    background-color: #fff;

    &.header-share__container--active {
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

    &:first-child {
      margin-left: 0;
      border: none;
    }
  }
}
</style>