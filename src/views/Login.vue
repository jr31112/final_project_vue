<template>
  <div class="login" style="position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-items: center;">
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