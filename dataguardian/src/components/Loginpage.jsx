import { useState } from "react";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    // TODO: Connect actual API
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE IMAGE */}
      <div className="w-1/2 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="login visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 px-10 py-12 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Login to DataGuardian
          </h2>

          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 mb-6"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 mb-6"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
