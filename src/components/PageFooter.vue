<template>
	<div class="section" :style="{backgroundColor: bgColor, backgroundImage: 'url('+ srcRWD(bg, bgWeb) +')'}">
		<div class="wrapper">
			<Share :href='href'/>
			<p><br/></p>
			<Editor :style='{color: color}'>
				<slot></slot>
				<p :style="{color: color}">{{update}}</p>
			</Editor>
			<section class="relateWrapper">
				<h3 :style="{color: color}">延伸閱讀</h3>
				<ul class="pageRelate" :style="{color: color}">
					<li><a :href="link1" target='_blank'><img :src="img1"><p :style="{color: color}">{{text1}}</p></a></li>
					<li><a :href="link2" target='_blank'><img :src="img2"><p :style="{color: color}">{{text2}}</p></a></li>
					<li><a :href="link3" target='_blank'><img :src="img3"><p :style="{color: color}">{{text3}}</p></a></li>
					<li><a :href="link4" target='_blank'><img :src="img4"><p :style="{color: color}">{{text4}}</p></a></li>
				</ul>				
			</section>	
		</div>
		<div class="pageFoot">
			<div class="logoWrapper">
				<a v-if="useThirdLogo" :href="thirdLogoLink"><img :src="thirdLogoImg"></a>
				<a href="https://udn.com/news/index"><img src="https://udn.com/upf/newmedia/image/udn-logo.svg"></a>
				<a href="https://udn.com/upf/newmedia/ubrandstudio/?familybar_hide"><img :src="isUbrand()"></a>					
			</div>
		</div>
	</div>
</template>

<script>
import Editor from '../components/Editor.vue'
import Relate from '../components/Relate.vue'
import Share from '../components/Share.vue'
import srcRWD from '../mixin/srcRWD.js'

export default {
  name: 'PageFooter',
	props:['href',
		'link1', 'link2', 'link3', 'link4',
		'img1', 'img2', 'img3', 'img4',
		'text1', 'text2', 'text3', 'text4',
		'color', 'ubrand', 'update',
		'bgColor', 'bg', 'bgWeb',
		'thirdLogoLink', 'thirdLogoImg'],
  components:{
  	Editor,
  	Share
  },
  mixins: [srcRWD],
  data () {
    return {

    }
	},
	computed: {
		useThirdLogo: function () {
			if(this.thirdLogoLink !== undefined && this.thirdLogoImg !== undefined){
				return true
			}
			else {
				return false
			}
		}
	},
	methods: {
		isUbrand: function () {
			if (this.ubrand === 'yes') {
				return 'https://udn.com/upf/newmedia/image/logo_u_brand.svg'				
			}
			else {
				return 'https://udn.com/upf/newmedia/image/nmd_logo_2018.png'
			}
		}
	},
  created() {
    window.addEventListener('resize', () => {
      this.$forceUpdate()
    })      	
	},
	mounted() {
		console.log(this.useThirdLogo)
		console.log(typeof this.thirdLogoLink,typeof this.thirdLogoImg)
	}
}
</script>

<style lang="scss" scoped>
p{
  font-size: 16px;
  margin: 0;
  color: #fff;
  z-index: 5;
  padding: 0;
}
.wrapper{
	position: relative;
	width: 100%;
	max-width: 880px;
	margin: 0 auto;
}
.section{
	position: relative;
	top: 0;
	left: 0;
	padding: 0 15px;
}
.relateWrapper{
	width: 100%;
}
.pageRelate{
	padding-left: 15px;
	width: 100%;
	li{
		width: 100%;
		a{
			text-decoration: none;
		}
		img{
			display: none;
		}
	}
}
.pageFoot{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 60px;
	background-color: #fff;
}
.logoWrapper{
	width: 100%;
	height: 100%;
	max-width: 880px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #fff;
	a{
		width: 22.5%;
	}
	img{
		width: 100%;
		height: auto;
	}
}
@media screen and (min-width: 1025px){
  p>br{
      line-height: 50px;
  }
  .pageFoot{
  	height: 70px;
  	img{
  		height: 40px;
  		margin: 0 10px;
  	}
  }
	.relateWrapper{
		width: 100%;
	}
	.pageRelate{
		display: flex;
		justify-content: space-between;
		padding-left: 0;
		list-style: none;
		li{
			width: 23%;
			img{
				display: block;
				width: 100%;
				height: auto;
				margin-bottom: 10px;
				opacity: .8;
				transition: opacity 333ms ease-out;
				&:hover{
					opacity: 1;
				}
			}
		}
	}	
}		
</style>