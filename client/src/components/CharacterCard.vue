<template>
    
        <div class="card">
            <div class="content">
              
            <h2>Name: {{character.name}} </h2>
            <h4>Class: {{classInfo.name}} </h4>
            <h4>Race: {{raceInfo.name}} </h4>
          
            

        
      
              <div class="profiles">
                    <div class="profile"><span>{{raceInfo.speed}}</span>Movement</div>
                    <div class="profile"><span>{{raceInfo.size}}</span>Size</div>
                    <div class="profile"><span>D{{classInfo.hit_die}}</span>Hit Die</div>
                    <div class="profile"><span>1</span>Level</div>
                </div>

                <div v-if=raceInfo.traits.length>
                    <h4>Racial Traits:</h4>
                        <ul v-for="(trait, index) in raceInfo.traits" v-bind:key="index">
                            <li> {{trait.name}} </li>
                        </ul> 
                </div>
                <br />

                <div v-if=classInfo.proficiencies.length>
                    <h4>Proficiencies:</h4>
                        <div v-for="(item, index) in classInfo.proficiencies" v-bind:key="index">
                            <p> {{item.name}} </p>
                        </div> 
                </div>

               

            </div>
        </div>

</template>



<script>
import axios from 'axios'

export default {
    name: 'CharacterCard',
    
    props: {
        profession: String,
        race: String,
        character: Object
    },

    data: function () {
        return {
            raceInfo: null,
            classInfo: null
        }
    },

    methods: {
        getRaceInfo: function () {
            let raceUrl = this.race.toLowerCase()
            axios
                .get(`https://www.dnd5eapi.co/api/races/${raceUrl}`)
                .then(response => this.raceInfo = response.data)
        },
        getClassInfo: function () {
            let classUrl = this.profession.toLowerCase()
            axios
                .get(`https://www.dnd5eapi.co/api/classes/${classUrl}`)
                .then(response => this.classInfo = response.data)
        }
    },

    mounted: function () {
        this.getRaceInfo(),
        this.getClassInfo()
    }
 
}

</script>




<style>



.card {
    position: sticky;
    top: 10px;
    height: 400px;
    width: 300px;
    background: #fff;
    font-family: Roboto;
    display: block;
    position: relative;
    margin: 50px auto;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.content {
  position: absolute;
  width: 280px;
  height: 380px;
  margin: 10px;
  text-align: center;
  overflow-y: auto;
  transition: 0.5s 0.3s cubic-bezier(.55, 0, .1, 1);
}

.active .content {
  transform: scale(0.2);
  opacity: 0;
  transition: 0.2s 0.3s cubic-bezier(.55, 0, .1, 1);
}


.profiles {
  display: inline-block;
}

.profile {
  width: 50%;
  height: auto;
  transform: translate(0px, -10px);
  float: left;
  margin: 0 auto;
  overflow: hidden;
  z-index: 2;
  transition: 0.2s cubic-bezier(.55, 0, .1, 1);
  color: #37474f;
}

.profile>span {
  line-height: 40px;
  font-size: 1.2em;
  font-weight: 600;
  display: block;
  font-style: none;
  color: #37474f;
}

.active .profile {
  transform: translate(0px, 0px);
  opacity: 1;
  transition: 0.3s 0.8s cubic-bezier(.55, 0, .1, 1);
}



</style>