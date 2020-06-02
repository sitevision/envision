/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import jQuery from 'jquery';

const Util = (($) => {
   const TRANSITIONS = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend',
   };

   const ANIMATIONS = {
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd',
      animation: 'animationend',
   };

   function getEndEvent(events) {
      let t;
      const el = document.createElement('fakeelement');

      for (t in events) {
         if (el.style[t] !== undefined) {
            return events[t];
         }
      }

      return false;
   }

   const Util = {
      getAnimationEndEvent() {
         return getEndEvent(ANIMATIONS);
      },

      getTransitionEndEvent() {
         return getEndEvent(TRANSITIONS);
      },

      reflow(element) {
         return element.offsetHeight;
      },

      isTouch() {
         return (
            'ontouchstart' in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)
         );
      },

      getSelectorFromElement(element) {
         let selector = element.getAttribute('data-target');
         if (!selector || selector === '#') {
            selector = element.getAttribute('href') || '';
         }

         try {
            return $(selector).length > 0 ? selector : null;
         } catch (error) {
            return null;
         }
      },
   };

   return Util;
})(jQuery);

export default Util;
