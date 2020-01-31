<template>
  <div class="share-fb">
    <a
      :href="shareUrl"
      target="_blank"
      @click.prevent="sendGA(formatGA('ShareTwitter'))"
    >
      <button>Twitter</button>
    </a>
  </div>
</template>

<script>
import sendGaMethods from "@/mixins/sendGaMethods.js";

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
      return
    },
  },
};
</script>

<style lang="scss" scoped>
.share-fb {
  position: relative;
}
</style>