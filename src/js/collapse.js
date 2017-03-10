const Collapse = (($) => {

   const ARIA_EXPANDED = 'aria-expanded';
   const AUTO = 'auto';
   const COLLAPSING = 'collapsing';
   const MODIFIER_BASE = 'sv-collapse--';
   const NAME = 'collapse';
   const NO_CONFLICT = $.fn[NAME];
   const SHOW = 'show';

   const TRANSITIONS = {
      transition        : 'transitionend',
      OTransition       : 'oTransitionEnd',
      MozTransition     : 'transitionend',
      WebkitTransition  : 'webkitTransitionEnd'
   };

   class Collapse {

      constructor(element) {
         this.el = element;
         this.$el = $(element);
      }

      toggle() {
         if (this.$el.hasClass(MODIFIER_BASE + SHOW)) {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         this.$el
            .addClass(MODIFIER_BASE + COLLAPSING)
            .one(this._whichTransitionEvent(), this._showTransitionComplete)
            .height(this.el.scrollHeight);
      }

      hide() {
         this.$el
            .height(this.$el.height())
            .removeClass(MODIFIER_BASE + SHOW)
            .addClass(MODIFIER_BASE + COLLAPSING)
            .one(this._whichTransitionEvent(), this._hideTransitionComplete)
            .height(0);
      }

      // Private

      _showTransitionComplete(e) {
         const $target = $(e.currentTarget);

         $target
            .removeClass(MODIFIER_BASE + COLLAPSING)
            .addClass(MODIFIER_BASE + SHOW)
            .height(AUTO)
            .attr(ARIA_EXPANDED, true);
      }

      _hideTransitionComplete(e) {
         const $target = $(e.currentTarget);

         $target
            .removeClass(MODIFIER_BASE + COLLAPSING)
            .attr(ARIA_EXPANDED, false);
      }

      _whichTransitionEvent() {
         const el = document.createElement('fakeelement');
         let t;

         for (t in TRANSITIONS) {
            if (el.style[t] !== undefined) {
               return TRANSITIONS[t];
            }
         }

         return false;
      }

      static _jQuery(config) {
         return this.each(function() {
            const data = new Collapse(this);

            if (typeof config === 'string') {
               if (data[config] === undefined) {
                  throw new Error(`No method named "${config}"`);
               }
               data[config]();
               return;
            }

            data.toggle();
         });
      }
   }

   $.fn[NAME] = Collapse._jQuery;
   $.fn[NAME].Constructor = Collapse;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Collapse._jQuery;
   };


   $(document).on('click', '[data-sv-collapse]', function(e) {
      e.preventDefault();

      const $this = $(this);
      const target = $this.attr('href') || $this.attr('data-target');
      const $target = $(target);

      if ($target.hasClass(MODIFIER_BASE + COLLAPSING)) {
         return;
      }

      $target.collapse();
   });

   return Collapse;

})(jQuery);

export default Collapse;
