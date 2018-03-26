<template>
    <div class="section">
        <div id="cover" :style="{backgroundImage: 'url(' + srcRWD(bg, bgWeb) + ')'}">
            <div class="titleWrapper" :class="{top: top, bottom: bottom, aligncenter: aligncenter}">
                <div id="title-contain">
                    <h1 :style='{color: fontColor}'>{{title}}</h1>
                    <div id="sub-title" :style='{color: fontColor}'>{{subTitle}}</div>
                </div>
            </div>
        </div>
        <PageArrow :color='arrowColor' :hint='hint' :hintColor='hintColor'/>    
    </div>
</template>

<script>
import Bus from '../eventBus.js'
import PageArrow from './pageArrow.vue'
import srcRWD from '../mixin/srcRWD.js'
export default {
    name: 'PageCover',
    components: {
        PageArrow
    },
    mixins: [srcRWD],
    props: ['title', 'menuText', 'subTitle', 'bg', 'bgWeb', "position", 'fontColor', 'arrowColor', 'hint', 'hintColor'],
    data: function(){
        return{
            aligncenter: false,
            top: false,
            bottom: false,
        }
    },
    computed: {

    },
    methods: {
        handle_Emit: function() {
          const self = this
          Bus.$emit('emitCoverTitle', {
            title: self.menuText,
            pageIndex : $(self.$el).index() + 1
          })
        }  
    }, 
    beforeMount: function(){
        if(this.position == 'top'){
            this.top = true
        }
        if(this.position == 'bottom'){
            this.bottom = true
        }
        if(this.position == 'middle'){
            this.aligncenter = true
        }
    },
    created(){
        window.addEventListener('resize', () => {
            this.$forceUpdate()
        })    
    },
    mounted() {
        this.handle_Emit()
    },
}
</script>

<style lang='scss'>
    .section{
        overflow: hidden;
    }
    .titleWrapper{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10% 0;
    }
    #title-contain{
        padding: 20px 20px 20px 8.333%;
    }
    #cover{
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        // overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // padding: 10% 0;
    }
    #cover.top{
        justify-content: flex-start;
    }
    #cover.bottom{
        justify-content: flex-end;   
    }
    .aligncenter{
        align-items: flex-start;
    }
    h1{
        font-size: 45px;
        font-weight: bold;
        letter-spacing: -1px;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0px 18px rgba(48,48,48,1);
        margin: 0;
    }
    #sub-title{
        font-size: 30px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 767px) {
        h1{
            font-size: 38px;
        }
        #sub-title{
            font-size: 25px;
        }
        #cover{
            // padding: 25% 0;
        }
    }

</style>
