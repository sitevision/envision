/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import jQuery from 'jquery';
import Util from './util';

const Accordion = (($) => {
   const ARIA_EXPANDED = 'aria-expanded';
   const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
   const MODIFIER_BASE = 'env-accordion--';
   const NAME = 'envAccordion';
   const NO_CONFLICT = $.fn[NAME];
   const SHOW = MODIFIER_BASE + 'show';
   const PARENT = 'data-parent';

   class Accordion {
      constructor(element) {
         this.el = element;
         this.$el = $(element);
         if (this.$el.hasClass(SHOW)) {
            this.$el.removeClass(SHOW).show();
         }
         this.speed = Util.getToggleSpeed(this.$el[0], DURATION_CUSTOM_PROP);
      }

      toggle() {
         if (this.$el.attr(ARIA_EXPANDED) === 'true') {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         $(this.$el.attr(PARENT))
            .find(`[${ARIA_EXPANDED}="true"]`)
            .each(
               ((i, el) => {
                  this._hide($(el), this.speed);
               }).bind(this)
            );
         this.$el.attr(ARIA_EXPANDED, true).stop().slideDown(this.speed);
      }

      hide() {
         this._hide(this.$el, this.speed);
      }

      _hide($el, speed) {
         $el.attr(ARIA_EXPANDED, false)
            .stop()
            .slideUp(speed, () => {
               $el.removeClass(SHOW);
            });
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

      $target[NAME]();
   });

   return Accordion;
})(jQuery);

export default Accordion;
