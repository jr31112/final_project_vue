<template>
    <div class="movie-detail">
        <img :src="movie.img_url" :alt="movie.title">
        <div>
            <h2> {{movie.title}} </h2>
            <p>평점 : {{movie.rating}} </p>
            <!-- <label for="director">감독 :</label>
            <img width="100" :src="movie.director.img_url" id='director' :alt="movie.director.ko_name">{{movie.director.ko_name}} -->
            <br>
            <label for="overview">개요 </label>
            <p id='overview'>{{movie.overview}}</p>
            <iframe id="ytplayer" type="text/html" width="640" height="360" :src="youtube" frameborder="0"></iframe>
        </div>
        <div>
            <h3>출연진</h3>
            <div v-for="actor in movie.actors" :key="actor.id">
                <img :src="actor.img_url" :alt="actor.ko_name" @click="selectPerson(actor.id)">
            </div>
        </div>

    </div>
</template>

<script>
import router from '../router'

export default {
    name:'MovieDetail',
    data(){
        return{
            youtube : 'https://www.youtube.com/embed/3WUw9thZR4k'
            
        }
        
    },
    props:{
        movie:{
            type : Object,
            required: true
        }
    },
    methods:{
        selectPerson(personId){
            router.push({name:'people', params:{id:personId}})
        },
    },
}
</script>

<style>

</style>