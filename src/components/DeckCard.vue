

<template lang="html">
  <div class="deck-card" v-bind:class="showBlank" >
    <img v-bind:src="card ? card.src : null">
  </div>
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
      showBlank() {
        // sigh:    error  'card' is not defined  no-undef
        return !this.card ? " is-blank" : " ";
      }
    }
}
</script>



<style scoped lang="scss">
  .deck-card {
    
    //well so this keeps it compressed tightly to inner element width of img.
    display: inline-block;

    margin: 10px;
    border-style: dashed;
    border-width: 4px;
  }

  .deck-card img {
    width: 100px;
  }

  .is-blank {
    background: whitesmoke;
  }
</style>
