<template>
  <a target="_blank" :href="setProps('href')">
    <div class="question-button">{{setProps('text')}}</div>
  </a>
</template>

<script>
import setProps from '../mixin/setProps.js'
export default {
  name: 'Question',
  mixins: [setProps],
  props: {
    href: {
      type: String
    },
    jsonProps: {
      type: Object,
      default: null
    },
    text: {
      type: String,
      default: '請填寫閱讀體驗問卷'
    }
  }
}
</script>

<style scoped>
  a:hover{
    text-decoration: none;
  }
  .question-button{
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    height: 70px;
    border-radius: 35px;
    border: solid 2px #DCDCDC;
    background-color: #FFFFFF;
    box-shadow: 0 0 5.6px 0.4px rgba(53, 53, 53, 0.3);
    text-align: center;
    color: #636363;
    letter-spacing: -0.4px;
    font-size: 18px;
    line-height: 70px;
  }
  @media screen and (min-width: 1024px){
    .question-button{
      height: 100px;
      line-height: 100px;
      margin: 0 auto;
      border-radius: 50px;
    }
  }
</style>
