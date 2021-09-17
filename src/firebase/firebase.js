
import {firebase} from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6woR-ig6qfyHSjth7vedMznE6yd5SWJ4",
    authDomain: "classroom-90d62.firebaseapp.com",
    projectId: "classroom-90d62",
    storageBucket: "classroom-90d62.appspot.com",
    messagingSenderId: "211363720204",
    appId: "1:211363720204:web:2b115a71006a60a8709229",
    measurementId: "G-DYMNH7TCN8"
};
// initialize App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// database
const db = firebaseApp.firestore();
// auth
const auth = firebase.auth();
// provider 
const provider = new firebase.auth.GoogleAuthProvider();