import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import HostVue from './components/host.vue'


createApp(HostVue).mount('#app')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
