<template>
    <header id="head-bar" :style="{top: top+'px',backgroundColor: backgroundColor}">
        <div id="icon">
            <a href="./"><i class="udn-icon udn-icon-logo" :style="{color: color}"></i></a>
        </div>
        <div id="hbutton-contain" :class="{transformToNone: isOpen}" :style="{transform: menuSlideDirection, backgroundColor: backgroundColor}">
	    	<div class="scrollTo-Btn" v-for='title in getTitle' :style="{color: color, backgroundColor: backgroundColor}" @click="handleScrollTo(title.title)">{{title.title}}</div>
            <div class="linkOut" :style="{color: color, backgroundColor: backgroundColor}">
	    		<slot></slot>
	    	</div>
            <div id="logo-contain" class="hidden-lg">
                <div class="logo-block">
                    <div id="vision" class="logo" :class="{hidden: !vision}">
                        <a href="https://vision.udn.com/" target="_blank"><img width="140" src="https://udn.com/upf/newmedia/image/vision_logo.svg" alt=""></a>
                    </div>
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

import Bus from '../eventBus.js'
import Utils from 'udn-newmedia-utils'

export default {
    name: 'HeadBar',
    props: ['background-color', 'MenuSlideFrom', 'color', 'hover-color', 'vision'],
    data: function() {
        return {
            top: 0,
            isOpen: false,
            menuSlideDirection: "",
            getTitle: []
        }
    },
    methods: {
        handleScrollTo: function(target){
            this.isOpen = false
            $('html, body').animate({scrollTop : $('#' + target).offset().top}, 1000, function(){});
            ga("send", {
                "hitType": "event",
                "eventCategory": "headbar",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [headbar click]"
            });
        },
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
            ga("send", {
                "hitType": "event",
                "eventCategory": "hamburger",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [hamburger]"
            });
        }
    },
    created: function() {
        var self = this
        Bus.$on('emitHeadbarTitle', function(msg) {
            console.log(msg.title)
            if(msg.title == undefined){
                return
            }
            self.getTitle.push(msg)
            setTimeout(function(){
                $('.scrollTo-Btn').hover(function(){
                    $(this).css('color', self.backgroundColor)
                    $(this).css('background-color', self.color)
                }, function(){
                    $(this).css('color', self.color)
                    $(this).css('background-color', self.backgroundColor)
                })
            }, 500)    
        })
        if(window.innerWidth > 1024){
            this.menuSlideDirection = 'translate(0, 0)'
        }
        else{
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
        }
        
    },
    mounted: function() {
        var self = this
        if(this.$slots.default != undefined){
            for(let i = 0; i < this.$slots.default.length; i++){
                if(this.$slots.default[i].elm.innerHTML !== undefined && this.$slots.default[i].tag === 'a'){
                    this.$slots.default[i].elm.addEventListener('click', function() {
                        ga("send", {
                            "hitType": "event",
                            "eventCategory": "headbar",
                            "eventAction": "click",
                            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ self.$slots.default[i].elm.href +"]["+ self.$slots.default[i].elm.innerHTML +"]"
                        });  				
                    })
                }
            }
        }
        
        $('.linkOut a').hover(function(){
            $(this).css('color', self.backgroundColor)
            $(this).css('background-color', self.color)
        }, function(){
            $(this).css('color', self.color)
            $(this).css('background-color', self.backgroundColor)
        })
        window.addEventListener('scroll', this.handleScroll);
    },    
}
</script>
<style lang="scss" scoped>
.linkOut{
    text-align: center;
}
.linkOut a{
    background-color: inherit;
    color: inherit;
    height: 60px;
    padding: 0;
    line-height: 60px;
    font-size: 20px;
    text-decoration: none;
    display: block;
}
.scrollTo-Btn{
    background-color: #FFFFFF;
    color: #000000;
    height: 60px;
    padding: 0;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    float: none;
}
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
#vision img{
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
    }
    .logo-block{
        margin-top: 32px;
        padding-left: 60px;
    }
    .logo{
        display: block;
        float: left;
    }
    #vision{
        margin-top: 25px;
    }
    .scrollTo-Btn{
        border-bottom: 1px solid #000000;
        margin-top: 1px;
    }
    .linkOut a{
        border-bottom: 1px solid #000000;
        margin-top: 1px;
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
    .scrollTo-Btn{
        padding: 0 12px;
        color: #fff;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
        float: left;
    }
    .linkOut{
        float: left;
    }
    .linkOut a{
        padding: 0 12px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
        float: left;
    }
}

@media screen and (orientation: landscape) {
    #logo-contain{
        display: none;
    }
}

</style>