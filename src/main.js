import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const store = Vue.observable({
  assessment: {
    options: [
      { id: 1, src: require(`@/assets/logo.png`) }, 
      { id: 2, src: require(`@/assets/logo-blue.png`) }, 
      { id: 3, src: require(`@/assets/logo-violet.png`) }, 
      { id: 4, src: require(`@/assets/logo-yellow.png`) }, 
    ],
    //~repurpose as loader from .. api ..on backend that fetches file system..~
    // add(value) {
    //   store.assessment.options.push(value);
    // }
    chosen: [
        // { rank: 'very', ids: [1] }, 
        // { rank: 'somewhat', ids: [2] },
        // { rank: 'not', ids: [3, 4] }

        // { rank: 'very', id: 1 }, 
        // { rank: 'somewhat', id: 2 },
        // { rank: 'not', id: 3 },
        // { rank: 'not', id: 4 }

        { rank: 1, id: 1 }, 
        { rank: 2, id: 2 },
        { rank: 3, id: 3 },
        { rank: 3, id: 4 }
    ],

    // Choices: { 
    //   VERY: 1,
    //   SOMEWHAT: 2, 
    //   NOT: 3
    // }
    //Object.freeze(Choices)
    choose(id, rank, originArray) { 
      store.assessment.chosen.push({rank, id})
      originArray.filter( item => item.id = id ) // this permits me to "re-choose" between any of the columns and the "original source" array

    } 
  }
});

Vue.prototype.$store = store;

new Vue({
  render: h => h(App)
}).$mount('#app')
