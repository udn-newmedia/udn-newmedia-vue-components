<template>
	<div class="section pageIntro" :style="{backgroundImage: 'url('+ bgSrc +')', backgroundColor: bgColor}">
        <div class="glass"></div>
        <div class="container content" :style="{color: fontColor}">
            <slot></slot>
            <h6>{{update}}</h6>
        </div>            
        <PageArrow :color='arrowColor' :hint='hint' :hintColor='hintColor'/>  
	</div>
</template>

<script>
import PageArrow from './pageArrow.vue' 

const w = window.innerWidth
export default {

  name: 'PageIntro',
  components: {
    PageArrow
  },
  props: ['bg', 'bgWeb', 'update', 'fontColor', 'arrowColor', 'hint', 'hintColor', 'bgColor'],
  data () {
    return {

    }
  },
  computed: {
    bgSrc: function() {
        if(w < 1024) {
            return this.bg
        } else {
            return this.bgWeb
        }
    }
  }
}
</script>
<style lang="scss" scoped>
    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }
    .container{
        position: relative;
        z-index: 1;
    }
    .chart-title{
        font-size: 28px;
    }
    p{
        font-size: 21px;
        margin: 0;
    }
    .img-say{
        font-size: 17px;
        color: gray;
        margin-top: 5px;
    }
    h6{
    	font-size: 16px;
    }
    .glass{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(black, 0.7);
    }
    @media screen and (max-width: 767px){
        h2{
            font-size: 26px;
        }
        p{
            font-size: 18px;
            line-height: 32px;
        }
        h6{
        	font-size: 13px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
        .container{
            width: 100%;
        }
        h2{
            font-size: 30px;
        }
        p{
            font-size: 20px;
            line-height: 32px;
        }
        h6{
        	font-size: 17px;
        }
    }
    @media screen and (min-width: 1024px){
        .container{
            width: 880px;
        }
        p>br{
            line-height: 50px;
        }
    }
</style>