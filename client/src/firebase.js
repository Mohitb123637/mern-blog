
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-project-8adfa.firebaseapp.com",
  projectId: "mern-blog-project-8adfa",
  storageBucket: "mern-blog-project-8adfa.appspot.com",
  messagingSenderId: "527769936332",
  appId: "1:527769936332:web:25cd38842e4573c110fd69",
  measurementId: "G-SMH204H16Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);