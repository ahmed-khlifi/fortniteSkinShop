// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWiyMtutGRzVBIB7m6B4eIfAdQWGelZx8",
  authDomain: "fortniteskin-71e97.firebaseapp.com",
  projectId: "fortniteskin-71e97",
  storageBucket: "fortniteskin-71e97.appspot.com",
  messagingSenderId: "900611205542",
  appId: "1:900611205542:web:d0d3bdba90cd622335c767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db, collection, getDocs};