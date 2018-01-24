<template>
    <header id="head-bar" :style="{top: top+'px',backgroundColor: backgroundColor}">
        <div id="icon">
            <a href="./index"><i class="udn-icon udn-icon-logo" :style="{color: color}"></i></a>
        </div>
        <div id="hbutton-contain" :class="{transformToNone: isOpen}" :style="{transform: menuSlideDirection, backgroundColor: backgroundColor}">
            <slot></slot>
            <div id="logo-contain" class="hidden-lg">
                <div class="logo-block">
                    <div class="logo">
                        <a href="https://udn.com/news/index" target="_blank"><img src="https://udn.com/upf/newmedia/image/udn_logo_2018_v.svg"></a>
                    </div>
                    <div class="logo" id="nmd">
                        <a href="https://www.facebook.com/udnNewMediaLab/" target="_blank"><img src="https://udn.com/upf/newmedia/image/nmd_logo_2018_v.svg"></a>
                    </div>
                </div>
            </div>
        </div>
        <div id="hbutton" class="hidden-lg">
            <div class="nav-icon" :class="{open: isOpen}"
                @click="handleBurger()"
            >
                <span :style="{backgroundColor: color}"></span>
                <span :style="{backgroundColor: color}"></span>
                <span :style="{backgroundColor: color}"></span>
                <span :style="{backgroundColor: color}"></span>
            </div>
        </div>
    </header>
</template>

<script>

export default {

    name: 'HeadBar',
    props: ['background-color', 'MenuSlideFrom', 'color'],
    data: function() {
        return {
            top: 0,
            isOpen: false,
            menuSlideDirection: "",
        }
    },
    computed: {

    },
    methods: {
        handleScroll: function(event) {
            let currentH = window.pageYOffset
            if (currentH < window.innerHeight / 2) {
                this.top = 0
            } else {
                if (window.innerWidth <= 1024) {
                    this.top = 2
                } else {
                    this.top = 2
                }
            }
        },
        handleBurger: function(event) {
            this.isOpen == false ? this.isOpen = true : this.isOpen = false;
        }
    },
    created: function() {
        console.log(this)
        switch(this.MenuSlideFrom) {
            case 'top':
                this.menuSlideDirection = 'translate(0, -110%)';
                break;

            case 'bottom':
                this.menuSlideDirection = 'translate(0, 100%)';
                break;

            case 'left':
                this.menuSlideDirection = 'translate(-100%, 0)';
                break;

            case 'right':
                this.menuSlideDirection = 'translate(100%, 0)';
                break;

            default:    
                this.menuSlideDirection = 'translate(0, -110%)';
                console.log("please set value is top, bottom, left or right") 
                break;
        }
    },
    mounted: function() {
        window.addEventListener('scroll', this.handleScroll);
    },    
}

</script>
<style lang="scss" scoped>

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

#head-bar {
    position: fixed;
    background-color: #231815;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    transition: opacity 0.7s ease;
}

#icon {
    position: absolute;
    z-index: 30;
    top: 0;
}

#icon i.udn-icon{
    color: #FFFFFF;
    font-size: 36px;
    margin-top: 7px;
    margin-left: 7px;
    z-index: 30;
}

#hbutton {
    width: 46px;
    height: 46px;
    top: 0;
    right: 0;
    padding: 0 5px;
    position: absolute;
    z-index: 30;
}

.nav-icon {
    width: 46px;
    height: 46px;
    z-index: 30;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    opacity: 1;
    span {
        display: block;
        position: absolute;
        height: 4px;
        width: 30px;
        margin: 0 auto;
        background: #FFFFFF;
        border-radius: 2px;
        opacity: 1;
        right: 12px;
        transform: rotate(0deg);
        transition: .66s ease-in-out;        
    }
    span:nth-child(1){
        top: 12px;
        transition: .44s ease-out;
        transform-origin: right;    
    }
    span:nth-child(2),
    span:nth-child(3){
        top: 21px;    
    }
    span:nth-child(4){
        top: 30px;    
        transition: .44s ease-out;
    }
}
.open{
    span:nth-child(1){
        width: 0;
    }
    span:nth-child(2){
        transform: rotate(45deg);
    }
    span:nth-child(3){
        transform: rotate(-45deg);
    }
    span:nth-child(4){
        width: 0;     
    }        
}
#hbutton-contain {
    position: absolute;
    z-index: 0;
    cursor: pointer;
    top: 0;
    right: 0;
    background-clip: content-box;
    transform: translate(0, -110%);
}
.hbutton {
    padding: 0 12px;
    color: #FFFFFF;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    float: left;
}

.hbutton:hover {
    background-color: #FF4612;
}

.hbutton-select {
    color: #F589BA;
}

.transformToNone {
    transform: translate(0, 0) !important;
}

@media screen and (max-width: 1024px) {
    #head-bar {
        height: 46px;
    }
    #icon {
        height: 46px;
        line-height: 46px;
        // text-align: center;
        width: 100%;
    }
    #hbutton-contain {
        padding-top: 46px;
        background-color: #FFFFFF;
        height: 100vh;
        width: 100%;
        transition: transform 0.7s ease;
    }
    #hbutton-contain.open {
        transform: translate(0, 0);
    }
    .hbutton {
        margin: 1px auto 0 auto;
        background-color: #231815;
        color: #FFFFFF;
        height: 60px;
        padding: 0;
        line-height: 60px;
        font-size: 20px;
        text-align: center;
        margin-top: 1px;
        letter-spacing: 8px;
        float: none;
    }
    #logo-contain {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20%;
    }
    .logo-block{
        margin-top: 32px;
    }
}

@media screen and (min-width: 1025px) {
    #head-bar {
        height: 50px;
    }
    #icon {
        height: 50px;
        line-height: 50px;
    }
    .logo-block{
        float: right;
        margin-top: -45px;
    }

    #nmd{
        width: 236px;
    }
}

</style>
