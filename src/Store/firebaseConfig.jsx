
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import 'firebase/datastore';
//import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYXwNttPhhwX7v0EnDdaotpQDBUgO2HLk",
  authDomain: "olxreact-8620a.firebaseapp.com",
  projectId: "olxreact-8620a",
  storageBucket: "olxreact-8620a.appspot.com",
  messagingSenderId: "674339125399",
  appId: "1:674339125399:web:68fefc0321f29bcf2891d2",
  measurementId: "G-BTTPZVW052"
};

export const Firebase= firebase.initializeApp(firebaseConfig)

// const firestore = firebase.firestore();