import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage } from "firebase/storage";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  ReCaptchaV3Provider,
} from "firebase/app-check";

// Your web app's Firebase configuration
// For Firebase JS SDK v9-compat and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Functions and get a reference to the service
export const functions = getFunctions(app, "europe-west1");

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// App Check is opt-in to prevent auth breakage while provider config propagates.
// Enable with VITE_ENABLE_APPCHECK=true once Firebase Console settings are stable.
const appCheckEnabled = import.meta.env.VITE_ENABLE_APPCHECK === "true";
const appCheckProvider = import.meta.env.VITE_APPCHECK_PROVIDER || "v3";
const recaptchaSiteKey =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
  "6LcoKYYsAAAAAJCJsBCtCXtpa2dcuKOajGxg06fT";

let appCheckInstance = null;
if (appCheckEnabled) {
  // In debug mode, use a debug token instead of reCAPTCHA.
  if (import.meta.env.VITE_USE_EMULATOR === "true") {
    // eslint-disable-next-line no-restricted-globals
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  const provider =
    appCheckProvider === "enterprise"
      ? new ReCaptchaEnterpriseProvider(recaptchaSiteKey)
      : new ReCaptchaV3Provider(recaptchaSiteKey);

  try {
    appCheckInstance = initializeAppCheck(app, {
      provider,
      isTokenAutoRefreshEnabled: true,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(
      "App Check initialization failed. Continuing without App Check:",
      error,
    );
  }
}

export const appCheck = appCheckInstance;

// Connect to Emulators in development
if (import.meta.env.VITE_USE_EMULATOR === "true") {
  // eslint-disable-next-line no-console
  console.log("Using Firebase Emulators");
  connectFunctionsEmulator(functions, "localhost", 5001);
  // connectFirestoreEmulator(db, 'localhost', 8080);
  // connectAuthEmulator(auth, 'http://localhost:9099');
  // connectStorageEmulator(storage, 'localhost', 9199);
}

export default app;
