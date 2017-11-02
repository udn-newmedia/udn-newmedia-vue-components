<template>
    <div id="editor">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'editor',
}
</script>

<style scoped>
    #editor{
        font-size: 15px;
        color: gray;
    }
</style>