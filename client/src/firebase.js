// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "mern-estate-cd549.firebaseapp.com",
  projectId: "mern-estate-cd549",
  storageBucket: "mern-estate-cd549.appspot.com",
  messagingSenderId: "811622951170",
  appId: "1:811622951170:web:549e9f7768b904f24bba1b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
