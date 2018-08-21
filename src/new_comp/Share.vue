<template>
  <div class="share-block">
    <div class="fb-like-block">
      <div class="fb-like" :data-href="setProps('href')" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
    </div>
    <div class="line-block" @click="lineShare">
      <img class="line-share" src="//media.line.me/img/button/zh-hant/84x20.png" width="84" height="20" alt="LINE分享給朋友">
    </div>
  </div>
</template>

<script>

import Utils from 'udn-newmedia-utils'
import setProps from '../mixin/setProps.js'
export default {
  name: 'Share',
  mixins: [setProps],
  props: {
    href: {
      type: String
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  methods: {
    lineShare: function () {
      ga("send", {
        "hitType": "event",
        "eventCategory": "Line Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [line share]"
      })
      if (Utils.detectMob()) {
        // 手機
        window.open("//line.me/R/msg/text/?" + document.querySelector('title').innerHTML + "%0D%0A%0D%0A" + document.querySelector('meta[property="og:description"]').content + "%0D%0A%0D%0A" + this.setProps('href'))
      } else {
        window.open("https://lineit.line.me/share/ui?url=" + this.setProps('href'))
      }
    }
  },
  created () {
    if (this.$props.href === undefined && this.$props.jsonProps === null) {
      console.error('請輸入 href ex: <share href="{Url}"></share>')
    }
  }
}
</script>

<style scoped>
  .share-block{
      height: 28px;
  }
  .fb-send-block{
      float: left;
      cursor: pointer;
      margin-left: 5px;
      margin-top: 2px;
  }
  .fb-like-block{
      float: left;
  }
  .line-block{
      float: left;
      cursor: pointer;
      margin-left: 5px;
      margin-top: 2px;
  }
</style>
