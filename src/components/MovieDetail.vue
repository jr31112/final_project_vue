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
        </div>
        <div>
            <h3>출연진</h3>
            <div v-for="actor in movie.actors" :key="actor.id">
                <img :src="actor.img_url" :alt="actor.ko_name">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'MovieDetail',
    props:{
        movie:{
            type : Object,
            required: true
        }
    },
}
</script>

<style>

</style>