<template>
	<div class="section pageIntro" :style="{backgroundColor: BgColor}">
        <div class="container content" :style="{color: fontcolor}">
            <slot></slot>
            <h6>{{update}}</h6>
        </div>
	</div>
</template>

<script>
export default {

  name: 'PageIntro',
  props: ['BgColor', 'update', 'fontcolor'],
  data () {
    return {

    }
  }
}
</script>
<style lang='scss'>
	.pageIntro{
		.fp-tableCell{
			padding-top: 20%;
			vertical-align: top;
		}
	}
    @media screen and (min-width: 1024px){
		.pageIntro{
			.fp-tableCell{
				padding-top: 10%;
			}
		}
    }	
</style>
<style lang="scss" scoped>
    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
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