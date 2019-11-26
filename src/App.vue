<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> |
        <router-link v-if="!isAuthenticated" :to="{name:'login'}">Login</router-link> |
        <router-link v-if="!isAuthenticated" :to="{name:'signup'}">SignUp</router-link>
        <a v-else @click.prevent="logout">Logout</a> |
      <search-form/>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import SearchForm from '@/components/SearchForm.vue'
import router from './router'

export default {
  name : 'App',
  components : {
    SearchForm,
  },
  data() {
    return {
      isAuthenticated: this.$session.has('jwt')
    }
  },
  methods: {
    logout() {
      this.$session.destroy()
      this.isAuthenticated = this.$session.has('jwt')
      router.push({name:'home'})
        .catch(() => {
          
        })
    }
  },
  updated() {
    this.isAuthenticated = this.$session.has('jwt')
  },
}
</script>