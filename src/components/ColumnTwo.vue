<template>
  <div class="contain">
    <div class="image-contain">
      <div class="left">
        <img :src="srcRWD(setProps('src_1'), setProps('srcWeb_1'))" :alt="setProps('alt_1')">
        <div class="fb-share">
          <i class="fab fa-facebook fb-icon" ref="btn1"></i>
        </div>
      </div>
      <div class="right">
        <img :src="srcRWD(setProps('src_2'), setProps('srcWeb_2'))" :alt="setProps('alt_2')">
        <div class="fb-share">
          <i class="fab fa-facebook fb-icon" ref="btn2"></i>
        </div>
      </div>
    </div>
    <div class="description" v-html="setProps('description')"></div>
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
      alt_1: {
        type: String
      },
      alt_2: {
        type: String
      },
      jsonProps: {
        type: Object,
        default: null
      },
      href: {
        type: String
      }
    },
    data() {
      return {
        windowWidth: global.innerWidth,
        errorMessage: "請輸入 " + "srcWeb=" + '"' + "路徑" + '"' + "，例如： ../static/SectionBg/SectionBg_pc.jpg",
        errorMessage_mob: "請輸入 " + "src=" + '"' + "路徑" + '"' + "，例如： ../static/SectionBg/SectionBg_mob.jpg"
      }
    },
    created() {
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
    },
    mounted() {
      this.$refs.btn1.addEventListener('click', () => {
        FB.ui({
          method: 'share',
          href: this.$props.href,
        }, function (response) {});
      })
      this.$refs.btn2.addEventListener('click', () => {
        FB.ui({
          method: 'share',
          href: this.$props.href,
        }, function (response) {});
      })
    }
  }
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
  }

  .description {
    margin-top: 5px;
    font-size: 17px;
    color: #808080;
    width: 100%;

    & /deep/ a {
      color: #808080;
      border-bottom: 1px solid #808080;
      text-decoration: none;

      &:hover {
        color: #000;
        border-bottom: none;
      }
    }
  }

  .left,
  .right {
    position: relative;
    overflow: hidden;

    &:hover .fb-share {
      background: rgba(0, 0, 0, 0.2);
      transform: translate(50px, 0);
      transition: all 0.8s ease;
      opacity: 1;
    }

    img {
      width: 100%;
    }
  }

  .fb-share {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    left: -50px;
    top: 0;
    width: 50px;
    height: 50px;
    transition: all 0.8s ease;
  }

  .fb-icon {
    cursor: pointer;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.4s ease;

    &:hover {
      transition: all 0.4s ease;
      transform: scale(1.5);
      color: rgba(255, 255, 255, 0.9);
    }
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
      padding-left: 0;
      padding-right: 15px;
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
      padding-left: 0;
      padding-right: 15px;
    }
  }
</style>