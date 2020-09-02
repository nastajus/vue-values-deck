<template lang="html">

  <section class="deck-carousel-remaining">
    <h1>deck-carousel-remaining Component</h1>
    <DeckCard v-for="card in allOptionsAvailable" v-bind:key=card.id v-bind:card="card"/>
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
      }
    },
    methods: {

    },
    computed: mapGetters(["allOptionsAvailable"])
    
    //computed: ...mapGetters(["allOptions"]) //spread operator   not valid here    not sure why


}


</script>

<style scoped lang="scss">
  .deck-carousel-remaining {

  }
</style>
