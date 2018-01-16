<template >
<v-app>
  <div id="liste">
    <div class="filters">
      <v-layout row wrap class="main">
        <v-flex xs7>
    <v-text-field
      label="Recherche"
      v-model="searchTxt"
    ></v-text-field>
      </v-flex>
        <v-flex xs5>
            <v-select
              v-bind:items="themes"
              v-model="searchTheme"
              label="Select"
              single-line
              bottom
              hint="Selectionner le theme."
              persistent-hint
            ></v-select>
          </v-flex>
      <!-- <select v-model="searchTheme">
        <option value="all">Thématique</option>
        <option v-for="(theme, index) in themes" v-bind:value="theme">{{ theme }}</option>
      </select> -->
    </v-layout>
    </div>
    <div class="subjects">
      <v-list three-line>
          <template v-for="(subject,index) in subjectsFiltres">
            <v-subheader v-if="subject.header" v-text="subject.header"></v-subheader>
            <v-divider v-else-if="subject.divider" v-bind:inset="subject.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="subject.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title v-html="subject.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="subject.author"></v-list-tile-sub-title>             
              </v-list-tile-content>
               <v-list-tile-action>
                 <small>02/02/17</small>
               </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
    </div>
  </div>
    </v-app>
</template>
<script>
/* eslint-disable */
export default {
  name: 'VeilleListe',
  data () {
    return {
      searchTxt: '',
      searchTheme: 'Thématique',
      themes: [],
      subjects: [
        { title: 'Tout savoir sur VueJS', author: 'Raphaël', themes: ['VueJS', 'JS'],date:"12/08/17"},
        { title: 'Apprendre et étudier le JS', author: 'Victoria', themes: ['VueJS', 'JS'],date:"26/05/15"},
        { title: 'Angular VS ReactJS', author: 'Éric', themes: ['ReactJS', 'Angular', 'JS'],date:"05/01/18"},
        { title: 'Apprendre le CSS', author: 'Nicolas', themes: ['CSS'],date:"05/01/18"}
      ],
    }
  },
  created: function () {
    this.themes = this.getThemes();
  },
  computed: {
    subjectsFiltres: function()
    {
       let self = this;
       return this.subjects.filter(function(subject) {
        
        // Filter on title and author
        let title = self.normlizeText(subject.title);
        let author = self.normlizeText(subject.author);
        let searchTxt = self.normlizeText(self.searchTxt);
        let filter1 = title.indexOf(searchTxt) >= 0 || author.indexOf(searchTxt) >= 0;
        
        // Filter on theme
        let filter2 = subject.themes.indexOf(self.searchTheme) >= 0 || self.searchTheme == 'Thématique';
        return filter1 && filter2;
      });
    }
  },
  methods: {
    normlizeText: function(str) {
      // Change to lower case and remove first & last spaces
      str = str.toLowerCase().trim();
      // Remove accents
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    },
    getThemes: function() {
      let themes = [];
      // Merge all themes
      this.subjects.forEach(function(subject) {
        Array.prototype.push.apply(themes, subject.themes);
      
      });
      // Remove duplicates
      themes = themes.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
      });
      // Return sorted array
     var themesSorted = themes.sort();
     themesSorted.splice(0,0,"Thématique");
     return themesSorted;
    }
  }
}
</script>
<style scoped>
ul{
  margin: auto;
  width: 100%;
  align-items: center;
  justify-content: center; 
  text-align: center;

  
}
.main
{
  width: 100%;
  display: flex;
  justify-content: center;
}




</style>

