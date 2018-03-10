<template>
  <div id="app">
    
    <v-app>
      <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
    <img src="./assets/logo.png">
    <h2>Liste des veilles</h2>
    <VeilleListe/>
    </div>
    </v-app>
  </div>
</template>


...


<script>
/* eslint-disable */
import VeilleListe from './components/VeilleListe';

export default {
  name: 'App',
  components: {
    VeilleListe
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
