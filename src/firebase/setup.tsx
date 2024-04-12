import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPGc8OzUo8ev90gFIER21Zq6lEQ-gQpfM",
  authDomain: "quora-cline.firebaseapp.com",
  projectId: "quora-cline",
  storageBucket: "quora-cline.appspot.com",
  messagingSenderId: "824158758206",
  appId: "1:824158758206:web:6014d2bd757f2300d8386f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
