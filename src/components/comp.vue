<template>
  <section id="createNewVeille">
    <form>
      <!--TITRE-->
      <div>
        <label for="veilleTitre">Titre :</label> 
        <input type="text">
      </div>
      <!--AUTEURS-->
      <div id="veilleAuteursDiv">
        <label for="veilleAuteurs">Auteur(s) :</label>
        <div>
          <select id="veilleAuteurs">
            <option v-for="index in Authors">{{ index.firstname }} {{ index.lastname }}</option>
          </select>
          <a href="">+</a>
        </div>
      </div>
      <!--DATE-->
      <div>
        <label for="Veilledate">Date :</label>
        <input id="Veilledate" type="date">
      </div>
      <!--DATE CREATION un peu inutile-->
      <div>
        <label for="Createddate">Date de création :</label> 
        <input id="Createddate" type="date" disabled>
      </div>
      <!--THEME-->
      <div>
        <div>
        <label for="">Thématique :</label>
        <select id="veilleThemes">
          <option v-for="index in Themes">{{ index }}</option>
        </select>
        </div>
        <div id="NewThemeDiv">
        <label for="NewTheme">Nouvelle thématique :</label>
        <input id="NewTheme" type="text">
        </div>
      </div>
      <!--INFOS-->
      <div>
        <label for="veilleInformations">Informations :</label>
        <textarea name="veilleInformations" id="veilleInformations" cols="30" rows="10"></textarea>
      </div>
      <button>AJOUTER</button>
    </form>
  </section>
</template>

<script>
/* eslint-disable */
import Authors from './authors.json';
import Themes from './themes.json';
export default {
  name: 'comp',
  mounted: function () {

	  // Votre code ici
    let veilleThemes = document.getElementById('veilleThemes');

    let NewThemeDiv = document.getElementById('NewThemeDiv');

      veilleThemes.addEventListener('change', function() {
      //console.log(veilleThemes.options, 'options');
      //console.log(veilleThemes.selectedIndex, 'selected index');
      //console.log(veilleThemes.options[veilleThemes.selectedIndex].value);
      if (veilleThemes.options[veilleThemes.selectedIndex].value == "Nouveau Theme"){
        NewThemeDiv.style.display ="block";
      }
      else{
        NewThemeDiv.style.display ="none";
      }
    })
  },
  methods: {
    addANewTheme() {
      console.log("text");
    }   
  },
  data () {
    return {
      Authors:Authors,
      Themes:Themes
    }
  },
}
</script>

<style lang="scss">
  #createNewVeille{
    font-size: 16px; 
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;   
    max-width: 500px;
    form{
      display: flex;
      flex-direction: column;
      text-align: center;
      #veilleAuteursDiv{
          div{
            flex-direction: row;
            text-align: center;
            align-items: center;
          }
      }
      div{
        display: flex;
        flex-direction: column;
        #Veilledate,#Createddate{
          max-width: 150px;
        }
        #Createddate{
          background-color: rgb(182, 182, 182);
        }
        #NewThemeDiv{
          display: none;
        }
      }
      button,input,textarea,select{
          margin:5%;
          border: 1px;
          border-radius: 6px;
          border-style: solid;
          padding: 5px;
          background-color: rgb(229, 248, 220);
      } 
      button{
        margin-top:10px;
        background-color: rgb(70, 199, 70);
        border-color: rgb(1, 172, 1);
      }
    }
  }
</style>

