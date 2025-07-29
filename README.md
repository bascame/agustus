<div align="center">
  <img src="https://i.ibb.co/zV4HhFq/logo-hut-ri-80.png" alt="Logo HUT RI 80" width="150">
  <h1 align="center">Sistem Manajemen Perayaan HUT RI ke-80</h1>
  <p align="center">
    Aplikasi web dasbor untuk mengelola semua aspek acara perayaan Hari Kemerdekaan Republik Indonesia ke-80.
  </p>
</div>

---

## ✨ Fitur Utama

Aplikasi ini menyediakan platform terpusat bagi panitia untuk mengelola acara secara efisien.

- **🔒 Otentikasi Aman**: Login khusus untuk panitia menggunakan Firebase Authentication.
- **📊 Dasbor Interaktif**: Ringkasan data penting dalam kartu statistik dan grafik visual, termasuk:
  - Total panitia dan jumlah perlombaan.
  - Ringkasan keuangan (pemasukan, pengeluaran, sisa dana).
  - Grafik batang perbandingan dana masuk dan keluar.
  - Daftar sisa pembayaran uang muka.
- **💸 Manajemen Keuangan Lengkap**:
  - Pencatatan **Uang Masuk** dari berbagai sumber.
  - Pencatatan **Uang Keluar** untuk berbagai alokasi.
  - Pengelolaan **Uang Muka** dengan status lunas/belum lunas.
- **👥 Kelola Panitia**:
  - Tambah, edit, dan hapus data anggota panitia.
  - Unggah dan kelola foto profil untuk setiap anggota.
- **🏆 Kelola Perlombaan**:
  - Tambah, edit, dan hapus data perlombaan.
  - Tetapkan Penanggung Jawab (PIC) dari daftar panitia yang ada.
- **🏛️ Visualisasi Struktur Panitia**: Tampilan hierarki kepanitiaan yang jelas dan mudah dipahami.
- **📄 Ekspor ke CSV**: Ekspor data panitia dan data keuangan ke dalam format file CSV dengan mudah.
- **📱 Desain Responsif**: Tampilan yang optimal di berbagai perangkat, baik desktop maupun mobile.

## 🚀 Teknologi yang Digunakan

- **Frontend**:
  - HTML5
  - **Tailwind CSS**: Untuk styling UI yang modern dan cepat.
  - **JavaScript (ES6+)**: Untuk logika aplikasi dan interaktivitas.
- **Backend & Database (BaaS)**:
  - **Firebase Firestore**: Sebagai database NoSQL real-time untuk menyimpan semua data.
  - **Firebase Storage**: Untuk menyimpan aset seperti foto profil panitia.
  - **Firebase Authentication**: Untuk mengelola otentikasi pengguna (login).
- **Pustaka (Libraries)**:
  - **Chart.js**: Untuk membuat grafik dan visualisasi data yang interaktif.
  - **Font Awesome**: Untuk ikonografi.

## ⚙️ Cara Menjalankan Proyek

1.  **Konfigurasi Firebase**:
    - Buka file `index.html`.
    - Temukan objek `firebaseConfig` di dalam tag `<script>`.
    - Ganti dengan konfigurasi dari proyek Firebase Anda sendiri.
2.  **Setup Firebase Console**:
    - Pastikan Anda telah mengaktifkan **Firestore**, **Storage**, dan **Authentication** (dengan metode Email/Password) di Firebase Console Anda.
3.  **Tambahkan Pengguna Admin**:
    - Buka bagian **Authentication** -> **Users** di Firebase Console.
    - Tambahkan pengguna baru (misalnya, `panitia@hutri.id` dengan kata sandi pilihan Anda) agar dapat masuk ke aplikasi.
4.  **Buka Aplikasi**:
    - Buka file `index.html` di browser Anda.
    - Masuk menggunakan kredensial yang telah Anda daftarkan di langkah sebelumnya.

