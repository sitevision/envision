/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import CssUtil from './util/css-util';
import { getNode, getNodes, show } from './util/nodes';
import Util from './util/util';
import { cancelSlideToggle, slideDown, slideUp } from './util/slideToggle';

const NAME = 'envCollapse';
const ARIA_EXPANDED = 'aria-expanded';
const DURATION_CUSTOM_PROP = '--env-collapse-toggle-duration';
const COLLAPSE_SELECTOR = '.env-collapse';
const SHOW = 'env-collapse--show';
const EXPANDED = 'env-collapse--expanded';
const TOGGLER_ATTR = '[data-env-collapse]';

class Collapse {
   constructor(element, togglerEl) {
      this.el = element;
      this.togglerEl =
         togglerEl ||
         getNode(
            `${TOGGLER_ATTR}[href="#${element.id}"], ${TOGGLER_ATTR}[data-target="#${element.id}"]`
         );

      if (this.el.classList.contains(SHOW)) {
         this.setExpanded(true);
         show(this.el);
      }
      this.speed = CssUtil.getToggleSpeed(this.togglerEl, DURATION_CUSTOM_PROP);

      this.handleTogglerClick = this.handleTogglerClick.bind(this);
      this.handleTogglerKeyDown = this.handleTogglerKeyDown.bind(this);

      if (this.togglerEl) {
         this.togglerEl[NAME] = this;
         this.togglerEl.addEventListener('click', this.handleTogglerClick);
         this.togglerEl.addEventListener('keydown', this.handleTogglerKeyDown);
      }
   }

   handleTogglerClick(e) {
      e.preventDefault();
      this.toggle();
   }

   handleTogglerKeyDown(e) {
      if (e.key === ' ' && e.currentTarget.tagName !== 'BUTTON') {
         e.preventDefault();
         this.toggle();
      }
   }

   toggle() {
      if (this.el.classList.contains(SHOW)) {
         this.hide();
      } else {
         this.show();
      }
   }

   setExpanded(expanded) {
      if (!this.togglerEl) {
         return;
      }

      this.togglerEl.classList.toggle(EXPANDED, expanded);
      this.togglerEl.setAttribute(ARIA_EXPANDED, `${expanded}`);
   }

   showImmediately() {
      if (this.toggleTimer) {
         this.toggleTimer = cancelSlideToggle(this.el, this.toggleTimer);
      }

      this.setExpanded(true);
      this.el.classList.add(SHOW);
      show(this.el);
   }

   show() {
      if (
         this.el.classList.contains(SHOW) ||
         this.el.getAnimations().length > 0
      ) {
         // Already visible or animation in progress
         return;
      }
      this.setExpanded(true);
      this.el.classList.add(SHOW);
      this.toggleTimer = slideDown(this.el, {
         duration: this.speed,
         complete: () => {
            this.toggleTimer = null;
         },
      });
   }

   hide() {
      if (
         !this.el.classList.contains(SHOW) ||
         this.el.getAnimations().length > 0
      ) {
         // Already hidden or animation in progress
         return;
      }
      this.setExpanded(false);
      this.toggleTimer = slideUp(this.el, {
         duration: this.speed,
         complete: () => {
            this.toggleTimer = null;
            this.el.classList.remove(SHOW);
         },
      });
   }

   static _getOrCreate(element, togglerEl) {
      if (!element[NAME]) {
         element[NAME] = new Collapse(element, togglerEl);
      }

      return element[NAME];
   }

   static _init(elements, settings) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         return nodes.map((node) => {
            const collapse = Collapse._getOrCreate(node);

            if (typeof settings === 'string') {
               if (!collapse[settings]) {
                  throw new Error(`No method named "${settings}"`);
               }
               collapse[settings].call(collapse);
            }
            return collapse;
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

const getCollapseTarget = (togglerEl) => {
   const selector = togglerEl.dataset.target || togglerEl.getAttribute('href');

   return selector ? document.querySelector(selector) : null;
};

const getSamePageLinkHash = (e) => {
   // Check click event. If it's a link to the same page,
   // return the hash.
   // Listening to hashchange event will not work because it
   // doesn't trigger if the click is on a link with the same
   // hash as already in the URL.
   const linkEl = e.target.closest('a[href]');
   if (
      !linkEl ||
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      (linkEl.target && linkEl.target !== '_self')
   ) {
      // Must be a link, not defaultPrevented and a left button click
      // without modifier keys.
      return null;
   }

   const url = new URL(linkEl.href);

   if (
      url.origin !== window.location.origin ||
      url.pathname !== window.location.pathname ||
      url.search !== window.location.search
   ) {
      // Not a link to the same page.
      return null;
   }

   return url.hash;
};

const getHashTargetEl = (hash) => {
   const id = hash.slice(1);

   if (!id) {
      return null;
   }

   const targetEl = document.getElementById(id);

   if (targetEl) {
      return targetEl;
   }

   try {
      return document.getElementById(decodeURIComponent(id));
   } catch {
      return null;
   }
};

const getParentCollapses = (targetEl) => {
   const collapses = [];
   let collapse = targetEl.closest(COLLAPSE_SELECTOR);

   while (collapse) {
      collapses.unshift(collapse);
      collapse = collapse.parentElement?.closest(COLLAPSE_SELECTOR);
   }
   return collapses;
};

const openHashTargetCollapse = (targetEl) => {
   const collapses = getParentCollapses(targetEl);
   if (collapses.length > 0) {
      collapses.forEach((el) => {
         Collapse._getOrCreate(el).showImmediately();
      });

      requestAnimationFrame(() => {
         targetEl.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'nearest',
         });
      });
   }
};

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Collapse._jQueryInterface;
   $.fn[NAME].Constructor = Collapse;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Collapse._jQueryInterface;
   };

   document.addEventListener('focusin', (e) => {
      const togglerEl = e.target.closest(TOGGLER_ATTR);

      if (togglerEl && !togglerEl[NAME]) {
         const targetEl = getCollapseTarget(togglerEl);
         if (targetEl) {
            Collapse._getOrCreate(targetEl, togglerEl);
         }
      }
   });

   document.addEventListener('click', (e) => {
      const togglerEl = e.target.closest(TOGGLER_ATTR);

      if (togglerEl) {
         e.preventDefault();

         if (!togglerEl[NAME]) {
            const targetEl = getCollapseTarget(togglerEl);

            if (targetEl) {
               Collapse._getOrCreate(targetEl, togglerEl).toggle();
            }
         }

         return;
      }

      // Check for #hash link clicks targeting a closed collapse
      const hash = getSamePageLinkHash(e);
      const targetEl = hash && getHashTargetEl(hash);

      if (targetEl?.closest(COLLAPSE_SELECTOR)) {
         e.preventDefault();
         if (window.location.hash !== hash) {
            history.pushState(null, '', hash);
         }

         openHashTargetCollapse(targetEl);
      }
   });

   document.addEventListener('DOMContentLoaded', () => {
      const targetEl = getHashTargetEl(window.location.hash);
      if (targetEl?.closest(COLLAPSE_SELECTOR)) {
         openHashTargetCollapse(targetEl);
      }
   });
}

export default async (elements, settings) => {
   return Collapse._init(elements, settings);
};
