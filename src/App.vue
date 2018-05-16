/* eslint-disable */
/* ce fichier App. vue est composé de 3 parties qu'on retrouvera pour tous nos composants :
 la partie: "Template", le "SCRIPT" et le "STYLE"
*/

/*TEMPLATE : c'est ici qu'on définit le contenu HTML de notre composant*/
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h2>Liste des veilles</h2>
    <VeilleListe/>
  </div>
</template>


/*
SCRIPT : c'est ici qu'on définit le code javascript attaché à notre composant.
Dans notre exemple on importe le composant "VeilleListe" via import, puis on définit l'application default qui aura pour nom "app" et qui utilisera le composant "VeilleList" importé précédemment.
*/
<script>
/* eslint-disable */
import VeilleListe from './components/VeilleListe'
// import Ajouter from './components/Ajouter'

export default {
  name: 'app',
  components: {
    VeilleListe
  }
}
</script>

<style type="sass">
#app {
  width:500px;
  height: 400px;
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media all and (max-device-width: 780px)  {

  #app{
  margin: 0;
  width:100vw;
  height: 100vh;
  }
  a.tabs__item{
    width: 33vw;
  }
  div.toolbar__title{
    width: 100vw;
  }
  div.list.list--two-line{
    font-size: 1.2rem;

  }
}
</style>
