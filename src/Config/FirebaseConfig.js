// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTcBD5FnvOY8nzKAQbkkclci6-Ut30wNc",
    authDomain: "marvel-task.firebaseapp.com",
    projectId: "marvel-task",
    storageBucket: "marvel-task.appspot.com",
    messagingSenderId: "215493174912",
    appId: "1:215493174912:web:f099e1cf7243412fa52865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;