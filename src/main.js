// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Add from './components/AddPage'
import VeilleListe from './components/VeilleListe'
import Vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')
 
Vue.use(Vuetify)
Vue.config.productionTip = false
const NotFound = { template: '<p>Page not found</p>' };
const routes = {
  '/': App,
  '/ajouter': Add,
  '/test':VeilleListe
}

/* eslint-disable no-new */
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
