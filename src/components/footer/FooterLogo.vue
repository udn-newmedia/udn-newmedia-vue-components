<template>
  <div class="footer-logo">
    <img :src="img.dotCom" alt="聯合新聞網">
    <img :src="img.nmd" alt="聯合報新媒體中心">
    <img :src="img.vision" alt="聯合報系願景工程">
  </div>
</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";

import dotCom from '~/img/logo/dot_com.jpg';
import nmd from '~/img/logo/nmd.jpg';
import vision from '~/img/logo/vision.jpg';
export default {
  name: 'FooterLogo',
  mixins: [sendGaMethods],
  data() {
    return {
      img: {
        dotCom: dotCom,
        nmd: nmd,
        vision: vision
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.footer-logo {
  position: relative;
  width: 250px;
  margin: 0 auto;
  text-align: center;
  @include pad {
    width: 420px;
  }
  @include pc {
    width: 420px;
  }
  img {
    width: 100px;
    margin: 0 8px;
  }
}
</style>