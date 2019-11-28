<template>
  <div class="people-detail">
    <v-container class="grey lighten-5 mt-5" fluid>
      <v-row id="moviedetail_back" class='mb=6 mt-5' justify="center">
        <v-col :cols='4' class="d-flex align-center justify-center">
          <div>
            <v-img v-if="person.img_url && person.img_url != undefined" width='300' height="450" :src="person.img_url" :alt="person.ko_name"></v-img>
            <v-img v-else src="../assets/noimage.jpg" :alt="person.ko_name" width="300" height="450"></v-img>
          </div>
        </v-col>
        <v-col :cols='8' justify='center' class="d-flex align-center">
          <div>
            <p style="color:white;" class="display-1 font-weight-black">{{person.ko_name}}</p>
            <p style="color:white;">{{person.en_name}}</p>
            <p style="color:white;" class="headline font-weight-black">인물정보</p>
            <p style="color:white;" class="title font-weight-black">생애</p>
            <p style="color:white;" v-if="person.birthday && person.birthday != undefined">{{person.birthday}} ~ {{person.deathday}}</p>
            <p style="color:white;" v-else>. . .</p>
            <p style="color:white;" class="title font-weight-black">성별</p>
            <p style="color:white;">{{person.gender}}</p>
            <p style="color:white;" class="title font-weight-black">출생지</p>
            <p style="color:white;" v-if="person.place_of_birth">{{person.place_of_birth}}</p>
            <p style="color:white;" v-else>. . .</p>
          </div>
        </v-col>
      </v-row>
      <br>
      <p class="headline font-weight-black ml-5" v-if="person.movie_set && person.movie_set.length">연출영화</p>
      <v-row class='mb=6 mt-5 ml-5' v-if="person.movie_set && person.movie_set.length">
        <v-card shaped elevation='10' class="mx-3 my-5" width="300" v-for="movie in person.movie_set" :key="movie.id">
            <v-img v-if="movie.img_url && movie.img_url != undefined" width='300' height="450" :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)"></v-img>
            <v-img v-else src="../assets/noimage.jpg" :alt="person.ko_name" width="300" height="450" @click="selectMovie(movie.id)"></v-img>
            <v-card-title>{{movie.title}}</v-card-title>
            <v-card-text class="text--primary">평점 : {{movie.rating}}</v-card-text>
        </v-card>
      </v-row>
      <p class="headline font-weight-black ml-5" v-if="person.actor_movies && person.actor_movies.length">출연영화</p>
      <v-row class='mb=6 mt-5 ml-5' v-if="person.actor_movies && person.actor_movies.length">
        <v-card shaped elevation='10' class="mx-3 my-5" width="300" v-for="movie in person.actor_movies" :key="movie.id">
            <v-img v-if="movie.img_url && movie.img_url != undefined" width='300' height="450" :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)"></v-img>
            <v-img v-else src="../assets/noimage.jpg" :alt="person.ko_name" width="300" height="450" @click="selectMovie(movie.id)"></v-img>
            <v-card-title class='font-weight-black'>{{movie.title}}</v-card-title>
            <v-card-text class="text--primary">평점 : {{movie.rating}}</v-card-text>
        </v-card>
      </v-row>

        <!-- <div >
            <h2>출연 영화</h2>
            <div >
              <img :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)">
            </div>
        </div> -->
        <!-- <div v-else>
          <h2>제작 영화</h2>
          <div v-for="movie in person.movie_set" :key="movie.id">
            <img :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)">
          </div>
        </div> -->
  </v-container>
  </div>
</template>

<script>
import router from '../router'

export default {
    name:'PeopleDetail',
    props:{
        person:{
            type:Object,
            required:true
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
  #moviedetail_back {
    height: 600px;
    background-color: #41423D;
  }
</style>