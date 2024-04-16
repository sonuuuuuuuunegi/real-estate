// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5918c.firebaseapp.com",
  projectId: "mern-estate-5918c",
  storageBucket: "mern-estate-5918c.appspot.com",
  messagingSenderId: "1071796140129",
  appId: "1:1071796140129:web:73c3c58523a468a4099220"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);