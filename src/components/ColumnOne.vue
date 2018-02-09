<template>
  <div class="image-contain">
    <img :src="imgRWD1()">
    <div class="img-say">{{imgsay}}</div>
  </div>
</template>

<script>
export default {
    name: 'ColumnOne',
    props: ['img1', 'imgweb1', 'imgsay'],
    created: function() {
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
    .img-say{
      font-size: 15px;
    }
  }
  
</style>
