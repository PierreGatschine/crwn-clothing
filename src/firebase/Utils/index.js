import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import 'firebase/database';
//import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBJQqUkyrjweOGbk9uKthZ4enW0BxEWocI",
  authDomain: "crwn-db-cc671.firebaseapp.com",
  projectId: "crwn-db-cc671",
  storageBucket: "crwn-db-cc671.appspot.com",
  messagingSenderId: "73427234119",
  appId: "1:73427234119:web:9c3da57dc8c9c4a400f062",
  measurementId: "G-E8TY7TP239"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;