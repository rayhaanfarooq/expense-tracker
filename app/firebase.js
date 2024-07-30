// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCR4Qb0c2hTuDLUHzMLoqGvr8rw2gyfIM",
  authDomain: "expense-tracker-31138.firebaseapp.com",
  projectId: "expense-tracker-31138",
  storageBucket: "expense-tracker-31138.appspot.com",
  messagingSenderId: "583643614744",
  appId: "1:583643614744:web:f39a5ce7ac309cbab4bd6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);