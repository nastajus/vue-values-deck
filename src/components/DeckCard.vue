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

  }

  .card {
    margin: 10px;
    // so i inspected in dev tools, say it inherited from parent... not sure why though...
    // so i google : "css override display inline in children"
    // it auto completes with flexbox as highest result... wasn't thinking flexbox was part of it
    // https://stackoverflow.com/questions/43106626/fix-display-value-changing-on-child-of-flexbox-inline-block-being-overridden
    // unfortunately not the full cause... so... disabling parent flex too

    
    display: inline;
    // display: inline-table;
  }

  .card img {
    width: 100px;
  }
</style>
