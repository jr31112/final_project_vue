<template>
  <div class="ReviewDetail">
      <p class="headline  font-weight-black">다른 유저의 리뷰입니다</p>
      <div v-for="review in reviews" :key=review.id>
          <p class="font-weight-black my-0">{{review.user.username}}</p>
          <v-rating class="my-2" length="10" v-model='review.user_score' readonly="readonly"></v-rating>
          <p class="content">{{review.content}}</p>
            <v-btn id="reviewdelete" @click="deleteReview(review.id)">삭제</v-btn>
            <hr class="mt-5">
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
            if (token != undefined){
                const options = {
                    headers: {
                        Authorization : `JWT ${token}`
                    }
                }
                axios.delete(`http://15.165.77.221/api/v1/reviews/${reviewId}/${jwtDecode(token).user_id}/`, options)
                .then(()=>{
                    this.$emit('reviewUpdateEvent')
                })
                .catch(() =>{
                    
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
    .content {
        float: left;
        min-height: 50px;
    }
    #reviewdelete {
        float: right;
    }
    hr {
        clear: both;
    }
</style>