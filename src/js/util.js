const Util = (() => {


  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


   const TransitionEndEvent = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
   };

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

   const Util = {

      whenTransitionEnd() {
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
