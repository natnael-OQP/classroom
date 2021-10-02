import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB03eda7OMtOq-tzrKt-RvojalnVc2WVBI",
    authDomain: "debate-rooms.firebaseapp.com",
    projectId: "debate-rooms",
    storageBucket: "debate-rooms.appspot.com",
    messagingSenderId: "704286705359",
    appId: "1:704286705359:web:c2745fd7a602b21c35d9ba"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default db;