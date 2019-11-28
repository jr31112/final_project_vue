<template>
    <div class="ReviewForm">
        <p class="headline  font-weight-black"> 리뷰를 작성해 주세요</p>
        <form @submit.prevent="newReview">
            <v-rating v-model="user_score" length="10" color="amber darken-1" background-color="amber darken-1">   </v-rating>
            <v-text-field
            v-model="content"
            placeholder="소중한 의견을 달아주세요"
            required>
            </v-text-field>
            <v-btn id="submitbutton" class="mr-4 white" type="submit">제출하기</v-btn>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import router from '../router'

export default {
    name:'ReviewForm',
    props:{
        movie:{
            type:Object,
            required:true
        }
    },
    data() {
        return {
            new_review : {},
            content : '',
            user_score : 0
        }
    },
    methods:{
        newReview(){
            this.$session.start()
            const token = this.$session.get('jwt')
            if (token != undefined) {
                const options = {
                    headers: {
                        Authorization : `JWT ${token}`
                    }
                }
                this.new_review = {
                    'content' : this.content,
                    'user_score' : this.user_score
                }
                axios.post(`http://15.165.77.221/api/v1/movies/${this.$props.movie.id}/reviews/${jwtDecode(token).user_id}/`, this.new_review, options)
                .then( ()=> {
                    this.$emit('reviewUpdateEvent')
                    this.content = ''
                    this.user_score = 0
                })
                .catch(error => {
                    console.log(error)
                    router.push({name:'login'})
                })
            }
            else {
                router.push({name:'login'})
            }
        }
    }
}
</script>

<style>
    #submitbutton {
        position: relative;
        left: 96%;
    }
</style>