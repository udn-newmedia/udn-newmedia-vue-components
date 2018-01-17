<template>
    <div class="videocontainer" id="thevideo">
        <div class="video-contain" :style="{backgroundColor: backgroundColor}">
            <video id="introVideo" preload="metadata" :src="source" :poster="videoPoster" :muted="isMuted" playsinline controls></video>
            <div class="video-control">
              <div class="progress">
                <div id="progress-bar" class="progress-bar progress-bar-striped" ref="progressbar"></div>
              </div>
              <!-- <i class="fa fa-play video-play hidden-md hidden-lg"></i> -->
              <div class="img-say-out volume-text hidden-lg" @click="volumeClick">點按開聲音</div>
              <i class="fa fa-spinner fa-pulse video-wait"></i>            
              <i class="fa fa-volume-off volume hidden-lg" @click="volumeClick"></i>
              <i class="fa fa-repeat replay hidden-lg" @click="replay"></i>
            </div>
        </div>
    </div>
</template>

<script scoped>
import Utils from 'udn-newmedia-utils'

// let title = document.title
if (process.browser) {
  var isMob = Utils.detectMob(10)
  var platform = (isMob === true) ? 'Mob' : 'PC'
}

export default {
  name: 'embededvideo',
  props: ['src', 'srcWeb', 'srcPad', 'poster', 'posterWeb', 'posterPad', 'dataTarget', 'background-color'],
  components: {
  },
  data: function () {
    return {
      progress: 0,
      getProgressTimer: null
    }
  },
  computed: {
    source: function () {
      return this.src
    },
    videoPoster: function () {
      return this.poster
    },
    isMuted: function () {
      if (platform === 'Mob') {
        return true
      } else {
        return false
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
    let video = document.getElementById('introVideo')
    let spinner = document.querySelector('.video-wait')
    let self = this
    if (video) {
      video.onwaiting = function () {
        spinner.style.opacity = '1'
      }
      video.oncanplay = function () {
        spinner.style.opacity = '0'
      }
      video.onplay = this.getPlayingProgress()
      video.onpause = function () {
        if (this.getProgressTimer) {
          clearInterval(this.getProgressTimer)
          this.getProgressTimer = null
        }
      }
      video.onended = function () {
        document.getElementById('progress-bar').style.width = 0
      }
    }
  },
  methods: {
    onScroll: function () {
      let thisvideo = document.getElementById('introVideo')
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
      let thisvideo = document.getElementById('introVideo')
      let self = this
      if (this.getProgressTimer == null) {
        this.getProgressTimer = setInterval(function () {
          let curTime = thisvideo.currentTime
          let percent = curTime / thisvideo.duration * 100
          if (percent === 100) {
            document.getElementById('progress-bar').style.width = 0
          } else {
            document.getElementById('progress-bar').style.width = percent + '%'
          }
          // Send GA every 5 seconds
          if (Math.floor(curTime / 5) > self.progress) {
            self.progress = Math.floor(curTime / 5)
          }
        }, 600)
      }
    },
    volumeClick: function () {
      var video = document.getElementById('introVideo')
      if (video.muted) {
        video.muted = false
        document.querySelector('.volume').classList.remove('fa-volume-off')
        document.querySelector('.volume').classList.add('fa-volume-up')
      } else {
        video.muted = true
        document.querySelector('.volume').classList.remove('fa-volume-up')
        document.querySelector('.volume').classList.add('fa-volume-off')
      }
    },
    replay: function () {
      let thisvideo = document.getElementById('introVideo')
      thisvideo.currentTime = 0
      document.getElementById('progress-bar').style.width = 0
      thisvideo.play()
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
}

video{
    width: 100%;
    object-fit: cover;
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
    .videocontainer{
        width: 955px;
    }
}
</style>
