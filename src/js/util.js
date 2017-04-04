const Util = (() => {

   const TRANSITIONS = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
   };

   const ANIMATIONS = {
      animation         : 'animationend',
      OAnimation        : 'oAnimationEnd',
      MozAnimation      : 'animationend',
      WebkitAnimation   : 'webkitAnimationEnd'
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
