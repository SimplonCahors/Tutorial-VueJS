<template>
<div id="div1">
    <form action="/index.html" id="forms">
      Title:
      <br>
      <input type="text" name="Title" placeholder="Title">
      <br>
      <label>Author:</label>
      <br>
      <select id="one">
<option value="'Raphaël">'Raphaël</option>
<option value="Victoria">Victoria</option>
<option value="Nicolas">Nicolas</option>
</select>
      <br> Date:
      <br>
      <input type="date" name="date" placeholder="Date">
      <br>
      <label>Theme:</label>
      <br>
      <select id="div1" v-on:change="hide">
      <option value="Angular">Angular</option>
      <option value="CSS">CSS</option>
      <option value="JS">JS</option>
      <option value="React JS">React JS</option>
      <option value="VueJS">VueJS</option>
      <option value="Other" >Other</option>
    </select>
     <input id="new_theme"  type="text">
      <br>
      <br>Information:
      <br>
      <input type="text" name="infos" placeholder="Information">
      <br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default{
  methods:{
    hide: function (event) {
      let NewTheme = document.getElementById("new_theme");

      if(event.target.value == "Other")
      {
        NewTheme.style.display ="block";
      }
      else{
        NewTheme.style.display ="none";
      }

    }
  }

}
</script>

<style type="scss">
  #new_theme {
    display: none;
  }
</style>
