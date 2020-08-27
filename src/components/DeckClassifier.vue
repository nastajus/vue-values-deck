<template lang="html">

  <section class="deck-classifier"> <!-- style="grid" -->
    <!-- <h1>deck-classifier Component</h1> -->

    <div>One</div>
    <div>Two</div>
    <div>Three</div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'deck-classifier',
    props: [],
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
  .deck-classifier {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  // .container {
  //   display: grid;
  // }
</style>
