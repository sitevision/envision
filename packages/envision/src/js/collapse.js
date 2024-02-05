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
const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
const NAME = 'envCollapse';
const EXPANDED = 'env-collapse--expanded';
const SHOW = 'env-collapse--show';

class Collapse {
   constructor(element) {
      this.el = element;
      this.togglerEl = getNode(
         `[data-env-collapse][href="#${element.id}"], [data-env-collapse][data-target="#${element.id}"]`
      );

      if (this.el.classList.contains(SHOW)) {
         show(this.el);
         this.togglerEl.classList.add(EXPANDED);
         this.togglerEl.setAttribute(ARIA_EXPANDED, 'true');
      }
      this.speed = CssUtil.getToggleSpeed(this.togglerEl, DURATION_CUSTOM_PROP);
   }

   toggle() {
      if (this.el.classList.contains(SHOW)) {
         this.hide();
      } else {
         this.show();
      }
   }

   show() {
      if (this.el.getAnimations().length > 0) {
         // Animation in progress
         return;
      }
      if (this.togglerEl) {
         this.togglerEl.classList.add(EXPANDED);
         this.togglerEl.setAttribute(ARIA_EXPANDED, 'true');
      }
      this.el.classList.add(SHOW);
      slideDown(this.el, { duration: this.speed });
   }

   hide() {
      if (this.el.getAnimations().length > 0) {
         // Animation in progress
         return;
      }
      if (this.togglerEl) {
         this.togglerEl.classList.remove(EXPANDED);
         this.togglerEl.setAttribute(ARIA_EXPANDED, 'false');
      }
      slideUp(this.el, {
         duration: this.speed,
         complete: () => {
            this.el.classList.remove(SHOW);
         },
      });
   }

   static _init(elements, settings) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         return nodes.map((node) => {
            if (!node[NAME]) {
               node[NAME] = new Collapse(node);
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
            Collapse._init(node, settings);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Collapse._jQueryInterface;
   $.fn[NAME].Constructor = Collapse;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Collapse._jQueryInterface;
   };

   document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-env-collapse]');
      if (!el) {
         return;
      }
      e.preventDefault();
      const selector = el.dataset.target || el.getAttribute('href');
      Collapse._init(document.querySelector(selector));
   });
}

export default async (elements, settings) => {
   return Collapse._init(elements, settings);
};
