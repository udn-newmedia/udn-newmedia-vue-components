<template>
  <footer class="page-footer">
    <slot />
    <div class="page-bottom">
      <div>
        <div class="page-bottom-share">
          <!-- <ShareLine theme="dark" />
          <ShareLine theme="dark" />
          <ShareLine theme="dark" />
          <ShareLine theme="dark" />-->
          <ShareImg theme="dark" :img="imgs[0]" url="https://bit.ly/317wi2M" />
          <ShareImg theme="dark" :img="imgs[1]" url="https://bit.ly/2Q6gas5" />
          <ShareImg theme="dark" :img="imgs[2]" url="https://bit.ly/3hchIwv" />
          <ShareImg theme="dark" :img="imgs[3]" url="https://bit.ly/2XP6XZq" />
        </div>
        <div class="page-bottom-links">
          <a href="https://udn.com/page/topic/495">關於我們</a> ︱
          <a href="http://www.udngroup.com/members/udn_privacy">隱私政策</a> ︱
          <a href=" http://www.udngroup.com/members/service">服務協議</a>
        </div>
        <p class="page-bottom-copyright">© 2020 United Daily News All rights reserved.</p>
      </div>
      <button
        type="button"
        id="footer-go-top"
        @click="goTop"
        @mouseenter="isHovered=true"
        @mouseleave="isHovered=false"
        class="page-bottom-go-top jump"
        :class="{accelerate:isHovered}"
      >
        <img :src="goTopImg" alt />
      </button>
    </div>
  </footer>
</template>

<script>
import { autoResize_3 } from '@/mixins/masterBuilder.js'
// import ShareLine from '@/components/common/accessories/ShareLine.vue'
import ShareImg from '@/components/common/accessories/ShareImg.vue'
import imgFb from '@/assets/img/logo/footer_f_logo_30.svg'
import imgIns from '@/assets/img/logo/footer_glyph-logo_May2016.svg'
import imgLine from '@/assets/img/logo/footer_line.svg'
import imgYT from '@/assets/img/logo/footer_youtube-方.svg'
import goTopImg from '@/assets/img/logo/footer_arrow.svg'

export default {
  name: 'PageFooterV1',
  mixins: [autoResize_3],
  components: { ShareImg },
  data() {
    return { isHovered: false, imgs: [imgFb, imgIns, imgYT, imgLine], goTopImg }
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0)
      this.isHovered = false
    },
  },
}
</script>

<style lang="scss" scoped>
.page-footer {
  position: relative;
  width: 100%;
  // padding-bottom: 50px;
  background: #ffffff;
  // create
  .page-bottom {
    position: relative;
    height: 365px;
    background-color: #000;
    color: #9a9a9a;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and(max-width: 374.98px) {
      height: 240px;
    }
  }
  .page-bottom-share {
    display: flex;
    justify-content: center;
  }
  .page-bottom-links {
    display: flex;
    justify-content: center;
    font-family: 'Microsoft JhengHei', Roboto, sans-serif;
    font-size: 10px;
    line-height: 2.3;
    letter-spacing: 1px;
    text-align: center;
    color: #e4e4e4;
    margin-top: 25px;
    @include pad {
      font-size: 15px;
      letter-spacing: 1.5px;
      margin-top: 33px;
    }
    @include pc {
      font-size: 15px;
      letter-spacing: 1.5px;
      margin-top: 33px;
    }
    & > a {
      text-decoration: none;
      color: #e4e4e4;
    }
  }
  .page-bottom-copyright {
    font-family: 'Microsoft JhengHei', Roboto, sans-serif;
    font-size: 8px;
    line-height: 3;
    letter-spacing: 0.8px;
    text-align: center;
    color: #e4e4e4;
    @media screen and (max-width: 374.98px) {
      margin-top: 28px;
    }
    @include pad {
      font-size: 12px;
    }
    @include pc {
      font-size: 12px;
    }
    @media screen and(max-width: 374.98px) {
      font-size: 8px;
    }
  }
  .page-bottom-go-top {
    @include clean-btn;
    position: absolute;
    background-color: #ffffff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.9;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    top: -20px;
    right: 62px;
    @include pad {
      right: 97px;
    }
    @include pc {
      right: 280px;
    }
    color: red;
    font-size: 30px;
  }
}
@keyframes jump {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
}
.jump {
  animation: jump 1s linear alternate infinite;
}
.accelerate {
  animation: jump 0.2s linear alternate infinite;
}
</style>