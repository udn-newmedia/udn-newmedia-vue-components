<template>
    <div class="videocontainer">
        <div class="video-contain" :style="{backgroundColor: backgroundColor}">
            <video preload="metadata" playsinline
                   :src="source" :poster="videoPoster" :controls="useControls" 
                   @click='handle_clickVideo' ref='video'></video>
            <div class="video-control">
              <div class="progress">
                <div class="progress-bar progress-bar-striped"
                     :style="{width: progressWidth + '%', backgroundColor: controlColor}" ref="progressbar"></div>
              </div>
              <!-- <i class="fa fa-play video-play hidden-md hidden-lg"></i> -->
              <div class="img-say-out volume-text hidden-lg" @click="volumeClick" v-if='customControl' :style="{color: controlColor}">點按開聲音</div>
              <i class="fa fa-spinner fa-pulse video-wait" :style="{opacity: isOpacity, color: controlColor}"></i>            
              <i class="fa volume hidden-lg" 
                 v-if='customControl' ref='volume' @click="volumeClick" :style="{color: controlColor}"
                 :class="{'fa-volume-up': !isMute, 'fa-volume-off': isMute}"></i>
              <i class="fa fa-repeat replay hidden-lg" v-if='customControl' @click="replay" :style="{color: controlColor}"></i>
            </div>
        </div>
    </div>
</template>

<script scoped>
import Utils from 'udn-newmedia-utils'
// let title = document.title
var isMob = Utils.detectMob(10)
var platform = (isMob === true) ? 'Mob' : 'PC'
const w = window.innerWidth
export default {
  name: 'embededvideo',
  props: ['src', 'srcWeb', 'poster', 'posterWeb', 'background-color', 'customControl', 'controlColor'],
  components: {
  },
  data: function () {
    return {
      progress: 0,
      progressWidth: 0,
      getProgressTimer: null,
      isOpacity: 0,
      isMute: null,
    }
  },
  computed: {
    source: function () {
      if(w < 1024){
        return this.src 
      } else {
        return this.srcWeb
      }
    },
    videoPoster: function () {
      if(w < 1024){
        return this.poster 
      } else {
        return this.posterWeb
      }
    },
    useControls: function() {
      if(platform === 'Mob'){
        return false
      } else {
        return true
      }
    }
  },
  beforeMount: function () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroyed: function () {
    clearInterval(this.getProgressTimer)
    window.removeEventListener('scroll', this.onScroll)
  },
  destroyed: function () {
    clearInterval(this.getProgressTimer)
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted: function () {
    platform === 'Mob' ? this.isMute = true : this.isMute = false
    const video = this.$refs.video
    const progressbar = this.$refs.progressbar
    const spinner = this.$refs.spinner
    const self = this
    if (video) {
      video.onwaiting = () => {
        this.isOpacity = 1
      }
      video.oncanplay = function () {
        self.isOpacity = 0
      }
      video.onplay = this.getPlayingProgress()
      video.onpause = function () {
        if (self.getProgressTimer) {
          clearInterval(self.getProgressTimer)
          self.getProgressTimer = null
        }
      }
      video.onended = function () {
        self.progress = 0
        self.progressWidth = 0
      }
    }
    if(w < 1024) {
      video.muted = true
    }
  },
  methods: {
    onScroll: function () {
      const thisvideo = this.$refs.video
      let thisvideoTop = thisvideo.getBoundingClientRect().top
      let thisvideoBottom = thisvideo.getBoundingClientRect().bottom
      if (thisvideoTop < 300 && thisvideoBottom > 300) {
        if (thisvideo.paused) {
          thisvideo.play()
        }
      } else {
        if (!thisvideo.paused) {
          thisvideo.pause()
        }
      }
    },
    getPlayingProgress: function () {
      // let thisvideo = document.getElementById('introVideo')
      const thisvideo = this.$refs.video
      const progressbar = this.$refs.progressbar
      const self = this
      if (this.getProgressTimer == null) {
        this.getProgressTimer = setInterval(function () {
          let curTime = thisvideo.currentTime
          let percent = curTime / thisvideo.duration * 100
          if (percent !== 100) {
            self.progressWidth = percent        
          } else {
            self.progressWidth = 0
          }
          // Send GA every 5 seconds
          if (Math.floor(curTime / 5) > self.progress) {
            self.progress = Math.floor(curTime / 5)
          }
        }, 600)
      }
    },
    volumeClick: function () {
      const video = this.$refs.video
      const volume = this.$refs.volume
      if (this.isMute === true) {
        video.muted = false
        this.isMute = false
      } else {
        video.muted = true
        this.isMute = true
      }
    },
    replay: function () {
      // let thisvideo = document.getElementById('introVideo')
      const thisvideo = this.$refs.video
      thisvideo.currentTime = 0
      this.progressWidth = 0
      thisvideo.play()
    },
    handle_clickVideo: function() {
      // const thisvideo = document.getElementById('introVideo')
      const thisvideo = this.$refs.video
      if(thisvideo.paused){
        thisvideo.play()
        this.getPlayingProgress()
      } else{
        thisvideo.pause()
      }
    }
  }
}
</script>

<style scoped>
.videocontainer {
    width: 100%;
    z-index: 1;
}
video::-webkit-media-controls-start-playback-button {
  display: none !important;
}
video::-webkit-media-controls-fullscreen-button {
    display: none;
}
.video-contain{
    background: rgb(236, 234, 234);
    position: relative;
    margin-bottom: 10px;
}
video{
    width: 100%;
    object-fit: cover;
    cursor: pointer;
}
.video-control{
    margin-top: -8px;
}
.video-wait {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 60px;
    color: #FFB93E;
    margin-left: -23.5px;
    margin-top: -30px;
    transition: opacity 0.2s ease;
    opacity: 1;
    pointer-events: none;
}
.video-play {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 60px;
    color: #FFB93E;
    margin-left: -12.5px;
    margin-top: -30px;
    transition: opacity 0.2s ease;
    pointer-events: none;
}
/* .volume {
    color: #9fa0a0;
    z-index: 999;
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 2rem;
} */
.volume{
    color: #FFB93E;
    z-index: 999;
    position: absolute;
    bottom: -24px;
    left: 28px;
}
.volume-text{
    position: absolute;
    left: 47px;
    bottom: -28px;
    color: #FFB93E;
}
.replay{
    color: #FFB93E;
    z-index: 999;
    position: absolute;
    bottom: -26px;
    right: 15px;
}
.progress{
    height: 4px;
    margin-bottom: 0;
}
.progress-bar{
    height: 4px;
    width: 0;
    background-color: #FFB93E;
    transition: width 0.6s linear;
}
@media screen and (min-width: 1024px){
    .video-contain{
      margin-bottom: 0px;
    }
}
</style>