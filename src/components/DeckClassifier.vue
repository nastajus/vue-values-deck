<template lang="html">

  <section class="deck-classifier">
    <!-- <h1>deck-classifier Component</h1> -->

    <div>One</div>
    <div>Two</div>
    <div>Three</div>

    <div class="deck-classifier-column">
      <DeckCard v-bind:card="cards[0]"/>
      <DeckCard v-bind:card="cards[0]"/>

    </div>

    <div class="deck-classifier-column">

    </div>


    <div class="deck-classifier-column">
      
    </div>


  </section>

</template>

<script lang="js">

import DeckCard from "./DeckCard.vue";

  export default  {
    name: 'deck-classifier',
    components: { 
      DeckCard
    },
    mounted () {

    },
    data () {
      return {
        cards: this.$store.deck.cards
      }
    },
    methods: {

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
