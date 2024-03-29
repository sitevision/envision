/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

const Util = (() => {
   const Util = {
      consoleWarning: (issue, ...args) => {
         const DOC_URL = 'https://envisionui.io/';
         const issues = {
            jQuery: (jqName) => {
               let envName = jqName
                  .replace(/^env/, '')
                  .replace(/Imageslider/, 'imageSlider')
                  .replace(/Imageviewer/, 'imageWiewer');
               envName = envName.charAt(0).toLowerCase() + envName.slice(1);
               return `WARNING: $.fn.${jqName} is deprecated. Please update your code with new method envision.${envName}. Refer to ${DOC_URL}warnings/#jquery for documentation.`;
            },
            component: (componentName, anchor, replacementComponent) => {
               const replacementText = replacementComponent
                  ? `Please update your code with new component "${replacementComponent}".`
                  : '';
               return `WARNING: The component "${componentName}" is deprecated. ${replacementText} Refer to ${DOC_URL}warnings/#${anchor} for documentation.`;
            },
         };

         if (Object.prototype.hasOwnProperty.call(issues, issue)) {
            console.warn(issues[issue](...args));
         }
      },

      getLanguageOptions(i18nSetting, langObj, rootEl) {
         const FALLBACK = 'en';
         let i18n = {};

         const getLangObj = () => {
            rootEl = rootEl || document.documentElement;
            const langEl = rootEl.closest('[lang]');
            let lang = langEl.getAttribute('lang').substring(0, 2);
            if (!Object.prototype.hasOwnProperty.call(langObj, lang)) {
               lang = FALLBACK;
            }
            if (Object.prototype.hasOwnProperty.call(langObj, lang)) {
               return langObj[lang];
            }
            return {};
         };

         if (
            typeof i18nSetting === 'string' &&
            Object.prototype.hasOwnProperty.call(langObj, i18nSetting)
         ) {
            i18n = Object.assign({}, langObj[i18nSetting]);
         } else if (this.isPlainObject(i18nSetting)) {
            i18n = Object.assign({}, getLangObj(), i18nSetting);
         } else {
            i18n = Object.assign({}, getLangObj());
         }

         return i18n;
      },

      isPlainObject(obj) {
         if (typeof obj == 'object' && obj !== null) {
            const proto = Object.getPrototypeOf(obj);
            return proto === Object.prototype || proto === null;
         }
         return false;
      },

      extend() {
         const extended = {};
         let deep = false;
         if (
            Object.prototype.toString.call(arguments[0]) === '[object Boolean]'
         ) {
            deep = arguments[0];
         }
         const merge = function (obj) {
            for (const prop in obj) {
               if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                  if (
                     deep &&
                     Object.prototype.toString.call(obj[prop]) ===
                        '[object Object]'
                  ) {
                     extended[prop] = Util.extend(
                        true,
                        extended[prop],
                        obj[prop]
                     );
                  } else {
                     extended[prop] = obj[prop];
                  }
               }
            }
         };
         for (let i = 0; i < arguments.length; i++) {
            merge(arguments[i]);
         }
         return extended;
      },

      normalizeOptions(options, defaults) {
         // Delete all options not available in defaults,
         // always return an object.
         options = this.isPlainObject(options) ? options : {};

         if (!this.isPlainObject(defaults)) {
            console.error('defaults is not an object');
            return options;
         }

         for (let key in options) {
            if (!Object.prototype.hasOwnProperty.call(defaults, key)) {
               delete options[key];
            }
         }
         return options;
      },
   };

   return Util;
})();

export default Util;
