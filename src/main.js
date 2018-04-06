// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

import firebase from 'firebase'
var VueFire = require('vuefire')


Vue.use(VueFire);
Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.darken2,
    secondary: colors.orange.darken1,
    accent: colors.orange.darken2,
    error: colors.red.accent3
  }
})

const NotFound = { template: '<p>Page not found</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': App,
  '/about': About,
  '/ajouter': Ajouter,
 
}

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
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


// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
