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

<style>

</style>