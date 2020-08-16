<template>
  <div class="character-viewer">
    
    <h1>All Characters</h1>
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

.wrapper {
  margin: 0 auto;
  max-width: 700px;

  .card {
    position: sticky;
    top: 30px;
    padding: 40px;
    height: 400px;
    width: 300px;
    background: #fff;
    font-family: Roboto;
    margin: 50px auto;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s ease-in-out;
  }

  @for $i from 1 through 80 {
  .card:nth-child(#{$i}n) {
    top: $i * 20px;
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






