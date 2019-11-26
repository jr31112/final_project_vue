<template>
  <div class="home">
    <movie-list :movies='movies'/>
  </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
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
      this.$session.start()
      let user_id
      if (this.$session.get('jwt')){
        user_id = jwtDecode(this.$session.get('jwt')).user_id
      }
      else {
        user_id = ''
      }

      
      axios.get(`http://127.0.0.1:8000/api/v1/movies/`, {params:{
        user_id:user_id
      }})
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