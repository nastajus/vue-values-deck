
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

const mutations = { };

// const actions = { };


const getters = { 
  allOptions: (state) => state.assessment.options
  //mindfulness programming:
  // here i wasn't able to notice the "gaffe" because i "trusted the autocomplete" but in javascript autocomplete is very different from statically typed C#/Java... ... ... essentially i can't trust it? ... there's a whole rabbit hole to contemplate here...
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