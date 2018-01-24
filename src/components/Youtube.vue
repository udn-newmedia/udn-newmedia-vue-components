<template>
    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="src + '?playsinline=1&rel=0&controls=1&showinfo=0'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: 'Youtube',
    props: ['src']
}
</script>

<style>

</style>
