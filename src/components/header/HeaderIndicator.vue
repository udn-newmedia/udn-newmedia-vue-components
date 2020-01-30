<template>
  <div class="header-indicator">
    <div
      class="header-indicator__progress"
      :style="{
        backgroundColor: color
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderIndicator',
  props: {
    color: {
      type: String,
      default: '#bf2923'
    },
  },
  mounted() {
    // console.log(sm)
    // const controller = new sm.Controller();
    // new sm.Scene({
    //   duration: 100,
    //   offset: 50
    // })
    // .setPin('#my-sticky-element')
    // .addTo(controller);
  },
}
</script>

<style lang="scss" scoped>
.header-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 5000;

  .header-indicator__progress {
    position: relative;
    width: 50%;
    height: 100%;
  }
}
</style>