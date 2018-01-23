<template>
    <div class="fixed-background">
        <div class="fixed-bg" :style="{opacity: opacity, backgroundImage: 'url(' + bgRWD + ')'}">
            <div class="fix-text-bottom" :style="{opacity: bottom}">{{text}}</div>
        </div>
         <div class="fix-text" :style="{opacity: middle}">{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'SectionFixedBg',
    props: ['text', 'bg', 'bgweb', 'position'],
    data: function(){
        return{
            opacity: 0,
            middle: 1,
            bottom: 0
        }
    },
    computed: {
        bgRWD: function(){
            if(window.innerWidth <= 768){
                return this.bg
            }
            else{
                return this.bgweb
            }
        }
    },
    methods: {
        handleScroll: function(e){
            let currentH = window.pageYOffset
            if(currentH > (this.$el.offsetTop - window.innerHeight - 200) && currentH < (this.$el.offsetTop + window.innerHeight)){
                this.opacity = 1
            }
            else{
                this.opacity = 0
            }
        }
    },
    mounted: function(){
        if(this.position == 'bottom'){
            this.middle = 0
            this.bottom = 1
        }
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped>
    .fixed-background{
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fix-text{
        font-size: 26px;
        letter-spacing: -0.5px;
        color: #FFFEFE;
        text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.4)
    }
    .fix-text-bottom{
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        padding-left: 20px;
        background-color: rgba(0,0,0,.7);
    }
    .fixed-bg{
        position: fixed;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        top: 0;
        left: 0;
        z-index: -1;
        transition: opacity 0.7s ease;
    }
    
</style>