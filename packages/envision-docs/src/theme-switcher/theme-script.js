import React from 'react';

function setColorsByTheme() {
   const setThemeClassName = (scheme) => {
      document.body.classList.remove(
         scheme === 'doc-dark-mode' ? 'doc-light-mode' : 'doc-dark-mode'
      );
      document.body.classList.add(scheme);
   };

   const handleMqlChange = (mq) => {
      const switchEl = document.getElementById('darkMode');
      colorMode = mq.matches ? 'doc-dark-mode' : 'doc-light-mode';
      sessionStorage.setItem('colorscheme', colorMode);
      setThemeClassName(colorMode);

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
         window.HTMLInputElement.prototype,
         'checked'
      ).set;
      nativeInputValueSetter.call(switchEl, mq.matches);

      const event = new Event('click', { bubbles: true });
      switchEl.dispatchEvent(event);
   };

   const mql = window.matchMedia('(prefers-color-scheme: dark)');
   const persistedPreference = sessionStorage.getItem('colorscheme');

   let colorMode = 'doc-light-mode';

   if (persistedPreference) {
      colorMode = persistedPreference;
   } else {
      colorMode = mql.matches ? 'doc-dark-mode' : 'doc-light-mode';
      sessionStorage.setItem('colorscheme', colorMode);
   }

   setThemeClassName(colorMode);

   mql.addEventListener('change', handleMqlChange);
}

const ThemeScriptTag = () => {
   return (
      <script
         dangerouslySetInnerHTML={{ __html: `(${setColorsByTheme}());` }}
      />
   );
};

export default ThemeScriptTag;
