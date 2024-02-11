// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APP_KEY,
  authDomain: "mern-estate-13c91.firebaseapp.com",
  projectId: "mern-estate-13c91",
  storageBucket: "mern-estate-13c91.appspot.com",
  messagingSenderId: "395205637656",
  appId: "1:395205637656:web:7722fc2bb6b22507c6756d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);