import React from 'react';
import { useTheme } from '../Theme';

const ThemePicker = () => {
   const { theme, setTheme } = useTheme();
   const onThemeChange = (e) => {
      setTheme(e.target.value);
   };

   return (
      <div className="theme-picker">
         <div className="env-form-field">
            <label htmlFor="selectTheme" className="env-assistive-text">
               Select theme
            </label>
            <div className="env-text-small">
               <div className="env-form-select">
                  <select
                     id="selectTheme"
                     value={theme}
                     onChange={onThemeChange}
                  >
                     <option value="">Default theme</option>
                     <option value="sv-theme-dark">Dark theme</option>
                     <option value="sv-theme-fancy">Fancy theme</option>
                     <option value="sv-theme-quicksand">Quicksand theme</option>
                  </select>
                  <svg className="env-icon">
                     <use xlinkHref="/sitevision/envision-icons.svg#icon-angle-down"></use>
                  </svg>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ThemePicker;
