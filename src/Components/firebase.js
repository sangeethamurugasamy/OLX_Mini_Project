import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyC-xhpS2UqgUd5PJPC5isgogNtUARzAiBA",
    authDomain: "mini-project-68725.firebaseapp.com",
    projectId: "mini-project-68725",
    storageBucket: "mini-project-68725.appspot.com",
    messagingSenderId: "208026567934",
    appId: "1:208026567934:web:4f58aae02bfdb2031e11af",
    measurementId: "G-5THF6LRK63"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
export{auth};