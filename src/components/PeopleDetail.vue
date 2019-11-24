<template>
  <div class="people-detail">
      <img :src="person.img_url" :alt="person.ko_name">
      <div v-if="person.actor_movies.length">
          <h2>출연 영화</h2>
          <div v-for="movie in person.actor_movies" :key="movie.id">
              <img :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)">
          </div>
      </div>
      <div v-else>
          <h2>제작 영화</h2>
          <div v-for="movie in person.movie_set" :key="movie.id">
              <img :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)">
          </div>
      </div>
  </div>
</template>

<script>
import router from '../router'

export default {
    name:'PeopleDetail',
    props:{
        person:{
            type:Object,
            required:true
        }
    },
    methods:{
        selectMovie(movieId){
            router.push({name:'detail', params:{id:movieId}})
        }
    }
}
</script>

<style>

</style>