<template>
  <div class='search' :key='this.$route.fullPath'>
      <search-result :movies='movies'/>
  </div>
</template>

<script>
import axios from 'axios'
import SearchResult from '@/components/SearchResult.vue'
export default {
    name: 'search',
    components: {
        SearchResult,
    },
    data() {
        return {
            movies : []
        }
    },
    methods : {
        selectQuery(){
            axios.get(`http://127.0.0.1:8000/api/v1/search/${this.$route.params.query}`, this.options)
            .then(response=> {
                console.log(response.data)
                this.movies = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        
    },
    mounted(){
            this.selectQuery()
        }
}
</script>

<style>

</style>