<template>
  <div style="height:100%;" :id="menuText">
    <div class="section-bg" :style="{backgroundImage: 'url(' + bgRWD + ')'}">

    </div>
    <div class="img-say">{{imgsay}}</div>
  </div>
</template>

<script>

import Bus from '../eventBus.js'

export default {
    name: 'SectionBg',
    props: ['bg', 'bgweb', 'imgsay', 'menu-text'],
    methods: {
        handle_Emit: function() {
          const self = this
          Bus.$emit('emitHeadbarTitle', {
            title: self.menuText
          })
        }
    }, 
    mounted: function(){
        this.handle_Emit()
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
    }
}
</script>

<style scoped>

    .section-bg{
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .img-say{
        font-size: 17px;
        color: gray;
        margin-top: 5px;
    }

    @media screen and (max-width: 767px){
        .img-say{
            font-size: 15px;
            padding: 0 20px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px){
        .img-say{
            padding: 0 100px;
        }
    }

    @media screen and (min-width: 1024px){
        .img-say{
            width: 880px;
            margin: 10px auto 0 auto;
        }
    }

</style>
