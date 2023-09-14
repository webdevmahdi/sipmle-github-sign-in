// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvKge8yPOxVzaFjLcwKT6vM_okve7bEmI",
  authDomain: "simple-github-sign-in.firebaseapp.com",
  projectId: "simple-github-sign-in",
  storageBucket: "simple-github-sign-in.appspot.com",
  messagingSenderId: "897738361583",
  appId: "1:897738361583:web:f0a1b4f7c188445b91291a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;