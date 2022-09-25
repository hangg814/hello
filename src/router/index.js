import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/foot'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home')
      },
      {
        path: '/classification',
        component: () => import('@/views/classification')
      },
      {
        path: '/cart',
        component: () => import('@/views/cart')
      },
      {
        path: '/my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
