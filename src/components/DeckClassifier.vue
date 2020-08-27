<template lang="html">

  <section class="deck-classifier">
    <!-- <h1>deck-classifier Component</h1> -->

    <div>One</div>
    <div>Two</div>
    <div>Three</div>

    <div class="deck-classifier-column">
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
    </div>

    <div class="deck-classifier-column">

    </div>


    <div class="deck-classifier-column">
      
    </div>


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

  .deck-classifier-column {
    text-align: left;
    margin: 0 30px;
  }
</style>
