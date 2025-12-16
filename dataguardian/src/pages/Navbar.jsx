import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="w-full h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 text-white">
      <Link to="/dashboard" className="text-xl font-bold">
        DataGuardian
      </Link>

      <div className="flex items-center gap-4">
        <span className="text-slate-400 text-sm">Admin</span>
        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
