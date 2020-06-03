/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import jQuery from 'jquery';
import Util from './util';

const Collapse = (($) => {
   const ARIA_EXPANDED = 'aria-expanded';
   const AUTO = 'auto';
   const HEIGHT = 'height';
   const COLLAPSING = 'collapsing';
   const EXPANDED = 'expanded';
   const MODIFIER_BASE = 'env-collapse--';
   const NAME = 'envCollapse';
   const NO_CONFLICT = $.fn[NAME];
   const SHOW = 'show';

   class Collapse {
      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this.$trigger = $(
            `[data-env-collapse][href="#${element.id}"],[data-env-collapse][data-target="#${element.id}"]`
         );
      }

      toggle() {
         if (this.$el.hasClass(MODIFIER_BASE + SHOW)) {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         if (this.$trigger.length) {
            this.$trigger.addClass(MODIFIER_BASE + EXPANDED);
         }

         this.$el
            .addClass(MODIFIER_BASE + COLLAPSING)
            .one(
               Util.getTransitionEndEvent(),
               this._showTransitionComplete.bind(this)
            )
            .css(HEIGHT, this.el.scrollHeight);
      }

      hide() {
         if (this.$trigger.length) {
            this.$trigger.removeClass(MODIFIER_BASE + EXPANDED);
         }

         this.$el
            .height(this.$el.height())
            .removeClass(MODIFIER_BASE + SHOW)
            .addClass(MODIFIER_BASE + COLLAPSING)
            .one(
               Util.getTransitionEndEvent(),
               this._hideTransitionComplete.bind(this)
            )
            .height(0);
      }

      _showTransitionComplete() {
         this.$el
            .removeClass(MODIFIER_BASE + COLLAPSING)
            .addClass(MODIFIER_BASE + SHOW)
            .css(HEIGHT, AUTO);

         if (this.$trigger.length) {
            this.$trigger.attr(ARIA_EXPANDED, true);
         }
      }

      _hideTransitionComplete() {
         this.$el.removeClass(MODIFIER_BASE + COLLAPSING);

         if (this.$trigger.length) {
            this.$trigger.attr(ARIA_EXPANDED, false);
         }
      }

      static _jQuery(config) {
         return this.each(function () {
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

   $(document).on('click', '[data-env-collapse]', function (e) {
      e.preventDefault();

      const $this = $(this);
      const target = $this.attr('href') || $this.attr('data-target');
      const $target = $(target);

      if ($target.hasClass(MODIFIER_BASE + COLLAPSING)) {
         return;
      }

      $target[NAME]();
   });

   return Collapse;
})(jQuery);

export default Collapse;
