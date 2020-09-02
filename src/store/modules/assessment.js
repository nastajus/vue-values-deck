

// sigh: vuex__WEBPACK_IMPORTED_MODULE_6__.default.store is not a constructor
// spelling error of "store" vs "Store"...:  const store = new Vuex.store({


//const store = new Vuex.Store({

//state: { 
const state = {
    assessment: {
    options: [
        { id: 1, src: require(`@/assets/logo.png`) }, 
        { id: 2, src: require(`@/assets/logo-blue.png`) }, 
        { id: 3, src: require(`@/assets/logo-violet.png`) }, 
        { id: 4, src: require(`@/assets/logo-yellow.png`) }, 
    ],
    chosen: [
        { rank: 1, id: 1 }, 
        { rank: 3, id: 3 },
        { rank: 3, id: 4 }
    ],
    }
};

//, mutations: {

const mutations = {

    //choose == classify, aka drag from carosel into a classifier column, affecting state here.
    //!!!!choose(id, rank, originArray) { 
        //oh fuck off
        //coding mindfulness noticing... 
        //it's okay... problem solving can go slowly... bit by bit.

        //!!!!!!store.assessment.chosen.push({rank, id})
        //!!!!!!originArray.filter( item => item.id = id ) 
        
        // this permits me to "re-choose" between any of the columns and the "original source" array

    //!!!!} 
};

//, actions: { },
// const actions = { };

// getters: { 
const getters = { 
    //written my way 
    getOptions(state) {
    return state.assessment.options;
    },

    //written traversy's way:
    allOptions: (state) => state.options,
}; 


// uncertain... how to/if will implement method... perhaps migrate into `actions` or into `mutations`?
//  ~repurpose as loader from .. api ..on backend that fetches file system..~
//  add(value) {
//    store.assessment.options.push(value);
//  }



// uncertain... how to enforce ... anything like this ... in js? 
// Choices: { 
//   VERY: 1,
//   SOMEWHAT: 2, 
//   NOT: 3
// }
//Object.freeze(Choices)



//uncertain which data structure style want/will keep...
//fight of readability (in english) versus easier-coding...

//style 1
// { rank: 'very', ids: [1] }, 
// { rank: 'not', ids: [3, 4] }

//style 2
// { rank: 'very', id: 1 }, 
// { rank: 'not', id: 3 },
// { rank: 'not', id: 4 }

//}) 

export default { 
    //state: state //ECMA5
    state,
    getters, 
    mutations
    //,actions
}