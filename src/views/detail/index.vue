<template>
  <div>
    详情
  </div>
</template>

<script>
export default {
  name: 'detail',
  created () {
    this.fetchProductDetail()
  },
  methods: {
    async fetchProductDetail () {
      const id = this.$route.params.id
      const res = this.$api.product.detail(id)
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
