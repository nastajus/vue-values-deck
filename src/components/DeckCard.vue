<template lang="html">
  <div class="deck-card">
    <img v-bind:src="card.src">
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
</style>
