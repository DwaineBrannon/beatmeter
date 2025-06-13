import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Use environment variables or config file for these values
const firebaseConfig = {
  apiKey: "AIzaSyBV22Jhml3A9EXEWUg8ZxlTkBng2bkxQPQ",

  authDomain: "beatmeter-baf5a.firebaseapp.com",

  projectId: "beatmeter-baf5a",

  storageBucket: "beatmeter-baf5a.firebasestorage.app",

  messagingSenderId: "111775710994",

  appId: "1:111775710994:web:4984cb3f26116535fdfdcb",

  measurementId: "G-2RDYS7W6Z0"

};

// Initialize Firebase - do this ONCE and export the instances
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };