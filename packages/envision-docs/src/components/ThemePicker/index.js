import React from 'react';
import { useTheme } from '../Theme';

const ThemePicker = () => {
   const { theme, setTheme } = useTheme();
   const onThemeChange = (e) => {
      setTheme(e.target.value);
   };

   return (
      <div className="theme-picker">
         <div className="env-form-element">
            <label htmlFor="selectTheme" className="env-assistive-text">
               Select theme
            </label>
            <small className="env-form-element__control">
               <select
                  className="env-form-input"
                  id="selectTheme"
                  value={theme}
                  onChange={onThemeChange}
               >
                  <option value="">Default theme</option>
                  <option value="sv-theme-dark">Dark theme</option>
                  <option value="sv-theme-fancy">Fancy theme</option>
                  <option value="sv-theme-quicksand">Quicksand theme</option>
               </select>
            </small>
         </div>
      </div>
   );
};

export default ThemePicker;
