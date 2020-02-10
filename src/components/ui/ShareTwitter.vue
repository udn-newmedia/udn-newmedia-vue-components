<template>
  <div class="share-twitter share-button">
    <a
      :href="shareUrl"
      target="_blank"
      rel="noopener"
      @click.prevent="sendGA(formatGA('ShareTwitter'))"
    >
      <button class="custom-button">
        <i
          :class="{
            'icon-twitter-brands': true,
            'icon-theme-light': theme === 'light',
            'icon-theme-dark': theme === 'dark',
          }"
        />
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
    theme: {
      type: String,
      default: 'light'
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
.share-twitter {
  i {
    font-size: 22px;
  }
}
</style>