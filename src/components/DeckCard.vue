<template lang="html">

  <section class="deck-card">
    <div class="card">
      <!-- <img src="./../assets/logo.png"> -->
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

  }

  .card {
    margin: 10px;
    display: inline;
  }

  .card img {
    width: 100px;
  }
</style>
