<template>
  <div class="column-one">
    <div class="image-contain">
      <img :src="srcRWD(setProps('src'), setProps('srcWeb'))" :alt="setProps('alt')">
      <div class="fb-share">
        <i class="fab fa-facebook fb-icon" ref="btn"></i>
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
      alt: {
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
    },
    mounted() {
      this.$refs.btn.addEventListener('click', () => {
        FB.ui({
          method: 'share',
          href: this.$props.href,
        }, function (response) {});
      })
    }
  }
</script>
<style lang="scss" scoped>
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

  .image-contain {
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
    .description {
      font-size: 15px;
    }
  }
</style>