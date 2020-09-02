import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { mapActions } from "vuex";



Vue.config.productionTip = false

new Vue({
  store, //ECMA6

  methods: mapActions(["load"]),    // question: is this even a valid location to do 'load'??

  created() {    
    this.load();
  },  
  
  render: h => h(App)
}).$mount('#app')
