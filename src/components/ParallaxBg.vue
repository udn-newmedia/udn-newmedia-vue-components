<template>
  <div class="fixed-background" :class="{ 'Raise_z-index': shouldRaise }">
    <div class="fixed-bg" :style="{opacity: opacity, backgroundImage: 'url(' + srcRWD(setProps('src'), setProps('srcWeb')) + ')'}"
         :class="setProps('position')">
      <div class="title_box">
        <slot></slot>
      </div>
    </div>
    <slot name="DIY"></slot>
  </div>
</template>

<script>
import srcRWD from '../mixin/srcRWD.js'
import setProps from '../mixin/setProps.js'
import _debounce from 'lodash.debounce'
export default {
  name: 'ParallaxBg',
  mixins: [srcRWD, setProps],
  props: {
    src: {
      type: String
    },
    srcWeb: {
      type: String
    },
    position: {
      type: String,
      default: 'centerCenter'
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      opacity: 1,
      shouldRaise: false,
      viewWidth: window.innerWidth
    }
  },
  created () {
    if ((this.$props.src === undefined || this.$props.srcWeb === undefined) && this.$props.jsonProps !== null) {
      console.error('請檢查 src / src-web 是否都有輸入 ex: <parallax-bg src="{imgae src}" src-web="{image src-web}"></parallax-bg>')
    }
  },
  methods: {
    handleScroll (e) {
      let currentH = window.pageYOffset
      if (currentH > ($(this.$el).offset().top - window.innerHeight) && currentH < ($(this.$el).offset().top + window.innerHeight)) {
        this.opacity = 1
        this.shouldRaise = true
      } else {
        this.opacity = 0
        this.shouldRaise = false
      }
    },
    handle_resize: _debounce(function (e) {
      if (this.viewWidth !== window.innerWidth) {
        this.viewWidth = window.innerWidth
        this.$forceUpdate()
      }
    }, 133)
  },
  mounted () {
    window.addEventListener('resize', this.handle_resize)
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('resize', this.handle_resize)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .fixed-background{
    height: 100vh;
    position: relative;
    z-index: auto;
  }
  /* Props Position Class */
  .leftTop{
    align-items: flex-start;
    justify-content: flex-start;
  }
  .leftCenter {
    align-items: center;
    justify-content: flex-start;
  }
  .leftBottom {
    align-items: flex-end;
    justify-content: flex-start;
  }
  .centerTop {
    align-items: flex-start;
    justify-content: center;
  }
  .centerCenter {
    align-items: center;
    justify-content: center;
  }
  .centerBottom {
    align-items: flex-end;
    justify-content: center;
  }
  .rightTop {
    align-items: flex-start;
    justify-content: flex-end;
  }
  .rightCenter {
    align-items: center;
    justify-content: flex-end;
  }
  .rightBottom {
    align-items: flex-end;
    justify-content: flex-end;
  }
  .fixed-bg{
    position: fixed;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    top: 0;
    left: 0;
    z-index: auto;
    transition: opacity 444ms ease-out;
    padding: 28.8888% 7.7777%;
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 16.66666% 9.88888%;
    }
    @media screen and (min-width: 1024px) {
      padding: 8.8888% 13.3333%;
    }
  }
  .Raise_z-index {
    z-index: 5;
  }
</style>
