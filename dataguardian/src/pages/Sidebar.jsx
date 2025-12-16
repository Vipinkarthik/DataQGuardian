import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 text-white p-6 space-y-4">
      <Link className="block hover:text-blue-400" to="/dashboard">Dashboard</Link>
      <Link className="block hover:text-blue-400" to="/company">Company Analysis</Link>
      <Link className="block hover:text-blue-400" to="/greenwashing">Greenwashing</Link>
      <Link className="block hover:text-blue-400" to="/trust-score">Trust Score</Link>
      <Link className="block hover:text-blue-400" to="/upload">Upload Data</Link>
      <Link className="block hover:text-blue-400" to="/alerts">Alerts</Link>
    </div>
  );
}

export default Sidebar;
