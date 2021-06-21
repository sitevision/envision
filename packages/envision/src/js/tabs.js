/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import Util from './util/util';
import { hide, unhide, getNodes } from './util/nodes';

const ARIA_SELECTED = 'aria-selected';
const ARIA_HIDDEN = 'aria-hidden';
const IDENTIFIER = 'env-tabs';
const DATA_INITITALIZED = 'data-env-tabs';
const DATA_INDEX = 'data-env-tabs-index';
const IS_ACTIVE = 'env-tabs__link--active';
const NAME = 'envTabs';
const TAB_SELECTOR = '.env-tabs__link';
const STACKED_SELECTOR = '.env-tabs--column';

const DEFAULTS = {
   active: 0,
};

class Tabs {
   constructor(element, config) {
      this.el = element;
      this.tabs = getNodes(this.el.querySelectorAll(TAB_SELECTOR));
      this.panels = {};
      this.activeTab = undefined;

      this.config = Object.assign(
         {},
         DEFAULTS,
         Util.normalizeOptions(config, DEFAULTS)
      );
      this._bindEvents();
   }

   initialize() {
      this.tabs.forEach((tab, i) => {
         const panel = document.querySelector(tab.getAttribute('href'));
         this.panels[tab.getAttribute('id')] = panel;
         tab.classList.remove(IS_ACTIVE);
         tab.setAttribute(ARIA_SELECTED, false);
         tab.setAttribute(DATA_INDEX, i);
         tab.setAttribute('tabindex', '-1');
         panel.setAttribute('tabindex', '0');
         panel.setAttribute(ARIA_HIDDEN, true);
         hide(panel);
      });
      this._setActive(this.tabs[this.config.active], false);
   }

   activate(index) {
      if (index >= 0 && index < this.tabs.length) {
         this._setActive(this.tabs[index], true);
      }
   }

   destroy() {
      for (let i = 0; i < this.tabs.length; i++) {
         const tab = this.tabs[i];
         tab.removeEventListener('click');
         tab.removeEventListener('keydown');
         tab.removeAttribute(DATA_INDEX);
      }
      this.tabs = null;
      this.panels = null;
      this.activeTab = null;
      this.config = null;
      this.el.removeAttribute(DATA_INITITALIZED);
      this.el = null;
   }

   // Private

   _bindEvents() {
      for (let i = 0; i < this.tabs.length; i++) {
         const tab = this.tabs[i];
         tab.addEventListener('click', (e) => {
            e.preventDefault();
            this._setActive(e.currentTarget, true);
         });

         tab.addEventListener('keydown', (e) => {
            const stacked = this.el.querySelector(STACKED_SELECTOR);
            if (e.key === 'Enter' || e.key === ' ') {
               e.preventDefault();
               this._setActive(e.currentTarget, true);
            } else if (
               (stacked && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) ||
               (!stacked && (e.key === 'ArrowLeft' || e.key === 'ArrowRight'))
            ) {
               e.preventDefault();
               const targetIndex = this._getIndex(e.currentTarget);
               let focusTab =
                  targetIndex +
                  (e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 1);
               if (focusTab > this.tabs.length - 1) {
                  focusTab = 0;
               } else if (focusTab < 0) {
                  focusTab = this.tabs.length - 1;
               }
               this._setFocus(this.tabs[focusTab]);
            }
         });
      }
   }

   _setFocus(tab) {
      for (let i = 0; i < this.tabs.length; i++) {
         this.tabs[i].setAttribute('tabindex', '-1');
      }
      tab.setAttribute('tabindex', '0');
      tab.focus();
   }

   _setActive(tab, initialized) {
      this._resetActive();

      tab.classList.add(IS_ACTIVE);
      tab.setAttribute(ARIA_SELECTED, true);

      if (initialized) {
         this._setFocus(tab);
      }

      const panel = this._getPanelForTab(tab);
      panel.setAttribute(ARIA_HIDDEN, false);
      unhide(panel);
      this.activeTab = tab;
   }

   _getIndex(tab) {
      return parseInt(tab.getAttribute(DATA_INDEX), 10);
   }

   _getPanelForTab(tab) {
      return this.panels[tab.getAttribute('id')];
   }

   _resetActive() {
      if (this.activeTab) {
         this.activeTab.classList.remove(IS_ACTIVE);
         this.activeTab.setAttribute(ARIA_SELECTED, false);
         const panel = this._getPanelForTab(this.activeTab);
         panel.setAttribute(ARIA_HIDDEN, true);
         hide(panel);
      }
   }

   static _jQuery(config, argument) {
      return this.each(() => {
         const $this = $(this);
         let tabs = $this.data(IDENTIFIER);

         if (!tabs) {
            $this.data(IDENTIFIER, tabs);
            for (let i = 0; i < this.length; i++) {
               let el = this[i];
               if (el.getAttribute(DATA_INITITALIZED) !== 'true') {
                  let tabs = new Tabs(el, config);
                  el.setAttribute(DATA_INITITALIZED, 'true');
                  tabs.initialize();
               }
            }
         } else if (typeof config === 'string') {
            const method = tabs[config];

            if (!method) {
               throw new Error(`Invalid method name "${config}"`);
            }

            method.call(tabs, argument);
         }
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Tabs._jQuery;
   $.fn[NAME].Constructor = Tabs;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Tabs._jQuery;
   };
}

// Plugin / extension for envision library
export default (elements, settings) => {
   const nodes = getNodes(elements);
   if (nodes.length > 0) {
      const tabs = nodes
         .filter((node) => !node.getAttribute(DATA_INITITALIZED) !== 'true')
         .map((node) => {
            let tabs = new Tabs(node, settings);
            node.setAttribute(DATA_INITITALIZED, 'true');
            tabs.initialize();
            return tabs;
         });
      return tabs;
   }
};
