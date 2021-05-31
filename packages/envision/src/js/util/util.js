/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

const Util = (() => {
   const Util = {
      getSelectorFromElement(element) {
         let selector = element.getAttribute('data-target');
         if (!selector || selector === '#') {
            selector = element.getAttribute('href') || '';
         }
         try {
            return document.querySelectorAll(selector).length > 0
               ? selector
               : null;
         } catch (error) {
            return null;
         }
      },

      isPlainObject(obj) {
         if (typeof obj == 'object' && obj !== null) {
            const proto = Object.getPrototypeOf(obj);
            return proto === Object.prototype || proto === null;
         }
         return false;
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
