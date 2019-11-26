<template>
  <div class="detail">
      <movie-detail :movie='movie' @reviewUpdateEvent='selectMovie'/>
  </div>
</template>

<script>
import axios from 'axios'
import MovieDetail from '@/components/MovieDetail.vue'


export default {
    name: 'detail',
    components : {
        MovieDetail,
    },
    data (){
        return {
            movie : {}
        }
    },
    methods:{
        selectMovie(){
            axios.get(`http://127.0.0.1:8000/api/v1/movies/${this.$route.params.id}`, this.options)
            .then(response=> {
                this.movie = response.data
            })
            .catch(error => {
              console.log(error)
            })
        },
    },
    mounted(){
        this.selectMovie()
    },
}
</script>

<style>

</style>