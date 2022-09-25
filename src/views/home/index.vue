<template>
  <div class="box">
    <header-bar />
    <banner :list="banner"/>
    <img-nav :list="mall_nav"/>
    <daily-shopping />
    <div ref="content">
      <tab-nav 
        ref="tabNav"
        class="tabNav"
        :tabs="hot_nav"
        @change="navChange" 
      />
      <product-list :list="product"/>
    </div>
  </div>
</template>

<script>
import headerBar from './components/headerBar'
import banner from './components/banner'
import imgNav from './components/imgNav.vue'
import dailyShopping from './components/dailyShopping.vue'
import scroll from '@/mixins/scroll'
export default {
  name: 'home',
  mixins: [ scroll ],
  data () {
    return {
      banner: [],
      mall_nav: [],
      hot_nav: [],
      product: [],
      productPage: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  components: {
    headerBar,
    banner,
    imgNav,
    dailyShopping
  },
  watch: {
    productPage: {
      handler: 'productList',
      deep: true,
      immediate: true
    },
  },
  created () {
    this.hello()
  },
  scrollBottom () {
    this.productPage.page += 1
  },
  methods: {
    hello () {
      this.$api.home.base().then(res => {
        this.banner = res.data.banner

        this.mall_nav = res.data.mall_nav
        this.hot_nav = res.data.hot_nav //.concat(res.data.data.hot_nav)
      })
    },
    async productList () {
      const res = await this.$api.product.base(this.productPage)
      if (this.productPage.page == 1) {
        this.product = res.data
      } else { 
        this.product = this.product.concat(res.data)
      }
    },
    navChange(index, item) {
      this.productPage.category_id = item.id
      this.productPage.page = 1
      const top = this.$refs.content.offsetTop
      const st = document.querySelector('html').scrollTop     //  滚动距离
      if(st > top ) {
        window.scrollTo(0, top)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  background: #ccc;
  .tabNav{
    position: sticky;
    top: 0;
  }
}
</style>
