<template>
  <v-container grid>
    <!-- Filter options -->
    <v-layout row wrap>
      <v-flex xs6>
        <v-select :items="themes" v-model="searchTheme" label="Thématiques" multi-line></v-select>
      </v-flex>
      <v-flex xs6>
        <v-text-field label="Rechercher..." append-icon="search"  v-model="searchTxt"></v-text-field>
      </v-flex>
    </v-layout>

    <!-- List -->
    <!-- <v-layout row wrap style="overflow:auto;">
      <v-container wrap>
        <v-list two-line>
          <template v-for="(subject, index) in subjectsFiltered">
            <v-list-tile-content :key="subject">
              <v-list-tile-title><strong>{{ subject.title }}</strong> par {{ subject.author }}.</v-list-tile-title>
              <v-list-tile-sub-title v-if="subject.date"> {{ subject.date | formatDate }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-divider v-if="index + 1 < subjectsFiltered.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-container>
    </v-layout> -->

    <!-- Nouvelle liste depuis la bdd firebase -->
    <v-layout row wrap style="overflow:auto;">
      <v-container wrap>
        <v-list two-line>
         <li v-for="(sujetVeille,index) in veilles" v-bind:key="sujetVeille['.key']"> 
          <v-list-tile-content :key="sujetVeille">

            <div v-if="!sujetVeille.edit">
             <v-list-tile-title><strong>{{sujetVeille.titre}}</strong> par {{ sujetVeille.auteur.firstname }}.</v-list-tile-title>
             <v-list-tile-sub-title v-if="sujetVeille.date"> {{ sujetVeille.date | formatDate }}</v-list-tile-sub-title>
             <span>
               <v-btn color="primary" v-on:click="setEditVeille(sujetVeille['.key'])">Edit</v-btn>
               <v-btn color="primary" v-on:click="removeVeille(sujetVeille['.key'])">Delete</v-btn>
             </span>
           </div>

           <div v-else>
            <v-text-field label="Titre" v-model="sujetVeille.titre"></v-text-field>
            <span>
             <v-btn color="primary" v-on:click="saveEdit(sujetVeille)">Save</v-btn>
             <v-btn color="primary" v-on:click="cancelEdit(sujetVeille['.key'])">Cancel</v-btn>
           </span>
         </div>
       </v-list-tile-content>
       <v-divider v-if="index + 1 < veilles.length" :key="index"></v-divider>
     </li>
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
import authors from './authors.json';
import themes from './themes.json';
import { veillesRef } from './firebase';

export default {
  name: "VeilleListe",
  data() {
    return {
      auteurs: authors,
      searchTxt: "",
      searchTheme: "Afficher tout",
      themes: [],
      sortKey: "title",
      subjects: [{
        title: "Tout savoir sur VueJS",
        author: "Raphael",
        themes: ["VueJS", "JS"],
        date: "2017-11-23T18:25:43.511Z"
      },
      {
        title: "Angular VS ReactJS",
        author: "Henry",
        themes: ["VueJS", "Angular", "JS"],
        date: "2018-01-10T18:25:43.511Z"
      },
      {
        title: "Apprendre et étudier le JS",
        author: "Victoria",
        themes: ["VueJS", "JS"],
        date: "2017-12-12T18:25:43.511Z"
      },
      {
        title: "Apprendre le CSS",
        author: "Nicolas",
        themes: ["CSS"],
        date: ""
      }
      ]
    };
  },
  firebase: {
    veilles : veillesRef
  },
  created: function() {
    this.themes = this.getThemes();
    this.themes.unshift("Afficher tout");
  },
  computed: {
    subjectsFiltered: function() {
      let self = this;
      let subjects = this.subjects.filter(function(subject,) {
          // Filter on title and author
          let title = self.normlizeText(subject.title);
          let author = self.normlizeText(subject.author);
          let searchTxt = self.normlizeText(self.searchTxt);
          let filter1 =
          title.indexOf(searchTxt) >= 0 || author.indexOf(searchTxt) >= 0;

          // Filter on theme
          let filter2 =
          subject.themes.indexOf(self.searchTheme) >= 0 ||
          self.searchTheme == "Afficher tout";

          return filter1 && filter2;
        });

        // Return sorted subject
        return subjects.sort(this.sortBy);
      }
    },
    methods: {
      removeVeille(key){
        veillesRef.child(key).remove();
      },
      setEditVeille(key){
        veillesRef.child(key).update({ edit: true })
      },
      cancelEdit(key){
        veillesRef.child(key).update({ edit: false })
      },
      normlizeText: function(str) {
        // Change to lower case and remove first & last spaces
        str = str.toLowerCase().trim();
        // Remove accents
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
      },
      sortBy(a, b) {
        // Sort by date (desc)
        if (this.sortKey == "date") {
          a = new Date(a.date);
          b = new Date(b.date);
          return b - a;
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
  .input {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 4vh 0;
  }

  .input textarea {
    width: 30%;
    height: 30vh;
  }

  #new_theme {
    display: none;
  }
  </style>