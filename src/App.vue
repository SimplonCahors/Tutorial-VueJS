<template>
  <div id="app">
    <v-app>
      <v-toolbar color="primary">
        <v-toolbar-title class="white--text">Veilles Simplon Cahors</v-toolbar-title>
  
      </v-toolbar>
      <v-tabs dark v-model="activePage" color="darkgrey" slider-color="primary">
        <v-tab v-for="value in tabs" :key="value" ripple @click="navigate">
          {{ value }}
        </v-tab>
      </v-tabs>
      <v-card>
        <v-container fluid style="min-height: 300px;" grid-list-lg>
          <!--  Components here -->
          <div v-if="activePage < 1">
            <VeilleListe v-on:goToVeille="showVeille" /> </div>
          <div v-else-if="activePage == 1">
            <Ajouter v-on:closeAjouter="addVeilleSuccess" :displayPage="activePage" /> </div>
          <div v-else>
            <VeilleDetails :displayVeille="linkVeille"/> </div>
          <!-- - - - - - - - - -->
          <v-snackbar right multi-line color="blue" timeout="5000" v-model="snackbar">Votre veille a été ajoutée.</v-snackbar>
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
    data() {
      return {
        tabs: ['Liste', 'Ajouter', 'Consulter'],
        activePage: 0,
        linkVeille: "",
        snackbar: false
      }
    },
    methods: {
      showVeille(title) {
        console.log(title)
        this.linkVeille = title
        this.activePage = 2
      },
      addVeilleSuccess() {
        this.activePage = 0
        this.snackbar = true
      }
    }
  };
</script>

<style>
  #app {
    min-width: 500px;
    max-width: 500px;
    height: 400px;
    margin: auto;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
