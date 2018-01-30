<template>
	<div id='page'>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'Page',
  props: ['BgImg'],
  data () {
    return {
    	isHintShow: true,
    }
  },
  beforeMount() {

  },
  mounted() {
    const pageLength = Number($('.section').length);
    console.log(pageLength)
    $('#page').fullpage({
        afterLoad: function(anchorLink, index) {
            console.log(index)
            $('.section').eq(index - 1).css({
                'z-index': 99,
            })
        },
        onLeave: function(index, nextIndex, direction) {
            $('.section').eq(index - 1).css({
                'z-index': 0,
            })               
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
        top: 0;
		left: 0;
		z-index: 0;
		// opacity: 0;
		transition: opacity 777ms ease-in-out;	
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;        
	}
</style>