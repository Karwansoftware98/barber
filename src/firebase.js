import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIlVXfLxgsS2VIcDTh08f3b4JcKeXIR-c",
  authDomain: "kurd-barber-authentication.firebaseapp.com",
  projectId: "kurd-barber-authentication",
  storageBucket: "kurd-barber-authentication.appspot.com",
  messagingSenderId: "1074493583081",
  appId: "1:1074493583081:web:8ddc7f279d1729d38c8a78",
  measurementId: "G-L1HXX782YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
