<template>
  <div class="detail" style="margin-top:64px;">
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
            axios.get(`http://15.165.77.221/api/v1/movies/${this.$route.params.id}`, this.options)
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