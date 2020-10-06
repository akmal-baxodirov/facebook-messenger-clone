import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyDdyHQkJ5lB8QqtzYY0AmuR2l-M734aSxw",
  authDomain: "facebook-messanger-clone-c31d3.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-c31d3.firebaseio.com",
  projectId: "facebook-messanger-clone-c31d3",
  storageBucket: "facebook-messanger-clone-c31d3.appspot.com",
  messagingSenderId: "228922501594",
  appId: "1:228922501594:web:9969fa84008c4c8594f8e3",
  measurementId: "G-ERHD2X8DD9",
}) ;

const db = firebaseApp.firestore();

export default db;
