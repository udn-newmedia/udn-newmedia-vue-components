<template>
    <div class="section">
        <div id="cover" :style="{backgroundImage: 'url(' + bgRWD + ')'}" :class="{top: top, bottom: bottom, aligncenter: aligncenter}">
            <div id="title-contain">
                <h1 :style='{color: fontcolor}'>{{title}}</h1>
                <div id="sub-title" :style='{color: fontcolor}'>{{subtitle}}</div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'PageCover',
    props: ['title', 'subtitle', 'bg', 'bgweb', "position", 'fontcolor'],
    data: function(){
        return{
            aligncenter: false,
            top: false,
            bottom: false,
        }
    },
    created: function(){
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

<style lang='scss'>
    #title-contain{
        padding: 20px 20px 20px 8.333%;
    }
    #cover{
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10% 0;
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
        font-size: 55px;
        font-weight: bold;
        letter-spacing: -1px;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0px 18px rgba(48,48,48,1);
        margin: 0;
    }
    #sub-title{
        font-size: 55px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 767px) {
        h1{
            font-size: 40px;
        }
        #sub-title{
            font-size: 25px;
        }
        #cover{
            padding: 25% 0;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        h1{
            font-size: 45px;
        }
    }

</style>
