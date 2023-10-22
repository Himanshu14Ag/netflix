
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Q1TYggR8tMdjnqIv5w7zKRWstr9SoJs",
  authDomain: "netflix-clone-de204.firebaseapp.com",
  projectId: "netflix-clone-de204",
  storageBucket: "netflix-clone-de204.appspot.com",
  messagingSenderId: "263618649433",
  appId: "1:263618649433:web:985d193150d8b763354048",
  measurementId: "G-ZCTD3ZWRYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;