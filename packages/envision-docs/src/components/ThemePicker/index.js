import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThemePicker extends Component {
   constructor() {
      super();
      this.createStylesheet();
      this.state = {
         darkMode: window.localStorage.getItem('env-darkmode') === 'true',
         font: window.localStorage.getItem('env-font') || '',
      };
      if (this.state.darkMode) {
         this.setDarkTheme();
      }
      this.onThemeChange = this.onThemeChange.bind(this);
      this.onFontChange = this.onFontChange.bind(this);
      this.setDarkTheme = this.setDarkTheme.bind(this);
      this.setFont = this.setFont.bind(this);
      this.setFont(this.state.font);
   }

   createStylesheet() {
      let stylesheet = document.createElement('link');
      stylesheet.setAttribute('rel', 'stylesheet');
      stylesheet.setAttribute('property', 'stylesheet');
      stylesheet.setAttribute('id', 'env-font');
      stylesheet.setAttribute('href', 'data:text/css;charset=UTF-8,');
      document.head.append(stylesheet);
   }

   darkThemeStyle() {
      let theme = `:root {
      --env-page-background-color: #161616;
      --env-section-background-color: #555555;
      --env-element-common-background-color: #333;
      --env-collapse-background-color: #333;
      --env-collapse-border-color: #666;
      --env-collapse-font-color: #fff;
      --env-collapse-expanded-background-color: #555;
      --env-collapse-expanded-border-color: #999;
      --env-collapse-expanded-font-color: #fff;
      --env-font-color: #fff;
      --env-font-color-lighter: #ddd;
      --env-border-color: #999;
      --env-border-color-light: #666;
      --env-form-input-background-color: #333;
      --env-form-input-border-color: #999;
      --env-box-shadow: 0 0.5em 1em rgba(255, 255, 255, 0.15);
      --env-box-shadow-small: 0 0.125em 0.25em rgba(255, 255, 255, 0.075);
      --env-box-shadow-large: 0 1em 3em rgba(255, 255, 255, 0.175);
      }
      :not(pre) > code[class*="language-"] {
      background-color: var(--env-section-background-color);
      color: var(--env-font-color);
      }
      `;
      return `data:text/css;charset=UTF-8,${encodeURIComponent(theme)}`;
   }

   defaultThemeStyle() {
      let theme = `:root {
      --env-collapse-background-color: var(--env-element-background-color-light);
      --env-form-input-font-color: var(--env-font-color);
      --env-form-input-border-color: var(--env-border-color-light);
      }`;
      return `data:text/css;charset=UTF-8,${encodeURIComponent(theme)}`;
   }

   setDarkTheme() {
      let stylesheet = document.getElementById('env-font');
      stylesheet.setAttribute('href', this.darkThemeStyle());
   }

   setDefaultTheme() {
      let stylesheet = document.getElementById('env-font');
      stylesheet.setAttribute('href', this.defaultThemeStyle());
   }

   setFont(f) {
      document.body.classList.remove('font-' + this.state.font);
      document.body.classList.add('font-' + f);
      this.setState({
         font: f,
      });
      window.localStorage.setItem('env-font', f);
   }

   onThemeChange() {
      let darkMode = !this.state.darkMode;
      this.setState({
         darkMode: darkMode,
      });
      if (darkMode) {
         this.setDarkTheme();
      } else {
         this.setDefaultTheme();
      }
      window.localStorage.setItem('env-darkmode', darkMode.toString());
   }

   onFontChange(e) {
      this.setFont(e.currentTarget.value);
   }

   render() {
      return (
         <div className={'theme-picker'}>
            <span>Site theme</span>
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
            <div className="env-form-element">
               <label htmlFor="selectFont" className="env-form-element__label">
                  Site font
               </label>
               <div className="env-form-element__control">
                  <select
                     className="env-form-input"
                     id="selectFont"
                     value={this.state.font}
                     onChange={this.onFontChange}
                  >
                     <option value="">Helvetica</option>
                     <option value="roboto">Roboto</option>
                     <option value="open-sans">Open Sans</option>
                     <option value="source-sans">Source Sans</option>
                  </select>
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
