import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import {
  FirebaseAuthProvider,
  useFirebaseAuth,
} from "./contexts/FirebaseAuthContext";
import LandingPage from "./pages/LandingPage";
import ModernLogin from "./pages/ModernLogin";
import ModernRegister from "./pages/ModernRegister";
import Tasks from "./pages/Tasks";
import AllTasks from "./pages/AllTasks";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import CloudFunctionDemo from "./components/CloudFunctionDemo";
import TaskCreator from "./components/TaskCreator";

// Protected Route component is now imported from components

// Public Route component (for auth pages)
const PublicRoute = ({ children }) => {
  const { user, loading } = useFirebaseAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return user ? <Navigate to="/" /> : children;
};

// App Routes component that uses the auth context
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />

        {/* Modern Auth Pages */}
        <Route
          path="/prihlaseni"
          element={
            <PublicRoute>
              <ModernLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/registrace"
          element={
            <PublicRoute>
              <ModernRegister />
            </PublicRoute>
          }
        />

        {/* All Tasks */}
        <Route
          path="/all-tasks"
          element={
            <ProtectedRoute>
              <Layout>
                <AllTasks />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Tasks by subject */}
        <Route
          path="/tasks/:subject"
          element={
            <ProtectedRoute>
              <Layout>
                <Tasks />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Cloud Functions Demo */}
        <Route
          path="/cloud-functions"
          element={
            <ProtectedRoute>
              <Layout>
                <CloudFunctionDemo />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Task Creator - Admin Only */}
        <Route
          path="/create-task"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <Layout>
                  <TaskCreator />
                </Layout>
              </AdminRoute>
            </ProtectedRoute>
          }
        />

        {/* Legal Pages */}
        <Route
          path="/terms"
          element={
            <Layout>
              <TermsPage />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <FirebaseAuthProvider>
        <AppRoutes />
      </FirebaseAuthProvider>
    </DarkModeProvider>
  );
}

export default App;
