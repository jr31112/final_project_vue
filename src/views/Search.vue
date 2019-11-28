<template>
  <div class='search' :key='this.$route.fullPath' style="margin-top:64px;">
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
            axios.get(`http://15.165.77.221/api/v1/search/${this.$route.params.query}`, this.options)
            .then(response=> {
                this.movies = response.data
            })
            .catch(() => {
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