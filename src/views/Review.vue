<template>
  <div class="Review">
      <h2>최신 리뷰</h2>
      <review-detail :reviews='reviews'/>
  </div>
</template>

<script>
import axios from 'axios'
import ReviewDetail from '@/components/ReviewDetail.vue'

export default {
    name:"Review",
    components:{
        ReviewDetail,
    },
    data(){
        return{
            reviews:[],
        }
    },
    methods:{
        getReviews(){
            axios.get(``, this.options)
        .then(response =>{
            this.reviews = response.data
        })
        .catch(error => {
            console.log(error)
        })
        }
    },
    // mounted(){
    //     this.getReviews()
    // },
}
</script>

<style>

</style>