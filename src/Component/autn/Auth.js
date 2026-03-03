


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACKWVK3LkVbsAeKjwkufJXRHqxBT0E0Ww",
  authDomain: "build-dragon-news-f9ed0.firebaseapp.com",
  projectId: "build-dragon-news-f9ed0",
  storageBucket: "build-dragon-news-f9ed0.firebasestorage.app",
  messagingSenderId: "672723164537",
  appId: "1:672723164537:web:75373fb2047caad714a3a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);