import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxf9SapjkZ1Jmacubwz_NW-vtLN7h4lxs",
  authDomain: "ai-interview-c431e.firebaseapp.com",
  projectId: "ai-interview-c431e",
  storageBucket: "ai-interview-c431e.firebasestorage.app",
  messagingSenderId: "60313173455",
  appId: "1:60313173455:web:2397593084115da09f26ba",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();