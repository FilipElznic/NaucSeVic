import React from "react";
import { Navigate } from "react-router-dom";
import { Shield, AlertCircle } from "lucide-react";
import { useAdminCheck } from "../hooks/useAdminCheck";

/**
 * AdminRoute component - protects routes that require admin privileges
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if user is admin
 * @param {string} props.redirectTo - Path to redirect to if not admin (default: '/home')
 * @returns {React.ReactNode} - Admin content or redirect
 */
const AdminRoute = ({ children, redirectTo = "/home" }) => {
  const { isAdmin, loading, error } = useAdminCheck();

  // Show loading spinner while checking admin status
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Ověřuji oprávnění...
          </p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Chyba ověření oprávnění
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Nepodařilo se ověřit vaše oprávnění. Zkuste to prosím znovu.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Zkusit znovu
          </button>
        </div>
      </div>
    );
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8 max-w-md mx-auto">
          <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Přístup odepřen
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            K této stránce mají přístup pouze administrátoři. Pokud si myslíte,
            že je to chyba, kontaktujte správce systému.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mr-3"
          >
            Zpět
          </button>
          <Navigate to={redirectTo} replace />
        </div>
      </div>
    );
  }

  // Render admin content
  return <>{children}</>;
};

export default AdminRoute;
