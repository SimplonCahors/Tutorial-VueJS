<template>
    <div id="Ajouter">
        <v-container>
            <v-layout row wrap>
            <v-flex xs8>
                <v-text-field v-model="veille.title" required placeholder="Titre"></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-dialog ref="dialog" persistent v-model="displayDatePicker" lazy full-width width="290px" :return-value.sync="date">
                <v-text-field slot="activator" placeholder="Date" v-model="veille.date" append-icon="event" readonly></v-text-field>
                <v-date-picker v-model="veille.date" locale="fr-FR" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="displayDatePicker = false">Annuler</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
            </v-dialog>
            </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-select v-model="veille.authors" :items="auteurs" multiple label="Auteurs"></v-select>
                </v-flex>
                <v-flex xs12 md6>
                    <v-select v-model="veille.themes" :items="themes" multiple label="Thèmes"></v-select>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field v-model="veille.comments" rows="3" label="Commentaires" textarea></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <!-- <p :key="item" v-for="item in veille.links">{{item}}</p> -->
                    <v-text-field v-model="link" placeholder="Nouveau lien"></v-text-field>  
                    <v-btn small depressed color="grey" v-on:click="addLink">Ajouter lien</v-btn>
                </v-flex>
            </v-layout>
        
            <v-btn color="primary" v-on:click="addVeille">Ajouter veille</v-btn>
        </v-container>
        <v-snackbar top right color="cyan" timeout="2000" v-model="snackbar">Lien ajouté.</v-snackbar>
    </div>
</template>


<script>
    import authors from './authors.json';
    import themes from './themes.json';
    import {
        veillesRef
    } from './firebase';
    
    export default {
        name: 'Ajouter',
        data() {
            return {
                displayDatePicker:false,
                snackbar:false,
                themes: themes,
                auteurs: authors,
                link: '',
                veille: {
                    title: '',
                    authors: '',
                    themes: '',
                    date: '',
                    comments: '',
                    links: [],
                    edit:false
                }
            }
        },
        props : ['displayPage'],
        firebase: {
            veilles: veillesRef
        },
        created: function() {
            console.log(this.veilles)   
        },
        methods: {
            addVeille() {
                let confirmation = confirm("Ajouter cette veille ?")
                if (confirmation === true) {
                    veillesRef.push(this.veille)
                    this.link = ''
                    this.veille.links = []
                    this.$emit('closeAjouter')
                }

            },
            addLink() {
                this.snackbar=true;
                this.veille.links.push(this.link)
                this.link= ''
            }
        }
    }
</script>

<style type="sass">

</style>
