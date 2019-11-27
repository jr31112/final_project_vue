<template>
  <div class="ReviewDetail">
      <h3>다른 유저들의 댓글 입니다.</h3>
      <div v-for="review in reviews" :key=review.id>
          {{review.user.username}}님
          <v-rating length="10" v-model='review.user_score' readonly="readonly"></v-rating>
          {{review.user_score}}
          {{review.content}}
          <button @click="deleteReview(review.id)">삭제</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import router from '../router'
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
            console.log(token)
            if (token != undefined){
                const options = {
                    headers: {
                        Authorization : `JWT ${token}`
                    }
                }
                axios.delete(`http://127.0.0.1:8000/api/v1/reviews/${reviewId}/${jwtDecode(token).user_id}/`, options)
                .then(response=>{
                    this.$emit('reviewUpdateEvent')
                    console.log(response)
                })
                .catch(error =>{
                    console.log(error)
                    router.push({name:'login'})
                })
            }
            else {
                router.push({name:'login'})
            }
        },
    },
}
</script>

<style>

</style>