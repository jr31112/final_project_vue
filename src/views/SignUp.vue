<template>
<div class="signup">
  <form @submit.prevent="signup">
      <label for="username">username: </label>
      <input type="text" id="username" v-model="username"><br>
      <label for="password">password: </label>
      <input type="password" id="password" v-model="password"><br>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'signup',
    data() {
        return {
            signUpUser: {},
            username : '',
            password : ''
        }
    },
    methods: {
        signup() {
            this.signUpUser ={
                'username' : this.username,
                'password' : this.password,
            }
            axios.post('http://127.0.0.1:8000/api/v1/accounts/', this.signUpUser)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
                this.signUpUser = {}
        }
    }
}
</script>

<style>

</style>