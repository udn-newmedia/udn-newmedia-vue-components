<template>
  <div class="share-line">
    <a
      :href="shareUrl"
      target="_blank"
      @click.prevent="sendGA(formatGA('ShareLine'))"
    >
      <button>Line</button>
    </a>
  </div>
</template>

<script>
import sendGaMethods from "@/mixins/sendGaMethods.js";

export default {
  name: 'ShareLine',
  mixins: [sendGaMethods],
  props: {
    href: {
      type: String,
      default: window.location.href,
    },
  },
  computed: {
    shareUrl() {
      const sharedText = document.querySelector('title').innerHTML
      const shareContent = document.querySelector('meta[property="og:description"]').content

      // desktop
      if (!this.isMobile) {
        return `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(sharedText)}%0D%0A%0D%0A${encodeURIComponent(shareContent)}&url=${encodeURIComponent(this.href)}`
      }
      // mobile
      if (!this.isInApp) {
        return `https://line.naver.jp/R/msg/text/?${encodeURIComponent(sharedText)}%0D%0A%0D%0A${encodeURIComponent(shareContent)}%0D%0A%0D%0A${encodeURIComponent(this.href)}`
      }
      // mobile in-app webview
      return `https://line.naver.jp/R/msg/text/?${encodeURIComponent(sharedText)}%0D%0A%0D%0A${encodeURIComponent(shareContent)}%0D%0A%0D%0A${encodeURIComponent(this.href)}`
    },
  },
}
</script>

<style lang="scss" scoped>

</style>