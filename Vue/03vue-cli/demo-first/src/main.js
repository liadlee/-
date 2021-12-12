import Vue from 'vue'   //导入vue.js，得到Vue构造函数
import App from './App.vue'   //导入组件App.vue

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')   //类似el,将组件渲染到index.html的#app处
