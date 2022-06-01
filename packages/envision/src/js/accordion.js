/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import $ from 'jquery';
import CssUtil from './util/css-util';
import { getNodes } from './util/nodes';
import Util from './util/util';

const ARIA_EXPANDED = 'aria-expanded';
const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
const MODIFIER_BASE = 'env-accordion--';
const NAME = 'envAccordion';
const SHOW = MODIFIER_BASE + 'show';
const PARENT = 'data-parent';

class Accordion {
   constructor(element) {
      this.el = element;
      this.$el = $(element);
      if (this.$el.hasClass(SHOW)) {
         this.$el.removeClass(SHOW).attr(ARIA_EXPANDED, 'true').show();
      }
      this.speed = CssUtil.getToggleSpeed(this.$el[0], DURATION_CUSTOM_PROP);
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

   static _init(elements, settings) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         const accordions = nodes.map((node) => {
            if (!node[NAME]) {
               node[NAME] = new Accordion(node);
            }
            if (typeof settings === 'string') {
               if (!node[NAME][settings]) {
                  throw new Error(`No method named "${settings}"`);
               }
               node[NAME][settings].call(node[NAME]);
            } else {
               node[NAME].toggle.call(node[NAME]);
            }
            return node[NAME];
         });
         return accordions;
      }
   }

   static _jQueryInterface(settings) {
      Util.consoleWarning('jQuery', NAME);
      return this.each(() => {
         const nodes = getNodes(this);
         nodes.forEach((node) => {
            Accordion._init(node, settings);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Accordion._jQueryInterface;
   $.fn[NAME].Constructor = Accordion;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Accordion._jQueryInterface;
   };

   document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-env-accordion]');
      if (!el) {
         return;
      }
      e.preventDefault();
      const selector = el.dataset.target || el.getAttribute('href');
      Accordion._init(document.querySelector(selector));
   });
}

export default async (elements, settings) => {
   return Accordion._init(elements, settings);
};
