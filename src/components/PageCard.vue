<template>
	<div class="section pageContent" :style="{backgroundImage: 'url('+ bgSrc +')', backgroundColor: bgColor}">
		<div class="mediaContainer" :class="{videoIntro: isVideo, imgIntro: isImg}" :style="{backgroundColor: BoxColor}">
            <div class="videoModel" v-if="isVideo">
                <EmbededVideo :src='videoSrc' :srcWeb='videoSrcWeb' :poster='videoPoster' :posterWeb='videoPosterWeb' customControl='yes'/>
            </div>
            <div class="imgModel" v-if="isImg">
                <img :src="ImgSrc" :title="ImgSay" :alt="ImgSay">
            </div>
            <div class="articleModel" :style="{color: color}">
                <slot></slot>
            </div>
		</div>
	</div>
</template>

<script>
import EmbededVideo from '../../components/EmbededVideo.vue';

const w = window.innerWidth
export default {
  name: 'PageContent',
  components:{
  	EmbededVideo
  },
  props: ['videoSrc', 'videoSrcWeb', 'videoPoster', 'videoPosterWeb', 'BoxColor', 'ImgSrc', 'ImgSay', 'fontColor', 'bg', 'bgWeb', 'bgColor'],
  data () {
    return {

    }
  },
  computed: {
    isVideo: function() {
        if(this.videoSrc || this.videoPoster){
            return true
        } else {
            return false
        }
    },
    isImg: function() {
        if(this.ImgSrc || this.ImgSay){
            return true
        } else {
            return false
        }
    },
    bgSrc: function() {
        if(w < 1024) {
            return this.bg
        } else {
            return this.bgWeb
        }
    }
  }
}
</script>

<style lang="scss" scoped>
    .pageContent{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
	.mediaContainer{
		width: calc(100% - 30px);
		margin: 0 auto;
		border-radius: 4px;
		padding: 20px 15px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
        align-items: center;
        justify-content: space-around;
	}
    .videoModel{
        width: 100%;
        margin-bottom: 20px;
    }
    .imgModel{
        width: 100%;
        margin-bottom: 30px;
        img{
            width: 100%;
            max-height: 40%;
        }
    }
    .articleModel{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .videoIntro{
        width: calc(100% - 30px) !important;
    }
    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        line-height: 1.5;
        margin: 0;
        width: 100%;
    }
    p{
        font-size: 21px;
        margin: 0;
        text-align: left;
    }
    @media screen and (max-width: 767px){
        p{
            font-size: 18px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        p{
            font-size: 20px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        h2{
            font-size: 40px;
        }
        .mediaContainer{
            width: 880px;
            flex-direction: row;
            padding: 30px 25px;
        }
        .videoIntro{
            width: 70% !important;
        }
        .imgIntro{
            width: 70% !important;
        }             
        .imgModel{
            margin-bottom: 0;
        }
        .videoModel{
            margin-bottom: 0;
        }
        p{
            max-width: 880px;
        }        
        .articleModel{
            max-width: 880px;
            padding-left: 20px;
        }
        p>br{
            line-height: 50px;
        }
    }	
</style>