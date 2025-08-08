// src/context/AppContext.js
import { createContext, useState, useEffect, useContext } from "react";
import { doctors } from "../assets/assets";

// Create Context
export const Appcontext = createContext();

// Provider Component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const currencySymbol = "RS.";

  // Load user from localStorage (to persist login)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    doctors,
    currencySymbol,
    user,
    login,
    logout,
  };

  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
};

// Custom hook to use whole context
export const useAppContext = () => useContext(Appcontext);

// Custom hook for just auth (optional)
export const useAuth = () => {
  const { user, login, logout } = useContext(Appcontext);
  return { user, login, logout };
};


