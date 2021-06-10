import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
   setHeadComponents([
      <link key="envision-css" rel="stylesheet" href="/dist/envision.css" />,
      <script
         key="jquery-script"
         src="https://code.jquery.com/jquery-3.5.1.min.js"
         integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
         crossOrigin="anonymous"
      ></script>,
      <script key="envision-js" src="/dist/envision.js"></script>,
   ]);
};
