import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import { userService } from "../services/userService";
import { cloudFunctionsService } from "../services/cloudFunctions";
import { storageService } from "../services/storageService";
import {
  User,
  Mail,
  Key,
  CheckCircle,
  AlertCircle,
  Loader,
  Save,
  Shield,
  Camera,
  Trash2,
} from "lucide-react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, resetPassword } = useFirebaseAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Opravdu chcete smazat svůj účet? Tato akce je nevratná a smazání veškerých dat nemusí být okamžité.",
      )
    ) {
      try {
        await user.delete();
        toast.success("Účet byl smazán.");
        navigate("/");
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error(
          "Pro smazání účtu se musíte znovu přihlásit (z bezpečnostních důvodů).",
        );
      }
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

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Prosím nahrajte obrázek");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Obrázek je příliš velký (max 5MB)");
      return;
    }

    try {
      setUploadingPhoto(true);
      const downloadURL = await storageService.uploadProfilePicture(
        file,
        user.uid,
      );

      // Update local state immediately
      setUserProfile((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          photoURL: downloadURL,
        },
      }));

      toast.success("Profilová fotka byla úspěšně změněna");
    } catch (error) {
      console.error("Error uploading photo:", error);
      toast.error("Nepodařilo se nahrát profilovou fotku");
    } finally {
      setUploadingPhoto(false);
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
  const photoURL = userProfile?.profile?.photoURL || user?.photoURL;

  return (
    <div className="lg:h-[100vh] min-h-screen lg:overflow-hidden overflow-auto bg-gray-50 dark:bg-[#0f0f14] flex items-center justify-center">
      <div className="w-full max-w-7xl lg:h-full h-auto p-4 sm:p-6 lg:p-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-4 lg:h-full h-auto items-center">
          {/* Left Column - User Card */}
          <div className="lg:w-1/3 w-full flex flex-col lg:h-[80vh] h-auto">
            {/* User Avatar Card - Stretched to fill height */}
            <div className="bg-white dark:bg-[#1a1a1f] rounded-xl border border-gray-200 dark:border-[#2a2a35] p-6 flex flex-col items-center justify-between h-full">
              {/* Top Content */}
              <div className="w-full flex flex-col items-center">
                <div className="relative group mb-6 mt-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 dark:from-purple-500/30 dark:to-purple-600/30 border-2 border-purple-500/30 dark:border-purple-500/50 flex items-center justify-center overflow-hidden">
                    {photoURL ? (
                      <img
                        src={photoURL}
                        alt={displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User
                        size={56}
                        className="text-purple-600 dark:text-purple-400"
                      />
                    )}
                  </div>

                  {uploadingPhoto ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                      <Loader className="w-8 h-8 animate-spin text-white" />
                    </div>
                  ) : (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <Camera className="w-8 h-8 text-white" />
                    </button>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {displayName}
                </h2>
                <p className="text-base text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mb-8">
                  <Mail size={16} />
                  <span className="truncate max-w-[250px]">{userEmail}</span>
                </p>
              </div>

              {/* Bottom Content - Stats */}
              <div className="w-full pt-6 border-t border-gray-200 dark:border-[#2a2a35]">
                <div className="flex items-center justify-between text-base mb-3">
                  <span className="text-gray-600 dark:text-gray-400">
                    Úroveň
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">
                    {userProfile?.profile?.xp
                      ? Math.floor(userProfile.profile.xp / 100) + 1
                      : 1}
                  </span>
                </div>
                <div className="flex items-center justify-between text-base">
                  <span className="text-gray-600 dark:text-gray-400">XP</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                    {userProfile?.profile?.xp || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Account Info & Security */}
          <div className="lg:w-2/3 w-full flex flex-col gap-4 lg:h-[80vh] h-auto lg:overflow-y-auto overflow-visible scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            {/* Account Information Card */}
            <div className="bg-white dark:bg-[#1a1a1f] rounded-xl border border-gray-200 dark:border-[#2a2a35] p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <User
                    size={18}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  Informace o účtu
                </h3>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                      Jméno
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={editForm.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#0f0f14] border border-gray-200 dark:border-[#2a2a35] text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Zadejte jméno"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                      Příjmení
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={editForm.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#0f0f14] border border-gray-200 dark:border-[#2a2a35] text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Zadejte příjmení"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#0f0f14] border border-gray-200 dark:border-[#2a2a35] text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Zadejte email"
                  />
                  <p className="text-xs text-amber-600 dark:text-amber-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} />
                    Změna emailu vyžaduje opětovné přihlášení
                  </p>
                </div>

                <div className="pt-2 mt-auto">
                  <button
                    onClick={handleSaveProfile}
                    disabled={updateLoading}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
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
              </div>
            </div>

            {/* Security Card */}
            <div className="bg-white dark:bg-[#1a1a1f] rounded-xl border border-gray-200 dark:border-[#2a2a35] p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield
                  size={18}
                  className="text-purple-600 dark:text-purple-400"
                />
                Zabezpečení
              </h3>

              <div className="flex-1 space-y-4">
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

                {/* Delete Account Section */}
                <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                  <Trash2
                    size={18}
                    className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-red-900 dark:text-red-400 mb-1">
                      Smazat účet
                    </h4>
                    <p className="text-xs text-red-700 dark:text-red-300 mb-3">
                      Trvale odstraní váš účet a veškerá data.
                    </p>

                    <button
                      onClick={handleDeleteAccount}
                      className="px-4 py-2 rounded-lg font-medium text-white text-sm transition-colors flex items-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
                    >
                      <Trash2 size={14} />
                      <span>Smazat účet</span>
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
