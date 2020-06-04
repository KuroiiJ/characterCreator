<template>
  <div class="character-creator">
    <h1>Character Creator</h1>
    <label for="character-name">Character Name: </label>
    <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /><br />
    <label for="classes-list">Character Class: </label>
    <select id="classes-list" v-model="profession" >
      <option value="rogue">Rogue</option>
      <option value="fighter">Fighter</option>
      <option value="bard">Bard</option>
    </select>
    <p>{{name}}</p>
    <p>{{profession}} </p>   
  </div>
</template>

<script>
export default {
  name: 'CharacterCreator',
  data: function () {
    return {
      name: "",
      profession: ""
    }
  }
 }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
