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
            axios.get(`http://15.165.77.221/api/v1/reviews/`, this.options)
        .then(response =>{
            this.reviews = response.data
        })
        .catch(() => {
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