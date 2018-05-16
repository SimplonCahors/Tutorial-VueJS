<template>

  <section>

    <h2>Ajouter une veilles</h2>

    <form>

      <div>

        <select id="themes" multiple="true">

          <option value="css">CSS</option>

          <option value="js">JS</option>

          <option value="other">Autre</option>

        </select>

      </div>

      <div>

        <input type="text" name="other" placeholder="Préciser" id="other" class="hidden" />

      </div>

    </form>



    <a href="/#/">Retour à la liste des veilles</a>

  </section>

</template>



<script>

  export default {

  name: 'Ajouter',

  mounted: function () {
    let themes = document.getElementById('themes');
    let other = document.getElementById('other');

    themes.addEventListener('change', function() {
      let has_other = false;
      for (var i = 0; i < this.selectedOptions.length; i++) {
        if(this.selectedOptions[i].value === 'other') {
          has_other = true;
        }
      }
      other.className = has_other ? '' : 'hidden';
    });
  }
}

</script>

<style type="scss">
  .hidden {
    display: none;
  }

</style>

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
