import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#202123]">
      <div className="w-[380px] bg-[#2a2b32] p-8 rounded-2xl shadow-2xl">
        
        <h2 className="text-2xl font-semibold text-white text-center">
          Create Account
        </h2>
        <p className="text-gray-400 text-sm text-center mt-2 mb-6">
          Join your AI Assistant today
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-[#3c3d44] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#3c3d44] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Create password"
            className="w-full p-3 rounded-lg bg-[#3c3d44] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-lg text-white font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-500 hover:text-purple-400 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;