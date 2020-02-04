<template>
  <div class="header-bar-simplified">
    <HeaderHamburger :theme="theme" />
  </div>
</template>

<script>
import HeaderHamburger from '@/components/header/HeaderHamburger.vue';
import HeaderMenuSimplified from '@/components/header/HeaderMenuSimplified.vue';
import UdnLogo from '@/components/ui/UdnLogo.vue';

export default {
  name: 'HeaderBarSimplified',
  components: {
    HeaderHamburger,
    HeaderMenuSimplified,
    UdnLogo
  },
}
</script>

<style lang="scss" scoped>

</style>