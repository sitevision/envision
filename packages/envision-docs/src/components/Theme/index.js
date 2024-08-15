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
      const themeEl = document.querySelector('main');

      if (!themeEl || themeEl.classList.contains('env-dashboard-theme')) {
         return;
      }

      let oldTheme = window.localStorage.getItem('doc-theme');

      oldTheme && themeEl.classList.remove(oldTheme);
      if (theme) {
         themeEl.classList.add(theme);
         window.localStorage.setItem('doc-theme', theme.toString());
      } else {
         window.localStorage.removeItem('doc-theme');
      }
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
