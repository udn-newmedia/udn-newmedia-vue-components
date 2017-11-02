<template>
    <div :style="{backgroundColor: backgroundColor}">
        <div class="container content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['background-color'],
}
</script>

<style scoped>
    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }
    .chart-title{
        font-size: 28px;
    }
    p{
        font-size: 21px;
        margin: 0;
    }
    .img-say{
        font-size: 17px;
        color: gray;
        margin-top: 5px;
    }
    .row{
        margin: 0;
    }
    .col-sm-12, .col-sm-6{
        padding: 0;
    }
    @media screen and (max-width: 767px){
        h2{
            font-size: 26px;
        }
        .chart-title{
            font-size: 26px;
        }
        p{
            font-size: 18px;
            line-height: 32px;
        }
        .content{
            padding: 64px 20px;
        }
        .img-say{
            font-size: 15px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        .container{
            width: 100%;
        }
        .content{
            padding: 64px 100px;
        }
        h2{
            font-size: 30px;
        }
        p{
            font-size: 20px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        .container{
            width: 880px;
        }
        .content{
            padding: 100px 0px;
        }
        p>br{
            line-height: 50px;
        }
    }
</style>