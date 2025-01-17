/* eslint-disable react/prop-types */
import React from 'react';
import useSessionStorage from './use-session-storage';

const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useSessionStorage('colorscheme', null);
   const switchTheme = (newTheme) => {
      document.body.classList.remove(
         newTheme === 'doc-light-mode' ? 'doc-dark-mode' : 'doc-light-mode'
      );
      document.body.classList.add(newTheme);
      setTheme(newTheme);
   };
   return (
      <ThemeContext.Provider value={{ theme, switchTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeContext;
