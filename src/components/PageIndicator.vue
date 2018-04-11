<template>
	<div class='indicator' :style="{backgroundColor: bgColor}">
	    <div class="indicator-bar" :style="{backgroundColor: barColor}"></div>
	</div>   	
</template>

<script>
export default {

  name: 'PageIndicator',
  props: ['barColor', 'bgColor'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
    .indicator{
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition: height 444ms ease-in;
    }
    .indicator-bar{
        width: 0;
        height: 100%;
        background-color: #bf2923;
        transition: width 233ms linear, height 444ms ease-in;
    }
</style>