/* eslint-disable */
<template>
  <div id="app">
    <img src="./assets/logo.png">
     <h2 class="md-title">Liste des veilles</h2>
    <VeilleListe/>
  </div>
</template>

<script>
/* eslint-disable */
import VeilleListe from './components/VeilleListe'

export default {
  name: 'App',
  components: {
    VeilleListe
  }
}

</script>
<style>
.md-title {
  padding-left: 8px;
  color:blueviolet;
}
</style>
