// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_NR3mhJy_tjtpD2s1gaV3rpJyrp3XHZU",
  authDomain: "budgwt-app.firebaseapp.com",
  projectId: "budgwt-app",
  storageBucket: "budgwt-app.appspot.com",
  messagingSenderId: "882072944485",
  appId: "1:882072944485:web:30a76dff8566a669712b8c",
  measurementId: "G-XSN4YQL78L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
//const analytics = getAnalytics(app);

export {auth, db};