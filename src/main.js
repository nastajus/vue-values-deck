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
    choose(id, rank, originArray) { // is.. pass.. by.. ref ... 
      //store.assessment.chosen.push__({rank__, woopssss___ })
      //store.assessment.chosen[rank].pushIfNotExists...()
      store.assessment.chosen.push({rank, id})
      //store.assessment.options.filter( () => id = id)
      //store.assessment.options.filter( item => item.id = id) // at least disambiguates...
      originArray.filter( item => item.id = id ) // this permits me to "re-choose" between any of the columns and the "original source" array

      //option 1: A) find index, then B) splice that index
      //option 2: filter( ~callback~ )  in flavor OLD or NEW (lambda arrow)
        //array.filter(callback(element, index, arr), thisValue
        //array.filter(item => item.name === criteria)

    } 



  }
});

Vue.prototype.$store = store;

new Vue({
  render: h => h(App)
}).$mount('#app')
