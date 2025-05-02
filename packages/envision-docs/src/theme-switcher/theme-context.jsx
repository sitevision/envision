/* eslint-disable react/prop-types */
import React from 'react';

const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
   const win = typeof window !== 'undefined' ? window : null;

   const [theme, setTheme] = React.useState(
      win && win.sessionStorage.getItem('colorscheme')
   );

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
