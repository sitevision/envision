import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({ font: '', darkMode: false });
const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
   const [darkMode, setDarkMode] = React.useState(false);
   const [font, setFont] = React.useState(null);

   React.useEffect(() => {
      setDarkMode(window.localStorage.getItem('env-darkmode') === 'true');
      setFont(window.localStorage.getItem('env-font') || '');
   }, []);

   React.useEffect(() => {
      if (darkMode) {
         document.body.classList.add('env-theme-darkmode');
      } else {
         document.body.classList.remove('env-theme-darkmode');
      }
      window.localStorage.setItem('env-darkmode', darkMode.toString());
   }, [darkMode]);

   React.useEffect(() => {
      let oldFont = window.localStorage.getItem('env-font');
      document.body.classList.remove('font-' + oldFont);
      if (font) {
         document.body.classList.add('font-' + font);
         window.localStorage.setItem('env-font', font.toString());
      }
   }, [font]);

   const toggleDarkMode = () => setDarkMode(!darkMode);

   return (
      <ThemeContext.Provider
         value={{ toggleDarkMode, darkMode, setFont, font }}
      >
         {children}
      </ThemeContext.Provider>
   );
};

ThemeProvider.propTypes = {
   children: PropTypes.node,
};

export { ThemeProvider, useTheme };
