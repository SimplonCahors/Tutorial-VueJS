<template>
  <div id="app">
    <v-app>
      <div style="width: 400px; max-width: 600px; min-height:400px; margin: auto;">
        <v-toolbar color="primary">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title class="white--text">Simplon - Liste des Veilles</v-toolbar-title>
    
        </v-toolbar>
        <v-card>
          <v-container fluid style="min-height: 300px;" grid-list-lg>
          <!--  Main component here -->
            <VeilleListe/> 
            <!--  -->
          </v-container>
        </v-card>
      </div>
    </v-app>
  </div>
</template>

<script>
  /* eslint-disable */
  import VeilleListe from "./components/VeilleListe";
  
  export default {
    name: "App",
    components: {
      VeilleListe
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
