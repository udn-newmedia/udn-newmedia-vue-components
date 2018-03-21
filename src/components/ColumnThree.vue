<template>
  <div class="row">
      <div class="col-md-6 left">
        <img :src="imgRWD1()">
      </div>
      <div class="col-md-6 right">
        <img :src="imgRWD2()">
      </div>
      <div class="col-md-12">
        <img :src="imgRWD3()">
      </div>
      <div class="img-say"><div v-html="imgsay"></div></div>
  </div>
</template>

<script>
export default {
    name: 'ColumnThree',
    props: ['img1', 'img2', 'img3', 'imgweb1', 'imgweb2', 'imgweb3', 'imgsay'],
    created: function(){
      window.addEventListener('resize', () => {
        this.$forceUpdate()
      })
    },
    methods: {
      imgRWD1: function(){
        if(window.innerWidth <= 768){
            return this.img1
        }
        else{
            return this.imgweb1
        }
      },
      imgRWD2: function(){
        if(window.innerWidth <= 768){
            return this.img2
        }
        else{
            return this.imgweb2
        }
      },
      imgRWD3: function(){
        if(window.innerWidth <= 768){
            return this.img3
        }
        else{
            return this.imgweb3
        }
      }
    }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  .img-say{
    font-size: 17px;
    color: gray;
    margin-top: 5px;
  }
  @media screen and (max-width: 767px){
    .col-md-6{
      margin-top: 15px;
      padding: 0;
    }
    .col-md-12{
      margin-top: 15px;
      padding: 0;
    }
    .img-say{
      font-size: 15px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px){
    .col-md-6{
      margin-top: 15px;
      padding: 0;
    }
    .col-md-12{
      margin-top: 15px;
      padding: 0;
    }
  }
  @media screen and (min-width: 1024px){
    .left{
      padding-left: 0;
    }
    .right{
      padding-right: 0;
    }
    .col-md-12{
      padding: 0;
      margin-top: 30px;
    }  
  }
  
</style>
