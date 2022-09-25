<template>
  <header @click="search">
    <a href="javascript:;">
      <i class="iconfont icon-position head-left"></i>
      <span>送至: 北京八维研修学院 ></span>
    </a>
    <a href="javascript:;">
      <i class="iconfont icon-sousuochaxun"></i>
    </a>
  </header>
</template>

<script>
export default {
  name: 'header-bar',
  methods: {
    search(){
      this.$router.push('/search')
    }
  }
};
</script>
<style lang="scss" scoped>
header{
    @include wh(100%, 0.98rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    background: $white;
  a{
    display: flex;
    align-items: center;
    color: $color-grey;
    span{
      font-size: 30px;
      margin-left: 5px;
    }
    i{
      font-size: 30px;
    }
  }
}
</style>
