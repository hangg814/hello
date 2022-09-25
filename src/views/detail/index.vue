<template>
  <div>
    <banner :list="detailInfo.images" />
    
    <card class="detailInfo-price">
      <div class="price">
        <h1>￥<span>{{detailInfo.price * 0.3}}</span></h1>
        <h2>￥<s>{{detailInfo.price}}</s></h2>
      </div>
      <p>累计销售2233份</p>
    </card>
    <card title="购买记录">
      购买记录
    </card>
    <card title="商品评价">
      商品评价
    </card>
    <card title="猜你喜欢">
      猜你喜欢
    </card>
    <card title="商品详情">
      <div class="detail" v-html="detailInfo.detail"></div>
    </card>

  </div>
</template>

<script>
import banner from './components/banner.vue'
export default {
  name: 'detail',
  data () {
    return {
      detailInfo: {}
    }
  },
  components: {
    banner
  },
  created () {
    this.fetchProductDetail()
  },
  methods: {
    async fetchProductDetail () {
      const id = this.$route.params.id
      const res = await this.$api.product.detail(id)
      this.detailInfo = res.data
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>
.detailInfo-price{
  background: $color-primary;
  color: $white;
  padding: 0 0.3rem;
  box-sizing: border-box;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  .price{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    h1{
      font-size: 28px;
      span{
        font-size: 50px;
      }
    }
    h2{
      font-size: 28px;
      display: inline-block;
    }
  }
  p{
    font-size: 28px;
    margin-top: 0.1rem;
  }
}
.detail{
  ::v-deep img{
    @include wh(100%, auto);
  }
}
</style>
