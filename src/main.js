import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.scss'
import './assets/css/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




