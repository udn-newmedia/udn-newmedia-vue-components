<template>
	<div class="arrow" @click='nextPage'>
		<span class="arrowHint" :style="{color: hintColor}" v-if='hint'>往下滑動</span>
		<i class="fa fa-angle-down fa-3x arrowImg" aria-hidden="true" :style="{color: color}"></i>
	</div>
</template>

<script>
import _throttle from 'lodash.throttle';

export default {

  name: 'pageArrow',
  props: ['color', 'hintColor', 'hint'],
  data () {
    return {

    }
  },
  methods: {
  	nextPage: _throttle(function() {
  		$.fn.fullpage.moveSectionDown();
  	}, 1000)
  },
}
</script>

<style lang="scss" scoped>
	.arrow{
		position: absolute;
		z-index: 999;
		left: 50%;
		bottom: 25px;
		width: 100px;
		margin-left: -50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.arrowHint{
		text-align: center;
		font-size: 16px;
		letter-spacing: normal;
		line-height: 1.88;
		color: #908f8f;
	}
	.arrowImg{
		animation: arrow 555ms infinite ease-out;	
	}
	@keyframes arrow {
		from{
			transform: translate(0, 0);
		}
		to{
			transform: translate(0, 5px)
		}
	}
    @media screen and (min-width: 1025px){
		.arrow{
			bottom: 25px;
		}
    }	
</style>