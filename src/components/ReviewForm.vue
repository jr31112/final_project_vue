<template>
    <div class="ReviewForm">
        <h3>댓글을 입력해주세요</h3>
        <form @submit.prevent="newReview">
            <label for="user_score">평점: </label>
            <input type="number" id="user_score" v-model.number="user_score"><br>
            <label for="content">리뷰: </label>
            <input type="text" id="content" v-model="content"><br>
            <button type="submit">제출</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export default {
    name:'ReviewForm',
    props:{
        movie:{
            type:Object,
            required:true
        }
    },
    data() {
        return {
            new_review : {},
            content : '',
            user_score : 0
        }
    },
    methods:{
        newReview(){
            this.$session.start()
            const token = this.$session.get('jwt')
            this.new_review = {
                'content' : this.content,
                'user_score' : this.user_score
            }
            axios.post(`http://127.0.0.1:8000/api/v1/movies/${this.$props.movie.id}/reviews/${jwtDecode(token).user_id}/`, this.new_review)
            .then( ()=> {
                this.$emit('reviewUpdateEvent')
                this.content = ''
                this.user_score = 0
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>