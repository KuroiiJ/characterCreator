<template>
  <div class="character-creator">
    <h1>Character Creator</h1>
    <label for="character-name">Character Name: </label>
    <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /><br />

    <label for="races-list">Race: </label>
    <select id="races-list" v-model="race" >
      <option v-for="(value, index) in races.results" v-bind:key="index" v-bind:value="value.name">{{value.name}}</option>
    </select> <br /> <br />


    <label for="classes-list">Class: </label>
    <select id="classes-list" v-model="profession" >
      <option v-for="(value, index) in classes.results" v-bind:key="index" v-bind:value="value.name">{{value.name}}</option>
    </select> <br /> <br />

    <button v-on:click="postCharacter"> Create Character </button>
    <p>{{name}}</p>
    <p>{{profession}} </p>   
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'CharacterCreator',
  props: {
    classes: Object,
    races: Object
  },
  data: function () {
    return {
      name: null,
      profession: null,
      race: null
    }
  },
  methods: {
    postCharacter: function () {
      axios
        .post('http://localhost:3000/characterRoutes', {
          name: this.name,
          profession: this.profession,
          race: this.race
        })
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
