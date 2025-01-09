import React from 'react';
import PropTypes from 'prop-types';

const colorScheme = null;

const ColorSchemeContext = React.createContext({
   colorScheme: colorScheme ? colorScheme : null,
});
const useColorScheme = () => React.useContext(ColorSchemeContext);

const ThemeProvider = ({ children }) => {
   const [colorScheme, setColorScheme] = React.useState(
      window.sessionStorage.getItem('color-scheme')
   );

   return (
      <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
         {children}
      </ColorSchemeContext.Provider>
   );
};

ThemeProvider.propTypes = {
   children: PropTypes.node,
};

export { ThemeProvider, useColorScheme };
