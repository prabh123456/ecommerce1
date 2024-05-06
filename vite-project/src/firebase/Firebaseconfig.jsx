import { initializeApp } from "firebase/app";
import {getFirestore}from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1sGmEIA96Gu922wfqBRFalEQrGgB6mAI",
  authDomain: "ecommerce-440b4.firebaseapp.com",
  projectId: "ecommerce-440b4",
  storageBucket: "ecommerce-440b4.appspot.com",
  messagingSenderId: "461528404727",
  appId: "1:461528404727:web:dcae77008b47078fa9f9f2",
  measurementId: "G-YTL85NXBM0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB=getFirestore(app);
const auth=getAuth(app);
export {fireDB,auth,analytics};