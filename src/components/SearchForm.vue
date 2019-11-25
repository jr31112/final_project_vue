<template>
    <form class="search-form" @submit.prevent="searchmoviepeople">
      <label for="searchbar">영화/배우 검색</label>
        <input v-model="query" type="text" id="searchbar">
      <button type="submit">등록</button>
    </form>
</template>

<script>
import router from '../router'

export default {
    name:'SearchForm',
    data() {
        return {
            query:''
        }
    },
    methods:{
        searchmoviepeople(){
            const newQuery = {}
            Object.assign(newQuery, {query: this.query});
            router.push({name:'search', params: newQuery}).catch(err=>{err})
            this.query = ''
        }
    }
}
</script>

<style>

</style>