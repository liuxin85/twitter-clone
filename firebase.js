// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBYx7ymabsNIEMCy7MsctnYXR2U_82ZER0",
  authDomain: "twitter-clone-d891f.firebaseapp.com",
  projectId: "twitter-clone-d891f",
  storageBucket: "twitter-clone-d891f.appspot.com",
  messagingSenderId: "755069548200",
  appId: "1:755069548200:web:00a52ce17798317c06f49d",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
