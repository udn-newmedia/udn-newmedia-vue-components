<template>
    <div class="quote-contain" v-bind:style="{ 'border-top-color': borderColor, 'border-bottom-color': borderColor}">
        <div class="quote-text" v-html="text" v-bind:style="{color: color}"></div>
        <div class="quote-ref">{{refer}}</div>
    </div>
</template>

<script>
export default {
    name: 'Quote',
    props: ['text', 'refer', 'color', 'borderColor']
}
</script>

<style scoped>
    .quote-contain {
        width: 100%;
        display: table;
        font-family: "PMingLiU";
        font-weight: bolder;
        font-size: 32px;
        min-height: 125px;
        color: #888888;
        padding: 15px 0;
        border-top: dotted 1px #DCDDDD;
        border-bottom: dotted 1px #DCDDDD;
        position: relative;
        letter-spacing: -1px;
    }
    .quote-text{
        float: left;
        display: table-cell;
        vertical-align: middle;
    }
    .quote-ref{
        float: right;
        font-size: 16px;
        margin-top: 30px;
    }
    @media screen and (max-width: 767px) {
        .quote-contain{
            font-size: 26px;
        }
    }
    @media screen and (min-width: 1024px){
        .quote-contain {
            padding: 50px;
            min-height: 220px;
        }
        .quote-ref{
            font-size: 17px;
        }
    }
</style>