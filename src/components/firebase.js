import { initializeApp } from 'firebase';


const app = initializeApp({
    apiKey: "AIzaSyB6JZcMvz20JjlK6rQrSQa2q7g8QZRxikQ",
    authDomain: "pwa-veille-simplon.firebaseapp.com",
    databaseURL: "https://pwa-veille-simplon.firebaseio.com",
    projectId: "pwa-veille-simplon",
    storageBucket: "pwa-veille-simplon.appspot.com",
    messagingSenderId: "980158844645"
  })


  export const db = app.database();
  export const veillesRef = db.ref('veilles');