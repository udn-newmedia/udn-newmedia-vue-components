<template>
    <div id="cover" :style="{backgroundImage: 'url(' + bgRWD + ')'}" :class="{top: top, bottom: bottom, aligncenter: aligncenter}">
        <div id="title-contain">
            <h1>{{title}}</h1>
            <div id="sub-title">{{subtitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'bg', 'bgweb', "position"],
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

<style>
    #title-contain{
        padding: 20px;
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
        padding: 30% 0;
    }
    #cover.top{
        justify-content: flex-start;
    }
    #cover.bottom{
        justify-content: flex-end;
    }
    .aligncenter{
        align-items: center;
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
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        h1{
            font-size: 45px;
        }
    }

</style>
