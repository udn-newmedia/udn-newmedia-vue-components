<template>
  <div class="header-anchor">
    <li class="header-anchor__list">
      <ul
        :class="{
          'header-anchor__list__item': true,
          'header-anchor__list__item--active': item.active,
        }"
        v-for="(item, index) in anchorList"
        :key="index"
      >
        <p
          :class="{
            'small': true,
            'white': theme === 'dark',
          }"
        >
          {{item.title}}
        </p>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'HeaderAnchor',
  props: {
    theme: {
      type: String,
    },
  },
  computed: {
    anchorList() {
      return this.$store.state.anchorList;
    }
  },
}
</script>

<style lang="scss" scoped>
.header-anchor {
  position: relative;
  overflow: scroll;
  width: calc(100% - 100px);
  height: 100%;
  margin: 0 auto;
}
li, ul {
  list-style: none;
}
.header-anchor__list {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  padding-right: 50px;
  .header-anchor__list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    margin-right: 20px;
    border-bottom: solid 2px #cf060600;
    transition: .333s ease-in-out;
    cursor: pointer;
    &.header-anchor__list__item--active {
      font-weight: bold;
      border-bottom: solid 2px #cf0606;
    }
  }
}
</style>