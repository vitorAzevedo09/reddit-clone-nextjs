// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9vNX5s0QTCB3SBK74D30zkLmABAiqw7M",
  authDomain: "reddit-clone-tutorial-nextjs.firebaseapp.com",
  projectId: "reddit-clone-tutorial-nextjs",
  storageBucket: "reddit-clone-tutorial-nextjs.appspot.com",
  messagingSenderId: "496726653034",
  appId: "1:496726653034:web:d15d4af62e5a270e5b7213",
  measurementId: "G-N4YWDQ4BP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
