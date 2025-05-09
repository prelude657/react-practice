import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightOn, setIsLightOn] = useState(true);

  const toggleLight = () => setIsLightOn(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isLightOn, toggleLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
