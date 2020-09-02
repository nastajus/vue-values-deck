<template lang="html">

  <section class="deck-carousel-remaining">
    <h1>deck-carousel-remaining Component</h1>
    <DeckCard v-for="card in cards" v-bind:key=card.id v-bind:card="card"/>
  </section>

</template>

<script lang="js">

  import DeckCard from "./DeckCard.vue";
  //import { mapGetters, mapActions } from "vuex";

  export default  {
    name: 'deck-carousel-remaining',
    components: { 
      DeckCard
    },
    mounted () {

    },
    data () {
      return {
        // cards: this.$store.assessment.options
        // "TypeError: Cannot read property 'options' of undefined"

        // cards: this.$store.getOptions
        // cards: this.$store.getOptionss
        // no errors... but nothing works neither... 

        //tells me not recognized/passed/accessed correctly...
        //at least may not be appropriate to bind this way inside data() presently...
        
        // cards: getOptions_getOptions_getOptions //no defined
        // cards: this.getOptions_getOptions_getOptions
        // no errors, but nothing works neither... 
      }
    },
    methods: {

    },
    computed: {
        //my guesses from piecing together internet bits...

        // getOptions_getOptions_getOptions () {
        //     return this.$store.getOptions
        // }

        //traversy

    }
}


</script>

<style scoped lang="scss">
  .deck-carousel-remaining {

  }
</style>
