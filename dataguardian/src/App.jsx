import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
