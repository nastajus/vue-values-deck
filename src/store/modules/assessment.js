
const state = {
  assessment: {
    options: [
      { id: 1, show: true, src: require(`@/assets/logo.png`) }, 
      { id: 2, show: true, src: require(`@/assets/logo-blue.png`) }, 
      { id: 3, show: true, src: require(`@/assets/logo-violet.png`) }, 
      { id: 4, show: true, src: require(`@/assets/logo-yellow.png`) }, 
    ],
    chosen: [
      {id: 1,  rank: 1 }, 
      {id: 3,  rank: 3 },
      {id: 4,  rank: 3 }
    ],
  }
};

const mutations = { 
    //moveOptionBetween: (originArray, targetArray) => 

    //assign to `chosen` with INPUT{id, column#(aka: rank)}.
    classifyOption: (id, rank) => state.assessment.chosen.push( {id, rank} ),
    //is this good design in javascript?? terrible in js??

    declassifyOption: (id, rank) => { 
        //1 of 2: remove from `chosen`
        const id = state.assessment.chosen.indexOf( id );
        state.assessment.chosen.splice(id, 1);

        //2 of 2: show again:
        toggleOption( id, true );
    },

    toggleOption: ( id, bool ) => state.assessment.options.find(id)[show] = bool,

};

const actions = { 
    choose: ( id, rank ) => {
        classifyOption(id, rank);
        //toggleOption
    }
};


const getters = { 
  allOptions: (state) => state.assessment.options
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
    mutations
    //,actions
}