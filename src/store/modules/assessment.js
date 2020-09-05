
const state = {
assessment: {

    //design: only use "*ToLoad" objects during loading phase with "load()".
    optionsToLoad: [
        { id: 1, src: require(`@/assets/logo.png`) }, 
        { id: 2, src: require(`@/assets/logo-blue.png`) }, 
        { id: 3, src: require(`@/assets/logo-violet.png`) }, 
        { id: 4, src: require(`@/assets/logo-yellow.png`) }, 
    ],

    chosenToLoad: [
        {id: 1, rank: 1 },
        {id: 3, rank: 3 },
        {id: 4, rank: 3 }
    ], 

    //design: only use "*chosen" objects in app once populated from "load()".
    optionsUnchosen: [],

    optionsChosen: [],

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

    toggleOption: ( id, bool ) => state.assessment.optionsToLoad.find(id)['classifiable'] = bool,

};

const actions = { 

    //use static dummy starting data.. to be run-time dynamically filter from `chosen` and placed into  `optionsUnchosen`, and use then use just `optionsUnchosen` as the external accessor (getter). 

    //question: is this semantically an `action` or an `mutation`? probably need to rewrite somewhat these functions
    load: () => {

        //1. extract array of `IDs` stored in `chosenToLoad`
        const chosen = state.assessment.chosenToLoad
        const chosenIds = chosen.map(choice => choice.id)

        //2. extract array of `CARDs` stored in `optionsToLoad` from matchiing array of `IDs`
        const optionsToLoad = state.assessment.optionsToLoad
        const optionsChosen = optionsToLoad.filter(option => chosenIds.includes(option.id))

        //3. extract array delta matches between `optionsChosen` and `optionsToLoad`: excluded
        const excluded = optionsToLoad.filter( opt => !optionsChosen.includes(opt) ) 
        state.assessment.optionsUnchosen = excluded

        //4. extract array delta matches between `optionsChosen` and `optionsToLoad`: included
        const included = optionsToLoad.filter( opt => optionsChosen.includes(opt) ) 

        //5. get "extra property" of `rank` in `chosenToLoad` "added" onto `included` 
        //merging two disparate object arrays
        // You could use an arbitrary count of arrays and map on the same index new objects.
        const includedRanked = [chosen, included].reduce((a, b) => a.map((c, i) => Object.assign({}, c, b[i])));

        state.assessment.optionsChosen = includedRanked

    },

    //rank == column (a number, between 1 to 3)
    showColumn: (rank) => {
        //question: how much type checking is acceptable/desirable in javascript?
        if (typeof rank !== "number") return;
        return optionsToLoad.filter()

    },

    choose: ( id, rank ) => {
        //classifyOption(id, rank)
        commit('classifyOption', id, rank ) 

        //toggleOption(id, false)
        commit('toggleOption', id, false )

    },

    unchoose: ( id, rank ) => {
        declassifyOption(id, rank)
        toggleOption(id, true)
    },
};


const getters = { 
    unchosen: (state) => state.assessment.optionsUnchosen,

    //  vuex getter with parameter
    //    getByIndex: state => index => state.someArray[index]

    //chosen: (state) => (column) => state.assessment.chosen[column]
    chosen: (state) => (column) => state.assessment.optionsChosen.filter(choice => choice.rank == column )

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
 