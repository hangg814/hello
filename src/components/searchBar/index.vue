<template>
  <div class="searchBar">
    <div class="input">
      <input type="text" v-model="val" placeholder="请输入商品名称" @keydown="search"/>
    </div>
    <div class="search-wrap" v-show="show">
      <div class="search-content">
        <div v-for="(item, index) in searchList" :key="index">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    value: String,
    clear: Boolean,
    searchList: []
  },
  data () {
    return {
      val: ''
    }
  },
  
  watch: {
    val () {
      this.$emit('search', this.val)
    },
    value () {
      this.val = this.valueg
    }
  },
  computed: {
    show () {
      return this.searchList.length >= 1;
    }
  },
  methods: {
    search () {
      this.$emit('search', this.val)
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBar{
  .input{
    @include wh(100%, auto);
    display: flex;
    justify-content: center;
    padding: 0.2rem 0.2rem;
    box-sizing: border-box;
    input{
      @include wh(100%, 0.64rem);
      background: #f6f6f6;
      border-radius: 0.65rem;
      padding-left: 0.3rem;
      border: 0;
      outline: none;
    }
  }
  .search-wrap{
    position: fixed;
    top: 1.08rem;
    width: 100%;
    bottom: 0;
    .search-content{
      @include wh(100%, 100%);
      background: #f6f6f6;
    }
  }
}
</style>
