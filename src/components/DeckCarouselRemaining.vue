<template lang="html">

  <section class="deck-carousel-remaining">
    <h1>deck-carousel-remaining Component</h1>
    <div v-for="card in cards" v-bind:key=card.id class="card">
      <DeckCard v-bind:card="card"/>
    </div>
  </section>

</template>

<script lang="js">

  import DeckCard from "./DeckCard.vue";

  export default  {
    name: 'deck-carousel-remaining',
    components: { 
      DeckCard
    },
    props: ['cards'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .deck-carousel-remaining {

  }
</style>
