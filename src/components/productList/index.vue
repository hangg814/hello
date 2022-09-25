<template>
  <div class="bigBox">
    <router-link tag="dl" :to="`/detail/${item.id}`" v-for="(item, index) in list" :key="index">
      <dt><img :src="item.img" /></dt>
      <dd>
        <header>
          <h1>{{item.name}}</h1>
          <p>累计891212份 / 已拼22222份</p>
          <labels :list="['京东', '自营']" />
        </header>
        <footer>
          <span>￥<b>{{(item.price) - (item.price) * 0.1}}</b></span>
          <s>￥<b>{{item.price}}</b></s>
        </footer>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'productList',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>
  .bigBox{
    background: $white;
    padding-bottom: 0.98rem;
    dl{
      display: flex;
      flex-direction: row;
      padding: 0.3rem;
      dt{
        @include wh(2.4rem,2.4rem);
        img{
          @include wh(2.4rem,2.4rem);
        }
      }
      dd{
        @include wh(100%,2.4rem);
        margin-left: 0.3rem;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        justify-content: space-between;
        header{
          h1{
            @include ellipsis(2);

            font-size: 30px;
            font-weight: 600;
          }
          p{
            font-size: 25px;
            color: $color-text-grey;
          }
          ::v-deep label{
            font-size: 20px;
          }
        }
        footer{
          display: flex;
          align-items: center;
          span{
            font-size: 15px;
            color: $color-link-base;
            font-weight: 700;
            b{
              font-size: 40px;
            }
          }
          s{
            display: inline-block;
            font-size: 15px;
            color: $color-grey;
          }
        }
      }
    }
  }
</style>
