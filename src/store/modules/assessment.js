
const state = {
  assessment: {

    optionsAll: [
      { id: 1, show: true, src: require(`@/assets/logo.png`) }, 
      { id: 2, show: true, src: require(`@/assets/logo-blue.png`) }, 
      { id: 3, show: true, src: require(`@/assets/logo-violet.png`) }, 
      { id: 4, show: true, src: require(`@/assets/logo-yellow.png`) }, 
    ],
    optionsUnchosen: [],

    chosen: [
      {id: 1,  rank: 1 }, 
      {id: 3,  rank: 3 },
      {id: 4,  rank: 3 }
    ],
  }
};

const mutations = { 

    //assign to `chosen` with INPUT{id, column#(aka: rank)}.
    classifyOption: (id, rank) => state.assessment.chosen.push( {id, rank} ),
    //is this good design in javascript?? terrible in js??

    declassifyOption: (id) => { 
        const idd = state.assessment.chosen.indexOf( id );
        state.assessment.chosen.splice(idd, 1);
    },

    toggleOption: ( id, bool ) => state.assessment.optionsAll.find(id)['show'] = bool,

};

const actions = { 

    //use static dummy starting data.. to be run-time dynamically filter from `chosen` and placed into  `optionsUnchosen`, and use then use just `optionsUnchosen` as the external accessor (getter). 
    load: () => {

        //1. find matching `IDs` stored in `chosen`
        const chosen = [...state.assessment.chosen]
        const chosenIds = chosen.map(choice => choice.id)

        //2. find matching `CARDs` stored in `optionsAll`
        const optionsAll = [...state.assessment.optionsAll]
        const optionsChosen = optionsAll.filter(option => chosenIds.includes(option.id))
        
        //3. remove matches stored in `optionsAll`
        const result = optionsAll.filter( opt => !optionsChosen.includes(opt) ) 
        state.assessment.optionsUnchosen = result;

    },

    choose: ( id, rank ) => {
        //classifyOption(id, rank)
        commit('classifyOption', id, rank ) 

        //toggleOption(id, false)
        commit('toggleOption', id, false )


        //fuck if i know it works with 2 params... my example only shows 1 param...... i suppose in fact i've seen a multi-param param before... 

        //mindful programming reminds me to... be okay with the feelings i'm feeling with this... as i'm just experimenting to see what works...

    },

    unchoose: ( id, rank ) => {
        declassifyOption(id, rank)
        toggleOption(id, true)
    },
};


const getters = { 
  allOptionsAvailable: (state) => state.assessment.optionsUnchosen
}; 


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
    actions,
    mutations 
}
 