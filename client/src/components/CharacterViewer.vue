<template>
  <div class="character-viewer">
    
    <div class="wrapper">
      <div class="card" v-for="(character, index) in characters" v-bind:key="index">
        <CharacterCard :profession=character.profession :race=character.race :character=character />
      </div>
    </div>
  </div>
</template>


<script>

import CharacterCard from './CharacterCard'

export default {
  name: 'CharacterViewer',
  components: {
        CharacterCard
    },
  props: {
    characters: Array
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.character-viewer {
   position: relative;
    top: 10px;
}
.wrapper {
  display: flex;
  flex-flow: row wrap;
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 125px;
  max-width: 75%;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  .card {
    position: sticky;
    top: 300px;
    padding: 40px;
    height: 70%;
    width: 50%;
    font-family: Roboto;
    margin: 50px auto;
    border: 2px solid #ccc;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: #f1e9d2;

  }

  @for $i from 1 through 80 {
  .card:nth-child(#{$i}n) {
    left: $i * 20px;
    left: random(200) + $i * 1px;
    top: random(130) + $i * 1px;
    transform: rotate(random(3) - 2 * 1deg);
  }
}
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>