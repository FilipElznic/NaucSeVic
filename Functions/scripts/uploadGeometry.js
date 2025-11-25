const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Check for service account key
const serviceAccountPath = path.join(__dirname, "serviceAccountKey.json");
if (!fs.existsSync(serviceAccountPath)) {
  console.error(
    "Error: serviceAccountKey.json not found. Please download it from Firebase Console -> Project Settings -> Service Accounts."
  );
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);
const data = require("./geometryData.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadData() {
  console.log(
    `Uploading ${data.length} items to 'geometricBodies' collection...`
  );

  const batch = db.batch();
  const collectionRef = db.collection("geometricBodies");

  // Optional: Delete existing documents first?
  // For now, we just append. To clear, we'd need to list and delete.

  for (const item of data) {
    // Use item.id as the document ID
    const docRef = collectionRef.doc(item.id);
    batch.set(docRef, item);
  }
  await batch.commit();
  console.log("Data uploaded successfully.");
}

uploadData().catch(console.error);
