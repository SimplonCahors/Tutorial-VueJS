<template>
  <div id="liste">
    <div class="filters">
      <input
        type="text"
        placeholder="Rechercher"
        v-model="searchTxt" />
      <select v-model="searchTheme">
        <option value="all">Thématique</option>
        <option v-for="(theme, index) in themes" v-bind:value="theme">{{ theme }}</option>
      </select>
      <input type="checkbox" id="checkbox" v-model="sortByDate">
      <label for="checkbox">Trier par date </label>
    </div>
    <div class="subjects">
      <ul>
        <li v-for="(subject, index) in subjectsFiltres">
          {{ subject.title }} <small>par {{ subject.author }}, le {{subject.date}}</small>
        </li>
      </ul>
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
      datestriees:[],
     sortByDate :'',
     dateistrue:'',
      subjects: [
        { title: 'Tout savoir sur VueJS', author: 'Raphaël', themes: ['VueJS', 'JS'], date: '18/07/2017' },
        { title: 'Apprendre et étudier le JS', author: 'Victoria', themes: ['VueJS', 'JS'], date: '15/03/2017'  },
        { title: 'Angular VS ReactJS', author: 'Éric', themes: ['ReactJS', 'Angular', 'JS'], date: '23/07/2018'  },
        { title: 'Apprendre le CSS', author: 'Nicolas', themes: ['CSS'], date: '18/07/1996'}
      ],
    }
  },
  created: function () {
    this.themes = this.getThemes();
  },
  created: function () {
    this.datestriees = this.getandsortDates();
  },


  computed: {
  
    subjectsFiltres: function()
    {
       let self = this;
       let datestriees = self.datestriees;
        let valeur= '';
        let dateistrue = false;

       return this.subjects.filter(function(subject) {
          // Filter on title and author
       
        let title = self.normlizeText(subject.title);
        let author = self.normlizeText(subject.author);
        let searchTxt = self.normlizeText(self.searchTxt);

        if(self.sortByDate) {
          dateistrue = false;
          console.log(datestriees)
        
          for (let i = 0; i < datestriees.length; i++) {
            //.gettime put it in ms to compare it 
          const datetriee = datestriees[i].getTime();
          valeur = self.tranformDate(subject.date)
          console.log(datetriee, valeur)
          console.log(datetriee == valeur)

            //trouve la date de self qui correspond à celle du tableau triée
               if (datetriee == valeur) {
               
      
                 
              }
          }

        }
        
      
        let filter1 = title.indexOf(searchTxt) >= 0 || author.indexOf(searchTxt) >= 0;
    
        // Filter on theme
        let filter2 = subject.themes.indexOf(self.searchTheme) >= 0 || self.searchTheme == 'all';
     
        return filter1 && filter2 ;
      
      });
    },

  },
  methods: {

sortdates: function (datex) {
let x = datex.sort(function(a, b) {
  return a - b;})
      return x 
},


tranformDate: function (date) {
let x = date.split('/').reverse().join('-')
return Date.parse(x)
},

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
    },

    getandsortDates: function() {
      
      let dates = [];
      let datesdates = []
      let self = this;
      //gets all dates and put them in a [ ]
       this.subjects.forEach(function(subject) {
      let dateinms= self.tranformDate(subject.date);
       dates.push(dateinms);
       })
       //sort 'em all
        let datesfiltrees = self.sortdates(dates);
   
// return them as bootifull 
        datesfiltrees.forEach( function(el) {
          datesdates.push(new Date(el))
           
        })
        console.log(datesdates)
        return datesdates;  

    }
  }
}
</script>
