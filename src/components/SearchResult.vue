<template>
  <div class="search-result mt-5">
        <v-container class="grey lighten-5" fluid>
          <p class="display-1 font-weight-black">영화검색</p>
          <span v-for="movie in movies" :key="movie.id+'movie'">
            <v-row v-if="!movie.ko_name">
                <v-col :cols="1"></v-col>
                <v-col :cols="2">
                    <v-img :src="movie.img_url" :alt="movie.title" @click="selectMovie(movie.id)" width='200' height="300"></v-img>
                </v-col>
                <v-col :col='7'>
                    <p class="headline font-weight-black">{{movie.title}}</p>
                    <p class="headline font-weight-black">{{movie.title}}</p>
                </v-col>
            </v-row>
          </span>
        </v-container>
        <hr>
        <v-container class="grey lighten-5" fluid>
          <p class="display-1 font-weight-black">배우 검색</p>
          <span v-for="person in movies" :key="person.id+'person'">
            <v-row v-if="!person.title">
                <v-col :cols="1"></v-col>
                <v-col :cols="2">
                    <v-img :src="person.img_url" :alt="person.ko_name" @click="selectPerson(person.id)" width='200' height="300"></v-img>
                </v-col>
                <v-col :col='7'>
                    <p class="headline font-weight-black">{{person.ko_name}}</p>
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
        }
    }
}
</script>

<style>

</style>