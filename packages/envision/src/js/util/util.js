/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

const Util = (() => {
   const Util = {
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
            for (var prop in obj) {
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
            var obj = arguments[i];
            merge(obj);
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
