<template>
  <div class="share-fb share-button">
    <a
      :href="shareUrl"
      target="_blank"
      rel="noopener"
      @click.prevent="sendGA(formatGA('ShareFb'))"
    >
      <button class="custom-button">
        <i
          :class="{
            'icon-facebook-f-brands': true,
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
  name: 'ShareFb',
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
.share-fb {
  i {
    font-size: 25px;
  }
}
</style>