import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [DataForm, setDataForm] = useState();
  // funciones de navegacion protejidad
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  const contextValue = {
    selectedOption,
    setSelectedOption,
    isAuthenticated,
    login,
    setDataForm,
    DataForm,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(UserContext);

  return context;
};
