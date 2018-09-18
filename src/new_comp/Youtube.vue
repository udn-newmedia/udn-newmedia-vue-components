<template>
  <div class="embed-responsive embed-responsive-16by9 youtubeIframe">
    <iframe class="embed-responsive-item" :src="setProps('src') + '?playsinline=1&rel=0&controls=' + controlsValue + '&showinfo=' + showinfoValue + '&autoplay=' + autoPlayValue + '&mute=' + mutedValue" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
import setProps from '../mixin/setProps.js'
export default {
  name: 'Youtube',
  mixins: [setProps],
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
    showinfoValue () {
      if (this.setProps('showinfo') === 'yes') {
        return 1
      } else {
        return 0
      }
    },
    controlsValue () {
      if (this.setProps('controls') === 'yes') {
        return 1
      }  else {
        return 0
      }
    },
    autoPlayValue () {
      if (this.setProps('autoplay') === 'yes') {
        return 1
      } else {
        return 0
      }
    },
    mutedValue () {
      if (this.setProps('muted') === 'yes') {
        return 1
      } else {
        return 0
      }      
    }
  },
  created () {
    if (this.$props.src === undefined && this.$props.jsonProps === null) {
      console.error('請輸入 src ex: <Youtube src="{URL}"></Youtube>')
    }
  }
}
</script>

<style lang="scss" scoped>
.youtubeIframe{
  position: relative;
  z-index: 50;
  width: 100%;
}
</style>
