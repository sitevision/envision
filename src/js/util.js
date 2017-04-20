/**
 * --------------------------------------------------------------------------
 * Licensed under MIT <TODO add url>
 * --------------------------------------------------------------------------
 */

const Util = (() => {

   const TRANSITIONS = {
      WebkitTransition  : 'webkitTransitionEnd',
      MozTransition     : 'transitionend',
      OTransition       : 'oTransitionEnd otransitionend',
      transition        : 'transitionend'
   };

   const ANIMATIONS = {
      OAnimation        : 'oAnimationEnd',
      MozAnimation      : 'animationend',
      WebkitAnimation   : 'webkitAnimationEnd',
      animation         : 'animationend'
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

      getTranstionEndEvent() {
         return getEndEvent(TRANSITIONS);
      }
   };

   return Util;

})();

export default Util;
