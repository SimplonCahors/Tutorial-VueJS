<template>
<form class="form">
  <div >
     <label for="titre"> Titre</label>
      <input type="text" id="titre" placeholder="Entrez le titre de la veille"> 
  </div>

  <div>
    <label for="auteur"> Auteur</label>
    <select> 
   <option v-for="stuff in auteurs">{{stuff.firstname}} {{stuff.lasname.substring(0,1)}}.</option>

     </select> 
  </div>
                    
   <div>
       <label for="date"> Date</label>
       <input type="date" id="date"> 
    
  </div>
       
  <div>
    <label for="yourmessage"> Message</label>
    <textarea id="yourmessage"></textarea>
  </div>
               
 <div>
  <label for="Thématiques"> Thématiques</label>
   <select v-on:change="doIt" > 
    <option v-for="stuff in themes">{{stuff}}.</option>
      <option> Autre </option>
     </select> 
  </div>   

   <div id="toAppear">
     <label for="nouvellethematique"> Nouvelle thématique</label>
      <input type="text" id="nouvellethematique" placeholder="Nouvelle Thématique"> 
  </div>
   
   <div>
  <input type ='submit' value ='Ajouter'>  
   </div>


   </form>
    </template>



<script>

import auteurs from './authors.json'
import themes from './themes.json'
import axios from '../../node_nodules/axios'

export default {
  name: 'Ajouter',
  data () { 
    return {
      
      auteurs:auteurs,
      themes:themes
   
    }
  },
   
  
   methods: {
     doIt: function (event) {

        
  
       if (event.target.value == "Autre") document.querySelector('#toAppear').style.display="block";
   

       else  document.querySelector('#toAppear').style.display="none";
   
     
   },
    
}
}

</script>








<style scoped>


form > div {
  margin: 5px;
  border: 5px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  padding: 5px 30%;
  font-family: 'Open Sans', sans-serif; 


}

form > div > :nth-child(2), form > div > input[type=submit]  {
  width: 50%;
}

form > div:nth-child(6) {
  display: none;
}


</style>
