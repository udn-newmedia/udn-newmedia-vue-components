<template>
	<div id='page'>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'Page',
  props: ['scrollSpeed'],
  data () {
    return {
        titleList: [],
    }
  },
  computed: {
    setSpeed: function() {
        if(typeof this.scrollSpeed === Number){
            return this.scrollSpeed
        } else {
            console.log('請輸入數字,單位為ms,目前為700')            
            return 700
        }
    }
  },
  mounted() {
    const self = this
    const pageLength = Number($('.section').length);
    $('#page').fullpage({
        scrollingSpeed: self.scrollSpeed,
        afterLoad: function(anchorLink, index) {
            $('.active').css({
                'z-index': 99,
                'opacity': 1,
            })
            if(index === 1) {
                $('.navWrapper').css('transform', 'translate(0, -100%)')
            }
        },
        onLeave: function(index, nextIndex, direction) {
            $('.active').css({
                'z-index': 0,
            })
            // $('.section').css({
            //     'opacity': 0,
            // })
            if(index === 1) {
                $('.navWrapper').css('transform', 'translate(0, 0)')
            }
            if(index === 2 && direction === 'up') {
                $('.navWrapper').css('transform', 'translate(0, -100%)')
            }
        }            
    })
  }
}
</script>

<style lang="scss" scoped>
    .fixCover{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        overflow: hidden;
    }
	.section{
		position: relative;
        // position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
		left: 0;
		z-index: 0;
		// opacity: 0;
		transition: opacity 333ms ease-in-out;	
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;        
	}
</style>