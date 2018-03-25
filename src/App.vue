<template>
<div id="app">
    <v-app>
        <v-toolbar color="primary">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title class="white--text">Veilles Simplon Cahors</v-toolbar-title>
    
        </v-toolbar>
        <v-tabs dark v-model="active" color="darkgrey" slider-color="primary">
          <v-tab v-for="value in tabs" :key="value" ripple @click="navigate">
            {{ value }}
            </v-tab>
        </v-tabs>
        <v-card>
          <v-container fluid style="min-height: 300px;" grid-list-lg>
          <!--  Components here -->
          <div v-if="active < 1"><VeilleListe/> </div>
          <div v-else-if="active == 1"><Ajouter/> </div>
          <div v-else><VeilleDetails/> </div>
          <!-- - - - - - - - - -->
          </v-container>
        </v-card>
      <!-- </div> -->
    </v-app>
    </div>
</template>

<script>
  /* eslint-disable */
  import VeilleListe from "./components/VeilleListe";
  import Ajouter from "./components/Ajouter";
  import VeilleDetails from "./components/VeilleDetails";
  
  export default {
    name: "App",
    components: {
      VeilleListe,
      Ajouter,
      VeilleDetails
    },
    data () {
      return {
        tabs : ['Liste', 'Ajouter', 'Consulter'],
        active : 0
      }
    },
    methods : {
      navigate () {
        console.log(this.active)
      }
    }
  };
</script>

<style>
  #app {
    min-width: 500px; 
    max-width: 500px; 
    height:400px; 
    margin:auto;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
