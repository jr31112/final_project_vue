<template>
  <div class="people mt-5">
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
            axios.get(`http://15.165.77.221/api/v1/people/${this.$route.params.id}`, this.options)
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