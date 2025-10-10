import React, { useState } from "react";
import {
  Shield,
  UserPlus,
  AlertCircle,
  CheckCircle,
  Settings,
} from "lucide-react";
import { useAdminCheck } from "../hooks/useAdminCheck";
import { toast } from "react-toastify";

const AdminManagement = () => {
  const { isAdmin, loading: adminLoading } = useAdminCheck();
  const [loading, setLoading] = useState(false);
  const [targetEmail, setTargetEmail] = useState("");

  const handleGrantAdmin = async (e) => {
    e.preventDefault();

    if (!targetEmail.trim()) {
      toast.error("Prosím zadejte email uživatele");
      return;
    }

    setLoading(true);
    try {
      // First, we need to get the user UID by email
      // This would typically require a backend function that looks up users
      toast.info("Hledám uživatele...");

      // For now, we'll show an instruction to use the script
      toast.warning(
        "Momentálně použijte server-side script: node setFirstAdmin.js " +
          targetEmail,
        { autoClose: 10000 }
      );

      setTargetEmail("");
    } catch (error) {
      console.error("Error granting admin:", error);
      toast.error("Chyba při udělování admin práv: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Přístup odepřen
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tato stránka je pouze pro administrátory.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <Settings className="h-8 w-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Správa Administrátorů
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Spravujte admin oprávnění v systému
            </p>
          </div>
        </div>

        {/* Admin Status */}
        <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-green-800 dark:text-green-200 font-medium">
              Jste přihlášeni jako administrátor
            </span>
          </div>
        </div>

        {/* Grant Admin Form */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <UserPlus className="h-5 w-5 mr-2" />
            Udělit Admin Práva
          </h3>

          <form onSubmit={handleGrantAdmin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email uživatele
              </label>
              <input
                type="email"
                value={targetEmail}
                onChange={(e) => setTargetEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Uživatel se musí nejdříve zaregistrovat v aplikaci
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Zpracovávám...
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4 mr-2" />
                  Udělit Admin Práva
                </>
              )}
            </button>
          </form>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Pokyny pro udělení admin práv:
              </h4>
              <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>1. Ujistěte se, že se uživatel zaregistroval v aplikaci</li>
                <li>
                  2. Použijte server-side script:{" "}
                  <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">
                    node setFirstAdmin.js email@domain.com
                  </code>
                </li>
                <li>3. Uživatel se musí odhlásit a znovu přihlásit</li>
                <li>4. Admin oprávnění se projeví okamžitě po přihlášení</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Admin Features */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Admin Funkce
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Vytváření vzdělávacích úloh</li>
              <li>• Správa existujících úloh</li>
              <li>• Udělování admin oprávnění</li>
              <li>• Přístup k admin rozhraní</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Bezpečnost
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Firebase Custom Claims</li>
              <li>• Backend ověření všech operací</li>
              <li>• Rate limiting proti zneužití</li>
              <li>• Audit log všech admin akcí</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;
