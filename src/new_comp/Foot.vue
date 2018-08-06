<template>
  <div id="footer">
    <div class="footer-container">
      <span class="footer-link footer-right-board"><a href="http://www.udngroup.com/" target="_blank">聯合報系</a></span>
      <span class="footer-link footer-right-board"><a href="https://www.facebook.com/udnplus" target="_blank">粉絲團</a></span>
      <span class="footer-link footer-right-board"><a href="http://udndata.com/udnauthority.html" target="_blank">新聞授權</a></span>
      <span class="footer-link"><a href="http://www.udngroup.com/members/udn_privacy" target="_blank">隱私權聲明</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style lang="scss" scoped>
  #footer{
    position: relative;
    z-index: 50;
    background-color: #fff;
    padding-top: 20px;
    border-top: 1px solid #DCDDDD;
    border-top-width: 80%;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      text-decoration: none;
      color: #A3A3A3;
    }
  }
  .footer-container{
    max-width: 880px;
  }
  .footer-link{
      line-height: 1;
      padding: 0px 10px;
  }
  .footer-right-board{
      border-right: 1px solid #A3A3A3;
  }
  @media screen and (max-width: 1024px){
    .footer-link{
      font-size: 14px;
      padding: 0 6px;
    }
  }
  @media screen and (min-width: 1025px){
    .container{
      width: 880px;
      margin: 0 auto;
    }
  }
</style>
