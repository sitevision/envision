const Util = (() => {


   /**
    * ------------------------------------------------------------------------
    * Private TransitionEnd Helpers
    * ------------------------------------------------------------------------
    */


   const TransitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
   };

   const animations = {
      animation         : 'animationend',
      OAnimation        : 'oAnimationEnd',
      MozAnimation      : 'animationend',
      WebkitAnimation   : 'webkitAnimationEnd'
   };

   /**
    * --------------------------------------------------------------------------
    * Public Util Api
    * --------------------------------------------------------------------------
    */

   const Util = {

      getAnimationEndEvent() {
         let t;
         const el = document.createElement('fakeelement');

         for (t in animations) {
            if (el.style[t] !== undefined) {
               return animations[t];
            }
         }
         return false;
      },

      getTranstionEndEvent() {
         const el = document.createElement('fakeelement');
         let t;

         for (t in TransitionEndEvent) {
            if (el.style[t] !== undefined) {
               return TransitionEndEvent[t];
            }
         }

         return false;
      }
   };

   return Util;

})(jQuery);

export default Util;
