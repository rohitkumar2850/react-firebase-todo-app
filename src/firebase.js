// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyA_CAlSxY5dhXZwUMpGPUkTXtLS04Yhe8w",
//     authDomain: "todo-app-cp-cdaaa.firebaseapp.com",
//     projectId: "todo-app-cp-cdaaa",
//     storageBucket: "todo-app-cp-cdaaa.appspot.com",
//     messagingSenderId: "948664390243",
//     appId: "1:948664390243:web:e657a8d6fafb8fb4ab1e56",
//     measurementId: "G-32PTR8RDJT"
//   };
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_CAlSxY5dhXZwUMpGPUkTXtLS04Yhe8w",
  authDomain: "todo-app-cp-cdaaa.firebaseapp.com",
  projectId: "todo-app-cp-cdaaa",
  storageBucket: "todo-app-cp-cdaaa.appspot.com",
  messagingSenderId: "948664390243",
  appId: "1:948664390243:web:e657a8d6fafb8fb4ab1e56",
  measurementId: "G-32PTR8RDJT",
});

const db = firebaseApp.firestore();

export default db;
