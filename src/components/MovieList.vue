<template>
  <div class="movie-list">
      <h2>movies</h2>
      <div v-for="movie in movies" :key="movie.id" @click="selectMovie(movie)">
        <img :src="movie.img_url" :alt="movie.title">
      </div>
      <movie-detail :movie="movie"/>
  </div>
</template>

<script>
import axios from 'axios'

import MovieDetail from './MovieDetail.vue'
export default {
  name : 'MovieList',
  props: {
    movies : {
      type: Array,
      required: true
      }
  },
  components: {
    MovieDetail,
  },
  data() {
    return {

    }
  },
  methods : {
    selectMovie(movie) {
      axios.get(`http://127.0.0.1:8000/api/v1/movies/detail/${movie.id}`, this.options)
    .then(response => {
      this.movie = response.data
    })
    .catch(error => {
      console.log(error)
    })
    }
  }
}
</script>

<style>

</style>