<template>
    <div class="logo-block">
        <div class="thirdparty">
            <slot></slot>
        </div>
        <div id="vision" class="logo" :class="{hidden: !vision}">
            <a href="https://vision.udn.com/" target="_blank"><img width="140" src="https://udn.com/upf/newmedia/image/vision_logo.svg" alt=""></a>
        </div>
        <div class="logo">
            <a href="https://udn.com/news/index" target="_blank"><img src="https://udn.com/upf/newmedia/image/udn-logo.svg"></a>
        </div>
        <div class="logo" id="nmd" v-if="!ubrand">
            <a href="https://www.facebook.com/udnNewMediaLab/" target="_blank"><img src="https://udn.com/upf/newmedia/image/nmd_logo_2018.png"></a>
        </div> 
        <div class="logo" id="nmd" v-else>
            <a href="https://www.facebook.com/udnNewMediaLab/" target="_blank"><img src="https://udn.com/upf/newmedia/image/logo_u_brand.svg"></a>
        </div>                     
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: ['vision', 'ubrand']
}
</script>

<style scoped>
    .logo{
        width: 140px;
        display: inline-block;
    }
    #vision img{
        width: 100%;
    }
    
    #nmd{
        width: 160px;
    }
    .thirdparty{
        display: block;
    }
    #nmd img{
        width: 100%;
    }
    @media screen and (max-width: 1024px){
        .logo-block{
            margin-top: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        .logo-block{
            float: right;
            margin-top: -45px;
        }
        #nmd{
            width: 236px;
        }
        .thirdparty{
            display: inline-block;
        }
    }
</style>