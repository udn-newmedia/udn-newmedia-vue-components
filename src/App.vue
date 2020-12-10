<template>
  <Example />
</template>

<script>
import Example from '@/views/Example.vue'
import useRWDMethods from '@/compositionAPI/useRWDMethods'
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'App',
  components: {
    Example,
  },
  setup() {
    const { handleResize } = useRWDMethods()

    onMounted(() => {
      window.addEventListener('resize', handleResize, true)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize, true)
    })
  },
}
</script>
