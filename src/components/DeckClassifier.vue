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
        cards: this.$store.assessment.options
      }
    },
    methods: {
      //equal? 
      //loadColumn (whichColumn) { 
      loadColumn: function(whichColumn) { 

        //find match(es)(ing IDs) inside stored `chosens` of ~~initial load~~ 
        const chosen = this.$store.assessment.chosen;
        const chosenIds = chosen.filter(choice => choice.rank == whichColumn).map( choice => choice.id )

        //find match(es)(ing CARDs) inside stored `options` of ~~initial load~~
        const options = this.$store.assessment.options;
        const optionsChosen = options.filter(option => chosenIds.includes(option.id) )

        //remove match(es)(ing CARDs) inside stored `options`
        // ... how? ... 
        // ... which design is good/bad here? ... 
        
        // store design / model design 
        // pros cons debate: 
        //    something should ~always know~ the ~full set~ ... right? 
        //    if i simply ~~move around~~ mutating the ~~original options~~ isn't this some kind of anti-pattern? some kind of ~~data-risk~~ ?
        //    can i have a duplication set... so... load once from an "original source"... but then keep it "as a backup that's entirely separate"... 
        //    it seems there's value in designing this to "move around a singular copy" of whatever particular data piece is at play... 
        //    ... intuitively... my inner compsci sense says... code smell... but my ~~ease of design~~ says it's also *attractive* to model my data structures/functions *on reality* as if <i were moving real cards around without copies>. ... 
        //    ... perhaps better to just make it and get criticism later... or even solicit criticism later... 

        return optionsChosen;
        
      }
    },
    computed: {
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
