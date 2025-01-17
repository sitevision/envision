import React from 'react';
import ThemeContext from '../../theme-switcher/theme-context';

const ThemePicker = () => {
   const { theme, switchTheme } = React.useContext(ThemeContext);

   const doc = typeof document !== 'undefined' ? document : null;
   const [checked, setChecked] = React.useState(
      theme === 'doc-dark-mode' ||
         (doc && doc.body.classList.contains('doc-dark-mode'))
   );

   const handlePickerChange = (e) => {
      setChecked(e.target.checked);
      if (e.target.checked) {
         switchTheme('doc-dark-mode');
      } else {
         switchTheme('doc-light-mode');
      }
   };

   return (
      <div className="theme-picker">
         <label className="theme-picker__label" htmlFor="darkMode">
            Default / Dark mode
         </label>
         <div className="doc-theme-switch">
            <input
               className="doc-theme-switch__checkbox"
               type="checkbox"
               id="darkMode"
               onChange={handlePickerChange}
               checked={checked}
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
