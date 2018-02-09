<template>
	<div class="pageHeader">
    <div id="icon">
        <a href="./index"><i class="udn-icon udn-icon-logo" :style="{color: color}"></i></a>
    </div>
    <div class='navWrapper' :style="{backgroundColor: bgColor}">
	    <div class="menuWrapper" :class="{menuOpen: isOpen}" :style="{height: menuHeight()}">
	    	<div class="scrollTo">
	    		<div class="scrollTo-Btn" :style="{color: mobColor}" v-for='title in getTitle' @click='handle_scrollTo(title.pageIndex)'>{{title.title}}</div>
	    	</div>
	    	<div class="linkOut" :style="{color: mobColor()}">
	    		<slot></slot>
	    	</div>
	    	<div class="logoBox hidden-lg hidden-md">
	    		<Logo/>
	    	</div>
	    </div>
	    <div class="commentWrapper" :class="{menuOpen: isCommentOpen}" :style="{height: windowHeight() + 'px'}">
	    	<div class='glass' :style='{opacity: glassOp}' @click='handle_glass'></div>
	    	<Comment class="comment" :href='href'></Comment>
	    </div>
	<!-- button -->
			<div class="btnBox">
				<div class="cbtn" v-if='youtube'>
					<a :href="youtubeLink" target='_blank'><i class="fa fa-youtube-play fa-2x" aria-hidden="true" :style='{color: color}'></i></a>
				</div>
				<div class="cbtn" @click='handle_comment'>
					<i class="fa fa-commenting-o fa-2x" aria-hidden="true" :style='{color: color}'></i>
				</div>
	      <div class='burger hidden-lg hidden-md' :class="{open: isOpen}" @click="handle_burger">
	      	<span :style='{backgroundColor: color}'></span>
	      	<span :style='{backgroundColor: color}'></span>
	      	<span :style='{backgroundColor: color}'></span>
	      	<span :style='{backgroundColor: color}'></span>
	      </div>						
			</div>    	
    </div>
	</div>
</template>

<script>
import Bus from '../eventBus.js'
import Comment from '../components/FbComment.vue'
import Logo from '../components/Logo.vue'
import Utils from 'udn-newmedia-utils'

export default {

  name: 'PageHeadBar',
  components: {
  	Comment,
  	Logo
  },
  props: ['href', 'color', 'youtube', 'youtubeLink', 'bgColor'],
  data () {
    return {
    	isOpen: false,
    	isCommentOpen: false,
    	getTitle: [],
    }
  },
  computed: {

  },
  methods: {
  	menuHeight: function() {
	  	if(window.innerWidth < 1024){
	  		return window.innerHeight + 'px';
	  	} else {
	  		return '100%'
	  	}
  	},
  	mobColor: function() {
  		if(window.innerWidth < 1024) {
  			return '#000'
  		} else {
  			return this.color
  		}
  	},  	
  	windowHeight: function() {
  		const h = window.innerHeight
  		return h
  	},  	
  	handle_burger: function() {
  		this.isOpen === true ? this.isOpen = false : this.isOpen = true
  		this.isCommentOpen = false
  	},
  	handle_scrollTo: function(pageIndex) {
  		this.isOpen = false
  		this.isCommentOpen = false
  		$.fn.fullpage.moveTo(pageIndex); 		
  	},
  	handle_comment: function() {
  		this.isCommentOpen === true ? this.isCommentOpen = false : this.isCommentOpen = true
  		this.isOpen = false
  		if(window.innerWidth >= 1024) {
  			this.glassOp === 1 ? this.glassOp = 0 : this.glassOp = 1
  		}
      ga("send", {
          "hitType": "event",
          "eventCategory": "headbar",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [打開 / 關閉FB留言]"
      });  		
  	},
  	handle_glass: function() {
  		this.isCommentOpen = false
  		this.glassOp = 0
  	},
  },
  created() {
  	const self = this
    window.addEventListener('resize', () => {
        this.$forceUpdate()
    })  	
  	Bus.$on('emitCoverTitle', function(msg) {
  		self.getTitle.push(msg)
  	})
  },
  mounted() {
  	const self = this
  	if(this.$slots.default != undefined){
	  	for(let i = 0; i < this.$slots.default.length; i++){
	  		if(this.$slots.default[i].elm.innerHTML !== undefined && this.$slots.default[i].tag === 'a'){
	  			this.$slots.default[i].elm.addEventListener('click', function() {
			        ga("send", {
			           "hitType": "event",
			           "eventCategory": "headbar",
			           "eventAction": "click",
			           "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ self.$slots.default[i].elm.href +"]["+ self.$slots.default[i].elm.innerHTML +"]"
			        });  				
	  			})
	  		}
	  	}
  	}
  },
  beforeDestroyed: function() {
  	if(this.$slots.default != undefined){
	  	for(let i = 0; i < this.$slots.default.length; i++){
	  		if(this.$slots.default[i].elm.innerHTML !== undefined && this.$slots.default[i].tag === 'a'){
	  			this.$slots.default[i].elm.removeEventListener('click', function() {
			        ga("send", {
			           "hitType": "event",
			           "eventCategory": "headbar",
			           "eventAction": "click",
			           "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ self.$slots.default[i].elm.href +"]["+ self.$slots.default[i].elm.innerHTML +"]"
			        });  				
	  			})
	  		}
	  	}
  	}
  }
}
</script>

