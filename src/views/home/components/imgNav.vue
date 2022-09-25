<template>
  <div class="imgNav">
    <swiper>
      <!-- slides -->
      <swiper-slide 
        v-for="(item, index) in Math.ceil(list.length / 10)"
        :key="index"
      >
        <ul>
          <li v-for="(item, index) in list.slice(index*10,index*10+10)"
            :key="index"
          >
            <img :src="item.icon" />
            <p>{{item.text}}</p>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'imgNav',
  props: {
    list: Array
  },
}
</script>

<style lang="scss" scoped>
.imgNav{
  background: $white;
  margin-top: 0.1rem;
  ul{
    display: grid;
    grid-template-rows: 1.5rem 1.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        @include wh(0.5rem, 0.5rem);
      }
      p{
        font-size: 0.16rem;
      }
    }
  }
}
</style>
