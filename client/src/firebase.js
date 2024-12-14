// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-8c197.firebaseapp.com",
  projectId: "mern-auth-8c197",
  storageBucket: "mern-auth-8c197.firebasestorage.app",
  messagingSenderId: "306909170027",
  appId: "1:306909170027:web:35ec4da97bae751fb5e42e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);