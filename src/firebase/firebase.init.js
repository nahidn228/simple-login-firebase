// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWySVgpYQv33RYhQ3ZDw_UTKg-o6AR2lg",
  authDomain: "simple-login-ec83c.firebaseapp.com",
  projectId: "simple-login-ec83c",
  storageBucket: "simple-login-ec83c.firebasestorage.app",
  messagingSenderId: "447128742064",
  appId: "1:447128742064:web:ffbe654ecd5371b2937375",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
