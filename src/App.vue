<template>

  <div id="app">
    <img src="./assets/logo.png">
    <h2>Liste des veilles</h2>
    <VeilleListe/>
<url src="idajouter"></url> 
  </div>
</template>

<script>
/* eslint-disable */
import VeilleListe from './components/VeilleListe';
import Ajouter from './components/ajouter'

export default {
  name: 'App',
  components: {
    'VeilleListe' : VeilleListe,
    'idajouter' : Ajouter
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
