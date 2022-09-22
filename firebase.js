import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBee1618pFMKkcAiOdUfOoh2XdX4KBM8-0",
  authDomain: "facebook-clone-21ca2.firebaseapp.com",
  projectId: "facebook-clone-21ca2",
  storageBucket: "facebook-clone-21ca2.appspot.com",
  messagingSenderId: "701712636005",
  appId: "1:701712636005:web:0b33e2a9b13edc98d2ce8c",
  measurementId: "G-J50M1Q7R8G",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

const storage = firebase.storage();
export { db, storage };
