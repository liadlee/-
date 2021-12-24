import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/components/MyHome.vue'
import MyLogin from '@/components/MyLogin.vue'
import users from "@/components/menus/MyUsers.vue";
import goods from "@/components/menus/MyGoods.vue";
import orders from "@/components/menus/MyOrders.vue";
import rights from "@/components/menus/MyRights.vue";
import settings from "@/components/menus/MySettings.vue";
import userinfo from "@/components/user/MyUserDetail.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: MyLogin, redirect: '/MyLogin' },
    { path: '/MyLogin', component: MyLogin },
    {
      path: '/home', component: MyHome,
      children: [
        { path: '', component: users },
        { path: 'users', component: users },
        { path: 'goods', component: goods },
        { path: 'orders', component: orders },
        { path: 'rights', component: rights },
        { path: 'settings', component: settings },
        { path: 'userinfo/:id', component: userinfo, props: true }
      ]
    }
  ]
})

//设置导航前置守卫
//应该做到对每条路由都有对应的next 否则不跳转，45行的next不能省略
router.beforeEach(function (to, from, next) {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      alert('请先登录')
      next('/MyLogin')
    }
  } else
    next()
})

export default router