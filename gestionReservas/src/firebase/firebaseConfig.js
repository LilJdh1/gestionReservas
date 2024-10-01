// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0vhB5aU3JyErJDZjhSoHAD7V-HlP8VWc",
  authDomain: "gestionreserva-bf295.firebaseapp.com",
  projectId: "gestionreserva-bf295",
  storageBucket: "gestionreserva-bf295.appspot.com",
  messagingSenderId: "1017798051082",
  appId: "1:1017798051082:web:0535f92553c9531e08a6f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getfirestore(appFirebase);