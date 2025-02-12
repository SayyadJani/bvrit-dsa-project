// src/components/Navbar/SignInForm.jsx
import React from "react";

const SignInForm = ({ isLoginMode, setIsLoginMode }) => {
  return (
    <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isLoginMode ? "Sign In" : "Register"}
      </h2>
      <form>
        {/* Only show the Full Name field for Register */}
        {!isLoginMode && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
        >
          {isLoginMode ? "Sign In" : "Register"}
        </button>
      </form>
      <p className="mt-6 text-gray-600">
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          onClick={() => setIsLoginMode(!isLoginMode)}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          {isLoginMode ? "Register" : "Sign In"}
        </span>
      </p>
    </div>
  );
};

export default SignInForm;
