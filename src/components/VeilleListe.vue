<template>
  <div id="liste">
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="deep-purple" dark>
                <input
                type="text"
                placeholder="Rechercher"
                v-model="searchTxt" />
            <v-spacer></v-spacer>
            <v-menu transition="slide-x-reverse-transition">
            <v-btn class="hidden-xs-only" dark color="deep-purple lighten-2" slot="activator" value="all">Thématique</v-btn>
            <v-btn class="hidden-sm-and-up" 
              absolute
              dark
              fab
              top
              right
              color="deep-purple lighten-2"
              slot="activator"
              value="all"
            >
            </v-btn>
              <v-list>
                <v-list-tile v-model="searchTheme">
                        <v-list-tile-title v-for="(theme, index) in themes" v-text:items="theme"></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-list two-line>
            <template  v-for="(subject, index) in subjectsFiltres">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subject.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ subject.author }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action class="text-xs-right">
                  <small>{{ subject.date }}</small>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < subject.length" :key="subject.title"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>


    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'VeilleListe',
  data () {
    return {
      searchTxt: '',
      searchTheme: 'all',
      themes: [],
      subjects: [
        { title: 'Tout savoir sur VueJS', author: 'Raphaël', themes: ['VueJS', 'JS'], date: '18/12/17'},
        { title: 'Apprendre et étudier le JS', author: 'Victoria', themes: ['VueJS', 'JS'], date: '18/12/17'},
        { title: 'Angular VS ReactJS', author: 'Éric', themes: ['ReactJS', 'Angular', 'JS'], date: '18/12/17'},
        { title: 'Apprendre le CSS', author: 'Nicolas', themes: ['CSS'], date: '18/12/17'}
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
        let filter2 = subject.themes.indexOf(self.searchTheme) >= 0 || self.searchTheme == 'all';
        
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
      return themes.sort();
    }
  }
}
</script>
