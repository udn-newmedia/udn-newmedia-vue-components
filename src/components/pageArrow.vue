<template>
	<div class="arrow" @click='nextPage'>
		<span class="hint">往下滑動</span>
		<img class="arrowImg" :src="src" alt="往下滑動" title="往下滑動">
	</div>
</template>

<script>
import _throttle from 'lodash.throttle';

export default {

  name: 'pageArrow',
  props: ['src'],
  data () {
    return {

    }
  },
  methods: {
  	nextPage: _throttle(function() {
  		$.fn.fullpage.moveSectionDown();
  	}, 777)
  }
}
</script>

<style lang="scss" scoped>
	.arrow{
		position: fixed;
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
	.hint{
		text-align: center;
		font-size: 16px;
		letter-spacing: normal;
		line-height: 1.88;
		color: #908f8f;
	}
	.arrowImg{
		width: 38px;
		height: 24px;
		object-fit: contain;
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
</style>