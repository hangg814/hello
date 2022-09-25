<template>
  <div class="box" :class="{
    [layout]: true
  }">
    <nav>
      <a href="javascript:;"
        v-for="(item, index) in tabs"
        :key="index"
        :class="{
          active: activeIndex === index
        }"
        @click="change(index)"
      >{{item[tabName]}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tabNav',
  props: {
    tabs: Array,
    tabName: {
      type: String,
      default: 'text'
    },
    layout: {
      type: String,
      default: 'row'
    }
  },
  watch: {
    tabs(){
      this.activeIndex = 0
    }
  },
  data () {
    return {
      activeIndex: 0, // 默认为第一个显示 
    }
  },
  methods: {
    change(index){
      this.activeIndex = index  //触发哪个下标那个就是active
      this.$emit('change', index, this.tabs[index])
    }
  }
}
</script>
<style lang="scss" scoped>
  .box{
    nav{
      background: $white;
      padding: 0.2rem 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: auto;
      a{
        font-weight: 400;
        color: #4A4A4A;
        font-size: 26px;
        padding: 0 0.2rem;
        flex-shrink: 0;
        &.active{
          color: $color-link-base;
          font-size: 32px;
          font-weight: 600;
        }
      }
    }
    &.column{
      @include wh(1.7rem, 100%);
      nav{
        @include wh(100%, auto);
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
