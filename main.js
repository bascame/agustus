import './style.css';
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqXp4cinuCbxM541av2v7OWuZjGaEf1Sc",
  authDomain: "9000-firebase-agustus-1753809413281.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev",
  databaseURL: "https://civil-empire-461419-f4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "civil-empire-461419-f4",
  storageBucket: "civil-empire-461419-f4.firebasestorage.app",
  messagingSenderId: "129090724195",
  appId: "1:129090724195:web:26e6de45e67719dcfa7356"
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