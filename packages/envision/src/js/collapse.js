/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import jQuery from 'jquery';

const Collapse = (($) => {
   const ARIA_EXPANDED = 'aria-expanded';
   const MODIFIER_BASE = 'env-collapse--';
   const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
   const NAME = 'envCollapse';
   const NO_CONFLICT = $.fn[NAME];
   const EXPANDED = MODIFIER_BASE + 'expanded';
   const SHOW = MODIFIER_BASE + 'show';

   class Collapse {
      constructor(element) {
         this.el = element;
         this.$el = $(element);
         this.$trigger = $(
            `[data-env-collapse][href="#${element.id}"], [data-env-collapse][data-target="#${element.id}"]`
         );
         this.speed = this.getToggleSpeed(this.$trigger);
      }

      getToggleSpeed($trigger) {
         let speed = 300,
            duration;
         if (this.$trigger.length) {
            duration = getComputedStyle($trigger[0]).getPropertyValue(
               DURATION_CUSTOM_PROP
            );
         } else {
            duration = getComputedStyle(
               document.documentElement
            ).getPropertyValue(DURATION_CUSTOM_PROP);
         }
         if (duration && parseFloat(duration) > 0) {
            if (duration.includes('ms')) {
               speed = parseInt(duration, 10);
            } else if (duration.includes('s')) {
               speed = parseFloat(duration) * 1000;
            }
         }
         return speed;
      }

      toggle() {
         if (this.$el.hasClass(SHOW)) {
            this.hide();
         } else {
            this.show();
         }
      }

      show() {
         if (this.$trigger.length) {
            this.$trigger.addClass(EXPANDED).attr(ARIA_EXPANDED, true);
         }
         this.$el.stop().slideDown(this.speed).addClass(SHOW);
      }

      hide() {
         if (this.$trigger.length) {
            this.$trigger.removeClass(EXPANDED).attr(ARIA_EXPANDED, false);
         }
         this.$el.stop().slideUp(this.speed).removeClass(SHOW);
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

      // if ($target.hasClass(MODIFIER_BASE + COLLAPSING)) {
      //    return;
      // }

      $target[NAME]();
   });

   return Collapse;
})(jQuery);

export default Collapse;
