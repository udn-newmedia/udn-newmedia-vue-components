<template>
  <div class="share-fb">
    <a
      :href="shareUrl"
      target="_blank"
      @click.prevent="sendGA()"
    >
      <button>Facebook</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ShareFB',
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
  methods: {
    sendGA() {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [headbar FB分享]"
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>