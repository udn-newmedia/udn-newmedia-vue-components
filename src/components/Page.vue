<template>
	<div id='page'>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'Page',
  data () {
    return {
        titleList: [],
    }
  },
  mounted() {
    const pageLength = Number($('.section').length);
    $('#page').fullpage({
        afterLoad: function(anchorLink, index) {
            $('.active').css({
                'z-index': 99,
            })
        },
        onLeave: function(index, nextIndex, direction) {
            $('.active').css({
                'z-index': 0,
            })               
        }            
    })
    // console.log('page.vue')
    // console.log(this)
    // console.log(this.$data)
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