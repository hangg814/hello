<template>
  <div class="classifi">
    <div class="wrap">
      <a href="javascript:;" @click="search">搜索校园超市商品</a>
    </div>
    <div class="main">
      <tab-nav 
        ref="tabNav"
        class="leftNav"
        tab-name="categoryName"
        layout="column"
        :tabs="leftNav"
        @change="leftNavChange"
      />
      <div class="right-nav">
        <tab-nav 
          class="rightNav"
          tab-name="categoryName"
          :tabs="rightNav"
          @change="rightNavChange"
        />
        <product-list class="product-list" :list="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from '@/mixins/scroll'
export default {
  name: 'foot',
  mixins: [scroll],
  data () {
    return {
      leftNav: [],
      rightNav: [],
      product: [],
      productPage: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  watch: {
    productPage: {
      handler: 'productList',
      deep: true,
      immediate: true
    },
  },
  created () {
    this.fetchcategory()
  },
  scrollBottom () {
    this.productPage.page += 1
  },
  methods: {
    search () {
      this.$router.push('/search')
    },

    async fetchcategory () {
      const res = await this.$api.product.category()
      this.leftNav = res.data
      this.rightNav =[{
        categoryId: res.data[0].categoryId,
        categoryName: '全部'
      }].concat(res.data[0].children)
      console.log(res);
    },

    async productList () {
      const res = await this.$api.product.base(this.productPage)
      if (this.productPage.page == 1) {
        this.product = res.data
      } else { 
        this.product = this.product.concat(res.data)
      }
    },

    leftNavChange (index, item) {
      this.productPage.category_id = item.categoryId
      this.productPage.page = 1
      this.rightNav = [{
        categoryId: item.categoryId,
        categoryName: '全部'
      }].concat(item.children)
    },

    rightNavChange (index, item) {
      this.productPage.category_id = item.categoryId
      this.productPage.page = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.classifi{
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  background: #fff;
  .wrap{
    background: #fff;
      position: sticky;
      top: 0;
      z-index: 999;
    a{
      @include wh(auto, 0.64rem);
      margin: 17px 30px;
      background: #f6f6f6;
      border-radius: 0.64rem;
      color: #d1d1d1;
      line-height: 0.64rem;
      font-size: 24px;
      padding-left: 0.4rem;
    }
  }
  .main{
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
    padding-bottom: 0.98rem;
    .leftNav{
      background: #fafafa;
      overflow: auto;
      flex-shrink: 0;
      position: fixed;
      top: 0.98rem;
      ::v-deep nav{
        background: #fafafa;
        a{
          font-size: 30px;
          padding: 10px 0;
          display: block;
          width: 100%;
          text-align: center;
          &.active{
            background: $white;
            color: $color-primary;
          }
        }
      }
    }
    .rightNav{
      height: 55px;
      line-height: 55px;
      flex-shrink: 0;
      position: fixed;
      top: 0.98rem;
      z-index: 998;
      width: 100%;
    }
    .right-nav{
      width: 100%;
      background: #fafafa;
      margin-left: 1.72rem;
      flex: 1;
      position: relative;
      top: 30px;
      ::v-deep nav{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        border-bottom: 1px solid #e9e9e9;
        a{
          font-size: 30px;
          display: block;
          text-align: center;
          &.active{
            color: #333;
          }
        }
      }
    }
  }
  .product-list{
    padding-bottom: 0;
    overflow: auto;
    ::v-deep dl{
      dt{
        img{
          @include wh(1.87rem, 1.87rem);
        }
      }
      dd{
        // @include wh(auto, 1.87rem);
        height: 1.87rem;
        flex: 1;
        overflow: hidden;
        h1{
          // width: auto;
          // @include ellipsis(1);
          font-size: 28px;
          width: 100%;
        }
      }
    }
  }
}
</style>
