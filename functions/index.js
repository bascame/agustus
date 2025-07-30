// Import library yang dibutuhkan
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Buat sebuah "Callable Function" bernama "addAdminRole"
exports.addAdminRole = functions.https.onCall(async (data, context) => {
  // 1. PENTING: Periksa apakah pengguna yang memanggil fungsi ini sudah admin.
  // Ini mencegah sembarang pengguna menjadikan dirinya sendiri admin.
  if (context.auth.token.admin !== true) {
    return { error: "Hanya admin yang dapat menambahkan admin baru." };
  }

  // 2. Dapatkan email dari data yang dikirim, lalu cari pengguna tersebut.
  const email = data.email;
  try {
    const user = await admin.auth().getUserByEmail(email);
    // 3. Tetapkan custom claim { admin: true } pada pengguna tersebut.
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });

    return { message: `Sukses! ${email} sekarang adalah admin.` };
  } catch (err) {
    console.error(err);
    return { error: "Pengguna tidak ditemukan atau terjadi kesalahan." };
  }
});