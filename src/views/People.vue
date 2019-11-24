<template>
  <div class="people">
      <people-detail :person='person'/>
  </div>
</template>

<script>
import axios from 'axios'
import PeopleDetail from '@/components/PeopleDetail.vue'

export default {
    name: 'people',
    components:{
        PeopleDetail,
    },
    data(){
        return {
            person : {},
        }
    },
    methods : {
        selectPeople(){
            axios.get(`http://127.0.0.1:8000/api/v1/people/${this.$route.params.id}`, this.options)
            .then(response=> {
                    this.person = response.data
                })
            .catch(error => {
                console.log(error)
                })
        }
    },
    mounted(){
        this.selectPeople()
    }
}
</script>

<style>

</style>