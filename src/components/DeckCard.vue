<template lang="html">

  <section class="deck-card">
    <div class="card">
      <img v-bind:src="card.src">
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'deck-card',
    props: ['card'],
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
  .deck-card {
    // on parent not child..
    display: inline-block;

  }

  .card {
    margin: 10px;
  }

  .card img {
    width: 100px;
  }
</style>
