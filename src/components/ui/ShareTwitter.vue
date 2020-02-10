<template>
  <div class="share-fb share-button">
    <a
      :href="shareUrl"
      target="_blank"
      rel="noopener"
      @click.prevent="sendGA(formatGA('ShareTwitter'))"
    >
      <button class="custom-button">
        <i class="icon-twitter-brands" />
      </button>
    </a>
  </div>
</template>

<script>
import { sendGaMethods } from '@/mixins/masterBuilder.js';

export default {
  name: 'ShareTwitter',
  mixins: [sendGaMethods],
  props: {
    href: {
      type: String,
      default: window.location.href,
    },
  },
  computed: {
    shareUrl() {
      return this.href;
    },
  },
};
</script>

<style lang="scss" scoped>
.share-twitter {}
</style>