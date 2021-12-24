import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home/Home.vue'
import user from '@/views/User/User.vue'
// 安装路由插件
Vue.use(VueRouter)
// 路由规则数组
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/user',
    component: user
  }
]
// 实例化路由
const router = new VueRouter({
  routes
})

export default router
