<template>
<div class="signup">
  <form @submit.prevent="signup">
      <label for="username">username: </label>
      <input type="text" id="username" v-model="username"><br>
      <p v-for="error in errormessage.username" :key="error">{{ error }}</p>
      <label for="password">password: </label>
      <input type="password" id="password" v-model="password"><br>
      <p v-for="error in errormessage.password" :key="error">{{ error }}</p>
      <label for="password">password2: </label>
      <input type="password" id="password2" v-model="password2"><br>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
    name: 'signup',
    data() {
        return {
            signUpUser: {},
            username : '',
            password : '',
            password2 : '',
            errormessage : {username: [], password: []}
        }
    },
    methods: {
        signup() {
            this.signUpUser ={
                'username' : this.username,
                'password' : this.password,
                'password2' : this.password2,
                'like_movies' : [],
            }
            axios.post('http://127.0.0.1:8000/api/v1/accounts/', this.signUpUser)
                .then(response => {
                    console.log(response)
                    this.errormessage = {username: [], password: []}
                })
                .catch(error => {
                    console.log(error.response)
                    this.errormessage.username = error.response.data.username
                    this.errormessage.password = error.response.data.password
                    console.log(this.errormessage)
                })
                this.signUpUser = {}
        },
    }
}
</script>

<style>

</style>