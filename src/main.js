import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

import tabNav from './components/tabNav'
import productList from './components/productList'
import labels from './components/labels'


import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.min.css'

import '@/assets/iconfont/iconfont.css'
import '@/utils/rem'
import '@/assets/scss/reset.css'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.component('tabNav', tabNav)
Vue.component('productList', productList)
Vue.component('labels', labels)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
