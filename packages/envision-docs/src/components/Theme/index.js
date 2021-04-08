import React, { Component } from 'react';

class Theme extends Component {
   constructor(props) {
      super(props);
      this.state = {
         darkMode: false,
         font: '',
      };
   }

   componentDidMount() {
      this.createStylesheet();
      this.setState({
         darkMode: window.localStorage.getItem('env-darkmode') === 'true',
         font: window.localStorage.getItem('env-font') || '',
      });
      if (this.state.darkMode) {
         this.setDarkTheme();
      }
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
      --env-link-font-color: #6188ff;
      --env-border-color: #999;
      --env-border-color-light: #666;
      --env-form-input-background-color: #333;
      --env-form-input-border-color: #999;
      --env-box-shadow: 0 0.5em 1em rgba(255, 255, 255, 0.15);
      --env-box-shadow-small: 0 0.125em 0.25em rgba(255, 255, 255, 0.075);
      --env-box-shadow-large: 0 1em 3em rgba(255, 255, 255, 0.175);
      }
      .gatsby-highlight { opacity: 0.85; }
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
      this.setState({
         darkMode: true,
      });
      window.localStorage.setItem('env-darkmode', 'true');
   }

   setDefaultTheme() {
      let stylesheet = document.getElementById('env-font');
      stylesheet.setAttribute('href', this.defaultThemeStyle());
      this.setState({
         darkMode: false,
      });
      window.localStorage.setItem('env-darkmode', 'false');
   }

   setFont(f) {
      document.body.classList.remove('font-' + this.state.font);
      document.body.classList.add('font-' + f);
      this.setState({
         font: f,
      });
      window.localStorage.setItem('env-font', f);
   }

   render() {
      return <></>;
   }
}

export default Theme;
