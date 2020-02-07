<template>
  <div class="page-side-anchor">
    PageSideAnchor
  </div>
</template>

<script>
import autoResize from '@/mixins/autoResize_2.js';
import sendGaMethods from "@/mixins/sendGaMethods.js";
export default {
  name: 'PageSideAnchor',
  mixins: [autoResize, sendGaMethods],
}
</script>

<style lang="scss" scoped>
.page-side-anchor {
  
}
</style>