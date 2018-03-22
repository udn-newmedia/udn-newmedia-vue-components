<template>
    <div class="quote-contain" v-bind:style="{ 'border-top-color': borderColor, 'border-bottom-color': borderColor}">
        <div class="row">
            <div class="col-sm-3" v-if="img">
                <div class="quote-img">
                    <img :src="img">
                </div>
            </div>
            <div :class="dynamicClass">
                <div class="quote-text" v-html="text" v-bind:style="{color: color}"></div>
                <div class="quote-ref" :class="{hidden: !refer}">{{refer}}</div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: 'Quote',
    props: ['text', 'refer', 'color', 'borderColor', 'img'],
    computed: {
        dynamicClass: function(){
            if(this.img != undefined){
                return 'col-sm-9'
            }
            else{
                return 'col-sm-12'
            }
        }
    }
}
</script>

<style scoped>
    .quote-contain {
        width: 100%;
        /* display: table; */
        font-weight: 500;
        font-size: 32px;
        /* min-height: 125px; */
        color: #888888;
        padding: 35px 0;
        border-top: dotted 1px #DCDDDD;
        border-bottom: dotted 1px #DCDDDD;
        position: relative;
        letter-spacing: -1px;
    }
    .quote-text{
        /* float: left; */
        /* display: table-cell; */
        vertical-align: middle;
    }
    .quote-ref{
        float: right;
        font-size: 16px;
        margin-top: 30px;
    }
    @media screen and (max-width: 767px) {
        .quote-img{
            text-align: center;
        }
        .quote-text{
            /* margin-top: 20px; */
        }
        .quote-contain{
            font-size: 26px;
        }
    }
    @media screen and (min-width: 1024px){
        .quote-contain {
            padding: 50px;
            /* min-height: 220px; */
        }
        .quote-ref{
            font-size: 17px;
        }
    }
</style>