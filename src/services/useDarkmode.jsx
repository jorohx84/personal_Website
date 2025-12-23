import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode') || 'false'));

  const setDarkModeValue = (value) => {
    console.log(value);
    setDarkMode(value);
    localStorage.setItem('darkmode', JSON.stringify(value));

  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode: setDarkModeValue }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
