<template>
  <div class="card">
    <!-- <header>
      <h2>{{title}}</h2>
    </header> -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  // props: {
  //   title: String
  // }
}
</script>
<style lang="scss" scoped>
.card{
  header{
    @include wh(100%,0.8rem);
    padding: 0 30px;
    line-height: 0.8rem;
    box-sizing: border-box;
    h2{
      font-size: 26px;
      color: #333;
    }
  }
}
</style>