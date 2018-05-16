<template>
  <div id="ajouter">
    <form action="#" id="idForm">
      <fieldset>
        <label for="title" class="titles" autofocus>Titre</label>
        <input type="text" name="" id="title" placeholder="Rechercher...">
      </fieldset>

      <fieldset>
        <!-- <label for="author" class="titles">Auteur</label>
        <select name="authorlist" multiple id="author" >
        <option v-for='index in auteurs'>
          {{auteurs[index].firstname}}
        </option>
        </select> -->
      </fieldset>

      <fieldset>
        <label for="date" class="titles">Date</label>
        <input type="date" name="" id="date">
      </fieldset>

      <fieldset>
        <label for="themeList" class="titles">Thématique</label>
        <select name="themelist" id="themeList">
            <option value="select" selected >Sélectionner un thème</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="NewTheme">Autre Thème</option>
        </select>
        <div id="toggle">
        <label for="ajoutTheme" class="titles">Ajouter une Thématique</label>
        <input type="text" name="autre" id="ajoutTheme" placeholder="noter votre thématique">
        </div>
      </fieldset>

      <fieldset>
        <label for="info" class="titles">Informations</label>
        <textarea name="info" rows="10" cols="30" placeholder="Détails et commentaires">

        </textarea>
      </fieldset>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import authors from "../assets/authors.json";

export default {
  name: "Ajouter",
  data() {
    return {
      auteurs: authors
    };
  },

  mounted: function() {
    var themeList = document.getElementById("themeList");
    var newThemeToggle = document.getElementById("toggle");

    themeList.addEventListener("change", function() {

      if (themeList.value === "NewTheme") {
        console.log(themeList.value);
        newThemeToggle.style.display = "block";
      } else {
        newThemeToggle.style.display = "none";
      }
    });
  }
};
</script>

<style>
#ajouter {
  font-family: "Quicksand", sans-serif;
}
form {
  width: 25%;
  margin: 50px auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid red;
}
fieldset {
  border: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  padding-bottom: 14px;
}
textarea {
}
.titles {
  color: red;
  text-transform: uppercase;
  font-weight: bold;
}
#toggle {
  display: none;
}
</style>
