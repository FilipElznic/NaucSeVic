import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config/firebase";
import {
  createUserProfile,
  getUserProfile,
  updateUserLastActive,
} from "../services/userService";
import {
  initializeAppDatabase,
  checkInitializationStatus,
  markAsInitialized,
} from "../utils/initializeApp";
import { FirebaseAuthContext } from "./FirebaseAuthContext.js";

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Register function
  const register = async (email, password, displayName = "") => {
    try {
      setError(null);
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update display name if provided
      if (displayName) {
        await updateProfile(result.user, { displayName });
      }

      // Create user profile in Firestore
      const username = displayName || email.split("@")[0];
      await createUserProfile(result.user.uid, email, username);

      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Reset password function
  const resetPassword = async (email) => {
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        try {
          // Get or create user profile
          let profile;
          try {
            profile = await getUserProfile(user.uid);
          } catch {
            // Create profile if it doesn't exist
            const username = user.displayName || user.email.split("@")[0];
            profile = await createUserProfile(user.uid, user.email, username);
          }

          setUserProfile(profile);

          // Update last active
          await updateUserLastActive(user.uid);

          // Initialize database if not done yet
          if (!checkInitializationStatus()) {
            console.log("Initializing database for first time...");
            const initialized = await initializeAppDatabase();
            if (initialized) {
              markAsInitialized();
              console.log("Database initialization completed");
            }
          }
        } catch (err) {
          console.error("Error handling user profile:", err);
        }
      } else {
        setUserProfile(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Clear error function
  const clearError = () => setError(null);

  const value = {
    user,
    userProfile,
    loading,
    error,
    register,
    login,
    logout,
    resetPassword,
    clearError,
  };

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
