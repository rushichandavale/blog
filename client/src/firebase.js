import dotenv from 'dotenv';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7dabd.firebaseapp.com",
  projectId: "mern-blog-7dabd",
  storageBucket: "mern-blog-7dabd.appspot.com",
  messagingSenderId: "540779437542",
  appId: "1:540779437542:web:4be997990fc38017234a27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);