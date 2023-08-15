import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
// 完整引入
// 引入element-ui组件库
import ElementUI from 'element-ui'
// 引入element-ui全部样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
