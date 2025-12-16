import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";

import Dashboard from "./pages/Dashboard";
import CompanyAnalysis from "./pages/CompanyAnalysis";
import GreenwashingInsights from "./pages/GreenWashingInsights";
import TrustScoreDetails from "./pages/TrustScoreDetails";
import DataUpload from "./pages/DataUpload";
import Alerts from "./pages/Alerts";

import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company"
          element={
            <ProtectedRoute>
              <CompanyAnalysis />
            </ProtectedRoute>
          }
        />

        <Route
          path="/greenwashing"
          element={
            <ProtectedRoute>
              <GreenwashingInsights />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trust-score"
          element={
            <ProtectedRoute>
              <TrustScoreDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <DataUpload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alerts"
          element={
            <ProtectedRoute>
              <Alerts />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
