<template>
	<div class="section">
		<div class="fullImg">
			<img :src="srcRWD(src, srcWeb)">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import srcRWD from '../mixin/srcRWD.js'
export default {

  name: 'PageImgsay',
  props: ['src', 'srcWeb'],
  mixins: [srcRWD],
  data () {
    return {

    }
  },
  created () {
    window.addEventListener('resize', () => {
        this.$forceUpdate()
    })    
  }
}
</script>

<style lang="scss" scoped>
	.fullImg{
		position: relative;
		z-index: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100%;
		img{
			position: absolute;
			z-index: 0;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
    p{
        margin: 0;
        color: #fff;
        z-index: 5;
        padding: 0 15px;
    }
    @media screen and (max-width: 767px){
        p{
            font-size: 16px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        p{
            // font-size: 20px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        p>br{
            line-height: 36px;
        }
        p{
          font-size: 18px;
          width: 100%;
          text-align: left;
          background-color: rgba(black, 0.7);
        }
    }	
</style>