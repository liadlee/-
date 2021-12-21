import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/components/MyHome.vue'
import MyLogin from '@/components/MyLogin.vue'
import users from "@/components/menus/MyUsers.vue";
import goods from "@/components/menus/MyGoods.vue";
import orders from "@/components/menus/MyOrders.vue";
import rights from "@/components/menus/MyRights.vue";
import settings from "@/components/menus/MySettings.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/MyLogin' },
    { path: '/MyLogin', component: MyLogin },
    {
      path: '/Myhome', component: MyHome,
      children: [
        { path: '', component: users },
        { path: 'users', component: users },
        { path: 'goods', component: goods },
        { path: 'orders', component: orders },
        { path: 'rights', component: rights },
        { path: 'settings', component: settings }
      ]
    }
  ]
})
export default router