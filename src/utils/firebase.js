import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdKXs068ACMUgK0ffElFtoRBWNImE1JM4",
  authDomain: "vibeflixgpt.firebaseapp.com",
  projectId: "vibeflixgpt",
  storageBucket: "vibeflixgpt.firebasestorage.app",
  messagingSenderId: "746159642706",
  appId: "1:746159642706:web:90b402b84c2e5348a4e78b",
  measurementId: "G-EPERY24Z1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();