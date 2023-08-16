/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */
import $ from 'jquery';
import CssUtil from './util/css-util';
import { getNode, getNodes, show } from './util/nodes';
import Util from './util/util';
import { slideDown, slideUp } from './util/slideToggle';

const ARIA_EXPANDED = 'aria-expanded';
const DATA_EXPANDED = 'data-expanded';
const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
const MODIFIER_BASE = 'env-accordion--';
const NAME = 'envAccordion';
const SHOW = MODIFIER_BASE + 'show';
const TOGGLER_ATTR = '[data-env-accordion]';

class Accordion {
   #isAnimating;

   constructor(element) {
      this.el = element;
      this.parentEl = getNode(this.el.dataset.parent);
      this.togglerEl =
         this.parentEl &&
         getNode(
            `${TOGGLER_ATTR}[aria-controls="${this.el.id}"]`,
            this.parentEl
         );

      if (this.el.classList.contains(SHOW)) {
         this.el.classList.remove(SHOW);
         this.el.setAttribute(DATA_EXPANDED, 'true');
         show(this.el);

         if (this.togglerEl) {
            this.togglerEl.setAttribute(ARIA_EXPANDED, 'true');
         }
      }

      this.speed = CssUtil.getToggleSpeed(this.el, DURATION_CUSTOM_PROP);
   }

   toggle() {
      if (this.el.getAttribute(DATA_EXPANDED) === 'true') {
         this.hide();
      } else {
         this.show();
      }
   }

   show() {
      if (this.#isAnimating) {
         return;
      }
      if (this.parentEl) {
         getNodes(`[${DATA_EXPANDED}="true"], .${SHOW}`, this.parentEl).forEach(
            (el) => {
               if (!el.isEqualNode(this.el)) {
                  this._hide(el, this.speed, true);
               }
            }
         );
      }
      this.#isAnimating = true;
      slideDown(this.el, {
         duration: this.speed,
         complete: () => {
            if (this.togglerEl) {
               this.togglerEl.setAttribute(ARIA_EXPANDED, 'true');
            }
            this.el.setAttribute(DATA_EXPANDED, 'true');
            this.#isAnimating = false;
         },
      });
   }

   hide() {
      if (this.#isAnimating) {
         return;
      }
      this._hide(this.el, this.speed);
   }

   _hide(el, speed, force) {
      if (!force) {
         this.#isAnimating = true;
      }
      slideUp(el, {
         duration: speed,
         complete: () => {
            if (this.togglerEl) {
               this.togglerEl.setAttribute(ARIA_EXPANDED, 'false');
            }
            el.setAttribute(DATA_EXPANDED, 'false');
            el.classList.remove(SHOW);
            if (!force) {
               this.#isAnimating = false;
            }
         },
      });
   }

   static _init(elements, settings) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         return nodes.map((node) => {
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
      const el = e.target.closest(TOGGLER_ATTR);
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
