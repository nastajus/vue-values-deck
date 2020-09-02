import Vue from 'vue'
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false

new Vue({
  // store: store, ECMA5
  store, //ECMA6
  render: h => h(App)
}).$mount('#app')
