// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYH8nhdt_Oq2kXpC_wKoMwhfUe8pWmyjU",
    authDomain: "buenas-practicas-1f8e5.firebaseapp.com",
    projectId: "buenas-practicas-1f8e5",
    storageBucket: "buenas-practicas-1f8e5.appspot.com",
    messagingSenderId: "598699854502",
    appId: "1:598699854502:web:bc63e8f7c5a3ffa2610267"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};