import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6woR-ig6qfyHSjth7vedMznE6yd5SWJ4",
    authDomain: "classroom-90d62.firebaseapp.com",
    projectId: "classroom-90d62",
    storageBucket: "classroom-90d62.appspot.com",
    messagingSenderId: "211363720204",
    appId: "1:211363720204:web:2b115a71006a60a8709229",
    measurementId: "G-DYMNH7TCN8"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firebase_store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase_store;