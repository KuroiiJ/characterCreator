<template>
  <div id="app" v-show=races >
    <div class="menu" >
      
      <button v-on:click="toggle='character-viewer'; getCharacters()">View all Characters </button>
      <img alt="Maki" id="header-img" src="./assets/wizard.svg">
      <button v-on:click="toggle='character-creator'; getClasses(); getRaces()">Create New Character </button>
    </div> 

    <br /><br /><br /><br /><br />
    <div class="items">
    
      <CharacterViewer v-show="toggle==='character-viewer'" :characters="characters"/>
      <CharacterCreator v-show="toggle==='character-creator'" :classes="classes.results" :races="races.results" />
    </div>
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
    //indevelopment: http://localhost:3000/characterRoutes
    //production: https://d-and-d-character-creator.herokuapp.com//characterRoutes
    getCharacters: function () {
      axios
        .get('http://localhost:3000/characterRoutes')
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
  background: #f5d9d9;
}

button {
  padding: 10px;
  color:darkslategray;
  border-color: darkcyan;
  background: paleturquoise;
  border-radius: 5%;
  font-size: 16pt;
}

button:hover {
  box-shadow: 0 0 3px 4px rgba(0, 140, 186, 0.5);
  opacity: 75%;
}


.menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 20px;
  height: 20%;
}

.items {
  height: 75%;
  position: fixed;
  overflow: scroll;
  width: 100%;
  bottom: 0%;
}
#header-img {
    border-radius:50%;
    width: 7%;
    margin-left: 30px;
    margin-right: 30px;
}
</style>