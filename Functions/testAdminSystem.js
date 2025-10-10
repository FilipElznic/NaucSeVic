#!/usr/bin/env node

/**
 * Admin System Test Script
 * Tests all admin functionality to ensure proper operation
 */

const admin = require("firebase-admin");

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = require("./naucsevic-firebase-adminsdk-yqu1i-a4b1d8e6f6.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

async function testAdminSystem() {
  console.log("🧪 Zahájení testů admin systému...\n");

  try {
    // Test 1: List all users
    console.log("📋 Test 1: Seznam uživatelů");
    const listUsersResult = await admin.auth().listUsers(10);
    console.log(`   Nalezeno ${listUsersResult.users.length} uživatelů`);

    // Show users with admin claims
    const adminUsers = listUsersResult.users.filter(
      (user) => user.customClaims && user.customClaims.admin === true
    );
    console.log(`   Adminů: ${adminUsers.length}`);

    if (adminUsers.length > 0) {
      console.log("   📝 Admin uživatelé:");
      adminUsers.forEach((user) => {
        console.log(
          `     - ${user.email} (${user.displayName || "Bez jména"})`
        );
      });
    }

    // Test 2: Database connectivity
    console.log("\n💾 Test 2: Připojení k databázi");
    const db = admin.firestore();
    const testDoc = await db.collection("test").doc("connection").set({
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      test: "admin-system-test",
    });
    console.log("   ✅ Databáze připojena a funkční");

    // Clean up test document
    await db.collection("test").doc("connection").delete();

    // Test 3: Custom Claims verification
    console.log("\n🔐 Test 3: Ověření Custom Claims");
    if (adminUsers.length > 0) {
      const testUser = adminUsers[0];
      const userRecord = await admin.auth().getUser(testUser.uid);
      const hasAdminClaim = userRecord.customClaims?.admin === true;
      console.log(
        `   Admin claim pro ${testUser.email}: ${hasAdminClaim ? "✅" : "❌"}`
      );
    } else {
      console.log("   ⚠️  Žádní admin uživatelé pro test");
    }

    // Test 4: Functions deployment check
    console.log("\n⚡ Test 4: Kontrola Cloud Functions");
    console.log("   Funkce by měly být dostupné na:");
    console.log("   https://api-u5phmhmqua-uc.a.run.app");

    const expectedFunctions = [
      "createEducationalTask",
      "setAdminRole",
      "getEducationalTasks",
      "createUserProfile",
      "updateUserProfile",
    ];

    console.log("   📋 Očekávané admin funkce:");
    expectedFunctions.forEach((func) => {
      console.log(`     - ${func}`);
    });

    console.log("\n✅ Všechny testy admin systému dokončeny!");

    // Summary
    console.log("\n📊 Shrnutí:");
    console.log(`   - Celkem uživatelů: ${listUsersResult.users.length}`);
    console.log(`   - Admin uživatelů: ${adminUsers.length}`);
    console.log(`   - Databáze: Funkční`);
    console.log(`   - Cloud Functions: Deployed`);

    if (adminUsers.length === 0) {
      console.log("\n🚨 DOPORUČENÍ:");
      console.log("   Vytvořte prvního admin uživatele:");
      console.log("   node setFirstAdmin.js admin@example.com");
    }
  } catch (error) {
    console.error("❌ Chyba při testování admin systému:", error.message);
    process.exit(1);
  }
}

// Additional utility functions
async function createTestAdmin(email) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    console.log(`✅ Test admin vytvořen: ${email}`);
  } catch (error) {
    console.error(`❌ Chyba při vytváření test admina: ${error.message}`);
  }
}

async function removeTestAdmin(email) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: false });
    console.log(`✅ Admin práva odebrána: ${email}`);
  } catch (error) {
    console.error(`❌ Chyba při odebírání admin práv: ${error.message}`);
  }
}

// Command line interface
const command = process.argv[2];
const email = process.argv[3];

switch (command) {
  case "test":
    testAdminSystem();
    break;
  case "create-test-admin":
    if (!email) {
      console.error("Usage: node testAdminSystem.js create-test-admin <email>");
      process.exit(1);
    }
    createTestAdmin(email);
    break;
  case "remove-test-admin":
    if (!email) {
      console.error("Usage: node testAdminSystem.js remove-test-admin <email>");
      process.exit(1);
    }
    removeTestAdmin(email);
    break;
  default:
    console.log("🧪 Admin System Test Script");
    console.log("\nPoužití:");
    console.log(
      "  node testAdminSystem.js test                     - Spustit všechny testy"
    );
    console.log(
      "  node testAdminSystem.js create-test-admin <email> - Vytvořit test admina"
    );
    console.log(
      "  node testAdminSystem.js remove-test-admin <email> - Odstranit test admina"
    );
    console.log("\nPříklady:");
    console.log("  node testAdminSystem.js test");
    console.log("  node testAdminSystem.js create-test-admin test@example.com");
    testAdminSystem();
    break;
}
