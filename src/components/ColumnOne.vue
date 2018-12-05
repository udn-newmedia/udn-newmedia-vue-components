<template>
  <div class="image-contain">
    <img :src="srcRWD(setProps('src'), setProps('srcWeb'))" :alt="setProps('description')">
    <div class="description">{{setProps('description')}}</div>
  </div>
</template>
<script>
import srcRWD from "../mixin/srcRWD.js"
import setProps from "../mixin/setProps.js"
import _debounce from "lodash.debounce"

export default {
  name: "ColumnOne",
  mixins: [srcRWD, setProps],
  props: {
    src: {
      type: String
    },
    srcWeb: {
      type: String
    },
    description: {
      type: String
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      windowWidth: global.innerWidth,
      errorMessage: "請輸入 " + "srcWeb=" + '"' + "路徑" + '"' + "，例如： ../static/SectionBg/SectionBg_pc.jpg",
      errorMessage_mob: "請輸入 " + "src=" + '"' + "路徑" + '"' + "，例如： ../static/SectionBg/SectionBg_mob.jpg"
    }
  },
  created () {
    $(window).on(
      "resize",
      _debounce(() => {
        if (this.windowWidth !== global.innerWidth) {
          this.windowWidth = global.innerWidth
          this.$forceUpdate()
        }
      }, 200)
    )

    if (this.$props.jsonProps === null) {
      if (this.srcWeb === undefined) {
        console.error(
          this.errorMessage
        )
      }
    } else {
      if (this.$props.jsonProps.srcWeb === undefined) {
        console.error(
          this.errorMessage
        )
      }
    }

    if (this.$props.jsonProps === null) {
      if (this.src === undefined) {
        console.error(
          this.errorMessage_mob
        )
      }
    } else {
      if (this.$props.jsonProps.src === undefined) {
        console.error(
          this.errorMessage_mob
        )
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.image-contain {
  img {
    width: 100%;
  }
}
.description {
  margin-top: 5px;
  font-size: 17px;
  color: gray;
  width: 100%;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
}
</style>
