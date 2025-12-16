import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("auth", "true"); // 🔑 AUTH FLAG
      navigate("/dashboard");               // 🔥 REDIRECT
    }
  };

  return (
    <div className="min-h-screen flex">

      <div className="w-1/2 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 px-10 py-12 rounded-xl w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Login to DataGuardian
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-6 bg-gray-800 text-white rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-8 bg-gray-800 text-white rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full p-3 bg-blue-600 rounded font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
