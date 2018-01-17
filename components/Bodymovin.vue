<template>
    <div id="bodymovin" ref="bodymovin"></div>
</template>

<script>

import * as bodymovin from 'lottie-web'

export default {
  name: 'Bodymovin',
  props: ['jsonfile'],
  mounted: function () {
    bodymovin.loadAnimation({
      container: this.$refs.bodymovin,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.jsonfile
    })
  }
}
</script>

<style scoped>

</style>