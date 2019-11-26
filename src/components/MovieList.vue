<template>
  <div class="movie-list">
      <h2>이런 영화 어떠세요</h2>
  <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="false" :width='500' :height='500' :autoplay='true'>
    <slide v-for="idx in this.indexs" :key='idx' :index="idx">
        <img :data-index="idx" :src="movies[idx].img_url" :alt="movies[idx].title" @dbclick="selectMovie(movies[idx].id)" width="500px" height="500px">
    </slide>
  </carousel-3d>
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
    data() {
        return {
            indexs : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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