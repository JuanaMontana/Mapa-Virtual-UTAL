// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk75uhlLaz9ldMkITt4gqvYR_te-e-py4",
  authDomain: "db-mapa-utalca.firebaseapp.com",
  databaseURL: "https://db-mapa-utalca-default-rtdb.firebaseio.com",
  projectId: "db-mapa-utalca",
  storageBucket: "db-mapa-utalca.appspot.com",
  messagingSenderId: "250262870549",
  appId: "1:250262870549:web:4c96d9ee14451d7ad88c1c",
  measurementId: "G-QPGKQ6J83E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;