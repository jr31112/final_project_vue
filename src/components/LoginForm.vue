<template>
  <div class="LoginForm">
  <form @submit.prevent="login">
      <label for="username">username: </label>
      <input type="text" id="username" v-model="credentials.username"><br>
      <label for="password">password: </label>
      <input type="password" id="password" v-model="credentials.password"><br>
      <button type="submit">로그인</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            credentials: {}
        }
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:8000/api-token-auth/', this.credentials)
                .then(response => {
                    console.log(response)
                    const token = response.data.token
                    this.$session.start()
                    this.$session.set('jwt', token)
                })
                .catch(error => {
                    console.log(error)
                })

            this.credentials = {}
        }
    }
}
</script>

<style>

</style>