// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// on demande à javascript de charger Vue, App, Ajouter etc... avec import
import Vue from 'vue'
import App from './App'
import Ajouter from './components/Ajouter'

//on demande à javascript de charger Vuetify pour styliser l'application avec vuetify
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
// on  dit à notre navigateur de créer une instance VueJS qui sera représentée par la div avec l'identifaint "app".
// On chargera le template et le composant VueJS"App" qui se trouve dans src/App.vue
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// Du routage simple pour accéder à d'autres pages de vuejs
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
// const ESxercice = { template:'<p>Exercice</p>' }

const routes = {
  '/': App,
  '/ajouter': Ajouter
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) { return h(this.ViewComponent) }
})