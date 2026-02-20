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
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/guards/ProtectedRoute";
import AdminRoute from "./components/guards/AdminRoute";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import LandingPage from "./pages/LandingPage";

// Lazy load pages for better performance
const ModernLogin = lazy(() => import("./pages/auth/ModernLogin"));
const ModernRegister = lazy(() => import("./pages/auth/ModernRegister"));
const AllTasks = lazy(() => import("./pages/AllTasks"));
const Demo = lazy(() => import("./pages/Demo"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TaskCreator = lazy(() => import("./components/TaskCreator"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage"));
const AdminGeometryManager = lazy(
  () => import("./pages/geometry/AdminGeometryManager"),
);
const GeometrySimulationsPage = lazy(
  () => import("./pages/geometry/SimulationsPage"),
);
const PhysicsSimulationsPage = lazy(() => import("./pages/SimulationsPage"));
const LecturePage = lazy(() => import("./pages/LecturePage"));
const TestPage = lazy(() => import("./pages/TestPage"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const UniversalSubjectLayout = lazy(
  () => import("./components/layout/UniversalSubjectLayout"),
);

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
  const { user, loading } = useFirebaseAuth();

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
              loading ? (
                <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                  <LoadingSpinner size="xl" />
                </div>
              ) : user ? (
                <UserDashboard />
              ) : (
                <Layout showNavbar={false}>
                  <LandingPage />
                </Layout>
              )
            }
          />

          {/* Modern Auth Pages */}
          <Route
            path="/prihlaseni"
            element={
              <PublicRoute>
                <Layout>
                  <ModernLogin />
                </Layout>
              </PublicRoute>
            }
          />

          <Route
            path="/registrace"
            element={
              <PublicRoute>
                <Layout>
                  {" "}
                  <ModernRegister />
                </Layout>
              </PublicRoute>
            }
          />

          {/* All Tasks */}
          <Route
            path="/vsechny-ukoly"
            element={
              <ProtectedRoute>
                <Layout>
                  <AllTasks />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Profile Page */}
          <Route
            path="/profil"
            element={
              <ProtectedRoute>
                <Layout>
                  <ProfilePage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Statistics */}
          <Route
            path="/statistiky"
            element={
              <ProtectedRoute>
                <StatisticsPage />
              </ProtectedRoute>
            }
          />

          {/* General Simulations Page - New */}
          <Route
            path="/simulace"
            element={
              <ProtectedRoute>
                <Layout>
                  <PhysicsSimulationsPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/simulation"
            element={
              <ProtectedRoute>
                <Layout>
                  <PhysicsSimulationsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/geometricka-telesa"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeometrySimulationsPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Lecture Pages */}
          <Route
            path="/kurz/:subjectId/:levelId/:chapterId/:lectureId"
            element={
              <ProtectedRoute>
                <LecturePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kurz/:subjectId/:levelId/:subLevelId/:chapterId/:lectureId"
            element={
              <ProtectedRoute>
                <LecturePage />
              </ProtectedRoute>
            }
          />

          {/* Subject Pages */}
          <Route
            path="/predmety"
            element={
              <ProtectedRoute>
                <Layout>
                  <UniversalSubjectLayout />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Universal Subject Routes */}
          <Route
            path="/predmety/:subjectId"
            element={
              <ProtectedRoute>
                <Layout>
                  <UniversalSubjectLayout />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/:subjectId/:levelId"
            element={
              <ProtectedRoute>
                <Layout>
                  <UniversalSubjectLayout />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/:subjectId/:levelId/:subLevelId"
            element={
              <ProtectedRoute>
                <Layout>
                  <UniversalSubjectLayout />
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

          <Route
            path="/test"
            element={
              <AdminRoute>
                <Layout>
                  <TestPage />
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

          {/* About & Contact */}
          <Route
            path="/onas"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/kontakt"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/podpora"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />

          {/* Kurzy Route */}
          <Route
            path="/kurzy"
            element={
              <ProtectedRoute>
                <Layout>
                  <UniversalSubjectLayout />
                </Layout>
              </ProtectedRoute>
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

import ThemedToastContainer from "./components/ui/ThemedToastContainer";

function App() {
  return (
    <DarkModeProvider>
      <FirebaseAuthProvider>
        <ThemedToastContainer />
        <AppRoutes />
      </FirebaseAuthProvider>
    </DarkModeProvider>
  );
}

export default App;
