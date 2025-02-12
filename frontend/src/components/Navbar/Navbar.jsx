import React, { useState } from "react";
import SignInForm from "../Login/Login";

const Navbar = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false); // Control panel visibility
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle login/register

  // Toggle the sliding panel
  const handleSignInClick = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">BVRIT</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Practices</li>
          <li className="hover:text-blue-500 cursor-pointer">Labs</li>
        </ul>

        {/* Sign In Button */}
        <button
          onClick={handleSignInClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {isPanelVisible ? "Close" : "Sign In"}
        </button>
      </div>

      {/* Sliding panel for Sign In/Register */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl transform ${
          isPanelVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-80 z-50 p-6`}
      >
        <SignInForm isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
      </div>
    </nav>
  );
};

export default Navbar;
