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

const ARIA_CONTROLS = 'aria-controls';
const ARIA_EXPANDED = 'aria-expanded';
const DATA_EXPANDED = 'data-expanded';
const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
const MODIFIER_BASE = 'env-accordion--';
const NAME = 'envAccordion';
const SHOW = MODIFIER_BASE + 'show';
const TOGGLER_ATTR = '[data-env-accordion]';

class Accordion {
   #isAnimating;

   constructor(element, toggler) {
      this.el = element;
      this.parentEl = getNode(this.el.dataset.parent);
      this.togglerEl = toggler
         ? toggler
         : this.parentEl &&
           getNode(
              `${TOGGLER_ATTR}[${ARIA_CONTROLS}="${this.el.id}"]`,
              this.parentEl
           );

      if (this.el.classList.contains(SHOW)) {
         this.el.classList.remove(SHOW);
         this.el.setAttribute(DATA_EXPANDED, 'true');
         show(this.el);

         if (this.togglerEl) {
            this.togglerEl.setAttribute(ARIA_EXPANDED, 'true');
         }
      } else {
         if (this.togglerEl) {
            this.togglerEl.setAttribute(ARIA_EXPANDED, 'false');
         }
      }

      // Handle legacy code. aria-expanded may be placed on content, not button.
      this.el.removeAttribute(ARIA_EXPANDED);

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
                  const togglerEl = getNode(
                     `${TOGGLER_ATTR}[${ARIA_CONTROLS}="${el.id}"]`,
                     this.parentEl
                  );
                  this._hide(el, togglerEl, this.speed, true);
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
      this._hide(this.el, this.togglerEl, this.speed);
   }

   _hide(el, togglerEl, speed, force) {
      if (!force) {
         this.#isAnimating = true;
      }
      slideUp(el, {
         duration: speed,
         complete: () => {
            if (togglerEl) {
               togglerEl.setAttribute(ARIA_EXPANDED, 'false');
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
               if (settings instanceof Element) {
                  node[NAME] = new Accordion(node, settings);
               } else {
                  node[NAME] = new Accordion(node);
               }
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
      Accordion._init(document.querySelector(selector), el);
   });
}

export default async (elements, settings) => {
   return Accordion._init(elements, settings);
};
