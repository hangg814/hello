<template>
  <div class="search">
    <search-bar
      v-model="searchkey"
      @search="search"
      clear
      :searchList="tips"
    >
      <template v-slot:scoped>
        <li></li>
      </template>
    </search-bar>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchkey: '',
      tips: ''
    }
  },
  methods: {
    search () {}
  }
}
</script>
<style lang="scss" scoped>
</style>
