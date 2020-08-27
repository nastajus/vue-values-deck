<template lang="html">

  <section class="deck-classifier">
    <!-- <h1>deck-classifier Component</h1> -->

    <div class="deck-classifier-column">One
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
      <img src="./../assets/logo.png" width="100px"> 
    </div>
    <div class="deck-classifier-column">Two</div>
    <div class="deck-classifier-column">Three</div>

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
    //display: grid;
    // display: flex;
    // flex-direction: column;

    // flex-wrap: wrap;
    // ////////// align-items: flex-start;
    
    text-align: left;
  }
</style>
