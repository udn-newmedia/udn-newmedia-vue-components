<template>
  <div class="share-fb">
    <a
      :href="shareUrl"
      target="_blank"
      @click.prevent="sendGA(formatGA('ShareFb'))"
    >
      <button>Facebook</button>
    </a>
  </div>
</template>

<script>
import sendGaMethods from "@/mixins/sendGaMethods.js";

export default {
  name: 'ShareFb',
  mixins: [sendGaMethods],
  props: {
    href: {
      type: String,
      default: window.location.href,
    },
  },
  computed: {
    shareUrl() {
      const url = encodeURIComponent(this.href);
      return
      'https://www.facebook.com/dialog/share?app_id=1010324812347164&display=popup&href='
      + url
      + '&redirect_uri='
      + url;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>