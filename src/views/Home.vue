<template>
  <v-container>
  <div class="home">
    <movie-list :movies='movies'/>
    <review/>
  </div>
  </v-container>
</template>
<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import MovieList from '@/components/MovieList.vue'
import Review from '@/components/Review.vue'
export default {
  name: 'home',
  components: {
    MovieList,
    Review,
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
      axios.get(`http://15.165.77.221/api/v1/movies/`, {params:{
        user_id:user_id
      }})
    .then(response => {
      this.movies = response.data
    })
    .catch(() => {
    })
    }
  },
  mounted(){
    this.getMovies()
  },
}
</script>