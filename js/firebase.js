// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQsireA5oQcZCoGz3F2RHQz8P6yqT6cg",
  authDomain: "prosper-70th-birthday.firebaseapp.com",
  projectId: "prosper-70th-birthday",
  storageBucket: "prosper-70th-birthday.firebasestorage.app",
  messagingSenderId: "1035692498613",
  appId: "1:1035692498613:web:490003a763e89411b868fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);