<template>
  <div id="liste">
    <div class="filters">
      <input
        type="text"
        placeholder="Rechercher"
        v-model="searchTxt" />
      <select v-model="searchTheme">
        <option value="">Thématique</option>
        <option v-for="(theme, index) in themes" v-bind:value="theme">{{ theme }}</option>
      </select>
    </div>
    <div class="subjects">
      <ul>
        <li v-for="(subject, index) in subjectsFiltres">
          {{ subject.title }} <small>par {{ subject.author }}</small><small v-if="subject.date"> - {{ subject.date | formatDate }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import moment from 'moment';

export default {
  name: 'VeilleListe',
  data () {
    return {
      searchTxt: '',
      searchTheme: '',
      themes: [],
      subjects: [
        { title: 'Tout savoir sur VueJS', author: 'Raphael', themes: ['VueJS', 'JS'], date: '2017-11-23T18:25:43.511Z' },
        { title: 'Apprendre et étudier le JS', author: 'Victoria', themes: ['VueJS', 'JS'], date: '2017-12-12T18:25:43.511Z' },
        { title: 'Angular VS ReactJS', author: 'Henry', themes: ['VueJS', 'Angular', 'JS'], date: '2018-01-10T18:25:43.511Z' },
        { title: 'Apprendre le CSS', author: 'Nicolas', themes: ['CSS'], date: '' }
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
        let filter2 = subject.themes.indexOf(self.searchTheme) >= 0 || !self.searchTheme;
        
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
      this.subjects.forEach(function(t) {
        Array.prototype.push.apply(themes, t.themes);
      });
      // Remove duplicates
      themes = themes.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
      });
      // Return sorted array
      return themes.sort();
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YY');
      }
    }
  }
}
</script>
