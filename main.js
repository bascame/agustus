// Impor file CSS untuk penataan gaya
import './style.css';
// Impor modul Firebase yang diperlukan: initializeApp untuk inisialisasi aplikasi dan getStorage, ref untuk Firebase Storage
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Objek konfigurasi Firebase.
// Ini berisi semua kredensial dan pengidentifikasi yang diperlukan untuk proyek Firebase Anda.
const firebaseConfig = {
  apiKey: "AIzaSyCqXp4cinuCbxM541av2v7OWuZjGaEf1Sc", // Kunci API proyek Firebase Anda
  authDomain: "9000-firebase-agustus-1753809413281.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev", // Domain otentikasi proyek Firebase Anda
  databaseURL: "https://civil-empire-461419-f4-default-rtdb.asia-southeast1.firebasedatabase.app", // URL Realtime Database Firebase Anda
  projectId: "civil-empire-461419-f4", // ID proyek Firebase Anda
  storageBucket: "civil-empire-461419-f4.firebasestorage.app", // URL bucket Firebase Storage Anda
  messagingSenderId: "129090724195", // ID Pengirim Pesan proyek Firebase Anda
  appId: "1:129090724195:web:26e6de45e67719dcfa7356" // ID Aplikasi Firebase Anda
};

// Inisialisasi Firebase dengan konfigurasi yang diberikan.
// Ini membuat instance aplikasi Firebase yang dapat Anda gunakan untuk mengakses berbagai layanan Firebase.
const app = initializeApp(firebaseConfig);


// Dapatkan referensi ke layanan Firebase Storage menggunakan aplikasi Firebase yang telah diinisialisasi.
const storage = getStorage(app);

// Sekarang Anda dapat menggunakan objek storage untuk berinteraksi dengan Firebase Storage.
// Contohnya, untuk membuat reference to a file:
const storageRef = ref(storage, 'images/mountains.jpg');

// You can also export the storage object if you need to use it in other modules
export { storage };