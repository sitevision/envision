/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

const CssUtil = (() => {
   return {
      reflow(element) {
         return element.offsetHeight;
      },

      getToggleSpeed(el, durationCustomProperty) {
         let speed = 300,
            duration;
         if (el) {
            duration = getComputedStyle(el).getPropertyValue(
               durationCustomProperty
            );
         } else {
            duration = getComputedStyle(
               document.documentElement
            ).getPropertyValue(durationCustomProperty);
         }
         if (duration && parseFloat(duration) > 0) {
            if (duration.indexOf('ms') !== -1) {
               speed = parseInt(duration, 10);
            } else if (duration.indexOf('s') !== -1) {
               speed = parseFloat(duration) * 1000;
            }
         }
         return speed;
      },
   };
})();

export default CssUtil;
