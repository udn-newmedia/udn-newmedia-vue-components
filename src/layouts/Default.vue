<template>
  <div class="default-layout">
    <slot name=progress />
    <slot name=header />
    <main><slot name=main /></main>
    <slot name=footer />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>

<style lang="scss">
@import '~/style/main.scss';
</style>