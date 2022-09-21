// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASNUeJJ2qpgoeGSMhfs7zMtn54fL7rIgg",
    authDomain: "pomodoro-79338.firebaseapp.com",
    projectId: "pomodoro-79338",
    storageBucket: "pomodoro-79338.appspot.com",
    messagingSenderId: "619635045328",
    appId: "1:619635045328:web:230a6111ef43a7665c3fd5",
    measurementId: "G-829ZYX50G0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
