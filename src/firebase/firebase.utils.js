import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATuimjQ1eUJofOHPaGS-guzXKgRXVpKCQ",
    authDomain: "blck-db.firebaseapp.com",
    databaseURL: "https://blck-db.firebaseio.com",
    projectId: "blck-db",
    storageBucket: "",
    messagingSenderId: "330375636695",
    appId: "1:330375636695:web:0fd752eafef7cfa7"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;

