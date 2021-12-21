import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
//import rooter from '@/router'  //默认会访问文件夹下index.js
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
