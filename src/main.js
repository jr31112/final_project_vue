import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'
import Carousel3d from 'vue-carousel-3d';

Vue.config.productionTip = false
Vue.use(VueSession)
Vue.use(Carousel3d);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
