const admin = require("firebase-admin");

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = require("./naucsevic-firebase-adminsdk-yqu1i-a4b1d8e6f6.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

async function setAdmin() {
  const email = "elznicfilip@gmail.com";

  try {
    console.log(`🔍 Hledám uživatele s emailem: ${email}`);

    const user = await admin.auth().getUserByEmail(email);
    console.log(`✅ Uživatel nalezen: ${user.displayName || email}`);

    await admin.auth().setCustomUserClaims(user.uid, { admin: true });

    console.log(`🔑 Admin práva úspěšně udělena pro: ${email}`);
    console.log("📝 Poznámka: Uživatel se musí odhlásit a znovu přihlásit");

    // Verify the claims were set
    const updatedUser = await admin.auth().getUser(user.uid);
    console.log("🔐 Custom claims:", updatedUser.customClaims);
  } catch (error) {
    console.error("❌ Chyba:", error.message);
  }
}

setAdmin();
