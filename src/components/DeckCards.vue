<template lang="html">
  <div class="deck-cards">
    <div v-for="card in cards" v-bind:key="card.id">
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
