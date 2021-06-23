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
const DATA_INITIALIZED = 'data-env-tabs';
const IS_ACTIVE = 'env-tabs__link--active';
const NAME = 'envTabs';
const TAB_SELECTOR = '.env-tabs__link';

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
      this._clickHandler = ((e) => {
         e.preventDefault();
         this._setActive(e.currentTarget, true);
      }).bind(this);

      this._keyupHandler = ((e) => {
         if (e.key === 'Enter') {
            e.preventDefault();
            this._setActive(e.currentTarget, true);
         }
      }).bind(this);
      this._bindEvents();
   }

   initialize() {
      this.tabs.forEach((tab) => {
         const panel = document.querySelector(tab.getAttribute('href'));
         this.panels[tab.getAttribute('id')] = panel;
         tab.classList.remove(IS_ACTIVE);
         tab.setAttribute(ARIA_SELECTED, false);
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
      this.tabs.forEach((tab) => {
         tab.removeEventListener('click', this._clickHandler, false);
         tab.removeEventListener('keydown', this._keyupHandler, false);
      });
      this.el.removeAttribute(DATA_INITIALIZED);
      for (let key in this) {
         delete this[key];
      }
   }

   // Private

   _bindEvents() {
      this.tabs.forEach((tab) => {
         tab.addEventListener('click', this._clickHandler, false);
         tab.addEventListener('keydown', this._keyupHandler, false);
      });
   }

   _setFocus(tab) {
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
               if (el.getAttribute(DATA_INITIALIZED) !== 'true') {
                  let tabs = new Tabs(el, config);
                  el.setAttribute(DATA_INITIALIZED, 'true');
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
export default async (elements, settings) => {
   const nodes = getNodes(elements);
   if (nodes.length > 0) {
      const tabs = nodes
         .filter((node) => !node.getAttribute(DATA_INITIALIZED) !== 'true')
         .map((node) => {
            let tabs = new Tabs(node, settings);
            node.setAttribute(DATA_INITIALIZED, 'true');
            tabs.initialize();
            return tabs;
         });
      return tabs;
   }
};
