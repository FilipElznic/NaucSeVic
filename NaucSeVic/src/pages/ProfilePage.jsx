import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { userService } from "../services/userService";
import { cloudFunctionsService } from "../services/cloudFunctions";
import {
  User,
  Mail,
  Key,
  CheckCircle,
  AlertCircle,
  Loader,
  Edit2,
  X,
  Save,
  Shield,
} from "lucide-react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, resetPassword } = useFirebaseAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  // Edit form state
  const [editForm, setEditForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) {
        navigate("/prihlaseni");
        return;
      }

      try {
        setLoading(true);
        const profile = await userService.getUserProfile(user.uid);
        setUserProfile(profile);

        // Initialize edit form with current values
        setEditForm({
          firstName: profile?.profile?.name || "",
          lastName: profile?.profile?.surname || "",
          email: user?.email || "",
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
        toast.error("Nepodařilo se načíst profil");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user, navigate]);

  const handleEditToggle = () => {
    if (isEditing) {
      // Reset form to current values when canceling
      setEditForm({
        firstName: userProfile?.profile?.name || "",
        lastName: userProfile?.profile?.surname || "",
        email: user?.email || "",
      });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      setUpdateLoading(true);

      // Validate inputs
      if (!editForm.firstName.trim()) {
        toast.error("Jméno nesmí být prázdné");
        return;
      }

      // Call cloud function to update profile
      const result = await cloudFunctionsService.updateUserProfile({
        firstName: editForm.firstName.trim(),
        lastName: editForm.lastName.trim(),
        email: editForm.email.trim(),
      });

      if (result.success) {
        toast.success("Profil byl úspěšně aktualizován!");

        // Refresh user profile
        const updatedProfile = await userService.getUserProfile(user.uid);
        setUserProfile(updatedProfile);

        setIsEditing(false);

        // If email changed, inform user they need to re-login
        if (editForm.email !== user.email) {
          toast.info(
            "Email byl změněn. Budete odhlášeni a je nutné se znovu přihlásit.",
            {
              autoClose: 5000,
            },
          );
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "Nepodařilo se aktualizovat profil");
    } finally {
      setUpdateLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!user?.email) {
      toast.error("Email není dostupný");
      return;
    }

    try {
      setResetLoading(true);
      await resetPassword(user.email);
      setResetSuccess(true);
      toast.success("Email pro resetování hesla byl odeslán!");

      // Reset success message after 5 seconds
      setTimeout(() => setResetSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error("Nepodařilo se odeslat email pro resetování hesla");
    } finally {
      setResetLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 dark:bg-[#0f0f14]">
        <div className="text-center">
          <Loader className="w-10 h-10 animate-spin text-purple-500 dark:text-purple-400 mx-auto mb-3" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Načítám profil...
          </p>
        </div>
      </div>
    );
  }

  const displayName =
    userProfile?.profile?.name && userProfile?.profile?.surname
      ? `${userProfile.profile.name} ${userProfile.profile.surname}`
      : user?.displayName || "Uživatel";

  const userEmail = user?.email || "Není k dispozici";

  return (
    <div className="h-[100vh] overflow-hidden bg-gray-50 dark:bg-[#0f0f14]">
      <div className="h-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-40">
        <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - User Card */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* User Avatar Card */}
            <div className="bg-white dark:bg-[#1a1a1f] rounded-xl border border-gray-200 dark:border-[#2a2a35] p-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 dark:from-purple-500/30 dark:to-purple-600/30 border-2 border-purple-500/30 dark:border-purple-500/50 flex items-center justify-center mb-4">
                <User
                  size={40}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1 text-center">
                {displayName}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mb-4">
                <Mail size={14} />
                <span className="truncate max-w-[200px]">{userEmail}</span>
              </p>
              <div className="w-full pt-4 border-t border-gray-200 dark:border-[#2a2a35]">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    Úroveň
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {userProfile?.profile?.xp
                      ? Math.floor(userProfile.profile.xp / 100) + 1
                      : 1}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">XP</span>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {userProfile?.profile?.xp || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Account Info & Security */}
          <div className="lg:col-span-2 flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            {/* Account Information Card */}
            <div className="bg-white dark:bg-[#1a1a1f] rounded-xl border border-gray-200 dark:border-[#2a2a35] p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <User
                    size={18}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Informace o účtu
                </h3>
                <button
                  onClick={handleEditToggle}
                  disabled={updateLoading}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-[#2a2a35] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#323241] transition-colors disabled:opacity-50 text-sm"
                >
                  {isEditing ? (
                    <>
                      <X size={14} />
                      <span>Zrušit</span>
                    </>
                  ) : (
                    <>
                      <Edit2 size={14} />
                      <span>Upravit</span>
                    </>
                  )}
                </button>
              </div>

              {isEditing ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                      Jméno
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={editForm.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#0f0f14] border border-gray-200 dark:border-[#2a2a35] text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Zadejte jméno"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                      Příjmení
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={editForm.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#0f0f14] border border-gray-200 dark:border-[#2a2a35] text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Zadejte příjmení"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={editForm.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#0f0f14] border border-gray-200 dark:border-[#2a2a35] text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Zadejte email"
                    />
                    <p className="text-xs text-amber-600 dark:text-amber-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />
                      Změna emailu vyžaduje opětovné přihlášení
                    </p>
                  </div>

                  <button
                    onClick={handleSaveProfile}
                    disabled={updateLoading}
                    className="w-full mt-2 px-4 py-2.5 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                  >
                    {updateLoading ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        <span>Ukládám...</span>
                      </>
                    ) : (
                      <>
                        <Save size={16} />
                        <span>Uložit změny</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-[#2a2a35]">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Jméno
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {displayName}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Email
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[200px]">
                      {userEmail}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Security Card */}
            <div className="bg-white dark:bg-[#1a1a1f] rounded-xl border border-gray-200 dark:border-[#2a2a35] p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield
                  size={18}
                  className="text-purple-600 dark:text-purple-400"
                />
                Zabezpečení
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-[#0f0f14] rounded-lg border border-gray-100 dark:border-[#2a2a35]">
                  <Key
                    size={18}
                    className="text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Resetování hesla
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Odešleme vám email s odkazem pro resetování hesla
                    </p>

                    {resetSuccess && (
                      <div className="mb-3 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2">
                        <CheckCircle
                          size={14}
                          className="text-green-600 dark:text-green-400 flex-shrink-0"
                        />
                        <p className="text-xs text-green-700 dark:text-green-300">
                          Email byl odeslán. Zkontrolujte schránku.
                        </p>
                      </div>
                    )}

                    <button
                      onClick={handlePasswordReset}
                      disabled={resetLoading || resetSuccess}
                      className={`px-4 py-2 rounded-lg font-medium text-white text-sm transition-colors flex items-center gap-2 ${
                        resetSuccess
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-purple-600 hover:bg-purple-700"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {resetLoading ? (
                        <>
                          <Loader size={14} className="animate-spin" />
                          <span>Odesílám...</span>
                        </>
                      ) : resetSuccess ? (
                        <>
                          <CheckCircle size={14} />
                          <span>Email odeslán</span>
                        </>
                      ) : (
                        <>
                          <Key size={14} />
                          <span>Odeslat resetovací email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
