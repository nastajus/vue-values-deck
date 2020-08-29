<template lang="html">

  <section class="deck-carousel-remaining">
    <h1>deck-carousel-remaining Component</h1>
    <div v-for="card in cards" v-bind:key=card.id class="card">
      <img v-bind:src="card.src">
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'deck-carousel-remaining',
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
  .card {
    display: inline;
    margin: 10px; //hack-to-fix-with-css-design: duplicating for now in another component
  }

  // hack-to-fix-with-css-design:  
  // blarg styling rules nesting whhhyyy : which way is right way... need to decide consistent standard across app... already diverges with other component...
  .card img {
    width: 100px;
  }
</style>
