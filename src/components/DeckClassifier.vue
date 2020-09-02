<template lang="html">

  <section class="deck-classifier">
    <!-- <h1>deck-classifier Component</h1> -->

    <div>One</div>
    <div>Two</div>
    <div>Three</div>

    <div class="deck-classifier-column" v-for="(column, index) in [1,2,3]" v-bind:key="index">
      <DeckCards v-bind:cards="loadColumn(column)" />
      <DeckCard /> 
    </div>

  </section>

</template>

<script lang="js">

  import DeckCards from "./DeckCards.vue";
  import DeckCard from "./DeckCard.vue";

  export default  {
    name: 'deck-classifier',
    components: { 
      DeckCards,
      DeckCard
    },
    mounted () {

    },
    data () {
      return {
        //cards: this.$store.assessment.options
        //cards: this.store.assessment.getOptions 
        //cards: this.$store.state.assessment.options
        //cards: this.$store.getters.getOptions

        //cards: this.$store.getOptions // error: Cannot read property 'getOptions' of undefined" ... so no $store... 

        //cards: this.getOptions // no errors, but is undefined.
        //cards: this.options // no errors, but is undefined.
        // ... maybe NONE of these data() are appropriate NOW ... 

      }
    },
    methods: {
      //equal? 
      //loadColumn (whichColumn) { 
      loadColumn: function(whichColumn) { 

        //find match(es)(ing IDs) inside stored `chosens` of ~~initial load~~ 
        const chosen = this.getOptions_getOptions;
        console.log(chosen)
        const chosenIds = chosen.filter(choice => choice.rank == whichColumn).map( choice => choice.id )

        //find match(es)(ing CARDs) inside stored `options` of ~~initial load~~
        const options = this.getOptions_getOptions;
        const optionsChosen = options.filter(option => chosenIds.includes(option.id) )


        //remove match(es)(ing CARDs) inside stored `options`
        //internet-found
        let newMyArray = options.filter( ( el ) => !optionsChosen.includes( el ) );
        console.log(newMyArray) 


        // this.getOptions_getOptions = newMyArray 
        //probably should rewrite/centralize all this kind of operations in the store...
        // Computed property "getOptions_getOptions" was assigned to but it has no setter.
        // clearly an invalid design... 

        return optionsChosen;
        
      }
    },
    computed: {
      getOptions_getOptions() {
        return this.$store.getters.getOptions
      }
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
