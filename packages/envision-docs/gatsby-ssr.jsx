import * as React from 'react';
import ThemeScriptTag from './src/theme-switcher/theme-script';
import { ThemeProvider } from './src/theme-switcher/theme-context';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
   setHeadComponents([
      <link key="envision-css" rel="stylesheet" href="/dist/envision.css" />,
      <link
         key="envision-dashboard-css"
         rel="stylesheet"
         href="/dist/envision-dashboard.css"
      />,
      <script
         key="jquery-script"
         src="https://code.jquery.com/jquery-3.5.1.min.js"
         integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
         crossOrigin="anonymous"
      ></script>,
      <script key="envision-js" src="/dist/envision.js"></script>,
   ]);

   setPreBodyComponents([<ThemeScriptTag key="theme-switcher" />]);
};
export const wrapRootElement = ({ element }) => {
   return <ThemeProvider>{element}</ThemeProvider>;
};
