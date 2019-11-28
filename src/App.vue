<template>
  <v-app>
    <nav style="position: sticky; z-index: 1;" >  
      
      <v-toolbar>
        <v-toolbar-title class="headline text-uppercase">
          <router-link tag="a" :to="{name:'home'}"><img src="./assets/logo.png" alt="으어어어엉" width="100"></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <router-link tag="span" :to="{name:'home'}"><v-btn class="mx-2">Home</v-btn></router-link>
            <router-link  v-if="!isAuthenticated" tag="span" :to="{name:'login'}"><v-btn class="mx-2" >Login</v-btn></router-link>
             <router-link v-if="!isAuthenticated" tag="span" :to="{name:'signup'}"><v-btn class="mx-2" >SignUp</v-btn></router-link>
            <span v-else @click.prevent="logout"><v-btn class="mx-2">Logout</v-btn></span>
        </div>
        <div class="mt-5">
          <search-form/>
        </div>
      </v-toolbar>

    </nav>
    <router-view :key="$route.fullPath"/>
  </v-app>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import router from './router'
export default {
  name: 'App',
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
};
</script>
<style>
  #app {
    background-color: rgba(231, 230, 230, 0.945);
  }
</style>
