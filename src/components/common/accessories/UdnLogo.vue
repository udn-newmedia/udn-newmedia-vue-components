<template>
  <div
    class="udn-logo"
    :class="{
        'light': theme === 'light',
        'dark': theme === 'dark',
      }"
  >
    <!-- <i
      :class="{
        'icon-round_logo': true,
        'icon-theme-light': theme === 'light',
        'icon-theme-dark': theme === 'dark',
      }"
    />-->
    <img
      :src="newUdnImg"
      :class="{
        'icon-theme-light': theme === 'light',
        'icon-theme-dark': theme === 'dark',
      }"
      alt
    />
  </div>
</template>

<script>
import newUdnImg from "@/assets/img/logo/logo_udngroup.svg";

export default {
  name: "UdnLogo",
  props: {
    theme: {
      type: String,
    },
  },
  data() {
    return { newUdnImg };
  },
};
</script>

<style lang="scss" scoped>
.udn-logo {
  position: relative;
  width: 81px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  &.dark {
    background-color: #000;
  }
  &.light {
    background-color: #ffffff;
  }
  & > img {
    &.icon-theme-light {
      color: #aaaaaa;
    }
    &.icon-theme-dark {
      color: #ffffff;
    }
  }
  // i {
  //   font-family: Arial, 微軟正黑體, sans-serif;
  //   color: #000000;
  //   &.icon-theme-light {
  //     color: #aaaaaa;
  //   }
  //   &.icon-theme-dark {
  //     color: #ffffff;
  //   }
  // }
}
</style>