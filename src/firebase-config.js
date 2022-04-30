
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCANY2gyLDZeSpJpNwkGWUrqbT31MtVJJk",
  authDomain: "react-crud-e1809.firebaseapp.com",
  projectId: "react-crud-e1809",
  storageBucket: "react-crud-e1809.appspot.com",
  messagingSenderId: "101381250866",
  appId: "1:101381250866:web:55ad0173ef806c46e1412b",
  measurementId: "G-TR3Q8EY2VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  db = getFirestore(app);