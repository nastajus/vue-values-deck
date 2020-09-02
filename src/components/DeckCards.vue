<template lang="html">
  
  <!-- error  The template root disallows 'v-for' directives -->
  <!-- sigh: extra pointless div makes me sad. -->
  <div> 
    <div v-for="card in cards" v-bind:key="card.id" class="deck-cards">
      <DeckCard v-bind:card="card" />
    </div>
  </div>

</template>



<script lang="js">
  import DeckCard from "./DeckCard.vue";

  export default  {
    name: 'deck-cards',
    components: { 
      DeckCard
    },
    props: ['cards'],
}
</script>



<style scoped lang="scss">
  .deck-cards {
    // on parent not child..
    display: inline-block;
  }
</style>