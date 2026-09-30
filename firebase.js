// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZhfHtQ7ydfdoH62kgqU_ngGhoSUilhg4",
  authDomain: "nandini-blog.firebaseapp.com",
  projectId: "nandini-blog",
  storageBucket: "nandini-blog.firebasestorage.app",
  messagingSenderId: "5201548560",
  appId: "1:5201548560:web:35d614fc08c62cd2dcc195",
  measurementId: "G-BR15L89QXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);