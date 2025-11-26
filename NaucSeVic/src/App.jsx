import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import {
  FirebaseAuthProvider,
  useFirebaseAuth,
} from "./contexts/FirebaseAuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import LandingPage from "./pages/LandingPage";

// Lazy load pages for better performance
const ModernLogin = lazy(() => import("./pages/ModernLogin"));
const ModernRegister = lazy(() => import("./pages/ModernRegister"));
const Predmety = lazy(() => import("./pages/Predmety"));
const AllTasks = lazy(() => import("./pages/AllTasks"));
const Demo = lazy(() => import("./pages/Demo"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TaskCreator = lazy(() => import("./components/TaskCreator"));
const AdminGeometryManager = lazy(() => import("./pages/AdminGeometryManager"));
const Matematika = lazy(() => import("./components/subjects/Matematika"));
const Geometrie = lazy(() => import("./components/subjects/Geometrie"));
const Fyzika = lazy(() => import("./components/subjects/Fyzika"));

// Protected Route component is now imported from components

// Public Route component (for auth pages)
const PublicRoute = ({ children }) => {
  const { user, loading } = useFirebaseAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  return user ? <Navigate to="/" /> : children;
};

// App Routes component that uses the auth context
const AppRoutes = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
            <LoadingSpinner size="xl" />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <Layout showNavbar={false}>
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

          {/* Subjects Main Page */}
          <Route
            path="/predmety"
            element={
              <ProtectedRoute>
                <Layout>
                  <Predmety />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Individual Subjects */}
          <Route
            path="/predmety/matematika"
            element={
              <ProtectedRoute>
                <Layout>
                  <Matematika />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/geometrie"
            element={
              <ProtectedRoute>
                <Layout>
                  <Geometrie />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/fyzika"
            element={
              <ProtectedRoute>
                <Layout>
                  <Fyzika />
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

          <Route
            path="/admin/tasks"
            element={
              <AdminRoute>
                <Layout>
                  <TaskCreator />
                </Layout>
              </AdminRoute>
            }
          />

          <Route
            path="/admin/geometry"
            element={
              <AdminRoute>
                <Layout>
                  <AdminGeometryManager />
                </Layout>
              </AdminRoute>
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

          {/* Demo Page */}
          <Route
            path="/demo"
            element={
              <Layout>
                <Demo />
              </Layout>
            }
          />

          {/* 404 Page - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <FirebaseAuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          style={{ zIndex: 9999 }}
        />
        <AppRoutes />
      </FirebaseAuthProvider>
    </DarkModeProvider>
  );
}

export default App;
