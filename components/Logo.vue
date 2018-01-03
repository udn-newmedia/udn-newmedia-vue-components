<template>
    <div class="logo-block">
        <div class="logo">
            <a href="https://udn.com/news/index" target="_blank"><img src="https://udn.com/upf/newmedia/image/udn-logo.svg"></a>
        </div>
        <div class="logo" id="nmd">
            <a href="https://udn.com/upf/newmedia/udn_newmedia/" target="_blank"><img src="https://udn.com/upf/newmedia/image/nmd_logo_2018.png"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'logo'
}
</script>

<style scoped>
    .logo{
        width: 140px;
        display: inline-block;
    }
    
    #nmd{
        width: 160px;
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
    }
</style>