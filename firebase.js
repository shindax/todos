import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClJ1FTl6V1juuMpDf_zwYWujFXm5nyMsU",
  authDomain: "todos-c59f2.firebaseapp.com",
  projectId: "todos-c59f2",
  storageBucket: "todos-c59f2.firebasestorage.app",
  messagingSenderId: "1013538606753",
  appId: "1:1013538606753:web:71dfea4a52972599392ae0",
  databaseURL:"https://todos-c59f2-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;