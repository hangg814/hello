<template>
  <div class="shopp">
    <div class="tit">每日必购<span>大家都在买</span></div>
    <div class="pic">
      <img src="@/assets/image/wx1.jpg">
      <img src="@/assets/image/wx.jpg">
      <img src="@/assets/image/wx2.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'dailyShopping'
}
</script>

<style lang="scss" scoped>
  .shopp{
    background: $white;
    margin-top: -0.01rem;
    .tit{
      font-size: 40px;
      padding: 0.2rem 0.4rem;
      box-sizing: border-box;
      font-weight: 600;
      span{
        font-size: 18px;
        margin-left: 5px;
      }
    }
    .pic{
      display: flex;
      justify-content: center;
      img{
        @include wh(33.3%,2.87rem)
      }
    }
    h4{
      font-size: 100px;
    }
    h1{
      font-size: 100px;
      padding-bottom: 0.98rem;
    }
  }
</style>
