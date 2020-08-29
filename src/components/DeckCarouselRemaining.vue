<template lang="html">

  <section class="deck-carousel-remaining">
    <h1>deck-carousel-remaining Component</h1>
    <div v-for="card in cards" v-bind:key=card.id>{{card}}

      <!-- <img v-bind:src="require(card.src)"> -->
      <!-- <img v-bind:src="require(`card.src`)"> -->
      <!-- <img v-bind:src=`require("card.src")`> told never do  -->
      
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
</style>
