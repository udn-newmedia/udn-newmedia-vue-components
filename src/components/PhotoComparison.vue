<template>
  <div class="photocomparison">
    <div class="canvas-bg" :style="{opacity: opacity}">
        <canvas />
        <div class="slide hidden-xs hidden-sm hidden-md" :style="{left: slideLeft*100 + '%'}" :data-target="dataTarget">
            <div class="slide-bar"></div>
            <div class="slide-bar-arrow slide-bar-left"></div>
            <div class="slide-bar-arrow slide-bar-right"></div>
        </div>
    </div>
    <div class="fix-text" :style="{opacity: textOpacity}">{{text}}</div>
  </div>
</template>

<script>
import * as d3 from "d3"

export default {
    name: 'photocomparison',
    props: ['text', 'src-old', 'src-new', 'src-web-new', 'src-web-old', 'src-mob-width', 'src-mob-height', 'src-web-width', 'src-web-height', 'data-target'],
    data: function(){
        return{
            w: window.innerWidth,
            h: window.innerHeight,
            ctx: null,
            image: new Image(),
            image2: new Image(),
            opacity: 0,
            textOpacity: 0,
            slideLeft: 30/100
        }
    },
    computed: {
        canvas_width: function(){
            if(this.w < 1200){
                return this.srcMobWidth
            }else{
                return this.srcWebWidth
            }
        },
        canvas_height: function(){
            if(this.w < 1200){
                return this.srcMobHeight
            }else{
                return this.srcWebHeight
            }
        }
    },
    methods: {
        drawCanvas: function() {
            this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.canvas_width, this.canvas_height)

            if(this.w >= 1200){
                let bg_ratio = this.slideLeft;            
                this.ctx.drawImage(this.image2, this.image2.width * bg_ratio, 0, this.image2.width * (1- bg_ratio), this.image2.height, this.canvas_width * bg_ratio, 0, this.canvas_width * (1- bg_ratio), this.canvas_height);
            }
        },
        handleScroll: function(e) {
            let currentH = window.pageYOffset;

            if (currentH > (this.$el.offsetTop - window.innerHeight - 200) && currentH <= (this.$el.offsetTop + window.innerHeight*2)) {
                this.opacity = 1;
                this.compareOnScroll(currentH);

                if(currentH > this.$el.offsetTop - window.innerHeight + 50 && currentH < this.$el.offsetTop + window.innerHeight){
                    this.textOpacity = 1;
                }else {
                    this.textOpacity = 0;
                }
            }
            else {
                this.opacity = 0;
            }
        },
        compareOnScroll: function(scroll_now) {
            let bg_ratio = (this.$el.offsetTop + window.innerHeight - scroll_now) / window.innerHeight.toFixed(2);

            let bg_image_width = this.image.width,
                bg_image_height = this.image.height,
                fg_image_width = this.image2.width,
                fg_image_height = this.image2.height

            this.ctx.drawImage(this.image, 0, 0, bg_image_width, bg_image_height, 0, 0, this.canvas_width, this.canvas_height);

            if(this.w < 1200){

                this.ctx.drawImage(this.image2, 0, fg_image_height * bg_ratio, fg_image_width, fg_image_height, 0, this.canvas_height * bg_ratio, this.canvas_width, this.canvas_height);

            }else{

                this.ctx.drawImage(this.image2, 0, fg_image_height, fg_image_width*(1-bg_ratio), fg_image_height, 0, 0, this.canvas_width, this.canvas_height);

            }
        },
        compareOnDrag: function(){
            var that = this;
            let canvasbgWidth = 880,
                margin = 5;

            if(d3.event.x < margin || d3.event.x > canvasbgWidth-margin)    return;

            let bg_ratio = d3.event.x/ canvasbgWidth;

            this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.canvas_width, this.canvas_height);
            this.ctx.drawImage(this.image2, this.image2.width * bg_ratio, 0, this.image2.width * (1 - bg_ratio), this.image2.height, this.canvas_width * bg_ratio, 0, this.canvas_width * (1 - bg_ratio), this.canvas_height);
            this.slideLeft = bg_ratio;             
        }
    },
    mounted: function() {

        this.ctx = this.$el.children[0].children[0].getContext('2d')

        if (this.w < 1200) {
            this.image.src = this.srcNew
            this.image2.src = this.srcOld
            
            this.$el.children[0].children[0].width = this.canvas_width
            this.$el.children[0].children[0].height = this.canvas_height

            this.image.addEventListener('load', this.drawCanvas)
            window.addEventListener('scroll', this.handleScroll)
        }
        else {
            this.image.src = this.srcWebNew
            this.image2.src = this.srcWebOld

            this.$el.children[0].children[0].width = this.canvas_width
            this.$el.children[0].children[0].height = this.canvas_height

            this.image.addEventListener('load', this.drawCanvas)
            this.opacity = 1

            d3.select('.slide[data-target ="'+this.dataTarget+'"]').call(d3.drag()
                                    .on('drag', this.compareOnDrag));
        }
    }
}
</script>

<style scoped>
    .photocomparison{
        position: relative;
        height: 200vh;
        background: #ECEAEA;
        z-index: -2;
    }

    .fix-text{
        color: #FFFFFF;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 15px;
        padding: 5px 20px;
        background-color: rgba(0, 0, 0, .7);
    }

    .canvas-bg{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        transition: opacity 0.7s ease;
    }
    canvas{
        width: 100%;
    }


    @media screen and (min-width: 768px) and (max-width: 1199px){
        .canvas-bg{
            height: 100%;
            /*transform: translateX(12.5%);*/
        }
        canvas{
            width: auto;
            height: 100%;
        }
        .fix-text{
            font-size: 17px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        .canvas-bg {
            transform: translateX(12.5%);
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1199px) {
        .canvas-bg {
            transform: translateX(25%);
        }
    }

    @media screen and (min-width:1200px){
        .photocomparison{
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .canvas-bg {
            position: relative;
            margin: 0 auto;
            width: 880px;
        }

        .fix-text{
            position: relative;
            width: 880px;
            margin: 0 auto;
            padding: 0;
            font-size: 17px;
            opacity: 1!important;
            background:rgb(236, 234, 234);
            color: gray;
        }

        .slide{
            height: 100%;
            cursor: col-resize;
            width: 3px;
            background-color: #ECEAEA;
            position: absolute;
            top: 0;
            z-index: 2;
        }

        .slide:hover .slide-bar-right{
            right: -20px;
        }

        .slide:hover .slide-bar-left{
            left: -22px;
        }

        .slide-bar{
            position: absolute;
            top: 50%;
            margin-top: -30px;
            height: 60px;
            width: 9px;
            margin-left: -3px;
            background-color: #ECEAEA;
        }

        .slide-bar-arrow{
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 0;
            height: 0;
            transition: all 0.2s ease;
        }

        .slide-bar-right{
            right: -17px;
            border-style: solid;
            border-width: 8px 0 8px 8px;
            border-color: transparent transparent transparent #ECEAEA;
        }

        .slide-bar-left{
            left: -19px;
            border-style: solid;
            border-width: 8px 8px 8px 0;
            border-color: transparent #ECEAEA transparent transparent;
        }

    }

</style>
