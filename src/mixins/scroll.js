export default {
  mounted () {
    window.addEventListener('scroll', this.scroll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      const sh = document.querySelector('html').scrollHeight  //  页面总高度
      const ch = document.documentElement.clientHeight        //  可视区域大小
      const st = document.querySelector('html').scrollTop     //  滚动距离
      if (sh - ch < st + 10) {
        this.$options.scrollBottom.call(this)
      }
    }
  }
}