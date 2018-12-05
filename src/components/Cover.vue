<template>
  <div class="Cover" :class="setProps('position')"
       :style="{ backgroundImage: 'url('+ srcRWD(setProps('src'), setProps('srcWeb')) +')' }">
    <div class="title_box">
      <slot></slot>
    </div>
    <div v-if="yesToBoolean(setProps('useArrow'))" id="arrow" class="arrow" @click='nextPage' :style="{ color: setProps('arrowColor') }">
      <span class="arrowHint" v-if="yesToBoolean(setProps('useHint'))" :style="{color: setProps('hintColor')}">往下滑動</span>
      <i class="fa fa-angle-down fa-2x" :class="{ arrowAnimate: yesToBoolean(setProps('useAnimate')) }" aria-hidden="true"></i>
    </div>
    <slot name="DIY"></slot>
  </div>
</template>

<script>
import _throttle from 'lodash.throttle'
import _debounce from 'lodash.debounce'
import srcRWD from '../mixin/srcRWD.js'
import setProps from '../mixin/setProps.js'
import yesToBoolean from '../mixin/yesToBoolean.js'
export default {
  name: 'Cover',
  mixins: [srcRWD, setProps, yesToBoolean],
  props: {
    arrowColor: {
      type: String,
      default: '#333333'
    },
    hintColor: {
      type: String,
      default: '#333333'      
    },
    jsonProps: {
      type: Object,
      default: null
    },
    position: {
      type: String,
      default: 'leftBottom'
    },
    src: {
      type: String
    },
    srcWeb: {
      type: String
    },
    useAnimate: {
      type: String
    },
    useArrow: {
      type: String
    },
    useHint: {
      type: String
    }
  },
  data () {
    return {
      viewWidth: window.innerWidth
    }
  },
  methods: {
    nextPage: _throttle(function () {
      $('html, body').animate({scrollTop: $(this.$el).offset().top + window.innerHeight * 0.95}, 1000)
    }, 1000),
    handle_resize: _debounce(function (e) {
      if (this.viewWidth !== window.innerWidth) {
        this.viewWidth = window.innerWidth
        this.$forceUpdate()
      }
    }, 133)
  },
  created () {
    if ((this.$props.src === undefined || this.$props.srcWeb === undefined) && this.$props.jsonProps !== null) {
      console.error('請檢查 src / src-web 是否都有輸入 ex: <Cover src="{imgae src}" src-web="{image src-web}"></Cover>')
    }
  },
  mounted () {
    window.addEventListener('resize', this.handle_resize)
  }  
}
</script>

<style lang='scss' scoped>
.Cover{
  position: relative;
  z-index: 50;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 28.8888% 7.7777%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: #fff;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 16.66666% 9.88888%;
  }
  @media screen and (min-width: 1024px) {
    padding: 8.8888% 13.3333%;
  }
}
// Props Position Class
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
// Arrow CSS
.arrow{
  position: absolute;
  z-index: 999;
  left: 50%;
  bottom: 25px;
  width: 80px;
  margin-left: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-wrap: none;
  cursor: pointer;
}
.arrowHint{
  text-align: center;
  font-size: 16px;
  letter-spacing: normal;
  line-height: 1.88;
  color: inherit;
}
.arrowAnimate{
  animation: arrow 555ms infinite ease-out;
}
@keyframes arrow {
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(0, 5px)
  }
}
</style>
