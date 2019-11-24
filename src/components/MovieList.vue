<template>
  <div class="movie-list">
      <h2>이런 영화 어떠세요</h2>
      <div v-for="movie in movies" :key='movie.id'>
          <img :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)">
      </div>
  </div>
</template>

<script>
import router from '../router'
export default {
    name : 'MovieList',
    props: {
        movies: {
            type : Array,
            required: true
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