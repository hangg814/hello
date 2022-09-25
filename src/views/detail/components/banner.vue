<template>
  <swiper :options="swiperOption" ref="mySwiper" class="banner">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in list" :key="index">
      <img :src="item" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'banner',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          autoplay: true,
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  .swiper-slide{
    width: 100%;
    img {
      @include wh(100vw, 3rem);
    }
  }
  .swiper-pagination{
    font-size: 0.16rem;
    ::v-deep .swiper-pagination-bullet{
      width: 0.16rem;
      height: 0.16rem;
    }
    ::v-deep .swiper-pagination-bullet-active{
      width: 0.16rem;
      height: 0.16rem;
      background: $color-link-base;
    }
  }
}
</style>
