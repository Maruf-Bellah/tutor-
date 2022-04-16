// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1DRF75S7es-cO-qKmqcRmAYGQYrRcIc",
  authDomain: "assainment-3fdcb.firebaseapp.com",
  projectId: "assainment-3fdcb",
  storageBucket: "assainment-3fdcb.appspot.com",
  messagingSenderId: "780478703232",
  appId: "1:780478703232:web:776415aaaab1ea04362865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
