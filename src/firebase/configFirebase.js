import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mywebsite-ed670.firebaseapp.com",
  projectId: "mywebsite-ed670",
  storageBucket: "mywebsite-ed670.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

//init firebase app
const app = initializeApp(firebaseConfig);

//init firebase storage
const db = getFirestore(app);

//init firebase authentification
const auth = getAuth(app);

export { db, auth };
