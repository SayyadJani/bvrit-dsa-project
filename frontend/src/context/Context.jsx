import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manages auth state
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/40");

  const signIn = () => {
    setIsAuthenticated(true); // Change to authenticated state
  };

  const signOut = () => {
    setIsAuthenticated(false); // Change to non-authenticated state
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, profileImage, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const ApiContext = () => useContext(Context);
