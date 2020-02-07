<template>
  <div class="footer-editor article">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FooterEditor',
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.footer-editor {
  width: 325px;
  @include smob {}
  @include pad {}
  @include pc {
    width: 500px;
  }

  div {
    position: relative;
    width: 100%;
    display: flex;

    p {
      flex-shrink: 0;
      margin-bottom: 0;
      color: #7b7a7a;
      white-space: nowrap;
      &:first-child {
        width: 45%;
        text-align: right;
        padding-right: 10px;
        @include pc {
          width: 50%;
        }
      }
      &:last-child {
        width: 55%;
        text-align: left;
        padding-left: 10px;
        @include pc {
          width: 50%;
        }
      }
    }
  }
}
</style>