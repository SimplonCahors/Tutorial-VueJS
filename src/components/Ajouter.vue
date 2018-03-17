<template>
    <div id="Ajouter">
        <v-form>
            <v-text-field label="Titre" v-model="newveille.titre"></v-text-field>
            <v-select :items="auteurs" item-text="firstname" item-value="firstname" return-object v-model="auteurs" label="Auteurs"></v-select>
            <v-dialog ref="dialog" persistent v-model="modal"  full-width :return-value.sync="date">
                <v-text-field slot="activator" label="Choisir une date" v-model="date" readonly></v-text-field>
                <v-date-picker v-model="date" scrollable>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
            </v-dialog>
            <v-select v-on:change="verif" :items="themes" v-model="themes" label="Thème" multi-line></v-select>
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
            <v-btn color="primary" v-on:click="submitVeille">ajouter veille</v-btn>
            <!-- <input type="submit" value="ajouter veille" v-on:click="submitVeille"> -->

        </v-form>
    </div>
</template>


<script>
import authors from './authors.json';
import themes from './themes.json';
import { veillesRef } from './firebase';

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
    firebase: {
        veilles : veillesRef
    },
    created: function() {
        var self = this

        starCountRef.once('value', function(snapshot) {

            var veillesKeys = Object.keys(snapshot.val());
            self.lastKey = veillesKeys.splice(veillesKeys.length - 1, veillesKeys.length)


        });

    },
    methods: {
        submitVeille(){
            veillesRef.push({
              titre: this.newveille.titre,
              auteur: this.auteurs,
              date: this.date,
              thème: this.themes,
              edit: false})
        },
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
