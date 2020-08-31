<template lang="html">
  <div class="deck-card">
    _{{card}}_
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
    // on parent not child..
    display: inline-block;
    margin: 10px;
    border-style: dashed;
    border-width: 4px;
  }

  .deck-card img {
    width: 100px;
  }
</style>
