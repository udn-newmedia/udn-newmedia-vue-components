<template>
  <div class="copy-right">
    a
    <img :src="cortana" alt="">
  </div>
</template>

<script>
import cortana from '~/cortana.jpg';

export default {
  name: 'CopyRight',
  data() {
    return {
      cortana: cortana,
    }
  },
}
</script>

<style>

</style>