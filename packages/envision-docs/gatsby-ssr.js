import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
   setHeadComponents([
      <script
         key="jquery-script"
         src="http://code.jquery.com/jquery-3.5.1.min.js"
         integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
         crossOrigin="anonymous"
      ></script>,
   ]);
};
