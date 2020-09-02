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

        //yup, very destructive... 
        // saw a refresh wipe away everything... 
        //  not sure how to trigger yet... but i know it'll happen again... 
        //   ok so it happens when I save code changes but don't refresh the page, but the LiveServer refreshes for me. I'm sure there's other lifecycle scenarios where it happens. it's just too risky to mix in such volatile behavior without digging into it much more deeply. just... design this better dude.

        // my frakenstein creation... that fails.
        // let temp = options.filter( () => !options.includes(optionsChosen)) 

        //internet-found
        let newMyArray = options.filter( ( el ) => !optionsChosen.includes( el ) );
        console.log(newMyArray) //this.$store.assessment.options
        this.$store.assessment.options = newMyArray                

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
