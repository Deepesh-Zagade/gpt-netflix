// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVLe53b1KHt4PtN166TLFuRJS8s0YK12Y",
  authDomain: "netflixgpt-ad2e1.firebaseapp.com",
  projectId: "netflixgpt-ad2e1",
  storageBucket: "netflixgpt-ad2e1.firebasestorage.app",
  messagingSenderId: "308767860914",
  appId: "1:308767860914:web:6ce62348d5f695011e41ab",
  measurementId: "G-7301XC4BY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()