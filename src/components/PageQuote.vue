<template>
	<div class='section' :style="{backgroundColor: bgColor}">
		<div class='wrapper' :style="{backgroundColor: boxColor}">
			<div class='squareVideo'>
				<EmbededVideo :src='src' :poster='poster' style="object-fit: cover" ref='sqVideo'/>
			</div>
			<div class="quoteSection">
				<div class='quoteFrom'>
					<h3>{{quoter}}</h3>
					<div class='volume' @click='handle_volume'>
						<i class="fa fa-2x hidden-lg" :class="{'fa-volume-off': isMute, 'fa-volume-up': !isMute}" aria-hidden="true"></i>
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
  props:['bgColor', 'boxColor', 'quoter', 'src', 'poster'],
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

  }
}
</script>

<style lang="scss" scoped>
	.wrapper{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 0 15px;
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
		h3{
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
		font-size: 21px;
		line-height: 32px;
		font-weight: bold;
	}
    @media screen and (min-width: 768px) and (max-width: 1023px) {

    }	
    @media screen and (min-width: 1024px) {
    	.wrapper{
    		flex-direction: row;
    		align-items: center;
    		justify-content: center;
    		width: 80%;
    		max-width: 950px;
    	}
    	.squareVideo{
    		width: 40%;
    		height: auto;
    	}
    	.quoteSection{
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: space-between;
    		height: 90%;
    		width: 40%;
    		margin-left: 8.333%;
    	}
    }
</style>