<template>
  <div id="app" v-show=races >
    <div class="menu" >
      <img alt="Maki" id="header-img" src="./assets/Maki1.jpg"><br/>
      <button v-on:click="toggle='character-viewer'; getCharacters()">View all Characters </button>
      <button v-on:click="toggle='character-creator'; getClasses(); getRaces()">Create New Character </button>
    </div> 
    
    <CharacterViewer v-show="toggle==='character-viewer'" :characters="characters"/>
    <CharacterCreator v-show="toggle==='character-creator'" :classes="classes.results" :races="races.results" />
  </div>
</template>

<script>
import CharacterViewer from './components/CharacterViewer.vue'
import CharacterCreator from './components/CharacterCreator.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    CharacterViewer,
    CharacterCreator
  },
  data: function () {
    return {
      toggle: "character-viewer",
      characters: null,
      classes: null,
      races: null
    }
  },
  methods: {
    getCharacters: function () {
      axios
        .get('https://d-and-d-character-creator.herokuapp.com//characterRoutes')
        .then(response => this.characters = response.data)
    },
    getClasses: function () {
      axios
      .get('https://www.dnd5eapi.co/api/classes')
      .then(response => this.classes = response.data)
    },
    getRaces: function () {
      axios
        .get('https://www.dnd5eapi.co/api/races')
        .then(response => this.races = response.data)
    }
  },
  mounted: function () {
    this.getCharacters(),
    this.getClasses(),
    this.getRaces()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

body {
  background: linear-gradient(#e8e8e8, #e0e0e0);

}
.menu {
  position: sticky;
  top: 30px;
}

#header-img {
    border-radius:50%;
    width: 7%;

}

img:hover {
  box-shadow: 0 0 6px 4px rgba(0, 140, 186, 0.5);
  opacity: 75%;
}



</style>
