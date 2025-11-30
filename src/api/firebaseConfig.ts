// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoqLnQjbqKT5jlc_01CH0fzuoCKADb1oU",
  authDomain: "thiago-65115.firebaseapp.com",
  projectId: "thiago-65115",
  storageBucket: "thiago-65115.firebasestorage.app",
  messagingSenderId: "744378300156",
  appId: "1:744378300156:web:ed5065f4a4900a12bb4979",
  measurementId: "G-2T7J6SP3J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);

