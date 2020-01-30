<template>
  <div class="udn-logo">
    <i
      class="udn-icon udn-icon-logo"
      :style="{
        color: color
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'UdnLogo',
  props: {
    color: {
      type: String,
      default: '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "https://s.udn.com.tw/static/font-icons/css/fontello.css";
@import "https://udn.com/upf/newmedia/css/udn-font.css";
.udn-logo {
  position: relative;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
}
</style>