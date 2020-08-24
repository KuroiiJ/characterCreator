<template>
  <div class="character-creator" >
    <label for="character-name">Character Name: </label>
    <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /><br />

    <label for="races-list">Race: </label>
    <select id="races-list" v-model="race" >
      <option v-for="(value, index) in races" v-bind:key="index" v-bind:value="value.name">{{value.name}}</option>
    </select> <br /> <br />


    <label for="classes-list">Class: </label>
    <select id="classes-list" v-model="profession" >
      <option v-for="(value, index) in classes" v-bind:key="index" v-bind:value="value.name">{{value.name}}</option>
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
    classes: Array,
    races: Array
  },
  data: function () {
    return {
      name: null,
      profession: null,
      race: null
    }
  },
  methods: {
    //indevelopment: http://localhost:3000/characterRoutes
    //productin: https://d-and-d-character-creator.herokuapp.com/characterRoutes
    postCharacter: function () {
      axios
        .post('http://localhost:3000/characterRoutes', {
          name: this.name,
          profession: this.profession,
          race: this.race
        })
    }
  },
  // mounted: function () {
  //   console.log(this.classes, this.races)
  // }
 }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.character-creator {
   position: relative;
    top: 50px;
}
</style>