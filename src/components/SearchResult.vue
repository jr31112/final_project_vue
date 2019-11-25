<template>
  <div class="search-result">
      <h3>영화검색</h3>
      <div v-for="movie in movies" :key="movie.id+'movie'">
          <div v-if="movie.title">
              <img :src="movie.img_url" :alt="movie.title">
          </div>
      </div>
      <hr>
      <h3>인물검색</h3>
      <div v-for="movie in movies" :key="movie.id+'actor'">
          <div v-if="!movie.title">
              <img :src="movie.img_url" :alt="movie.title">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'SearchResult',
    props:{
        movies:{
            type:Array,
            required:true
        },
    },
}
</script>

<style>

</style>