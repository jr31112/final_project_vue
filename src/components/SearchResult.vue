<template>
  <div class="search-result mt-5">
        <v-container class="grey lighten-5 shaped">
          <p class="display-1 font-weight-black">영화검색</p>
          <span v-for="movie in movies" :key="movie.id+'movie'">
            <v-row v-if="!movie.ko_name" class="d-flex align-center">
                <v-col :cols="1"></v-col>
                <v-col :cols="2">
                    <v-img v-if="movie.img_url && movie.img_url != undefined" :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)" width='200' height="300"></v-img>
                    <v-img v-else src="../assets/noimage.jpg" :alt="movie.title" @click="selectMovie(movie.id)" width='200' height="300"></v-img>
                </v-col>
                <v-col :col='7'>
                    <p class="headline font-weight-black">{{movie.title}}</p>
                    <v-rating class="my-2" length="10" v-model='movie.rating' readonly="readonly"></v-rating>
                    <p class="d-inline" v-for="genre in movie.genres" :key="genre.id">{{genre.name}}  </p>
                    <br>
                    <br>
                    <p class="d-inline">감독 : </p>
                    <p class="d-inline">{{movie.director.ko_name }}</p>
                </v-col>
            </v-row>
          </span>
        </v-container>
        <div style="height:20px">

        </div>
        <v-container class="grey lighten-5">
          <p class="display-1 font-weight-black">배우 검색</p>
          <span v-for="person in movies" :key="person.id+'person'">
            <v-row v-if="!person.title" class="d-flex align-center">
                <v-col :cols="1"></v-col>
                <v-col :cols="2">
                    <v-img v-if="person.img_url && person.img_url != undefined" :src="person.img_url" :alt="person.ko_name" @click="selectPerson(person.id)" width='200' height="300"></v-img>
                    <v-img v-else src="../assets/noimage.jpg" :alt="person.ko_name" @click="selectPerson(person.id)" width='200' height="300"></v-img>
                </v-col>
                <v-col :col='7'>
                    <p class="headline font-weight-black">{{person.ko_name}}</p>
                    <p>{{person.en_name}}</p>
                    <p>{{person.gender}}</p>
                    <p v-if="person.birthday && person.birthday != undefined">{{person.birthday}} ~ {{person.deathday}}</p>
                    <p v-else>생일 정보가 없습니다.</p>
                    <p v-if="person.place_of_birth">{{person.place_of_birth}}</p>
                    <p v-else>출생지 정보가 없습니다.</p>
                    <div v-if="person.movie_set && person.movie_set.length != 0">
                    <p class="d-inline font-weight-black">연출영화 </p>
                    <p class="d-inline" v-for="movie in person.movie_set" :key="movie.id" >{{movie.title}},  </p>
                    <br>
                    <br>
                    </div>
                    <div v-if="person.actor_movies && person.actor_movies.length != 0">
                    <p class="d-inline font-weight-black">출연영화 </p>
                    <p class="d-inline" v-for="movie in person.actor_movies" :key="movie.id">{{movie.title}},  </p>
                    </div>                    
                </v-col>
            </v-row>
          </span>
        </v-container>
  </div>
</template>

<script>
import router from '../router'

export default {
    name:'SearchResult',
    props:{
        movies:{
            type:Array,
            required:true
        },
    },
    methods:{
        selectMovie(movieId){
            router.push({name:'detail', params:{id:movieId}})
        },
        selectPerson(personId){
            router.push({name:'people', params:{id:personId}})
        },
    },
    
}
</script>

<style>

</style>