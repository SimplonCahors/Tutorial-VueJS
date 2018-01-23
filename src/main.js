//npm run dev
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import comp from './components/comp'

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }


const routes = {
  '/': App,
  '/about': About,
  '/comp' : comp
}

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'

// Vue.use(VueMaterial)

import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

// index.js or main.js
import('vuetify/dist/vuetify.min.css') // Ensure you are using css-loader

Vue.config.productionTip = false

/* eslint-disable no-new */
//new Vue({
//  el: '#app',
//  components: { App },
//  template: '<App/>'
//})

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
