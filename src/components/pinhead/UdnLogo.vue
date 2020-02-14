<template>
  <div class="udn-logo">
    <i
      :class="{
        'icon-round_logo': true,
        'icon-theme-light': theme === 'light',
        'icon-theme-dark': theme === 'dark',
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'UdnLogo',
  props: {
    theme: {
      type: String,
      default: 'light'
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.udn-logo {
  position: relative;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  @include clean-tap;
  i {
    font-family: Arial, 微軟正黑體, sans-serif;
  }
}
</style>