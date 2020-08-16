<template>
  <div class="character-viewer">
    
    <h1>All Characters</h1>
    <div class="wrapper">
    <div v-for="(character, index) in characters" v-bind:key="index">
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
<style >
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 80%;
  height: 700px;
  background: rgba(114, 186, 94, 0.05);
  overflow: scroll;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
