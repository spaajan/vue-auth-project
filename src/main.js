import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

//Tämä haetaan suoraan copypastella Firebasesta suoraan
const firebaseConfig = {
    apiKey: "AIzaSyBkTDqloaFdUDiCLaRY304jG_k770EIjes",
    authDomain: "vue-auth-project-86a43.firebaseapp.com",
    projectId: "vue-auth-project-86a43",
    storageBucket: "vue-auth-project-86a43.appspot.com",
    messagingSenderId: "771971166340",
    appId: "1:771971166340:web:d47e6d42ef3b1c5a8992d1"
  };

  //Käynnistetään firebase ja välitetään parametriksi haettu config
  firebase.initializeApp(firebaseConfig)


createApp(App).use(store).use(router).mount('#app')
