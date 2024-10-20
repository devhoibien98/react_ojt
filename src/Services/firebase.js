// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTEkfLVtTfiY5uykfoSTHJY0bZhMKqbyc",
  authDomain: "login-orchid.firebaseapp.com",
  projectId: "login-orchid",
  storageBucket: "login-orchid.appspot.com",
  messagingSenderId: "610844822000",
  appId: "1:610844822000:web:730e16beeef47ac236b535",
  measurementId: "G-DGJ5RK91RQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  provider.setCustomParameters({ prompt: "select_account" });

  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Google Login Success", user.displayName);
      console.log(auth.currentUser);
      return user;
    })
    .catch((error) => {
      console.log("Google Login Error", error.message);
    });
};
