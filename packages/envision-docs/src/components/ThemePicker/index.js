import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';

class ThemePicker extends Theme {
   constructor() {
      super();
      this.onThemeChange = this.onThemeChange.bind(this);
      this.onFontChange = this.onFontChange.bind(this);
   }

   onThemeChange() {
      let darkMode = !this.state.darkMode;
      if (darkMode) {
         this.setDarkTheme();
      } else {
         this.setDefaultTheme();
      }
   }

   onFontChange(e) {
      this.setFont(e.currentTarget.value);
   }

   render() {
      return (
         <div className="theme-picker">
            <div className="example-grid">
               <div className="example-grid__col example-grid__col--50">
                  <div className="env-form-element">
                     <label
                        htmlFor="selectFont"
                        className="env-form-element__label"
                     >
                        Font family
                     </label>
                     <div className="env-form-element__control">
                        <select
                           className="env-form-input"
                           id="selectFont"
                           value={this.state.font}
                           onChange={this.onFontChange}
                        >
                           <optgroup label="Web Safe">
                              <option value="">Helvetica</option>
                              <option value="georgia">Georgia</option>
                           </optgroup>
                           <optgroup label="Web Font - Serif">
                              <option value="frank-ruhl">
                                 Frank Ruhl Libre
                              </option>
                           </optgroup>
                           <optgroup label="Web Font - Sans Serif">
                              <option value="roboto">Roboto</option>
                              <option value="open-sans">Open Sans</option>
                              <option value="source-sans">Source Sans</option>
                           </optgroup>
                        </select>
                     </div>
                  </div>
                  <div className="env-form-element">
                     <div className="env-switch">
                        <label className="env-switch__label">
                           <input
                              type="checkbox"
                              checked={this.state.darkMode}
                              onChange={this.onThemeChange}
                           />
                           <span className="env-switch__text">Dark Mode</span>
                           <span className="env-switch__slider"></span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

ThemePicker.propTypes = {
   font: PropTypes.string,
   darkMode: PropTypes.bool,
};

export default ThemePicker;
