import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userInfo, setUserInfo }}>
      
      {children}
      
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
