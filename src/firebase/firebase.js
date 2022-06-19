// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9jYAJN4e698LZSQvTPsWrMJ_PpBqjYgY",
  authDomain: "personal-website-c1938.firebaseapp.com",
  projectId: "personal-website-c1938",
  storageBucket: "personal-website-c1938.appspot.com",
  messagingSenderId: "866387802404",
  appId: "1:866387802404:web:91230694ae54f1a1c15bb1",
  measurementId: "G-5282YQNYG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
