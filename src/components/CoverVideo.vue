<template>
  <div class="coverVideo">
    <div class="preCoverVideo" v-if="!isShow" key="preCoverVideo">
      <video :src="srcRWD(setProps('preSrc'), setProps('preSrcWeb'))" :poster="srcRWD(setProps('poster'), setProps('posterWeb'))"
        autoplay muted loop style="width:100%;height:100%;" playsinline webkit-playsinline>
      </video>

      <div class="preVideoDivUsePlayButtonStyle" v-if="yesToBoolean(setProps('usePlayButtonStyle'))" key="usePlayButtonStyle"
        @click="playVideo()">
        <div class="playButton">
          <i class="fas fa-play-circle"></i>
        </div>
        <div class="VideoTitle" :style="{color: setProps('VideoTitleColor'),'font-size':srcRWD(fontSize,fontSizeWeb)}">
          <slot></slot>
        </div>
      </div>

      <div class="preVideoDivNoUsePlayButtonStyle" :class="setProps('position')" v-if="!yesToBoolean(setProps('usePlayButtonStyle'))"
        key="noUsePlayButtonStyle">
        <div class="VideoTitle" :style="{color: setProps('VideoTitleColor'),'font-size':srcRWD(fontSize,fontSizeWeb)}"
          style="position:absolute;">
          <slot></slot>
        </div>
        <div v-if="yesToBoolean(setProps('useArrow'))" id="arrow" class="arrow" @click='nextPage' :style="{ color: setProps('arrowColor') }">
          <span class="arrowHint" v-if="yesToBoolean(setProps('useHint'))" :style="{color: setProps('hintColor')}">往下滑動</span>
          <i class="fa fa-angle-down fa-2x" :class="{ arrowAnimate: yesToBoolean(setProps('useAnimate')) }" aria-hidden="true"></i>
        </div>
      </div>

    </div>

    <div class="onCoverVideo" v-if="isShow" key="onCoverVideo">
      <video :src="srcRWD(setProps('src'), setProps('srcWeb'))" :poster="srcRWD(setProps('poster'), setProps('posterWeb'))"
        :controls="yesToBoolean(setProps('useControls'))" autoplay muted style="width:100%;height:100%;" playsinline
        webkit-playsinline>
      </video>
    </div>
  </div>
</template>

<script>
  import _throttle from 'lodash.throttle'
  import _debounce from 'lodash.debounce'
  import srcRWD from '../mixin/srcRWD.js'
  import setProps from '../mixin/setProps.js'
  import yesToBoolean from '../mixin/yesToBoolean.js'
  export default {
    name: 'CoverVideo',
    mixins: [srcRWD, setProps, yesToBoolean],
    props: {
      position: {
        type: String,
        default: 'leftBottom'
      },
      arrowColor: {
        type: String,
        default: '#ffffff'
      },
      hintColor: {
        type: String,
        default: '#ffffff'
      },
      VideoTitleColor: {
        type: String,
        default: '#ffffff'
      },
      jsonProps: {
        type: Object,
        default: null
      },
      preSrc: {
        type: String
      },
      preSrcWeb: {
        type: String
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
      },
      poster: {
        type: String
      },
      posterWeb: {
        type: String
      },
      useControls: {
        type: String,
        default: "yes"
      },
      usePlayButtonStyle: {
        type: String,
        default: "no"
      },
      fontSize: {
        type: String
      },
      fontSizeWeb: {
        type: String
      }
    },
    data() {
      return {
        viewWidth: window.innerWidth,
        isShow: false,
        currentH: 0,
      }
    },
    methods: {
      nextPage: _throttle(function () {
        $('html, body').animate({
          scrollTop: $(this.$el).offset().top + window.innerHeight * 0.95
        }, 1000)
      }, 1000),
      handle_resize: _debounce(function (e) {
        if (this.viewWidth !== window.innerWidth) {
          this.viewWidth = window.innerWidth
          this.$forceUpdate()
        }
      }, 133),
      playVideo: function () {
        this.isShow = !this.isShow;
      },
      handle_scroll() {
        if (window.innerWidth <= 768) {
          this.currentH = window.pageYOffset;
          let headZindex = document.querySelector('.header');
          let coverVideo = document.querySelector('.coverVideo');
          console.log($(coverVideo).offset().top + $(coverVideo).outerHeight(true));
          if (this.currentH > $(coverVideo).offset().top + $(coverVideo).outerHeight(true)) {
            $(headZindex).css({
              'z-index': '9999',
              'opacity': '1',
              'transition': 'all 222ms ease'
            });
          } else {
            $(headZindex).css({
              'z-index': '0',
              'opacity': '0',
              'transition': 'all 222ms ease'
            });
          }
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.handle_resize);
      window.addEventListener('scroll', this.handle_scroll);
      if (window.innerWidth <= 768) {
        $('.header').css('z-index', '0');
      }
    }
  }
</script>

<style lang='scss' scoped>
  .coverVideo {
    position: relative;
    z-index: 50;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-color: #fff;
    line-height: 0;
  }

  .preCoverVideo {
    width: 100%;
    height: 100%;
  }

  .onCoverVideo {
    width: 100%;
    height: 100%;
  }

  .preVideoDivUsePlayButtonStyle {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover .playButton {
      opacity: 0.9;
    }
  }


  .preVideoDivNoUsePlayButtonStyle {
    width: 100%;
    height: 100vh;
    position: absolute;
    padding: 28.8888% 7.7777%;
    left: 0;
    top: 0;
    display: flex;

    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 16.66666% 9.88888%;
    }

    @media screen and (min-width: 1024px) {
      padding: 8.8888% 13.3333%;
    }
  }

  .VideoTitle {
    font-size: 55px;
    line-height: 1.5;
    text-align: center;
  }

  .playButton {
    position: relative;
    margin: 0 auto;
    margin-top: -7.3%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    font-size: 160px;
    color: white;
    opacity: 0.6;
  }

  // Props Position Class
  .leftTop {
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
  .arrow {
    position: absolute;
    z-index: 999;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-wrap: none;
    cursor: pointer;
  }

  .arrowHint {
    text-align: center;
    font-size: 16px;
    letter-spacing: normal;
    line-height: 1.88;
    color: inherit;
  }

  .arrowAnimate {
    animation: arrow 555ms infinite ease-out;
  }

  @keyframes arrow {
    from {
      transform: translate(0, 0);
    }

    to {
      transform: translate(0, 5px)
    }
  }
</style>