<template>
  <div class="page-footer">
    a
    <img :src="cortana" alt="">
  </div>
</template>

<script>
import cortana from '~/img/cortana.jpg';

export default {
  name: 'PageFooter',
  data() {
    return {
      cortana: cortana,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-footer {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>