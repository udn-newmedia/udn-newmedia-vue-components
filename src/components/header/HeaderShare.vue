<template>
  <div class="header-share">
    <div
      :class="{
        'header-share__container': true,
        'header-share__container--active': toggleFlag,
      }"
      @click="toggle()"
    >
      <ShareTwitter />
      <ShareFb />
      <ShareLine />
    </div>
  </div>
</template>

<script>
import ShareFb from '@/components/ui/ShareFb.vue';
import ShareLine from '@/components/ui/ShareLine.vue';
import ShareTwitter from '@/components/ui/ShareTwitter.vue';

export default {
  name: 'HeaderShare',
  components: {
    ShareFb,
    ShareLine,
    ShareTwitter,
  },
  data() {
    return {
      toggleFlag: false,
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
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header-share__container {
    overflow: hidden;
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    transition: .333s ease-in-out;
    background-color: #fff;
    &.header-share__container--active {
      width: 100px;
    }
  }
}
</style>