<template>
 	<div id="indicator" :style="{opacity: opacity}">
		<div id="indicator-bar" :style="{width: progress + '%', backgroundColor: color}"></div>
	</div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
export default {
    name: 'Indicator',
    props: ['color'],
    data: function() {
        return{
            progress: 0,
            opacity: 0,
            readProgress: 0
        }
    },
    mounted: function() {
        window.addEventListener('scroll', this.handelScroll)
    },
    methods: {
        handelScroll: function() {
            let currentH = window.pageYOffset
            let totalH = document.body.scrollHeight - window.innerHeight
            this.progress = ((currentH / totalH) * 100).toFixed(2)
            if(Math.floor(this.progress/10) > this.readProgress) {
                for(var i = this.readProgress + 1; i <= Math.floor(this.progress / 10); i++) {
                    console.log("[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [page read " + (i*10) + "%]")
                    ga("send", {
                        "hitType": "event",
                        "eventCategory": "read",
                        "eventAction": "scroll",
                        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [page read " + (i*10) + "%]"
                    });
                }
                this.readProgress = Math.floor(this.progress/10)
            }
            if(currentH < window.innerHeight / 2){
                this.opacity = 0
            }
            else{
                this.opacity = 1
            }
        }
    }
}
</script>

<style scoped>
    #indicator{
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.7s ease;
        background-color: #FFFFFF;
    }
    /* Default Bar Color */
    #indicator-bar{
        background-color: #bf2923;
    }
    @media screen and (max-width: 1024px){
        #indicator{
            height: 2px;
        }
        #indicator-bar{
            height: 2px;
        }
    }
    @media screen and (min-width: 1025px){
        #indicator{
            height: 2px;
        }
        #indicator-bar{
            height: 2px;
        }
    }
</style>