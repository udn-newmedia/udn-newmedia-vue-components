<template>
  <div class="quote-contain container" :style="{ 'border-top-color': setProps('borderColor'), 'border-bottom-color': setProps('borderColor')}">
    <div class="col-sm-3" v-if="setProps('img')">
      <div class="quote-img">
        <img :src="setProps('img')">
      </div>
    </div>
    <div :class="dynamicClass">
      <div class="quote-text" v-html="setProps('text')" :style="{color: setProps('color')}"></div>
      <div class="quote-ref" v-if="setProps('refer')">{{setProps('refer')}}</div>
    </div>
  </div>
</template>

<script>
import setProps from '../mixin/setProps.js'
export default {
  name: 'Quote',
  mixins: [setProps],
  props: {
    borderColor: {
      type: String
    },
    img: {
      type: String
    },
    jsonProps: {
      type: Object,
      default: null
    },
    refer: {
      type: String
    },
    text: {
      type: String
    },
    color: {
      type: String
    }
  },
  computed: {
    dynamicClass () {
      if (this.setProps('img') !== undefined) {
        return 'col-sm-9'
      } else {
        return 'col-sm-12'
      }
    }
  },
  created () {
    if (this.$props.jsonProps === null) {
      if (this.$props.text === undefined) {
        console.error('請輸入 text ex: <Quote text="{文字}"></Quote>')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .quote-contain {
    width: 100%;
    font-weight: 500;
    font-size: 32px;
    padding: 35px 0;
    color: #888888;
    border-top: dotted 1px #DCDDDD;
    border-bottom: dotted 1px #DCDDDD;
    position: relative;
    letter-spacing: -1px;
    &::after{
      content: '';
      clear: both;
    }
  }
  .quote-ref{
    float: right;
    font-size: 16px;
    margin-top: 30px;
  }
  .quote-img {
    margin-bottom: 19px;
  }
  @media screen and (max-width: 767px) {
    .quote-contain{
      font-size: 26px;
    }
    .quote-img {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (min-width: 1024px){
    .quote-contain {
      padding: 50px 50px 50px 0;
    }
    .quote-ref{
      font-size: 17px;
    }
    .quote-img {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
