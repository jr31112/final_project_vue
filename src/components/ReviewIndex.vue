<template>
  <div class="review-index">
      <div v-for="review in reviews" :key='review.id'>
        {{review.content}}
      </div>
  </div>
</template>

<script>
export default {
    name:'ReviewIndex',
    props:{
        reviews:{
            type : Array,
            required : true
        }
    },
    methods:{

    },
}
</script>

<style>

</style>