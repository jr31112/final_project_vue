<template>
  <div class="people-detail">
    <v-container class="grey lighten-5 mt-5">
      <v-row class='mb=6 mt-5 ml-5' justify="center">
        <v-col :cols='4'>
            <v-img v-if="person.img_url && person.img_url != undefined" width='300' height="450" :src="person.img_url" :alt="person.ko_name"></v-img>
            <v-img v-else src="../assets/noimage.jpg" :alt="person.ko_name" width="300" height="450"></v-img>
        </v-col>
        <v-col :cols='8' justify='center'>
            <p class="display-1 font-weight-black">{{person.ko_name}}</p>
            <p>{{person.en_name}}</p>
            <p class="headline font-weight-black">인물정보</p>
            <p class="title font-weight-black">생애</p>
            <p v-if="person.birthday && person.birthday != undefined">{{person.birthday}} ~ {{person.deathday}}</p>
            <p v-else>. . .</p>
            <p class="title font-weight-black">성별</p>
            <p>{{person.gender}}</p>
            <p class="title font-weight-black">출생지</p>
            <p v-if="person.place_of_birth">{{person.place_of_birth}}</p>
            <p v-else>. . .</p>
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

</style>