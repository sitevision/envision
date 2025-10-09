import React from 'react';

function setColorsByTheme() {
   const setThemeClassName = (scheme) => {
      document.body.classList.remove(
         scheme === 'doc-dark-mode' ? 'doc-light-mode' : 'doc-dark-mode'
      );
      document.body.classList.add(scheme);
   };

   const mql = window.matchMedia('(prefers-color-scheme: dark)');
   const persistedPreference = sessionStorage.getItem('colorscheme');

   let colorMode;

   if (persistedPreference) {
      colorMode = persistedPreference;
   } else {
      colorMode = mql.matches ? 'doc-dark-mode' : 'doc-light-mode';
      sessionStorage.setItem('colorscheme', colorMode);
   }

   setThemeClassName(colorMode);
}

const ThemeScriptTag = () => {
   return (
      <script
         dangerouslySetInnerHTML={{ __html: `(${setColorsByTheme}());` }}
      />
   );
};

export default ThemeScriptTag;
