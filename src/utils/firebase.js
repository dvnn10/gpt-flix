// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOzDQzh-_rzNsed3H53CczWfWIzozHpzE",
  authDomain: "gpt-flix-24a71.firebaseapp.com",
  projectId: "gpt-flix-24a71",
  storageBucket: "gpt-flix-24a71.appspot.com",
  messagingSenderId: "994760761947",
  appId: "1:994760761947:web:a69150852b82461e05d57e",
  measurementId: "G-45J9XNZX8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();