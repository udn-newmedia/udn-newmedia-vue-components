<template>
	<div class="section">
		<div class="videocontainer">
		    <div class="video-contain" :style="{backgroundColor: backgroundColor, backgroundImage: 'url('+ srcRWD(poster, posterWeb) +')'}">
		        <video preload="metadata" playsinline='true' webkit-playsinline="true"
		               :poster="srcRWD(poster, posterWeb)" ref='video' :src="srcRWD(src,srcWeb)">  	
		        </video>		    	
			    <canvas class='videoCanvas' ref='videoCanvas' @click='handle_clickVideo'></canvas>
		        <div class='controls'>
		        	<canvas class="progressCircle" ref='controlCanvas'></canvas>
		        	<i v-if='isRepeat' class="fa fa-repeat repeat" aria-hidden="true" @click='replay'></i>
		        	<i v-if='isPause' class="fa fa-play videoBtn" aria-hidden="true" @click='handle_clickVideo'></i>
		        	<i v-if='isPlay' class="fa fa-pause videoBtn" aria-hidden="true" @click='handle_clickVideo'></i>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import srcRWD from '../mixin/srcRWD.js'
var isMob = Utils.detectMob(10)
var platform = (isMob === true) ? 'Mob' : 'PC'

export default {

  name: 'PageFullvideo',
  props: ['src', 'srcWeb', 'poster', 'posterWeb', 'BgColor'],
  mixins: [srcRWD],
	data: function () {
		return {
		  progress: 0,
		  progressWidth: 0,
		  getProgressTimer: null,
		  isOpacity: 0,
		  isMute: null,
		  isRepeat: false,
		  isPause: true,
		  isPlay: false,
		}
	},
	computed: {
	
	},
	methods: {
		drawCircleBox: function() {
		 	const canvas = this.$refs.controlCanvas
		 	const ctx = canvas.getContext('2d')
		 	canvas.width = 50
		 	canvas.height = 50
		 	const posX = canvas.width / 2,
		 		 		posY = canvas.height / 2
		 	ctx.clearRect( 0, 0, canvas.width, canvas.height );
			const self = this
		 	ctx.lineCap = 'round'
			ctx.beginPath();
			ctx.arc( posX, posY, 20, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
			ctx.strokeStyle = '#8e8e8e';
			ctx.lineWidth = '2';
			ctx.stroke();
		},
		drawCircular: function(pW) {
		 	const canvas = this.$refs.controlCanvas
		 	const ctx = canvas.getContext('2d')
		 	canvas.width = 50
		 	canvas.height = 50
		 	const posX = canvas.width / 2,
		 		  	posY = canvas.height / 2
		 	ctx.clearRect( 0, 0, canvas.width, canvas.height );
			const self = this
		 	ctx.lineCap = 'round'
			ctx.beginPath();
			ctx.arc( posX, posY, 20, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
			ctx.strokeStyle = '#8e8e8e';
			ctx.lineWidth = '2';
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle = '#fff';
			ctx.lineWidth = '2';
			ctx.arc( posX, posY, 20, (Math.PI/180) * 270, (Math.PI/180) * (270 + pW) );
			ctx.stroke();
		},
		drawVideo: function() {
		 	const canvas = this.$refs.videoCanvas
		 	const ctx = canvas.getContext('2d')
			const video = this.$refs.video
			if(window.innerWidth < 1024) {
				canvas.width = 768
				canvas.height = 1024
			} else {
				canvas.width = 1440
				canvas.height = 810
			}
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
		},
		getPlayingProgress: function () {
		  const thisvideo = this.$refs.video
		  const progressbar = this.$refs.progressbar
		  const self = this
		  if (this.getProgressTimer == null) {
		    this.getProgressTimer = setInterval(function () {
		      let curTime = thisvideo.currentTime
		      let picent = curTime / thisvideo.duration * 360
		      if (picent !== 360) {
		        self.progressWidth = picent
		        self.drawCircular(picent)
		        self.drawVideo()
		      } else {
		        self.progressWidth = 0
		        self.drawCircular(0)
		      }
		      // Send GA every 5 seconds
		      if (Math.floor(curTime / 5) > self.progress) {
		        self.progress = Math.floor(curTime / 5)
		        ga("send", {
		            "hitType": "event",
		            "eventCategory": "video",
		            "eventAction": "play",
		            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + thisvideo.currentSrc + "] [已觀看 " + Math.floor(curTime) + ' / ' + Math.floor(thisvideo.duration) + " 秒]"
		        });     
		      }
		    }, 41)
		  }
		},		
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
		replay: function () {
		  // let thisvideo = document.getElementById('introVideo')
		  const thisvideo = this.$refs.video
		  thisvideo.currentTime = 0
		  this.progressWidth = 0
		  thisvideo.play()
		  this.isRepeat = false
		},
		handle_clickVideo: function() {
		  // const thisvideo = document.getElementById('introVideo')
		  const thisvideo = this.$refs.video
		  this.isRepeat = false
		  if(thisvideo.paused){
		    thisvideo.play()
		  } else{
		    thisvideo.pause()
		  }
		}
	},  
	created(){
        window.addEventListener('resize', () => {
            this.$forceUpdate()
        })    
	},
	mounted() {
		platform === 'Mob' ? this.isMute = true : this.isMute = false
		const video = this.$refs.video
		const progressbar = this.$refs.progressbar
		const spinner = this.$refs.spinner
		const self = this
		if (video) {
		  video.onwaiting = function () {
		    self.isOpacity = 1
		  }
		  video.oncanplay = function () {
		    self.isOpacity = 0		  }
		  video.onplay = function() {
		  	self.getPlayingProgress()
		  	self.isPause = false
		  	self.isPlay = true
		  	self.isRepeat = false
		  }
		  video.onpause = function () {
		  	self.isPause = true
		  	self.isPlay = false
		  	self.isRepeat = false
		    if(self.getProgressTimer) {
					clearInterval(self.getProgressTimer)
					self.getProgressTimer = null
		    }
		  }
		  video.onended = function () {
		    self.progress = 0
		    self.isRepeat = true
		    self.isPause = false
		    self.isPlay = false
		  }
		}
		this.drawCircleBox()
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
}
</script>

<style lang='scss' scoped>
.controls{
	position: absolute;
	z-index: 9999;
	bottom: 25px;
	left: 50%;
	margin-left: -25px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0.77;
	canvas{
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 50px;
		height: 50px;
	}
}
.videocontainer {
    width: 100%;
    height: 100%;
    z-index: 1;
}
video::-webkit-media-controls-start-playback-button {
  display: none !important;
}
video::-webkit-media-controls-fullscreen-button {
    display: none;
}
.video-contain{
	height: 100%;
    background: rgb(236, 234, 234);
    position: relative;
    z-index: 0;
    background-position: center center;
    background-size: cover;
}
video{
	display: none;
  width: 100%;
  height: 100%;
  object-fit: fill;
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
.repeat{
		position: relative;
		z-index: 9999;
		color: #fff;
		font-size: 1.6em;
		cursor: pointer;
		animation-name: fadeIn;
		animation-duration: 777ms;
		animation-fill-mode: both;
		animation-timing-function: cubic-bezier(0.42, 0, 0, 1.7);
}
.videoBtn{
		position: relative;
		z-index: 9999;
		color: #fff;
		font-size: 1em;
		cursor: pointer;
}
.videoCanvas{
	position: absolute;
	z-index: auto;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	60%{
		transform: scale(1.1);
	}
	to{
		transform: scale(1.0);
		opacity: 1;
	}
}
@media screen and (min-width: 1024px){
    .videocontainer{
        width: 100%;
        height: 100vh;
    }
    .video-contain{
    	width: 100%;
    	height: 100%;
    }
}
</style>