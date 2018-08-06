<template>
  <div id="report" class="gray-back">
    <div>
      <h4>{{ setProps('title') }}</h4>
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <a :href="setProps('href1')" target="_blank" @click="relateClick(setProps('text1'))">
            <img :src="setProps('img1')" />
            <p>{{setProps('text1')}}</p>
          </a>
        </div>
        <div class="col-sm-6 col-md-3">
          <a :href="setProps('href2')" target="_blank" @click="relateClick(setProps('text2'))">
            <img :src="setProps('img2')" />
            <p>{{setProps('text2')}}</p>
          </a>
        </div>
        <div class="col-sm-6 col-md-3">
          <a :href="setProps('href3')" target="_blank" @click="relateClick(setProps('text3'))">
            <img :src="setProps('img3')" />
            <p>{{setProps('text3')}}</p>
          </a>
        </div>
        <div class="col-sm-6 col-md-3">
          <a :href="setProps('href4')" target="_blank" @click="relateClick(setProps('text4'))">
            <img :src="setProps('img4')" />
            <p>{{setProps('text4')}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Utils from 'udn-newmedia-utils'
import setProps from '../mixin/setProps.js'
export default {
  name: 'Relate',
  mixins: [setProps],
  props: {
    title: {
      type: String,
      default: '延伸閱讀'
    },
    href1: {
      type: String
    },
    img1: {
      type: String
    },
    text1: {
      type: String
    },
    href2: {
      type: String
    },
    img2: {
      type: String
    },
    text2: {
      type: String
    },
    href3: {
      type: String
    },
    img3: {
      type: String
    },
    text3: {
      type: String
    },
    href4: {
      type: String
    },
    img4: {
      type: String
    },
    text4: {
      type: String
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  methods: {
    relateClick (target) {
      ga("send", {
        "hitType": "event",
        "eventCategory": "relate",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [relate click]"
      })
    },
    isPropsEntered (target, name, type) {
      if (target === undefined) {
        console.error('請輸入 ' + name + ' ex: <Relate ' + name + '={' + type + '}' + '></Relate>')
      }
    }
  },
  created () {
    if (this.$props.jsonProps === null) {
      this.isPropsEntered(this.$props.href1, 'href1', 'Url')
      this.isPropsEntered(this.$props.href2, 'href2', 'Url')
      this.isPropsEntered(this.$props.href3, 'href3', 'Url')
      this.isPropsEntered(this.$props.href4, 'href4', 'Url')
      this.isPropsEntered(this.$props.img1, 'img1', '圖片來源')
      this.isPropsEntered(this.$props.img2, 'img2', '圖片來源')
      this.isPropsEntered(this.$props.img3, 'img3', '圖片來源')
      this.isPropsEntered(this.$props.img4, 'img4', '圖片來源')
      this.isPropsEntered(this.$props.text1, 'text1', '標題')
      this.isPropsEntered(this.$props.text2, 'text2', '標題')
      this.isPropsEntered(this.$props.text3, 'text3', '標題')
      this.isPropsEntered(this.$props.text4, 'text4', '標題')
    }
  }
}
</script>

<style scoped>
  h4 {
    font-size: 23px;
    font-weight: bold;
  }
  #report{
    padding: 50px 0;
    border-top: 1px solid #363434;
    border-bottom: 1px solid #363434;
    color: #363434;
  }
  #report p{
    font-size: 16px;
    font-weight: bold;
  }
  #report a {
    color: #363434;
    text-decoration: none;
  }
  #report a:hover{
    text-decoration: none;
  }
  #report img:hover{
    opacity: .5;
    transition: opacity .2s ease;
  }
  #report .col-sm-6 img{
    width: 100%;
  }
  @media screen and (max-width: 767px){
    #report{
      padding: 30px 0;
    }
    #report .col-sm-6{
      clear: both;
    }
    .people-contain img{
      width: 100%;
      height: auto;
    }
    #report p {
      font-size: 16px;
      float: left;
      width: 45%;
      margin-top: 10px;
    }
    #report .col-sm-6 img {
      width: auto;
      height: auto;
      float: right;
      width: 50%;
      padding-left: 10px;
      padding-bottom: 10px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    #report .col-sm-6 img{
      width: 100%;
      height: auto;
    }
    #report p{
      margin-top: 10px;
      margin-bottom: 32px;
      min-height: 72px;
    }
  }
  @media screen and (min-width: 1025px){
    .row{
      margin-left: -10px;
      margin-right: -10px;
    }
    #report .col-md-3{
      padding-left: 10px;
      padding-right: 10px;
    }
    #report p{
      margin-top: 10px;
    }
  }
</style>
