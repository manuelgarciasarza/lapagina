// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdSjLUvVIt3WVoaYvpL8sQ1suS0jo2aKE",
  authDomain: "lapaginauade.firebaseapp.com",
  projectId: "lapaginauade",
  storageBucket: "lapaginauade.firebasestorage.app",
  messagingSenderId: "560885952508",
  appId: "1:560885952508:web:a144358a328c50d2448c79",
  measurementId: "G-62JPHL877M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
