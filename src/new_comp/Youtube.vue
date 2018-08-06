<template>
  <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="setProps('src') + '?playsinline=1&rel=0&controls=' + setProps('controls') + '&showinfo=' + setProps('showinfo')" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
      default: '0',
      validator: function (value) {
        if (value === 'yes') {
          return '1'
        } else {
          return '0'
        }
      }
    },
    controls: {
      type: String,
      default: '1',
      validator: function (value) {
        if (value === 'no') {
          return '0'
        } else {
          return '1'
        }
      }
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  created () {
    if (this.$props.src === undefined && this.$props.jsonProps === null) {
      console.error('請輸入 src ex: <Youtube src="{URL}"></Youtube>')
    }
  }
}
</script>

<style>

</style>
