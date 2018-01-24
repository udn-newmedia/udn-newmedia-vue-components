<template>
	<div id='page'>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'Page',
  data () {
    return {

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
	.section{
		z-index: 0;

	}
</style>