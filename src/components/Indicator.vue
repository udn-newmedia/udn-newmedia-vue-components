<template>
  <div class="indicator" :style="{opacity: opacity}">
    <div class="indicator-bar" :style="{width: progress + '%', backgroundColor: setProps('color')}"></div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import setProps from '../mixin/setProps.js'
export default {
  name: 'Indicator',
  mixins: [setProps],
  props: {
    color: {
      type: String,
      default: '#bf2923'
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      progress: 0,
      opacity: 0,
      readProgress: 0
    }
  },
  methods: {
    handelScroll () {
      let currentH = window.pageYOffset
      let totalH = document.body.scrollHeight - window.innerHeight
      this.progress = ((currentH / totalH) * 100).toFixed(2)
      if (Math.floor(this.progress / 10) > this.readProgress) {
        this.readProgress = Math.floor(this.progress / 10)

        window.ga("newmedia.send", {
            "hitType": "event",
            "eventCategory": "read",
            "eventAction": "scroll",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [page read " + (this.readProgress * 10) + "%]"
          })

      }
      currentH < 2 ? this.opacity = 0 : this.opacity = 1
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handelScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handelScroll)
  }
}
</script>

<style lang="scss" scoped>
  .indicator{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 2px;
    z-index: 9999;
    opacity: 0;
    transition: opacity 222ms ease;
    background-color: #fff;
  }
  /* Default Bar Color */
  .indicator-bar{
    width: 0;
    height: 2px;
    background-color: #bf2923;
  }
</style>
