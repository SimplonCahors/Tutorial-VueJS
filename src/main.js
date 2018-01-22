// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Add from './components/ajouter'
import VueMaterial from 'vue-material'



Vue.use(VueMaterial)


Vue.config.productionTip = false

/* eslint-disable no-new */

const NotFound = { template: '<p>Page not found</p>' };
const About = { template: '<p>about page</p>' }

const routes = {
  '/': App,
  '/ajouter': Add
}

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
  render (h) {
    return h(this.ViewComponent)
  }
})
function showfield (name) {
  if (name == 'Other') {
    document.getElementById('div1').innerHTML =
      'Other: <input type="text" name="other" />'
  } else document.getElementById('div1').innerHTML = ''
}

