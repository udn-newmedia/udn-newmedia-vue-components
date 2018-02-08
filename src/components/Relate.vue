<template>
    <div id="report" class="gray-back" :style="{color: color}">
        <div>
            <h6>{{ title }}</h6>
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <a :href="href1" target="_blank" @click="relateClick(text1)">
                        <img :src="img1" />
                        <p :style="{color: color}">{{text1}}</p>
                    </a>
                </div>
                <div class="col-sm-6 col-md-3">
                    <a :href="href2" target="_blank" @click="relateClick(text2)">
                        <img :src="img2" />
                        <p :style="{color: color}">{{text2}}</p>
                    </a>
                </div>
                <div class="col-sm-6 col-md-3">
                    <a :href="href3" target="_blank" @click="relateClick(text3)">
                        <img :src="img3" />
                        <p :style="{color: color}">{{text3}}</p>
                    </a>
                </div>
                <div class="col-sm-6 col-md-3">
                    <a :href="href4" target="_blank" @click="relateClick(text4)">
                        <img :src="img4" />
                        <p :style="{color: color}">{{text4}}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Utils from 'udn-newmedia-utils'

export default {
    name: 'Relate',
    props: ['title', 'color', 'href1', 'img1', 'text1', 'href2', 'img2', 'text2', 'href3', 'img3', 'text3', 'href4', 'img4', 'text4'],
    methods: {
        relateClick: function(target){
            ga("send", {
                "hitType": "event",
                "eventCategory": "relate",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [relate click]"
            });
        }
    }
}
</script>

<style scoped>
    h6 {
        font-size: 17px;
        font-weight: bold;
    }
    #report{
        padding: 50px 0;
        border-top: 1px solid #363434;
        border-bottom: 1px solid #363434;
        color: #363434;
    }
    #report p{
        font-size: 16px;
        font-weight: bold;
    }
    #report a {
        color: #363434;
        text-decoration: none;
    }
    #report a:hover{
        text-decoration: none;
    }
    #report img:hover{
        opacity: .5;
        transition: opacity .2s ease;
    }   
    #report .col-sm-6 img{
        width: 100%;
    }
    @media screen and (max-width: 767px){
        #report{
            padding: 30px 0;
        }
        #report .col-sm-6{
            clear: both;
        }
        .people-contain img{
            width: 100%;
            height: auto;
        }
        #report p {
            font-size: 16px;
            float: left;
            width: 45%;
            margin-top: 10px;
        }
        #report .col-sm-6 img {
            width: auto;
            height: auto;
            float: right;
            width: 50%;
            padding-left: 10px;
            padding-bottom: 10px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        #report .col-sm-6 img{
            width: 100%;
            height: auto;
        }
        #report p{
            margin-top: 10px;
            margin-bottom: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        .row{
            margin-left: -10px;
            margin-right: -10px;
        }
        #report .col-md-3{
            padding-left: 10px;
            padding-right: 10px;
        }
        #report p{
            margin-top: 10px;
        }
    }
</style>