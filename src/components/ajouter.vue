<template>
    <form>
    <fieldset>
        <div class="input">
            <label for="titre"></label>
            <input id="titre" placeholder="titre" type="text">
        </div>
        <div class="input">
            <label for="auteurs"></label>
            <select id="auteurs">
                <option v-for=" item in test">
                    {{item}}
                </option>
            </select>
        </div>
        <div class="input">
            <label for="date"></label>
            <input id="date" type="date">
        </div>
        <div class="input">
        <label for="theme"></label>
        <select id="theme" v-on:change="verif">
            <option>Thematique</option>
            <option v-for="items in themes">
                    {{items}}  
                </option>
            <option id="ok">autre</option>
        </select>
        <label for="new_theme"></label>
        <input id="new_theme" type="text" placeholder="nouvelle thématique">
        </div>
        <div class="input">
            <textarea placeholder="Ajouter vos documents et sources"></textarea>
        </div>
        <input type="submit" value="ajouter veille" v-on:click="submit">
    </fieldset>
    </form>
</template>
 <script>
// import auteurs from './authors.json';
import themes from './themes.json';
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDKLjfU8Xw8_qudrEl78NIDSNnqoMX2X_I",
    authDomain: "test-940d0.firebaseapp.com",
    databaseURL: "https://test-940d0.firebaseio.com",
     projectId: "test-940d0",
    storageBucket: "test-940d0.appspot.com",
    messagingSenderId: "646526938890"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()

let authorRef = db.ref('test-940d0')

export default {
    name:'ajouter',
    firebase: {
       authors: authorRef
    },
    data(){
        return{
            auteursA:authorRef,
            themes:themes,
            test:[]
        }
    },
    created: function(){
        for(var i = 0; i < auteursA.length; i++)
        {
            this.test.push( auteursA[i].firstname)
        }

    },
    methods: 
    {
    verif: function(event){
        let NewTheme = document.getElementById("new_theme");  

        if(event.target.value == "autre")
        {
            NewTheme.style.display = "block";
        }
        else
        {
            NewTheme.style.display = "none";
        }
    },
    submit: function(event){
        event.preventDefault();
        let newTheme = document.getElementById("new_theme").value;
    }

    }
}
</script>




<style type="sass">

.input{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 4vh 0;
}
.input textarea{
    width: 30%;
    height: 30vh;
}
#new_theme{
    display: none;
}
</style>
