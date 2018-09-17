<template>
  <div :id="setId" class="Anchor">
    <slot></slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import setProps from '../mixin/setProps.js'
export default {
  name: 'Anchor',
  mixins: [setProps],
  props: {
    title: {
      type: String,
      default: ''
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      viewWidth: window.innerWidth
    }
  },
  computed: {
    setId () {
      let hasUnicoded = this.toUnicode(this.setProps('title'))
      if (hasUnicoded) {
        return hasUnicoded
      } else {
        console.error('請加入 Title ex: <anchor title="{標題}"></anchor>')
      }
    }
  },
  methods: {
    ...mapActions([
      'addAnchor'
      // 'updateAnchor'
    ]),
    toUnicode (theString) {
      let unicodeString = ''
      for (let i = 0; i < theString.length; i++) {
        let theUnicode = theString.charCodeAt(i).toString(16).toUpperCase()
        while (theUnicode.length < 4) {
          theUnicode = '0' + theUnicode
        }
        theUnicode = '_u' + theUnicode
        unicodeString += theUnicode
      }
      return unicodeString
    }
    // handle_resize: function () {
    //   if (window.innerWidth !== this.viewWidth) {
    //     this.viewWidth = window.innerWidth
    //     this.updateAnchor({
    //       "id": this.setId,
    //       "title": this.setProps('title'),
    //       "isActive": false
    //     })
    //   }
    // }
  },
  created () {
    if (this.$props.title.length > 10) {
      console.error(this.$props.title + '  Tip: title請不要下超過10個字')
    }
  },
  mounted () {
    this.addAnchor({
      "id": this.setId,
      "title": this.setProps('title'),
      "isActive": false
    })
    window.addEventListener('resize', this.handle_resize)
  }
}
</script>

<style lang="scss" scoped>
.Anchor{
  position: relative;
  z-index: auto;
  background-color: #fff;
  h1, h2, h3{
    padding-top: 12px !important;
  }
}
</style>
