import Vue from 'vue'
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false

new Vue({
  computed: {
    // options() {
    //   return store.assessment.options
    //   //return store.assessment.getOptions
    // }

    // getOptions() {
    //   return store.assessment.options
    // }
  },

  // store: store, ECMA5
  store, //ECMA6
  render: h => h(App)
}).$mount('#app')
