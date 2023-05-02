import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALjlSvC1QqJn4xBn43RE7FQ_JkWT-Ciwo",
  authDomain: "to-do-c3513.firebaseapp.com",
  projectId: "to-do-c3513",
  storageBucket: "to-do-c3513.appspot.com",
  messagingSenderId: "723968248597",
  appId: "1:723968248597:web:c95af16fcc36f339a9771c",
  measurementId: "G-VCELGX4TE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);