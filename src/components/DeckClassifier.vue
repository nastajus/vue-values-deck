<template lang="html">

  <section class="deck-classifier">
    <!-- <h1>deck-classifier Component</h1> -->

    <div>One</div>
    <div>Two</div>
    <div>Three</div>

    <div class="deck-classifier-column">
      <!-- {{ loadColumn(1) }}
      {{ loadColumn(2) }}
      {{ loadColumn(3) }} -->
      
      <DeckCards v-bind:cards="loadColumn(1)"/>
      <DeckCards v-bind:cards="loadColumn(2)"/>
      <DeckCards v-bind:cards="loadColumn(3)"/>

    </div>

    <div class="deck-classifier-column">

    </div>


    <div class="deck-classifier-column">
      
    </div>


  </section>

</template>

<script lang="js">

  import DeckCards from "./DeckCards.vue";

  export default  {
    name: 'deck-classifier',
    components: { 
      DeckCards
    },
    mounted () {

    },
    data () {
      return {
        cards: this.$store.assessment.options
      }
    },
    methods: {
      //equal? 
      //loadColumn () { 
      loadColumn: function(whichColumn) { 

        const chosen = this.$store.assessment.chosen;
        const chosenIds = chosen.filter(choice => choice.rank == whichColumn).map( choice => choice.id )

        // console.log(',', chosenIds);

        const options = this.$store.assessment.options;
        const optionsChosen = options.filter(option => chosenIds.includes(option.id) )
        //const optionsChosen = options.filter(option => option.id.incl )

        console.log('...', optionsChosen);

        return optionsChosen;


        //return this.$store.assessment.chosen.filter( item => item.rank == whichColumn);

        // return this.$store.assessment.chosen 
        //   .filter( item => item.rank == whichColumn) 
        //   .filter( item2 => this.$store.assessment.options.includes(item2.id))



        // let array1 = this.$store.assessment.chosen.filter( item => item.rank == whichColumn) 

        // let array2 = array1.filter( item2 => this.$store.assessment.options.includes(item2.id))

        // let array3 = this.$store.assessment.options.filter( thingy => array2.includes(thingy.id))

        // console.log(array3);

        // return array1;



        //oohh wait .. i *THOUGHT* briefly needs map ... *BUT NO*

          //let new_array = arr.map(function callback( currentValue[, index[, array]]) {  return element for new_array }[, thisArg])

          //.map( () => _ ) 
          // .map( item <<from first array, before ___.map>>  =>  << return from second array, reference it here >> ) 

        //no, filter a second time
        // array1.filter(value => array2.includes(value))

        
      }

    },
    computed: {
      //equal? 
      //loadColumns () { 
      //loadColumns: function() { }
    }
}


</script>

<style scoped lang="scss">
  .deck-classifier {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 33px auto; //hack due to `grid-template-rows: 6fr 1fr` in #app
    //                  ^^^^
    //                  DO NOT WANT, BUT... 
    // my using `grid-template-rows: 6fr 1fr;` in parent #app forced it
    // even worse: need "33px" to be dynamic... > so maybe preprocess vars..
    // so ideally >>> this top first row is "auto-small", and second row is "auto-big", up until the maximum ratio established by the parent in #app, namely 6/7's of the page height. Hmm... Decently complex
  }

  .deck-classifier-column {
    text-align: left;
    margin: 0 30px;
  }

</style>
