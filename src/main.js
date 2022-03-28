import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由
import router from './router'
// 引入vuex
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
