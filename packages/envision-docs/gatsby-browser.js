import 'prismjs/themes/prism.css';
import './src/scss/docs.scss';
import 'envision';
import 'envision/dist/envision.css';
import React from 'react';
import { ThemeProvider } from './src/components/Theme';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
   <ThemeProvider>{element}</ThemeProvider>
);
