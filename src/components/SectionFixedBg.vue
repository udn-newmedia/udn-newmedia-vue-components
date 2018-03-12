<template>
    <div class="fixed-background" :id="menuText">
        <div class="fixed-bg" :style="{opacity: opacity, backgroundImage: 'url(' + bgRWD() + ')'}">
            <div class="fix-text-bottom" :style="{opacity: bottom}"><div v-html="text"></div></div>
        </div>
         <div class="fix-text" :style="{opacity: middle}"><div v-html="text"></div></div>
    </div>
</template>

<script>

import Bus from '../eventBus.js'

export default {
    name: 'SectionFixedBg',
    props: ['text', 'bg', 'bgweb', 'position', 'menu-text'],
    data: function(){
        return{
            opacity: 0,
            middle: 1,
            bottom: 0
        }
    },
    created: function() {
      window.addEventListener('resize', () => {
        this.$forceUpdate()
      })
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
        },
        handle_Emit: function() {
          const self = this
          Bus.$emit('emitHeadbarTitle', {
            title: self.menuText
          })
        },
        bgRWD: function(){
            if(window.innerWidth <= 768){
                if(window.matchMedia("(orientation: landscape)").matches){
                    return this.bgweb
                }
                else{
                    return this.bg
                }
            }
            else{
                return this.bgweb
            }
        }
    },
    mounted: function(){
        if(this.position == 'bottom'){
            this.middle = 0
            this.bottom = 1
        }
        this.handle_Emit()
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
        font-weight: bold;
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

    @media screen and (max-width: 767px){
        .fix-text{
            padding: 0 20px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        .fix-text{
            padding: 0 100px;
        }
    }
    
    @media screen and (min-width: 1025px){
        .fix-text{
            font-size: 40px;
            font-weight: bold;
        }
    }
    
</style>