// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPaUdMpU2ev-2Jgrzgq8dVusSbYnfBj7s",
  authDomain: "chiniapp-895b8.firebaseapp.com",
  databaseURL: "https://chiniapp-895b8-default-rtdb.firebaseio.com",
  projectId: "chiniapp-895b8",
  storageBucket: "chiniapp-895b8.appspot.com",
  messagingSenderId: "188088342779",
  appId: "1:188088342779:web:03d6957ec42d0ef7bc785e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);