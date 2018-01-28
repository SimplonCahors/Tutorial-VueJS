<template>
<div id="div1">
    <form action="/index.html" id="forms">
      Title:
      <br>
      <input type="text" name="Title" placeholder="Title">
      <br>
      <label>Author:</label>
      <br>
      <select id="one" name="author">
        <option v-for="one in authors">{{one.firstname}} {{one.lastname}}</option>
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
import authors from '../authors.json';

export default {
  data: function() {
    return {
      authors: authors,
    };
  },

  methods: {
    hide: function(event) {
      let NewTheme = document.getElementById('new_theme');

      if (event.target.value == 'Other') {
        NewTheme.style.display = 'block';
      } else {
        NewTheme.style.display = 'none';
      }
    },
  },
};
</script>

import 

<style type="scss">
#new_theme {
  display: none;
}
#div1 {
  background-color: violet;
}
</style>
