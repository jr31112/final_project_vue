<template>
  <div class="Review">
      <h2>최신 리뷰</h2>
      <review-index :reviews='reviews'/>
  </div>
</template>

<script>
import axios from 'axios'
import ReviewIndex from '@/components/ReviewIndex.vue'

export default {
    name:"Review",
    components:{
        ReviewIndex,
    },
    data(){
        return{
            reviews:[],
        }
    },
    methods:{
        getReviews(){
            axios.get(`http://127.0.0.1:8000/api/v1/reviews/`, this.options)
        .then(response =>{
            console.log(response)
            this.reviews = response.data
        })
        .catch(error => {
            console.log(error)
        })
        }
    },
    mounted(){
        this.getReviews()
    }
}
</script>

<style>

</style>