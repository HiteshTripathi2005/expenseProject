import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUp7P7wO5t4xV51J8ugyNjKR7TWq9nguw",
  authDomain: "expense-58c73.firebaseapp.com",
  projectId: "expense-58c73",
  storageBucket: "expense-58c73.appspot.com",
  messagingSenderId: "746514044887",
  appId: "1:746514044887:web:6d5728c0d4d8f407b9dd92",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
