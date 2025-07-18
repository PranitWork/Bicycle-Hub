import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl overflow-hidden">
        
        {/* Left Image Side */}
        <div className="hidden md:flex items-center justify-center bg-cover bg-center" >
          <div className="text-white relative text-left p-10 bg-[url(/Images/Login-Page/bg.jpg)] bg-cover bg-center bg-opacity-40 w-full h-full flex flex-col justify-center">
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60"></div>
            <h2 className="text-3xl font-bold leading-snug z-10">Pedal into your journey</h2>
            <p className="mt-3 text-lg font-light z-10">All the gear, all the tools. Everything for your next ride.</p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="bg-white p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Welcome Back</h2>
          <p className="text-gray-500 mb-8">Login to your bicycle hub</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 cursor-pointer text-sm text-green-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-green-600" />
                <label className="text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition"
            >
              Log in
            </button>

            <div className="text-center text-gray-400 text-sm">OR</div>

            <button
              type="button"
              className="w-full flex items-center cursor-pointer justify-center gap-2 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Continue with Google
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="/Signup" className="text-green-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
