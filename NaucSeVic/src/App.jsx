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
const TaskCreator = lazy(() => import("./components/TaskCreator"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage"));
const AdminGeometryManager = lazy(
  () => import("./pages/geometry/AdminGeometryManager"),
);
const SimulationsPage = lazy(() => import("./pages/geometry/SimulationsPage"));
const LecturePage = lazy(() => import("./pages/LecturePage"));
const TestPage = lazy(() => import("./pages/TestPage"));
const Home2 = lazy(() => import("./pages/Home2"));

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
                <Home2 />
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
            path="/vsechny-ukoly"
            element={
              <ProtectedRoute>
                <Layout>
                  <AllTasks />
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

          {/* Simulations Page */}
          <Route
            path="/geometric-simulations"
            element={
              <ProtectedRoute>
                <Layout>
                  <SimulationsPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/vsechny-simulace"
            element={
              <ProtectedRoute>
                <Layout>
                  <SimulationsPage />
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
