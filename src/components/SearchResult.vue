<template>
  <div class="search-result">
      <h3>영화검색</h3>
      <div v-for="movie in movies" :key="movie.id+'movie'">
          <div v-if="movie.title">
              <img :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)">
          </div>
      </div>
      <hr>
      <h3>인물검색</h3>
      <div v-for="person in movies" :key="person.id+'actor'">
          <div v-if="!person.title">
              <img :src="person.img_url" :alt="person.title" @click="selectPerson(person.id)">
          </div>
      </div>
  </div>
</template>

<script>
import router from '../router'

export default {
    name:'SearchResult',
    props:{
        movies:{
            type:Array,
            required:true
        },
    },
    methods:{
        selectMovie(movieId){
            router.push({name:'detail', params:{id:movieId}})
        },
        selectPerson(personId){
            router.push({name:'people', params:{id:personId}})
        }
    }
}
</script>

<style>

</style>