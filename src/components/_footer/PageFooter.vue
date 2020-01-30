<template>
  <div class="page-footer">
    a
    <img :src="cortana" alt="">
  </div>
</template>

<script>
import cortana from '~/images/cortana.jpg';

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