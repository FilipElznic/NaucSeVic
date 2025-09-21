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
import Prihlaseni from "./pages/Prihlaseni";
import Registrace from "./pages/Registrace";
import Layout from "./components/Layout";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useFirebaseAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return user ? children : <Navigate to="/prihlaseni" />;
};

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
        <Route
          path="/prihlaseni"
          element={
            <PublicRoute>
              <Layout showNavbar={false} showFooter={false}>
                <Prihlaseni />
              </Layout>
            </PublicRoute>
          }
        />
        <Route
          path="/registrace"
          element={
            <PublicRoute>
              <Layout showNavbar={false} showFooter={false}>
                <Registrace />
              </Layout>
            </PublicRoute>
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
