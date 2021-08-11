/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import CssUtil from './util/css-util';
import { getNodes } from './util/nodes';

const ARIA_EXPANDED = 'aria-expanded';
const MODIFIER_BASE = 'env-collapse--';
const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
const NAME = 'envCollapse';
const DATA_INITIALIZED = 'data-env-collapse';
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

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
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

      if ($target.is(':animated')) {
         return;
      }

      $target[NAME]();
   });
}

export default async (elements) => {
   const nodes = getNodes(elements);
   if (nodes.length > 0) {
      const collapses = nodes
         .filter((node) => node.getAttribute(DATA_INITIALIZED) !== 'true')
         .map((node) => {
            const collapse = new Collapse(node);
            node.setAttribute(DATA_INITIALIZED, 'true');
            return collapse;
         });
      return collapses;
   }
};
