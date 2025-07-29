import './style.css';
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  // ... your firebase config
    apiKey: "AIzaSyBNN2z7BvYUhU4Ws1ezYM5nsQ8S276muvw",
    authDomain: "semarak-kemerdekaan.firebaseapp.com",
    databaseURL: "https://semarak-kemerdekaan-default-rtdb.firebaseio.com",
    projectId: "semarak-kemerdekaan",
    storageBucket: "semarak-kemerdekaan.firebasestorage.app",
    messagingSenderId: "543406328573",
    appId: "1:543406328573:web:bb402da63417a8b2570c94"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

// Now you can use the storage object to interact with Firebase Storage
// For example, to create a reference to a file:
const storageRef = ref(storage, 'images/mountains.jpg');

// You can also export the storage object if you need to use it in other modules
export { storage };