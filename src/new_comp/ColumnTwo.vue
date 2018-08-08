<template>
  <div class="contain">
    <div class="image-contain">
      <div class="left">
        <img :src="srcRWD(setProps('src_1'), setProps('srcWeb_1'))" :alt="setProps('description')">
      </div>
      <div class="right">
        <img :src="srcRWD(setProps('src_2'), setProps('srcWeb_2'))" :alt="setProps('description')">
      </div>
    </div>
    <div class="description">{{setProps('description')}}</div>
  </div>
</template>
<script>
import srcRWD from "../mixin/srcRWD.js"
import setProps from "../mixin/setProps.js"
import _debounce from "lodash.debounce"

export default {
  name: "ColumnTwo",
  mixins: [srcRWD, setProps],
  props: {
    src_1: {
      type: String
    },
    src_2: {
      type: String
    },
    srcWeb_1: {
      type: String
    },
    srcWeb_2: {
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
      if (this.srcWeb_1 === undefined) {
        console.error(
          this.errorMessage
        )
      }
    } else {
      if (this.$props.jsonProps.srcWeb_1 === undefined) {
        console.error(
          this.errorMessage
        )
      }
    }
    if (this.$props.jsonProps === null) {
      if (this.srcWeb_2 === undefined) {
        console.error(
          this.errorMessage
        )
      }
    } else {
      if (this.$props.jsonProps.srcWeb_2 === undefined) {
        console.error(
          this.errorMessage
        )
      }
    }
    if (this.$props.jsonProps === null) {
      if (this.src_1 === undefined) {
        console.error(
          this.errorMessage_mob
        )
      }
    } else {
      if (this.$props.jsonProps.src_1 === undefined) {
        console.error(
          this.errorMessage_mob
        )
      }
    }
    if (this.$props.jsonProps === null) {
      if (this.src_2 === undefined) {
        console.error(
          this.errorMessage_mob
        )
      }
    } else {
      if (this.$props.jsonProps.src_2 === undefined) {
        console.error(
          this.errorMessage_mob
        )
      }
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
.description {
  margin-top: 5px;
  font-size: 17px;
  color: gray;
  width: 100%;
}

@media screen and (max-width: 767px) {
  .image-contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .description {
    font-size: 15px;
  }
  .left {
    padding-bottom: 15px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .image-contain {
    display: flex;
    justify-content: center;
  }
  .left {
    padding-left: 0;
    padding-right: 15px;
  }
  .right {
    padding-left: 15px;
    padding-right: 0;
  }
}
@media screen and (min-width: 1024px) {
  .image-contain {
    display: flex;
    justify-content: center;
  }
  .left {
    padding-left: 0;
    padding-right: 15px;
  }
  .right {
    padding-left: 15px;
    padding-right: 0;
  }
}
</style>