<template>
<form class="form">
  <div >
     <label for="titre"> Titre</label>
      <input type="text" id="titre" placeholder="Entrez le titre de la veille"> 
  </div>

  <div>
    <label for="auteur"> Auteur</label>
    <select> 
      <option> aze</option>
      <option> rty</option>
      <option> cvfg</option>
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
  <select> 
    <option v-on:click="dontIt" > css</option>
    <option v-on:click="dontIt" > js</option>
    <option v-on:click="dontIt" > vuejs</option>
      <option v-on:click="doIt"> Autre</option>
 </select> 
  </div>   

   <div id="toAppear">
     <label for="nouvellethematique"> Nouvelle thématique</label>
      <input type="text" id="nouvellethematique" placeholder="Nouvelle Thématique"> 
  </div>
               
   <div>
  <input type ='submit' value ='Ajouter'>  
   </div>
   <p id="ok" >aaaaaaaaaa</p>


   </form>
    </template>



<script>
export default {
  name: 'Ajouter',
  data () {
    return {
      
    }
  },
   created: function () {
  

   },
    


 
   methods: {
     doIt: function () {
    
      document.querySelector('#toAppear').style.display="block";
   },
      dontIt: function () {
    
      document.querySelector('#toAppear').style.display="none";
   }
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
