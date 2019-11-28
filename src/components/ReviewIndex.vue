<template>
  <div class="review-index">
     <div id="divactors">
      <v-row class='mb=6 mt-5 ml-5'>
        <v-card @click="gomovie(review.movie.id)" shaped elevation='10' class="mx-3 my-5" width="300"  v-for="review in reviews" :key='review.id' max-height="200">
          <v-card-title style="height:96px;" class='font-weight-black'>{{review.movie.title}}</v-card-title>
            <v-card-text style="height: 60px;">{{review.content}}</v-card-text>
          <v-card-text class="d-flex justify-end align-end flex-wrap">작성자 : {{review.user.username}}</v-card-text>
        </v-card>
      </v-row>
      </div>
  </div>
</template>
<script>
import router from '../router'
export default {
    name:'ReviewIndex',
    props:{
        reviews:{
            type : Array,
            required : true
        }
    },
    methods:{
      gomovie(movieId) {
        router.push({name:'detail', params:{id:movieId}})
      }
    },
}
</script>
<style>
</style>