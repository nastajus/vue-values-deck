

<template lang="html">
  <div class="deck-card" v-bind:class="showBlank" >
    <draggable @mousdown="drag(card ? card : null)">
      <img v-bind:src="card ? card.src : null">
    </draggable>
  </div>
</template>



<script lang="js">
  import draggable from 'vuedraggable'
  import { mapGetters } from "vuex";


  export default  {
    name: 'deck-card',
    components: { draggable },

    props: ['card'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      drag: (card) => console.log(card)

    },
    
    computed: {
      ...mapGetters(["chosen"]), 
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
