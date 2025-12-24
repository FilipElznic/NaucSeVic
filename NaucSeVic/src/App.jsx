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
const GeometryCoursePage = lazy(() => import("./pages/GeometryCoursePage"));
const SimulationsPage = lazy(() => import("./pages/SimulationsPage"));
const Matematika = lazy(() => import("./components/subjects/Matematika"));
const MatematikaLevels = lazy(() => import("./pages/MatematikaLevels"));
const MatematikaZSSelection = lazy(() =>
  import("./pages/MatematikaZSSelection")
);
const MatematikaZS1 = lazy(() => import("./components/math/MatematikaZS1"));
const MatematikaZS2 = lazy(() => import("./components/math/MatematikaZS2"));
const MatematikaSS = lazy(() => import("./components/math/MatematikaSS"));
const MatematikaVS = lazy(() => import("./components/math/MatematikaVS"));
const Geometrie = lazy(() => import("./components/subjects/Geometrie"));
const Fyzika = lazy(() => import("./components/subjects/Fyzika"));
const FyzikaLevels = lazy(() => import("./pages/FyzikaLevels"));
const FyzikaZSSelection = lazy(() => import("./pages/FyzikaZSSelection"));
const FyzikaZS1 = lazy(() => import("./components/physics/FyzikaZS1"));
const FyzikaZS2 = lazy(() => import("./components/physics/FyzikaZS2"));
const FyzikaSS = lazy(() => import("./components/physics/FyzikaSS"));
const FyzikaVS = lazy(() => import("./components/physics/FyzikaVS"));
const GeometrieLevels = lazy(() => import("./pages/GeometrieLevels"));
const GeometrieZSSelection = lazy(() => import("./pages/GeometrieZSSelection"));
const GeometrieZS1 = lazy(() => import("./components/geometry/GeometrieZS1"));
const GeometrieZS2 = lazy(() => import("./components/geometry/GeometrieZS2"));
const GeometrieSS = lazy(() => import("./components/geometry/GeometrieSS"));
const GeometrieVS = lazy(() => import("./components/geometry/GeometrieVS"));

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

          {/* Geometry Course */}
          <Route
            path="/geometrie-kurz"
            element={
              <ProtectedRoute>
                <GeometryCoursePage />
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

          {/* Subject Pages */}
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
            path="/predmety/matematika/levels"
            element={
              <ProtectedRoute>
                <Layout>
                  <MatematikaLevels />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/matematika/zs"
            element={
              <ProtectedRoute>
                <Layout>
                  <MatematikaZSSelection />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/matematika/zs/1-stupen"
            element={
              <ProtectedRoute>
                <Layout>
                  <MatematikaZS1 />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/matematika/zs/2-stupen"
            element={
              <ProtectedRoute>
                <Layout>
                  <MatematikaZS2 />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/matematika/ss"
            element={
              <ProtectedRoute>
                <Layout>
                  <MatematikaSS />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/matematika/vs"
            element={
              <ProtectedRoute>
                <Layout>
                  <MatematikaVS />
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
            path="/predmety/geometrie/levels"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeometrieLevels />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/geometrie/zs"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeometrieZSSelection />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/geometrie/zs/1-stupen"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeometrieZS1 />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/geometrie/zs/2-stupen"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeometrieZS2 />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/geometrie/ss"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeometrieSS />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/geometrie/vs"
            element={
              <ProtectedRoute>
                <Layout>
                  <GeometrieVS />
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
          <Route
            path="/predmety/fyzika/levels"
            element={
              <ProtectedRoute>
                <Layout>
                  <FyzikaLevels />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/fyzika/zs"
            element={
              <ProtectedRoute>
                <Layout>
                  <FyzikaZSSelection />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/fyzika/zs/1-stupen"
            element={
              <ProtectedRoute>
                <Layout>
                  <FyzikaZS1 />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/fyzika/zs/2-stupen"
            element={
              <ProtectedRoute>
                <Layout>
                  <FyzikaZS2 />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/fyzika/ss"
            element={
              <ProtectedRoute>
                <Layout>
                  <FyzikaSS />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/predmety/fyzika/vs"
            element={
              <ProtectedRoute>
                <Layout>
                  <FyzikaVS />
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
