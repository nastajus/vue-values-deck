<template lang="html">

  <section class="deck-carousel-remaining">
    <h1>deck-carousel-remaining Component</h1>
    {{ allOptions }}
    <DeckCard v-for="card in allOptions" v-bind:key=card.id v-bind:card="card"/>
  </section>

</template>

<script lang="js">

  import DeckCard from "./DeckCard.vue";
  import { mapGetters } from "vuex";

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
    computed: mapGetters(["allOptions"])

    // too many magics... 

    // ~== mindfulness translation: i'm annoyed at the experience I'm going through, which can be broken down into these rational aspects:
    //     1) quoted string can't be control clicked, further abstracting/requiring me to recall more... meaning IDE-click dependency to offload memory is reduced...
    //     2) just magnifies the ~feeling~ i don't get ~how~ this vue/vuex framework is deciding to inject *MY* state in... which.. i suppose it can just be a trust exercise, but, meh.

    // {
        //my guesses from piecing together internet bits...
        
        // getOptions_getOptions_getOptions () {
        //     return this.$store.getOptions
        // }

        //traversy
        // mapGetters(["allOptions"])
        // error  Parsing error: Unexpected token

    // }
}


</script>

<style scoped lang="scss">
  .deck-carousel-remaining {

  }
</style>
