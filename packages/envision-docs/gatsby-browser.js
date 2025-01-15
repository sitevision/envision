import 'prismjs/themes/prism-okaidia.css';
import './src/scss/docs.scss';
import * as React from 'react';
import { ThemeProvider } from './src/components/Theme';

export const wrapRootElement = ({ element }) => (
   <ThemeProvider>{element}</ThemeProvider>
);
