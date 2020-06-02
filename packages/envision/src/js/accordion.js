/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import jQuery from 'jquery';
import Util from './util';

const Accordion = (($) => {
   const ARIA_EXPANDED = 'aria-expanded';
   const AUTO = 'auto';
   const COLLAPSING = 'collapsing';
   const MODIFIER_BASE = 'env-accordion--';
   const NAME = 'envAccordion';
   const NO_CONFLICT = $.fn[NAME];
   const SHOW = 'show';
   const PARENT = 'data-parent';

   class Accordion {
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
            .one(Util.getTransitionEndEvent(), this._showTransitionComplete)
            .height(this.el.scrollHeight);

         const $hide = $(this.$el.attr(PARENT)).find(
            `.${MODIFIER_BASE + SHOW}`
         );

         $hide
            .height($hide.height())
            .removeClass(MODIFIER_BASE + SHOW)
            .addClass(MODIFIER_BASE + COLLAPSING)
            .one(Util.getTransitionEndEvent(), this._hideTransitionComplete)
            .height(0);
      }

      hide() {
         this.$el
            .height(this.$el.height())
            .removeClass(MODIFIER_BASE + SHOW)
            .addClass(MODIFIER_BASE + COLLAPSING)
            .one(Util.getTransitionEndEvent(), this._hideTransitionComplete)
            .height(0);
      }

      _showTransitionComplete(e) {
         const $target = $(e.currentTarget);

         $target
            .removeClass(MODIFIER_BASE + COLLAPSING)
            .addClass(MODIFIER_BASE + SHOW)
            .height(AUTO)
            .attr(ARIA_EXPANDED, true);
      }

      _hideTransitionComplete() {
         const $target = $(`.${MODIFIER_BASE + COLLAPSING}`);

         $target
            .removeClass(MODIFIER_BASE + COLLAPSING)
            .attr(ARIA_EXPANDED, false);
      }

      static _jQuery(config) {
         return this.each(function () {
            const data = new Accordion(this);

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

   $.fn[NAME] = Accordion._jQuery;
   $.fn[NAME].Constructor = Accordion;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Accordion._jQuery;
   };

   $(document).on('click', '[data-env-accordion]', function (e) {
      e.preventDefault();

      const $this = $(this);
      const target = $this.attr('href') || $this.attr('data-target');
      const $target = $(target);

      if (
         $($target.attr(PARENT)).find(`.${MODIFIER_BASE + COLLAPSING}`).length
      ) {
         return;
      }

      $target[NAME]();
   });

   return Accordion;
})(jQuery);

export default Accordion;
