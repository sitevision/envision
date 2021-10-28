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
const DATA_INDEX = 'data-env-tabs-index';
const IS_ACTIVE = 'env-tabs__link--active';
const NAME = 'envTabs';
const TAB_PANEL_CLASS = 'env-tabs__panel';
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
      this._clickHandler = ((e) => {
         e.preventDefault();
         this._setActive(e.currentTarget, true);
      }).bind(this);

      this._keydownHandler = ((e) => {
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
      }).bind(this);
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
         if (panel) {
            panel.setAttribute('tabindex', '0');
            panel.setAttribute(ARIA_HIDDEN, true);
            panel.classList.add(TAB_PANEL_CLASS);
            hide(panel);
         }
      });
      this.tabs[this.config.active].setAttribute('tabindex', '0');
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
         tab.removeEventListener('keydown', this._keydownHandler, false);
         tab.removeAttribute(DATA_INDEX);
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
         tab.addEventListener('keydown', this._keydownHandler, false);
      });
   }

   _setFocus(focusTab) {
      this.tabs.forEach((tab) => {
         tab.setAttribute('tabindex', '-1');
      });
      focusTab.setAttribute('tabindex', '0');
      focusTab.focus();
   }

   _setActive(tab, initialized) {
      this._resetActive();

      tab.classList.add(IS_ACTIVE);
      tab.setAttribute(ARIA_SELECTED, true);

      if (initialized) {
         this._setFocus(tab);
      }

      const panel = this._getPanelForTab(tab);
      if (panel) {
         panel.setAttribute(ARIA_HIDDEN, false);
         unhide(panel);
      }
      this.activeTab = tab;

      this.activeTab.dispatchEvent(
         new CustomEvent('envision.tabs.activated', {
            bubbles: true,
            cancelable: true,
            detail: {
               tab: this.activeTab,
               panel: this._getPanelForTab(this.activeTab),
            },
         })
      );
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
         if (panel) {
            panel.setAttribute(ARIA_HIDDEN, true);
            hide(panel);
         }
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
         .filter((node) => node.getAttribute(DATA_INITIALIZED) !== 'true')
         .map((node) => {
            let tab = new Tabs(node, settings);
            node.setAttribute(DATA_INITIALIZED, 'true');
            tab.initialize();
            return tab;
         });
      return tabs;
   }
};
