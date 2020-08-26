<template>
    <div class="card-wrapper">
        <div class="content">
          <h2>Name: {{character.name}} </h2>
          <br />  
          <h4>Class: {{classInfo.name}} </h4>
          <h4>Race: {{raceInfo.name}} </h4>      
          <br />  <br />       
      
          <div class="profiles">
                <div class="profile"><span>{{raceInfo.speed}}</span>Movement</div>
                <div class="profile"><span>{{raceInfo.size}}</span>Size</div>
                <div class="profile"><span>D{{classInfo.hit_die}}</span>Hit Die</div>
                <div class="profile"><span>1</span>Level</div>
          </div>

        </div>


        <div class="content">

            <div v-if=raceInfo.traits.length>
                <h4>Racial Traits:</h4>
                    <div v-for="(trait, index) in raceInfo.traits" v-bind:key="index">
                        <p> {{trait.name}} </p>
                    </div> 
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

.card-wrapper {
  display: flex;
  flex-direction: row;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.content {
  margin: 10px;
  text-align: center;
  overflow-y: auto;
  width: 50%;
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