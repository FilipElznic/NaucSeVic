import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";
import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

class StorageService {
  // Allowed image MIME types and max file size
  static ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  static MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  // Upload profile picture
  async uploadProfilePicture(file, userId) {
    try {
      if (!userId) throw new Error("User ID is required");
      if (!file) throw new Error("File is required");

      // Validate file type
      if (!StorageService.ALLOWED_TYPES.includes(file.type)) {
        throw new Error(
          "Invalid file type. Only JPEG, PNG, WebP, and GIF images are allowed.",
        );
      }

      // Validate file size
      if (file.size > StorageService.MAX_FILE_SIZE) {
        throw new Error("File is too large. Maximum size is 5MB.");
      }

      // Create a reference to the file location
      // Using a fixed name 'profile.jpg' or similar for each user to overwrite old one automatically
      // OR using timestamp to force new URL and deleting old one.
      // Let's go with keeping it simple: 'profile_pics/{userId}/profile'
      // so it overwrites and we don't need to manage deletion of old files manually for now on storage side,
      // but browser caching might be an issue.
      // Better: 'profile_pics/{userId}/{timestamp}_{filename}'

      const timestamp = Date.now();
      const fileExtension = file.name.split(".").pop();
      const fileName = `profile_${timestamp}.${fileExtension}`;
      const storageRef = ref(storage, `profile_pics/${userId}/${fileName}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Update Firebase Auth profile
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { photoURL: downloadURL });
      }

      // Update Firestore user document
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        "profile.photoURL": downloadURL,
      });

      return downloadURL;
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      throw error;
    }
  }
}

export const storageService = new StorageService();
export default storageService;
