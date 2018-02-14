<template>
	<div class="section" :style="{backgroundColor: bgColor, backgroundImage: 'url('+ srcRWD(bg, bgWeb) +')'}">
		<div class="wrapper">
			<Share :href='href'/>
			<p><br/></p>
			<Editor :style='{color: color}'>
				<slot />
				<p :style="{color: color}">{{update}}</p>
			</Editor>
			<div class="pageRelate">
				<h3 :style="{color: color}">延伸閱讀</h3>
				<ul :style="{color: color}">
					<li><a :href="link1" target='_blank'><img :src="img1"><p :style="{color: color}">{{text1}}</p></a></li>
					<li><a :href="link2" target='_blank'><img :src="img2"><p :style="{color: color}">{{text2}}</p></a></li>
					<li><a :href="link3" target='_blank'><img :src="img3"><p :style="{color: color}">{{text3}}</p></a></li>
					<li><a :href="link4" target='_blank'><img :src="img4"><p :style="{color: color}">{{text4}}</p></a></li>
				</ul>
			</div>			
		</div>
		<div class="pageFoot">
			<a v-if="udncom" href="https://udn.com/news/index"><img src="https://udn.com/upf/newmedia/image/udn-logo.svg" alt="聯合新聞網" title="聯合新聞網"></a>
			<a v-if="newmedia" href="https://udn.com/upf/newmedia/ubrandstudio/?familybar_hide"><img src="https://udn.com/upf/newmedia/image/nmd_logo_2018.png" alt="新媒體中心" title="新媒體中心"></a>
			<a v-if="ubrand" href="https://udn.com/upf/newmedia/ubrandstudio/?familybar_hide"><img src="https://udn.com/upf/newmedia/image/logo_u_brand.svg" alt="聯合報融媒體發展部" title="聯合報融媒體發展部"></a>
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
  props:['href', 'link1', 'link2', 'link3', 'link4', 'img1', 'img2', 'img3', 'img4', 'text1', 'text2', 'text3', 'text4', 'color', 'newmedia', 'ubrand', 'udncom', 'update', 'bgColor', 'bg', 'bgWeb'],
  components:{
  	Editor,
  	Share
  },
  mixins: [srcRWD],
  data () {
    return {

    }
  },
  created() {
    window.addEventListener('resize', () => {
        this.$forceUpdate()
    })      	
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
	.pageRelate{
		ul{
			display: flex;
			flex-direction: column;
			list-style: none;
			padding: 0;
			li{
				a{
					text-decoration: none;
					&:hover{
						text-decoration: underline;
					}
				}
				img{
					display: none;
					opacity: 0.9;
					transition: opacity 444ms linear;
					&:hover{
						opacity: 1;
					}
				}
				p::before {
					content: "．";
					color: #fff;
				}				
			}
		}
	}
	.pageFoot{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #fff;
		img{
			height: 30px;
		}
	}
    @media screen and (max-width: 767px){

    }
    @media screen and (min-width: 768px) and (max-width: 1024px){

    }
    @media screen and (min-width: 1025px){
        p>br{
            line-height: 50px;
        }
        .pageFoot{
        	height: 70px;
        	justify-content: center;
        	img{
        		height: 40px;
        		margin: 0 10px;
        	}
        }
        .pageRelate{
			ul{
				display: flex;
				flex-direction: row;
				list-style: none;
				padding: 0;
				overflow: hidden;
				justify-content: space-around;
				li{
					width: 25%;
					padding: 0 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					img{
						width: 100%;
						height: 80%;
						display: block;
					}
					p::before {
						display: none;
					}			
					p{
						margin-top: 10px;
					}
				}
			}        	
        }
    }		
</style>