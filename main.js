import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  // ... your firebase config
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