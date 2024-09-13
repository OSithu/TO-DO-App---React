import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to provide auth state
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Mock login function to set the user in context
  const login = (user) => {
    setCurrentUser(user);
  };

  const value = {
    currentUser,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
