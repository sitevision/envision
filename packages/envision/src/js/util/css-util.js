/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

const CssUtil = (() => {
   const CssUtil = {
      reflow(element) {
         return element.offsetHeight;
      },

      isTouch() {
         return window.matchMedia('(pointer: coarse)').matches;
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
            if (duration.includes('ms')) {
               speed = parseInt(duration, 10);
            } else if (duration.includes('s')) {
               speed = parseFloat(duration) * 1000;
            }
         }
         return speed;
      },
   };

   return CssUtil;
})();

export default CssUtil;
