<template>
  <v-app>
    <nav>
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <div>
          <router-link :to="{name:'home'}">Home</router-link> 
          <router-link v-if="!isAuthenticated" :to="{name:'login'}">Login</router-link> 
          <router-link v-if="!isAuthenticated" :to="{name:'signup'}">SignUp</router-link>
          <a v-else @click.prevent="logout">Logout</a>
          </div>
          <div>
          <search-form/>
          </div>
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
