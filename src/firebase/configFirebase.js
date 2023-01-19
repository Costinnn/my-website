import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_xS1sK_OFOPPi2VAuK-ZYuR2nec6GXIU",
  authDomain: "mywebsite-ed670.firebaseapp.com",
  projectId: "mywebsite-ed670",
  storageBucket: "mywebsite-ed670.appspot.com",
  messagingSenderId: "347794559341",
  appId: "1:347794559341:web:6f9ccfbe45a5a6330c8a64",
};

//init firebase app
const app = initializeApp(firebaseConfig);

//init firebase storage
const db = getFirestore(app);

//init firebase authentification
const auth = getAuth(app)

export { db, auth };
