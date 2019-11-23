<template>
  <div class="home">
    <movie-list :movies='movies'/>
  </div>
</template>

<script>
import axios from 'axios'
// import router from '../router'

import MovieList from '@/components/MovieList.vue'

export default {
  name: 'home',
  components: {
    MovieList,
  },
  data() {
    return {
      movies : [],
    }
  },
  methods : {
    getMovies(){
      axios.get(`http://127.0.0.1:8000/api/v1/movies/`, this.options)
    .then(response => {
      this.movies = response.data
    })
    .catch(error => {
      console.log(error)
    })
    }
  },
  mounted(){
    this.getMovies()
  },
}
</script>