<template>
	<div class='section' :style="{backgroundColor: bgColor}">
		<div class='wrapper' :style="{backgroundColor: boxColor}">
			<div class='squareVideo'>
				<EmbededVideo :src='src' :poster='poster' :srcWeb='srcWeb' :posterWeb='posterWeb' style="object-fit: cover" ref='sqVideo'/>
			</div>
			<div class="quoteSection">
				<div class='quoteFrom'>
					<h2>{{quoter}}</h2>
					<div class='volume' @click='handle_volume'>
						<i class="fa fa-2x" :class="{'fa-volume-off': isMute, 'fa-volume-up': !isMute}" aria-hidden="true"></i>
					</div>
				</div>
				<div class='quote'>
					<slot />
				</div>				
			</div>
		</div>
	</div>
</template>

<script>
import EmbededVideo from '../../components/EmbededVideo.vue'
export default {

  name: 'PageQuote',
  components: {
  	EmbededVideo
  },
  props:['bgColor', 'boxColor', 'quoter', 'src', 'poster', 'srcWeb', 'posterWeb'],
  data () {
    return {
    	isMute: true,
    }
  },
  methods: {
  	handle_volume: function() {
  		const selfVideo = this.$refs.sqVideo.$refs.video
  		if(this.isMute === true) {
  			this.isMute = false
  			selfVideo.muted = false
  		} else {
  			this.isMute = true
  			selfVideo.muted = true
  		}
  	}
  },
  mounted() {
  	if(window.innerWidth < 1024) {
  		const selfVideo = this.$refs.sqVideo.$refs.video
  		this.isMute = true
  		selfVideo.muted = true
  	} else {
  		const selfVideo = this.$refs.sqVideo.$refs.video
  		this.isMute = false
  		selfVideo.muted = false  		
  	}
  }
}
</script>

<style lang="scss" scoped>
	.wrapper{
		position: relative;
		top: 0;
		left: 0;
		width: calc(100% - 30px);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 15px;
	}
	.squareVideo{
		width: 45%;
		margin-left: 5px;
	}
	.quoteFrom{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		h2{
			font-size: 18px;
			margin: 0;
		}
		.volume{
			margin-left: 15px;
			cursor: pointer;
		}
	}
	.quote{
		border-top: 2px solid black;
		border-bottom: 2px solid black;
		padding: 20px 0;
	}
	p{
		font-size: 16px;
		line-height: 32px;
		font-weight: bold;
	}
    @media screen and (min-width: 768px) and (max-width: 1023px) {

    }	
    @media screen and (min-width: 1024px) {
    	p{
    		font-size: 18px;
    	}
    	.wrapper{
    		flex-direction: row;
        justify-content: center;
    		align-items: center;
    		width: 80%;
        padding: 30px;
    		max-width: 940px;
    	}
    	.squareVideo{
    		width: 40%;
    		height: auto;
    		margin-left: 0;
    	}
    	.quoteSection{
    		display: flex;
    		flex-direction: column;
    		justify-content: space-between;
    		height: 100%;
    		width: 60%;
        padding: 50px 0 50px 30px;
    	}
    }
</style>