<template>
  <div id="app">
    <Defalut>
      <PageIndicator slot="progress" />
      <HeaderTypeA slot="header" />
      <div slot="main"><h1>Hello</h1></div>
      <PageFooter slot="footer" />
    </Defalut>
  </div>
</template>

<script>
import Defalut from '@/layouts/Default.vue';

import HeaderTypeA from '@/components/header/HeaderTypeA.vue';
import PageIndicator from '@/components/layout/PageIndicator.vue';
import PageFooter from '@/components/footer/PageFooter.vue';

export default {
  name: 'App',
  components: {
    Defalut,
    
    HeaderTypeA,
    PageIndicator,
    PageFooter,
  }
}
</script>

<style lang="sass">

</style>
