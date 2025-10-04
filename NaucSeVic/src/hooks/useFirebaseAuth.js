import { useContext } from "react";
import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext.js";

export const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext);
  if (!context) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  return context;
};
