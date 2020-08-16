<template>
    
        <div class="card">
            <p>{{profession}} {{race}} {{character.name}}</p>
        </div>

</template>



<script>


export default {
    name: 'CharacterCard',
    
    props: {
        profession: String,
        race: String,
        character: Object
    }

}

</script>




<style>



.card {
    position: sticky;
    top: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    color: #333;
    padding: 80px;
}


</style>