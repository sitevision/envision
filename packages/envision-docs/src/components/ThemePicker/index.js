import React from 'react';
import { useColorScheme } from '../Theme';

const ThemePicker = () => {
   const { colorScheme, setColorScheme } = useColorScheme();

   const mqlColorScheme = React.useMemo(() => {
      if (typeof window === 'undefined') {
         return { matches: false };
      }
      return window.matchMedia('(prefers-color-scheme: dark)');
   }, []);

   const [darkTheme, setDarkTheme] = React.useState(
      colorScheme === 'dark' || (colorScheme === null && mqlColorScheme.matches)
   );

   const changeScheme = React.useCallback(
      (scheme) => {
         window?.sessionStorage.setItem('color-scheme', scheme);
         setColorScheme(scheme);
         setDarkTheme(scheme === 'dark');

         const themeEl = document.querySelector('.layout');

         if (scheme === 'dark') {
            themeEl.classList.add('doc-dark-mode');
         } else {
            themeEl.classList.remove('doc-dark-mode');
         }
      },
      [setColorScheme]
   );

   const handlePickerChange = (e) => {
      setDarkTheme(e.target.checked);
      setColorScheme(e.target.checked ? 'dark' : 'light');
   };

   const handlePickerClick = (e) => {
      changeScheme(e.target.checked ? 'dark' : 'light');
   };

   return (
      <div className="theme-picker">
         <label className="theme-picker__label" htmlFor="darkTheme">
            Default / Dark mode
         </label>
         <div className="doc-theme-switch">
            <input
               className="doc-theme-switch__checkbox"
               type="checkbox"
               id="darkTheme"
               onClick={handlePickerClick}
               onChange={handlePickerChange}
               checked={darkTheme}
            />
            <svg
               aria-hidden="true"
               className="env-icon doc-theme-switch__moon"
               width="24"
               height="24"
            >
               <use href="/images/docs-images.svg#moon"></use>
            </svg>
            <svg
               aria-hidden="true"
               className="env-icon doc-theme-switch__sun"
               width="24"
               height="24"
            >
               <use href="/images/docs-images.svg#sun"></use>
            </svg>
         </div>
      </div>
   );
};

export default ThemePicker;
