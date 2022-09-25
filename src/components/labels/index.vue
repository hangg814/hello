<template>
  <div>
    <label v-for="(item, index) in list" :key="index">{{item}}</label>
  </div>
</template>

<script>
export default {
  name: 'labels',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  div{
    display: flex;
    label{
      padding: 0.05rem 0.2rem;
      background: $color-link-base;
      border-radius: 0.3rem;
      margin-right: 0.05rem;
      color: $white;
    }
  }
</style>
