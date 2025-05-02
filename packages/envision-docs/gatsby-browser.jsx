import * as React from 'react';
import 'prismjs/themes/prism-okaidia.css';
import './src/scss/docs.scss';

import { ThemeProvider } from './src/theme-switcher/theme-context';

export const wrapRootElement = ({ element }) => {
   return <ThemeProvider>{element}</ThemeProvider>;
};
