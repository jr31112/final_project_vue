<template>
  <div class="ReviewDetail">
      <h3>다른 유저들의 댓글 입니다.</h3>
      <div v-for="review in reviews" :key=review.id>
          {{review.user.username}}님
          {{review.user_score}}
          {{review.content}}
          <button @click="deleteReview(reviews.id)">삭제</button>
          <button @click="updateReview(reviews.id)">수정</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export default {
    name: 'ReviewDetail',
    props:{
        reviews:{
            type: Array,
            required: true
        }
    },
    methods:{
        deleteReview(reviewId){
            this.$session.start()
            const token = this.$session.get('jwt')
            axios.delete(`http://127.0.0.1:8000/api/v1/reviews/${reviewId}/${jwtDecode(token).user_id}/`, this.options)
            .then(response=>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
        },
        updateReview(reviewId){
            this.$session.start()
            const token = this.$session.get('jwt')
            axios.put(`http://127.0.0.1:8000/api/v1/reviews/${reviewId}/${jwtDecode(token).user_id}/`, this.options)
            .then(response=>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
        },
    }
}
</script>

<style>

</style>