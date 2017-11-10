<template>
    <header id="head-bar" :style="{top: top+'px',backgroundColor: BgColor}">
        <div id="icon">
            <a href="./index"><img src="https://udn.com/upf/newmedia/image/udn.png" title="聯合報"></a>
        </div>
        <div id="hbutton-contain" :class="{transformToNone: isOpen}">
            <slot></slot>
            <div id="logo-contain" class="hidden-lg">
                <Logo />
            </div>
        </div>
        <div id="hbutton" class="hidden-lg">
            <div id="nav-icon" @click="handleBurger()" :class="{open: isOpen}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {

    name: 'HeadBar',
    props: ['BgColor'],
    components: { Logo },
    data: function() {
        return {
            top: 0,
            isOpen: false,
        }
    },
    mounted: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function(event) {
            let currentH = window.pageYOffset
            if (currentH < window.innerHeight / 2) {
                this.top = 0
            } else {
                if (window.innerWidth <= 1024) {
                    this.top = 4
                } else {
                    this.top = 6
                }
            }
        },
        handleBurger: function(event) {
            this.isOpen == false ? this.isOpen = true : this.isOpen = false;
        }
    }
}

</script>
<style lang="scss" scoped>
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
    z-index: 0;
    top: 0;
}

#icon img {
    width: 130px;
    margin-top: -3px;
}

#hbutton {
    width: 46px;
    height: 46px;
    top: 0;
    right: 0;
    padding: 0 5px;
    position: absolute;
}

#nav-icon {
    width: 46px;
    height: 46px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    opacity: 1;
}

#nav-icon span {
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
    transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
    top: 12px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
    top: 21px;
}

#nav-icon span:nth-child(4) {
    top: 30px;
}

#nav-icon.open span:nth-child(1) {
    top: 12px;
    width: 0%;
}

#nav-icon.open span:nth-child(2) {
    transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
    transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
    top: 30px;
    width: 0%;
}

#hbutton-contain {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    background-clip: content-box;
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
        text-align: center;
        width: 100%;
    }
    #hbutton-contain {
        padding-top: 46px;
        background-color: #FFFFFF;
        height: 100vh;
        width: 100%;
        transition: transform 0.7s ease;
        transform: translate(110%, 0);
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
}

@media screen and (min-width: 1025px) {
    #head-bar {
        height: 50px;
    }
    #icon {
        height: 50px;
        line-height: 50px;
    }
    .hidden-lg{
        display: none;
    }
}

</style>
