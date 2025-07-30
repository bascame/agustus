const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

/**
 * Cloud Function untuk menambahkan Custom Claim 'admin' ke seorang pengguna.
 * Harus dipanggil oleh admin yang sudah ada.
 */
exports.berikanAksesAdmin = functions.https.onCall(async (data, context) => {
  
  // Keamanan: Pastikan yang memanggil fungsi ini adalah admin.
  if (context.auth.token.admin !== true) {
    throw new functions.https.HttpsError(
      'permission-denied', 
      'Gagal. Hanya admin yang bisa menjalankan perintah ini.'
    );
  }
  
  // Ambil email target dari data yang dikirim.
  const targetEmail = data.email;
  
  try {
    // Cari pengguna berdasarkan email.
    const user = await admin.auth().getUserByEmail(targetEmail);
    
    // Tambahkan custom claim { admin: true } ke pengguna tersebut.
    await admin.auth().setCustomUserClaims(user.uid, {
      admin: true,
    });
    
    // Kirim pesan sukses kembali ke klien.
    return {
      message: `Sukses! Pengguna ${targetEmail} sekarang telah menjadi admin.`,
    };
  } catch (err) {
    console.error(err);
    throw new functions.https.HttpsError('internal', `Terjadi error: ${err.message}`);
  }
});