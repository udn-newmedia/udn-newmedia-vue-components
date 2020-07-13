<template>
  <picture class="base-picture">
    <!-- <source type="image/webp"> -->
    <source v-if="srcPc" media="(min-width:1025px)" :srcset="srcPc">
    <source v-if="srcPad" media="(min-width:768px)" :srcset="srcPad">
    <img class="base-picture__img"
      :class="{
        'base-picture__img': true,
        'base-picture__img--cover': size === 'cover',
        'base-picture__img--contain': size === 'contain'
      }"
      :src="srcMob"
      :alt="alt"
    >
  </picture>
</template>

<script>
export default {
  name: 'BasePicture',
  props: {
    srcMob: {
      type: String,
    },
    srcPad: {
      type: String,
    },
    srcPc: {
      type: String,
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['cover', 'contain', null].indexOf(value) !== -1;
      }
    },
    alt: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.base-picture {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.base-picture__img {
  width: 100%;
  &.base-picture__img--cover {
    height: 100%;
    object-fit: cover;
  }
  &.base-picture__img--contain {
    height: 100%;
    object-fit: contain;
  }
}
</style>