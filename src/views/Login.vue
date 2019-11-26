<template>
  <div class="login">
      <h2>로그인</h2>
      <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import router from '../router'
export default {
    name: 'Login',
    components: {
        LoginForm,
    },
    mounted() {
        if (this.$session.has('jwt')){
            console.log(this.$session.get('jwt'))
            router.push({name:'home'})
                .catch(error => {
                    error
                })
        }
    }
}
</script>

<style>

</style>