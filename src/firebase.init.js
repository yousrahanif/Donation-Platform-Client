// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvu4AZ8LUh8Qz7dZ1fs_SMBgOn9OUc-dg",
  authDomain: "fundtogether-37491.firebaseapp.com",
  projectId: "fundtogether-37491",
  storageBucket: "fundtogether-37491.firebasestorage.app",
  messagingSenderId: "817066078215",
  appId: "1:817066078215:web:10bad0f00e9d6e8e6f3aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);