<template>
    <v-container grid>
      <!-- Filter options -->
      <v-layout row wrap>
        <v-flex xs12>
          <!-- <v-select :items="subjects.title" label="Liste des veilles" multi-line></v-select> -->

          <v-select :items="subjects" item-text="title" item-value="title" return-object label="Liste des Veilles" v-model="subject" @change="consoleLog"></v-select>
        </v-flex>
      </v-layout>

      <!-- List -->
      <v-layout row wrap style="overflow:auto;">
            <v-container wrap>
             <template v-if="subject.title !== undefined" :data="subject"> 
               {{subject.title}} par {{subject.author}}
             </template>
            </v-container>
      </v-layout>


    </v-container>
</template>


<script>
  /* eslint-disable */
  import moment from "moment";
  
  export default {
    name: "VeilleDetails",
    data() {
      return {
        subject: {},
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
    methods: {
      consoleLog () {
        console.log(this.subject.title);
      }
    }
  };
</script>
