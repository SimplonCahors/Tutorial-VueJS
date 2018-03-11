<template>
    <div id="Ajouter">
        <v-form>
            <v-text-field label="Titre" v-model="searchTxt"></v-text-field>
            <v-select :items="auteurs" item-text="firstname" item-value="firstname" return-object v-model="searchTheme" label="Auteurs"></v-select>
            <v-dialog ref="dialog" persistent v-model="modal"  full-width :return-value.sync="date">
                <v-text-field slot="activator" label="Choisir une date" v-model="date" readonly></v-text-field>
                <v-date-picker v-model="date" scrollable>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
            </v-dialog>
            <v-select v-on:change="verif" :items="themes" v-model="searchTheme" label="Thème" multi-line></v-select>
            <!-- <div class="input">
                <label for="theme"></label>
                <select id="theme" v-on:change="verif">
                <option>Thematique</option>
                <option v-for="items in themes">
                        {{items}}  
                    </option>
                <option id="ok">autre</option>
            </select> -->
                <!-- <label for="new_theme"></label>
                <input id="new_theme" type="text" placeholder="nouvelle thématique">
            </div> -->
            <div class="input">
                <textarea placeholder="Ajouter vos documents et sources"></textarea>
            </div>
            <input type="submit" value="ajouter veille" v-on:click="addVeille">
        </v-form>
    </div>
</template>


<script>
    import authors from './authors.json';
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
    let starCountRef = db.ref('veille');
    
    
    export default {
        name: 'Ajouter',
        data() {
            return {
                auteurs: authors,
                themes: themes,
                test: [],
                lastKey: 0,
                date: null,
                menu: false,
                modal: false,
    
    
                newveille: {
                    titre: '',
                    authorsS: [],
                    date: '',
                    theme: '',
                    infos: ''
                }
            }
        },
        created: function() {
            var self = this
    
            starCountRef.once('value', function(snapshot) {
    
                var veillesKeys = Object.keys(snapshot.val());
                self.lastKey = veillesKeys.splice(veillesKeys.length - 1, veillesKeys.length)
    
    
            });
    
        },
        methods: {
            addVeille: function(event) {
                this.newveille.titre = document.getElementById('titre').value;
                this.newveille.authorsS = ['Elisa', document.getElementById('auteurs').value];
                this.newveille.date = document.getElementById('date').value;
                this.newveille.theme = document.getElementById('theme').value;
                this.newveille.infos = 'Demanez';
    
                db.ref('veille/' + (parseInt(this.lastKey) + 1)).set(this.newveille);
            },
    
    
            verif: function(event) {
                let NewTheme = document.getElementById("new_theme");
    
                if (event.target.value == "autre") {
                    NewTheme.style.display = "block";
                } else {
                    NewTheme.style.display = "none";
                }
            },
            submit: function(event) {
                event.preventDefault();
                let newTheme = document.getElementById("new_theme").value;
            }
        },
    }
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
