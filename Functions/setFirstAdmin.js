#!/usr/bin/env node

/**
 * Script to set the first admin user
 * Usage: node setFirstAdmin.js <user-email>
 *
 * This script should be run once to create the first admin user.
 * After that, admins can create other admins through the UI.
 */

const admin = require("firebase-admin");
const serviceAccount = require("./naucsevic-firebase-adminsdk-yqu1i-a4b1d8e6f6.json"); // Update path to your service account key

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function setFirstAdmin() {
  const userEmail = process.argv[2];

  if (!userEmail) {
    console.error("Usage: node setFirstAdmin.js <user-email>");
    console.error("Example: node setFirstAdmin.js admin@example.com");
    process.exit(1);
  }

  try {
    // Find user by email
    const userRecord = await admin.auth().getUserByEmail(userEmail);

    // Set admin custom claims
    await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });

    console.log(`✅ Admin privileges granted to user: ${userEmail}`);
    console.log(`User UID: ${userRecord.uid}`);
    console.log(
      `The user will need to log out and log back in for changes to take effect.`
    );
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      console.error(`❌ User with email ${userEmail} not found.`);
      console.error("Make sure the user has registered in your app first.");
    } else {
      console.error("❌ Error setting admin privileges:", error.message);
    }
    process.exit(1);
  }

  process.exit(0);
}

setFirstAdmin();
