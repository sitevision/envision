import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({ theme: '', darkMode: false });
const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = React.useState('');

   React.useEffect(() => {
      setTheme(window.localStorage.getItem('env-theme') || '');
   }, []);

   React.useEffect(() => {
      let oldTheme = window.localStorage.getItem('env-theme');
      document.body.classList.remove(oldTheme);
      if (theme) {
         document.body.classList.add(theme);
         window.localStorage.setItem('env-theme', theme.toString());
      } else {
         window.localStorage.removeItem('env-theme');
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
