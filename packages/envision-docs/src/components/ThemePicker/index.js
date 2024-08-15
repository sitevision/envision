import React from 'react';
import { useTheme } from '../Theme';

const ThemePicker = () => {
   const { theme, setTheme } = useTheme();
   const onThemeChange = (e) => {
      setTheme(e.target.checked ? 'sv-theme-dark' : '');
   };

   return (
      <div className="theme-picker">
         <div className="doc-theme-switch">
            <input
               className="doc-theme-switch__checkbox"
               type="checkbox"
               id="darkTheme"
               onChange={onThemeChange}
               checked={theme === 'sv-theme-dark'}
            />
            <label className="env-assistive-text" htmlFor="darkTheme">
               Use dark theme in examples
            </label>
            <svg
               aria-hidden="true"
               className="env-icon doc-theme-switch__moon"
               width="24"
               height="24"
            >
               <use xlinkHref="/images/docs-icons.svg#moon"></use>
            </svg>
            <svg
               aria-hidden="true"
               className="env-icon doc-theme-switch__sun"
               width="24"
               height="24"
            >
               <use xlinkHref="/images/docs-icons.svg#sun"></use>
            </svg>
         </div>
      </div>
   );
};

export default ThemePicker;
