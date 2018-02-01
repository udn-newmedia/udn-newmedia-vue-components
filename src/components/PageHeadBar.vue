<template>
	<div class="pageHeader">
        <div id="icon">
            <a href="./index"><i class="udn-icon udn-icon-logo" :style="{color: color}"></i></a>
        </div>
        <div class="menuWrapper" :class="{menuOpen: isOpen}" :style="{height: menuWrapperStyle.height + 'px'}">
        	<div class="scrollTo">
        		<div class="scrollTo-Btn" v-for='title in getTitle' @click='handle_scrollTo(title.pageIndex)'>{{title.title}}</div>
        	</div>
        	<div class="linkOut">
        		<slot></slot>
        	</div>
        	<div class="logoBox hidden-lg">
        		<Logo/>
        	</div>
        </div>
        <div class="commentWrapper" :class="{menuOpen: isCommentOpen}" :style="{height: commentHeight + 'px'}">
        	<slot name='comment'></slot>
        </div>
<!-- button -->
				<div class="btnBox">
					<div class="comment" @click='handle_comment'>
						<i class="fa fa-comment fa-2x"></i>
					</div>	
	        <div class='burger hidden-lg' :class="{open: isOpen}" @click="handle_burger">
	        	<span></span>
	        	<span></span>
	        	<span></span>
	        	<span></span>
	        </div>						
				</div>
	</div>
</template>

<script>
import Bus from '../eventBus.js'
import Logo from '../components/Logo.vue'

export default {

  name: 'PageHeadBar',
  components: {
  	Logo
  },
  porps: ['href'],
  data () {
    return {
    	isOpen: false,
    	isCommentOpen: false,
    	menuWrapperStyle: {
    		height: null,
    	},
    	getTitle: [],
    }
  },
  computed: {
  	commentHeight: function() {
  		const h = window.innerHeight
  		return h
  	}
  },
  methods: {
  	handle_burger: function() {
  		this.isOpen === true ? this.isOpen = false : this.isOpen = true
  		this.isCommentOpen = false
  	},
  	handle_scrollTo: function(pageIndex) {
  		this.isOpen = false
  		$.fn.fullpage.moveTo(pageIndex + 1, 0);
  	},
  	handle_comment: function() {
  		this.isCommentOpen === true ? this.isCommentOpen = false : this.isCommentOpen = true
  		this.isOpen = false
  	}
  },
  created() {
  	const self = this
  	if(window.innerWidth < 1024){
  		this.menuWrapperStyle.height = window.innerHeight;
  	}
  	Bus.$on('emitCoverTitle', function(msg) {
  		self.getTitle.push(msg)
  	})
  },
  updated() {

  },
  mounted() {

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
	background-color: #444444;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
#icon i.udn-icon{
	position: relative;
    color: #FFFFFF;
    font-size: 36px;
    margin-top: 7px;
    margin-left: 7px;
    z-index: 30;
    text-decoration: none;
}
.menuWrapper{
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	transform: translate(100%, 0);
	transition: transform 444ms ease-out;
	padding-top: 46px;
	background-clip: content-box;
	display: flex;
	flex-direction: column;
	overflow-y: hidden;
}
.commentWrapper{
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	transform: translate(100%, 0);
	transition: transform 444ms ease-out;
	padding-top: 46px;
	background-clip: content-box;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.linkOut{
	display: flex;
	flex-direction: column;
	a{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		padding: 10px 0;
		border-bottom: 1px solid #c1c1c1;
		width: calc(100% - 30px);
		margin: 10px auto 0 auto;
		color: #000;
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
}
.comment{
	margin-right: 15px;
	color: #fff;
	cursor: pointer;
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
        background: #FFFFFF;
        border-radius: 2px;
        opacity: 1;
        right: 12px;
        transform: rotate(0deg);
        transition: .66s ease-in-out;        
    }
    span:nth-child(1){
        top: 12px;
        transition: .44s ease-out;
        transform-origin: center;    
    }
    span:nth-child(2),
    span:nth-child(3){
        top: 21px;    
    }
    span:nth-child(4){
        top: 30px;    
        transition: .44s ease-out;
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
  	transform: translate(0, 0);
  	flex-direction: row;
  	padding-top: 0;
  	height: 100%;
  	background-color: transparent;
  	justify-content: flex-end;
  }
  .scrollTo{
  	display: flex;
  }
  .scrollTo-Btn{
  	width: auto;
  	border-bottom: none;
  	margin-right: 25px;
		color: #fff;
		font-weight: bold;  	
  }
  .linkOut{
  	flex-direction: row;
  	a{
  		width: auto;
  		border-bottom: none;
  		margin-right: 25px;
  		color: #fff;
  		font-weight: bold;
  	}
  }
}
</style>