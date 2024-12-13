import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({ theme: '', darkMode: false });
const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = React.useState('');

   React.useEffect(() => {
      setTheme(window.localStorage.getItem('doc-theme') || '');
   }, []);

   React.useEffect(() => {
      // Theme class is also set in copyExample.js
      // when creating the example elements
      let oldTheme = window.localStorage.getItem('doc-theme');
      const mainEl = document.querySelector('main');
      const exampleEls = mainEl && mainEl.querySelectorAll('.code-example');

      exampleEls &&
         exampleEls.forEach((themeEl) => {
            if (!themeEl || mainEl.classList.contains('env-dashboard-theme')) {
               return;
            }
            oldTheme && themeEl.classList.remove(oldTheme);
            if (theme) {
               themeEl.classList.add(theme);
               window.localStorage.setItem('doc-theme', theme.toString());
            } else {
               window.localStorage.removeItem('doc-theme');
            }
         });
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ setTheme, theme }}>
         {children}
      </ThemeContext.Provider>
   );
};

ThemeProvider.propTypes = {
   children: PropTypes.node,
};

export { ThemeProvider, useTheme };
