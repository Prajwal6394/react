import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwYKrwAZARc1IT6eKeXk_SsvKF4Nw8XNA",
    authDomain: "trickydos.firebaseapp.com",
    projectId: "trickydos",
    storageBucket: "trickydos.appspot.com",
    messagingSenderId: "167337337821",
    appId: "1:167337337821:web:a5f20a9aee771879af4c34",
    measurementId: "G-W8YLP4GL5P"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };