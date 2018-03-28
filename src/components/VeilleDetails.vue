<template>
  <v-container grid>
    <!-- Filter options -->
    <v-layout row wrap>
      <v-flex xs12>
  
        <v-select v-model="veille" :items="veilles" item-text="title" item-value="title" return-object label="Liste des Veilles" @change="consoleLog"></v-select>
      </v-flex>
    </v-layout>
  
    <!-- Affichage veille -->
    <v-card>
      <v-container fluid style="min-height: 300px;" grid-list-lg>
        <template v-if="veille.title !== undefined" :data="veille"> 
                 <div class="headline">{{veille.title}}</div>
                 <v-divider></v-divider>
                 <br/>
                 <p>Auteur(s) : <span :key="author" v-for="(author, index) in veille.authors">{{ author }}<span v-if="index + 1 < veille.authors.length" :key="index"> et </span></span></p>
                 <p>Date : {{ veille.date | formatDate }}</p>
                 <p>{{veille.comments}}</p>
                 <p :key="link" v-for="(link, index) in veille.links"> <a :href="link">{{ link }}</a> <span v-if="index + 1 < veille.links.length" :key="index"> </span></p>
                 
        </template>
        <template v-else>
          <p>
            Sélectionner une veille dans la liste.</p>
        </template>
          </v-container>
          <v-btn color="primary" v-on:click="removeVeille(veille['.key'])">Supprimer la veille</v-btn>
        </v-card>
    </v-container>
</template>


<script>
  /* eslint-disable */
  import moment from "moment";
  import {
    veillesRef
  } from './firebase';
  
  export default {
    name: "VeilleDetails",
    firebase: {
      veilles: veillesRef
    },
    data() {
      return {
        veille: {},
      };
    },
    mounted: function() {
      this.veille = this.veilles[0]
    },
    methods: {
      consoleLog() {
        console.log(this.veille);
      },
      removeVeille(key) {
        veillesRef.child(key).remove();
        this.$emit('closeAjouter')
      },
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
