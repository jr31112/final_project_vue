<template>
  <div class="movie-detail mt-5">
    <v-container fluid>
      <v-row id="moviedetail_back" class="mb-6">
        <v-col class="d-flex align-center" md="3" offset-md="3">
          <img v-if="movie.img_url && movie.img_url != undefined" :src="movie.img_url" :alt="movie.title" width="300"
            height="450">
          <img v-else src="../assets/noimage.jpg" :alt="movie.title" width="300" height="450">
        </v-col>
        <v-col class="d-flex align-center" md="3">
          <div>
            <v-row>
              <h2 style="color:white;">{{movie.title}}</h2>
            </v-row>
            <v-row>
              <v-col class="pl-0 body-2" v-for="genre in movie.genres" :key="genre.id" style="color:white;">
                {{genre.name}}</v-col>
            </v-row>
            <v-row>
              <p style="color:white;">네이버 평점 {{movie.rating}}</p>
            </v-row>
            <v-row>
              <h3 style="color:white;">Overview</h3>
              <p style="color:white;">{{ movie.overview }}</p>
            </v-row>
            <v-row>
              <h3 style="color:white;">개봉일 : {{movie.release_date}}</h3>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div id="divtrailer">

      <p class="headline font-weight-black">예고편</p>
      <v-row v-if="movie.trailer" class="mb-3 d-flex justify-center">
        <iframe id="ytplayer" type="text/html" width="640" height="360" :src="movie.trailer" frameborder="0"></iframe>
      </v-row>
      <v-row v-else class="mb-3">
        <p>트레일러 영상이 없네여....ㅠㅠㅠ</p>
      </v-row>
      </div>
    <hr class="my-5 mt-8">
      <div id="divdirector">
      <p class="headline font-weight-black">감독</p>
      <v-row v-if="movie.director" class='mb=6 mt-5 ml-5'>
        <v-card shaped elevation='10' class="mx-3 my-5" width="300">
          <v-img v-if="movie.director.img_url && movie.director.img_url != undefined" width='300' height="450"
            :src="movie.director.img_url || 0" id='director' :alt="movie.director.ko_name"
            @click="selectPerson(movie.director.id)"></v-img>
          <v-img v-else src="../assets/noimage.jpg" :alt="movie.title" width="300" height="450"
            @click="selectPerson(movie.director.id)"></v-img>
          <v-card-title class='font-weight-black'>{{movie.director.ko_name}}</v-card-title>
        </v-card>
      </v-row>
      </div>
    <hr class="my-5">
      <div id="divactors">
      <p class="headline font-weight-black">주요 출연진</p>
      <v-row v-if="movie.actors" class='mb=6 mt-5 ml-5'>
        <v-card shaped elevation='10' class="mx-3 my-5" width="300" v-for="actor in movie.actors" :key="actor.id">
          <v-img v-if="actor.img_url && actor.img_url != undefined" width='300' height="450" :src="actor.img_url"
            :alt="actor.ko_name" @click="selectPerson(actor.id)"></v-img>
          <v-img v-else src="../assets/noimage.jpg" :alt="movie.title" width="300" height="450"></v-img>
          <v-card-title class='font-weight-black'>{{actor.ko_name}}</v-card-title>
        </v-card>
      </v-row>
      </div>
    </v-container>
    <v-container id="reviewForm">
          <hr class="my-5">
      <div style="width: 500px" class="mx-auto">
        <review-form :movie='movie' @reviewUpdateEvent='reviewUpdate' />
      </div>
    </v-container>
        <review-detail :reviews='movie.review_set || []' @reviewUpdateEvent='reviewUpdate' />
  </div>
</template>

<script>
  import router from '../router'

  import ReviewForm from '@/components/ReviewForm.vue'
  import ReviewDetail from '@/components/ReviewDetail.vue'

  export default {
    name: 'MovieDetail',
    props: {
      movie: {
        type: Object,
        required: true
      }
    },
    components: {
      ReviewForm,
      ReviewDetail,
    },
    methods: {
      selectPerson(personId) {
        router.push({
          name: 'people',
          params: {
            id: personId
          }
        })
      },
      reviewUpdate() {
        this.$emit('reviewUpdateEvent')
      },
    },
  }
</script>

<style>
  #moviedetail_back {
    height: 530px;
    background-color: #41423d;
  }
</style>