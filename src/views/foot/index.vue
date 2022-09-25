<template>
  <div>
    <router-view></router-view>
    <nav class="footer">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="item.path"
        active-class="active"
      >
        <img :src="item.icon" class="icon">
        <img :src="item.check_icon" class="icon-select">
        <span>{{item.text}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'foot',
  data () {
    return {
      list: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/image/home.png'),
          check_icon: require('@/assets/image/home-select.png')
        },
        {
          path: '/classification',
          text: '分类',
          icon: require('@/assets/image/classification.png'),
          check_icon: require('@/assets/image/classification-select.png')
        },
        {
          path: '/cart',
          text: '购物车',
          icon: require('@/assets/image/cart.png'),
          check_icon: require('@/assets/image/cart-select.png')
        },
        {
          path: '/my',
          text: '我的',
          icon: require('@/assets/image/my.png'),
          check_icon: require('@/assets/image/my-select.png')
        },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.footer{
  @include wh(100%, 0.98rem);
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 9999;
  bottom: -0.02rem;
  left: 0;
  border-top: 1px solid $color-border;
  background: $white;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px 0 3px 0;
    .icon{
      @include wh(0.52rem, 0.52rem);
    }
    .icon-select{
      display: none;
    }
    span{
      font-size: 0.14rem;
      color: $color-grey;
    }
    &.active{
      .icon{
        display: none
      }
      .icon-select{
        @include wh(0.52rem, 0.52rem);
        display: block;
      }
      span{
        color: $color-primary;
      }
    }
  }
}
</style>
