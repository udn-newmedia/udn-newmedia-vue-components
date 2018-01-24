<template>
	<div class="section pageContent">
		<div class="mediaContainer">
			<EmbededVideo :src='VideoSrc' :poster='VideoPoster'/>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import EmbededVideo from '../../components/EmbededVideo.vue';

export default {
  name: 'PageContent',
  components:{
  	EmbededVideo
  },
  props: ['VideoSrc', 'VideoPoster'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.mediaContainer{
		width: calc(100% - 30px);
		margin: 0 auto;
		border-radius: 15px;
		padding: 20px 15px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}
    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }
    p{
        font-size: 21px;
        margin: 0;
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
        .mediaContainer{
            width: 880px;
        }
        p>br{
            line-height: 50px;
        }
    }	
</style>