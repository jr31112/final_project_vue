<template>
    <div class="movie-detail">
        <img :src="movie.img_url" :alt="movie.title">
        <div>
            <h2> {{movie.title}} </h2>
            <p>평점 : {{movie.rating}} </p>
            <!-- <label for="director">감독 :</label>
            <img width="100" :src="movie.director.img_url" id='director' :alt="movie.director.ko_name">{{movie.director.ko_name}} -->
            <br>
            <label for="overview">개요 </label>
            <p id='overview'>{{movie.overview}}</p>
            <div v-if="movie.trailer">
                <iframe id="ytplayer" type="text/html" width="640" height="360" :src="movie.trailer" frameborder="0"></iframe>
            </div>
            <div v-else>
                <p>트레일러 영상이 없네여....ㅠㅠㅠ</p>
            </div>
        </div>
        <div>
            <h3>출연진</h3>
            <div v-for="actor in movie.actors" :key="actor.id">
                <img :src="actor.img_url" :alt="actor.ko_name" @click="selectPerson(actor.id)">
            </div>
        </div>
        <review-form :movie='movie' @reviewUpdateEvent='reviewUpdate'/>
        <review-detail :reviews='movie.review_set || []' @reviewUpdateEvent='reviewUpdate'/>
    </div>
</template>

<script>
import router from '../router'

import ReviewForm from '@/components/ReviewForm.vue'
import ReviewDetail from '@/components/ReviewDetail.vue'

export default {
    name:'MovieDetail',
    props:{
        movie:{
            type : Object,
            required: true
        }
    },
    components:{
        ReviewForm,
        ReviewDetail,
    },
    methods:{
        selectPerson(personId){
            router.push({name:'people', params:{id:personId}})
        },
        reviewUpdate(){
            this.$emit('reviewUpdateEvent')
        },
    },
}
</script>

<style>

</style>