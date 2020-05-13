<template>
  <div class="article-youtube">
    <iframe
      class="article-youtube__responsive-item"
      :src="youtubeSrc"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      name="youtube-video"
      title="youtube-video"
    />
  </div>
</template>

<script>
export default {
  name: 'ArticleYoutube',
  props: {
    src: {
      type: String
    },
    showinfo: {
      type: String,
      default: 'no'
    },
    controls: {
      type: String,
      default: 'yes'
    },
    autoplay: {
      type: String,
      default: 'no'
    },
    muted: {
      type: String,
      default: 'no'
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  computed: {
    youtubeSrc() {
      return this.src + 
      '?playsinline=1&rel=0&controls=' +
      (this.controlsValue === 'yes' ? 1 : 0) +
      '&showinfo=' +
      (this.showinfoValue === 'yes' ? 1 : 0) +
      '&autoplay=' +
      (this.autoPlayValue === 'yes' ? 1 : 0) +
      '&mute=' +
      (this.mutedValue === 'yes' ? 1 : 0);
    }
  },
}
</script>

<style lang="scss" scoped>
.article-youtube {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  @include layout-margin;
}
.article-youtube__responsive-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>