<style lang="scss" scoped>
.pageHeader{
	position: fixed;
	z-index: 99999;
	top: 0;
	left: 0;
	width: 100%;
	height: 46px;
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: top 333ms ease-in-out;
}
#icon i.udn-icon{
	position: relative;
  color: #FFFFFF;
  font-size: 36px;
  margin-top: 7px;
  margin-left: 7px;
  z-index: 99999;
  text-decoration: none;
}
.navWrapper{
	position: absolute;
	z-index: 99998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #434343;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	transform: translate(0, -100%);
	transition: transform 333ms ease-in-out;
}
.menuWrapper{
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	background-clip: content-box;
	transform: translate(100%, 0);
	transition: transform 444ms ease-out;
	padding-top: 46px;
	display: flex;
	flex-direction: column;
	overflow-y: hidden;
}
.commentWrapper{
	position: absolute;
	z-index: 300;
	top: 0;
	left: 0;
	width: 100%;
	padding-top: 46px;
	transform: translate(100%, 0);
	transition: transform 444ms ease-out;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.comment{
	position: relative;
	z-index: 9999;
	background-color: #fff;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.closeComment{
	display: none;
}
.comment::-webkit-scrollbar { 
    display: none; 
}
.glass{
	position: absolute;
	top: 0;
	left: 0;
	z-index: auto;
	width: 100%;
	height: 100%;
	background-color: #fff;
	background-clip: content-box;
	padding-top: 46px;
	opacity: 1;
	cursor: pointer;
}
.linkOut{
	display: flex;
	flex-direction: column;
	color: #fff;
	a{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		padding: 10px 0;
		border-bottom: 1px solid #c1c1c1;
		width: calc(100% - 30px);
		margin: 10px auto 0 auto;
		color: inherit;
	}	
}
.scrollTo-Btn{
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	padding: 10px 0;
	border-bottom: 1px solid #c1c1c1;
	width: calc(100% - 30px);
	margin: 10px auto 0 auto;
	color: #000;
	cursor: pointer;
}
.logoBox{
	position: absolute;
	z-index: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
}
.btnBox{
	position: relative;
	z-index: 99999;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
.cbtn{
	display: flex;
	justify-content: center;
	align-items: center;	
	color: #fff;
	cursor: pointer;
	margin-right: 20px;
	height: 100%;
	color: #fff;
	a{
		display: flex;
		justify-content: center;
		align-items: center;			
		height: 100%;
		color: #fff;
		text-decoration: none;
	}
}
.menuOpen{
	transform: translate(0, 0) !important;
}
.burger{
	position: relative;
	z-index: 15;
	width: 46px;
	height: 46px;
	cursor: pointer;
    span {
        display: block;
        position: absolute;
        height: 4px;
        width: 30px;
        margin: 0 auto;
        background-color: #FFFFFF;
        border-radius: 2px;
        opacity: 1;
        right: 14px;
        transform: rotate(0deg);
        transition: .44s ease-in-out;        
    }
    span:nth-child(1){
        top: 12px;
        transition: .33s ease-in;
        transform-origin: center;    
    }
    span:nth-child(2),
    span:nth-child(3){
        top: 21px;
    }
    span:nth-child(4){
        top: 30px;    
        transition: .33s ease-out;
    }
}
.open{
	span:nth-child(1){
	    width: 0;
	}
	span:nth-child(2){
	    transform: rotate(45deg);
	}
	span:nth-child(3){
	    transform: rotate(-45deg);
	}
	span:nth-child(4){
	    width: 0;     
	}        
}
.fa-youtube-play:hover{
	transition: color 133ms linear;
	color: red;
}
@media screen and (min-width: 1024px){
	.pageHeader{
		height: 50px;
		padding-right: 0;
	}
  #icon {
      height: 50px;
      line-height: 50px;
  }
  .menuWrapper{
  	position: relative;
  	transform: translate(0, 0);
  	flex-direction: row;
  	height: 100%;
  	justify-content: flex-end;
  	background-color: transparent;
  	padding-top: 0;
  }
  .commentWrapper{
  	padding-left: 40%;
  	padding-top: 50px;
  }
  .comment{

  }
  .closeComment{
		position: absolute;
		z-index: 99999;
		top: 0;
		left: 40%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		width: 50px;
		color: #000;
		cursor: pointer;
  }
  .glass{
  	padding-top: 50px;
  	background-color: rgba(black, .6);
  	transition: opacity 444ms ease-in;
  	transition-delay: 222ms;
  	opacity: 0;
  }
  .scrollTo{
  	display: flex;
  }
  .scrollTo-Btn{
  	width: auto;
  	border-bottom: none;
  	margin-right: 50px;
  	margin-top: 0px;
		color: #fff;
		font-weight: bold;  	
  }
  .linkOut{
  	flex-direction: row;
  	color: #fff;
  	a{
  		width: auto;
  		border-bottom: none;
	  	margin-right: 50px;
	  	margin-top: 0px;  		
  		font-weight: bold;
  		color: inherit;
  	}
  }
}
@media screen and (orientation: landscape) {
    .logoBox{
        display: none;
    }
}
</style>