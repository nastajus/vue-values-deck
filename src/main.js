import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const store = Vue.observable({
  deck: {
    cards: [
      { id: 1, src: require(`@/assets/logo.png`) }, 
      { id: 2, src: require(`@/assets/logo-blue.png`) }, 
      { id: 3, src: require(`@/assets/logo-violet.png`) }, 
      { id: 4, src: require(`@/assets/logo-yellow.png`) }, 
    ],
    add(value) {
      store.deck.cards.push(value);
    }
  }
});

Vue.prototype.$store = store;

new Vue({
  render: h => h(App)
}).$mount('#app')
