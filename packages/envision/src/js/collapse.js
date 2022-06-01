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
const MODIFIER_BASE = 'env-collapse--';
const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
const NAME = 'envCollapse';
const EXPANDED = MODIFIER_BASE + 'expanded';
const SHOW = MODIFIER_BASE + 'show';

class Collapse {
   constructor(element) {
      this.el = element;
      this.$el = $(element);
      this.$trigger = $(
         `[data-env-collapse][href="#${element.id}"], [data-env-collapse][data-target="#${element.id}"]`
      );
      if (this.$el.hasClass(SHOW)) {
         this.$el.show();
         this.$trigger.addClass(EXPANDED).attr(ARIA_EXPANDED, true);
      }
      this.speed = CssUtil.getToggleSpeed(
         this.$trigger[0],
         DURATION_CUSTOM_PROP
      );
   }

   toggle() {
      if (this.$el.is(':animated')) {
         return;
      } else if (this.$el.hasClass(SHOW)) {
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
      this.$el.stop().slideUp(
         this.speed,
         function () {
            this.$el.removeClass(SHOW);
         }.bind(this)
      );
   }

   static _init(elements, settings) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         const collapses = nodes.map((node) => {
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
         return collapses;
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
