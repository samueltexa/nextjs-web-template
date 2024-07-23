// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore from firebase/firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_lCUOtlLfsylFlL_IaRliD37vy_KnbUg",
  authDomain: "webtemplate-93f39.firebaseapp.com",
  projectId: "webtemplate-93f39",
  storageBucket: "webtemplate-93f39.appspot.com",
  messagingSenderId: "282511368702",
  appId: "1:282511368702:web:be7fdfe0b441e8721160af",
  measurementId: "G-MXXWTTE7ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance

export { db };
