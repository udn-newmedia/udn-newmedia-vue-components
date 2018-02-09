<template>
	<div id='page'>
		<slot></slot>
	</div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
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
    },
  },
  mounted() {
    console.log(this.$slots)
    const self = this
    const pageLength = Number($('.section').length);
    $('#page').fullpage({
        scrollingSpeed: self.scrollSpeed,        
        afterLoad: function(anchorLink, index) {
            $('.active').css({
                'z-index': 99,
                'opacity': 1,
            })
            ga("send", {
                "hitType": "event",
                "eventCategory": "Page",
                "eventAction": "scroll",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [觀看第"+ index +"頁]"
            });       
            if(index === 1) {
                $('.navWrapper').css('transform', 'translate(0, -100%)')
                $('.pageHeader').css('top', '0')
                $('.indicator-bar').css('height', '0')
            }
        },
        onLeave: function(index, nextIndex, direction) {
            $('.active').css({
                'z-index': 0,
            })
            $('.indicator-bar').css('width', nextIndex/pageLength*100 + '%')
            if(index === 1) {
                $('.navWrapper').css('transform', 'translate(0, 0)')
                $('.indicator-bar').css('height', '2px')
                $('.pageHeader').css('top', '2px')
            }
            if(index === 2 && direction === 'up') {
                $('.navWrapper').css('transform', 'translate(0, -100%)')
                $('.indicator-bar').css('height', '0')
                $('.pageHeader').css('top', '0')
            }
        }            
    })
  }
}
</script>

<style lang="scss" scoped>
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