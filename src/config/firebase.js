// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAtMIhX5y6Vei0jh7OykLnNR7YI3giDito",
  authDomain: "todo-list-9e65a.firebaseapp.com",
  projectId: "todo-list-9e65a",
  storageBucket: "todo-list-9e65a.appspot.com",
  messagingSenderId: "770318378116",
  appId: "1:770318378116:web:aafd14920480e0afd5ced1",
  measurementId: "G-SHCDQCD8MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
//const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider()

/*export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  }).catch((error) => {
    console.log(error);
  })
}*/

export {auth, db};