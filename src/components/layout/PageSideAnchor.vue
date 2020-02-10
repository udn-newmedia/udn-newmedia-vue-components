<template>
  <div class="page-side-anchor">
    PageSideAnchor
  </div>
</template>

<script>
import { autoResize_2, sendGaMethods } from '@/mixins/masterBuilder.js';

export default {
  name: 'PageSideAnchor',
  mixins: [autoResize_2, sendGaMethods],
}
</script>

<style lang="scss" scoped>
.page-side-anchor {
  
}
</style>