// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Ajouter from './components/ajouter'

Vue.config.productionTip = false

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
