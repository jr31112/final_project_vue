
<template>
    <v-form class="search-form" @submit.prevent="searchmoviepeople">
        <v-text-field
        v-model="query"
        :append-outer-icon="query ? 'fa-search' : 'fa-search'"
        clear-icon="mdi-close-circle"
        clearable
        label="영화/배우 검색"
        type="text" id="searchbar"
        @click:append-outer="searchmoviepeople"
        @click:clear="clearMessage">
        </v-text-field>
    </v-form>
</template>

<script>
import router from '../router'
import '@fortawesome/fontawesome-free/css/all.css'

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
        },
        clearMessage () {
        this.query = ''
      },
    }
}
</script>

<style>

</style>