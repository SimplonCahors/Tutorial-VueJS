<template>
  <v-container grid>
    <!-- Filter options -->
    <v-layout row wrap>
      <v-flex xs6>
        <v-select v-model="searchTheme" :items="veillesThemes" label="Thématiques" multi-line></v-select>
      </v-flex>
      <v-flex xs6>
        <v-text-field v-model="searchTxt" label="Rechercher..." append-icon="search"></v-text-field>
      </v-flex>
    </v-layout>
  
    <!-- List -->
    <v-layout row wrap style="overflow:auto;">
      <v-container wrap>
        <v-list two-line>
          <template v-for="(veille, index) in veillesFiltered">
                  <v-list-tile-content :key="veille">
                    <v-list-tile-sub-title v-if="veille.date"> {{ veille.date | formatDate }}</v-list-tile-sub-title>
                    
                    <!-- <v-list-tile-title @click="displayVeille(veille.title)"><strong>{{ veille.title }}</strong> par 
                    <span :key="author" v-for="(author, index) in veille.authors">{{ author }}<span v-if="index + 1 < veille.authors.length" :key="index"> et </span></span></v-list-tile-title> -->

                    <v-list-tile-title @click="displayVeille(veille.title)"><strong>{{ veille.title }}</strong> par 
                    <span :key="author" v-for="(author, index) in authors">{{ author }}<span v-if="index + 1 < authors.length" :key="index"> et </span></span></v-list-tile-title>


                  </v-list-tile-content>
                  <v-divider v-if="index + 1 < veilles.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-container>
    </v-layout>

    <!-- Sort options-->
    <v-layout row wrap>
      <v-flex xs12 >
      <v-radio-group row v-model="sortKey">
        <v-radio v-for="value in ['titre', 'date']" :key="value" :label="`Tri par ${value}`" :value="value"></v-radio>
      </v-radio-group>
    </v-flex>
    </v-layout>

</v-container>
</template>


<script>
  /* eslint-disable */
  import moment from "moment";
  // import authors from './authors.json';
  import themes from './themes.json';
  import {
    veillesRef
  } from './firebase';
  
  export default {
    name: "VeilleListe",
    data() {
      return {
        authors: ['Charlotte', 'Antoine', 'Célia'],
        // auteurs: authors,
        searchTxt: "",
        searchTheme: "Afficher tout",
        sortKey: "title",
      }
    },
    firebase: {
      veilles: veillesRef
    },
    computed: {
      veillesThemes : function() {
        let myThemes = this.getThemes();
        myThemes.unshift("Afficher tout");
        return myThemes;
      },
      veillesFiltered: function() {
        let self = this;
        let filteredVeilles = this.veilles.filter(function(veille, ) {
          // Filter on title and author
          let title = self.normlizeText(veille.title);
          let authors = self.normlizeText(veille.authors[0]);
          let searchTxt = self.normlizeText(self.searchTxt);
          let filter1 =
            title.indexOf(searchTxt) >= 0 || authors.indexOf(searchTxt) >= 0;
  
          // Filter on theme
          let filter2 =
            veille.themes.indexOf(self.searchTheme) >= 0 ||
            self.searchTheme == "Afficher tout";
  
          return filter1 && filter2;
        });
  
        // Return sorted veilles
        return filteredVeilles.sort(this.sortBy);
      }
    },
    methods: {
      displayVeille: function(veilleTitle) {
        console.log(veilleTitle)
        this.$emit('goToVeille', veilleTitle)
      },
      normlizeText: function(str) {
        // Change to lower case and remove first & last spaces
        str = str.toLowerCase().trim();
        // Remove accents
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      },
      getThemes: function() {
        let fetchThemes = [];
        // Merge all themes
        this.veilles.forEach(function(veille) {
          Array.prototype.push.apply(fetchThemes, veille.themes);
        });
        // Remove duplicates
        fetchThemes = fetchThemes.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
        });
        // Return sorted array
        return fetchThemes.sort();
      },
      sortBy(a, b) {
        // Sort by date (desc)
        if (this.sortKey == "date") {
          a = new Date(a.date);
          b = new Date(b.date);
          return a - b;
        } else {
          // Sort by title
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }
      }
    },
    filters: {
      formatDate: function(value) {
        if (value) {
          return moment(String(value)).format("DD/MM/YY");
        }
      }
    }
  };
</script>


<style type="sass">
  
</style>
