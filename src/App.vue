<template>
  <div id="app">
    <DeckClassifier/>
    <DeckCarouselRemaining />
  </div>
</template>




<script>
import DeckClassifier from './components/DeckClassifier.vue'
import DeckCarouselRemaining from './components/DeckCarouselRemaining.vue'

export default {
  name: 'App',
  components: {
    DeckClassifier,
    DeckCarouselRemaining,
  }
}
</script>




<style lang="scss">
// SASS style sheet */
// Palette color codes */
// Palette URL: http://paletton.com/#uid=13j0u0kllllaFw0g0qFqFg0w0aF */

$color-primary-0: #236467;	// Main Primary color */
$color-primary-1: #67989A;
$color-primary-2: #417E80;
$color-primary-3: #0D4A4D;
$color-primary-4: #003133;


body {
    background: $color-primary-0;
    color: $color-primary-1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // top right bottom left
  // T R B L 
  // tribble
  margin: 60px 30px 30px;
  display: grid;
  grid-template-rows: 6fr 1fr;
}

</style>
