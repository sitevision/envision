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
      let stylesheet = getStylesheet();
      if (darkMode) {
         stylesheet.setAttribute('href', darkThemeStyle());
      } else {
         stylesheet.setAttribute('href', defaultThemeStyle());
      }
      window.localStorage.setItem('env-darkmode', darkMode);
   }, [darkMode]);

   React.useEffect(() => {
      let oldFont = window.localStorage.getItem('env-font');
      document.body.classList.remove('font-' + oldFont);
      document.body.classList.add('font-' + font);
      window.localStorage.setItem('env-font', font);
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

const darkThemeStyle = () => {
   let theme = `:root {
      --env-page-background-color: #161616;
      --env-section-background-color: #555555;
      --env-element-common-background-color: #333;
      --env-collapse-background-color: #333;
      --env-collapse-border-color: #666;
      --env-collapse-font-color: #fff;
      --env-collapse-expanded-background-color: #555;
      --env-collapse-expanded-border-color: #999;
      --env-collapse-expanded-font-color: #fff;
      --env-font-color: #fff;
      --env-font-color-lighter: #ddd;
      --env-link-font-color: #6188ff;
      --env-border-color: #999;
      --env-border-color-light: #666;
      --env-form-input-background-color: #333;
      --env-form-input-border-color: #999;
      --env-box-shadow: 0 0.5em 1em rgba(255, 255, 255, 0.15);
      --env-box-shadow-small: 0 0.125em 0.25em rgba(255, 255, 255, 0.075);
      --env-box-shadow-large: 0 1em 3em rgba(255, 255, 255, 0.175);
      }
      .gatsby-highlight { opacity: 0.85; }
      :not(pre) > code[class*="language-"] {
      background-color: var(--env-section-background-color);
      color: var(--env-font-color);
      }
      `;
   return `data:text/css;charset=UTF-8,${encodeURIComponent(theme)}`;
};

const defaultThemeStyle = () => {
   let theme = `:root {
      --env-collapse-background-color: var(--env-element-background-color-light);
      --env-form-input-font-color: var(--env-font-color);
      --env-form-input-border-color: var(--env-border-color-light);
      }`;
   return `data:text/css;charset=UTF-8,${encodeURIComponent(theme)}`;
};

const getStylesheet = () => {
   let stylesheet = document.getElementById('env-theme');
   if (!stylesheet) {
      stylesheet = document.createElement('link');
      stylesheet.setAttribute('rel', 'stylesheet');
      stylesheet.setAttribute('property', 'stylesheet');
      stylesheet.setAttribute('id', 'env-theme');
      stylesheet.setAttribute('href', 'data:text/css;charset=UTF-8,');
      document.head.append(stylesheet);
   }
   return stylesheet;
};

ThemeProvider.propTypes = {
   children: PropTypes.node,
};

export { ThemeProvider, useTheme };
