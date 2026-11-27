/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import Util from './util/util';
import { uniqueId, getNodes } from './util/nodes';

const ARIA_SELECTED = 'aria-selected';
const ARIA_HIDDEN = 'aria-hidden';
const DATA_INDEX = 'data-env-tabs-index';
const IS_ACTIVE = 'env-tabs__link--active';
const NAME = 'envTabs';
const TAB_PANEL_CLASS = 'env-tabs__panel';
const TAB_SELECTOR = '[role="tab"]';
const STACKED_SELECTOR = '.env-tabs--column';

const DEFAULTS = {
   active: 0,
};

const saveMarkup = (element, attributes, className) => {
   const values = attributes.map((name) => [name, element.getAttribute(name)]);
   const hadClass = element.classList.contains(className);

   return () => {
      values.forEach(([name, value]) => {
         if (value === null) {
            element.removeAttribute(name);
         } else {
            element.setAttribute(name, value);
         }
      });
      element.classList.toggle(className, hadClass);
   };
};

class Tabs {
   constructor(element, config) {
      this.el = element;
      this.tabs = getNodes(this.el.querySelectorAll(TAB_SELECTOR));
      this.panels = new Map();
      this.restoreTabs = [];
      this.panelMarkup = new Map();
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
         this.restoreTabs.push(
            saveMarkup(
               tab,
               ['id', ARIA_SELECTED, DATA_INDEX, 'tabindex'],
               IS_ACTIVE
            )
         );
         uniqueId(tab);
         let panel = document.getElementById(tab.getAttribute('aria-controls'));
         const href = tab.getAttribute('href');
         if (!panel && href?.startsWith('#')) {
            panel = document.getElementById(href.slice(1));
         }
         this.panels.set(tab, panel);
         if (
            tab.getAttribute(ARIA_SELECTED) === 'true' ||
            tab.classList.contains(IS_ACTIVE)
         ) {
            this.config.active = i;
         }
         tab.classList.remove(IS_ACTIVE);
         tab.setAttribute(ARIA_SELECTED, false);
         tab.setAttribute(DATA_INDEX, i);
         tab.setAttribute('tabindex', '-1');
         if (panel && !this.panelMarkup.has(panel)) {
            const restore = saveMarkup(
               panel,
               ['tabindex', 'role', ARIA_HIDDEN],
               TAB_PANEL_CLASS
            );
            const display = panel.style.getPropertyValue('display');
            const priority = panel.style.getPropertyPriority('display');
            this.panelMarkup.set(panel, { restore, display, priority });
            panel.setAttribute('tabindex', '0');
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute(ARIA_HIDDEN, true);
            panel.classList.add(TAB_PANEL_CLASS);
            panel.style.setProperty('display', 'none', 'important');
         }
      });
      const activeTab = this.tabs[this.config.active] ?? this.tabs[0];
      if (activeTab) {
         activeTab.setAttribute('tabindex', '0');
         this._setActive(activeTab, false);
      }
   }

   activate(index) {
      if (index >= 0 && index < this.tabs.length) {
         this._setActive(this.tabs[index], true);
      }
   }

   destroy() {
      if (!this.el) {
         return;
      }
      this.tabs.forEach((tab) => {
         tab.removeEventListener('click', this._clickHandler, false);
         tab.removeEventListener('keydown', this._keydownHandler, false);
      });
      this.restoreTabs.forEach((restore) => restore());
      this.panelMarkup.forEach(({ restore, display, priority }, panel) => {
         restore();
         panel.style.setProperty('display', display, priority);
      });
      if (this.el[NAME] === this) {
         delete this.el[NAME];
      }
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
         const { display, priority } = this.panelMarkup.get(panel);
         panel.style.setProperty('display', display, priority);
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
      return this.panels.get(tab);
   }

   _resetActive() {
      if (this.activeTab) {
         this.activeTab.classList.remove(IS_ACTIVE);
         this.activeTab.setAttribute(ARIA_SELECTED, false);
         const panel = this._getPanelForTab(this.activeTab);
         if (panel) {
            panel.setAttribute(ARIA_HIDDEN, true);
            panel.style.setProperty('display', 'none', 'important');
         }
      }
   }

   static _init(elements, settings, argument) {
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         const tabs = nodes.map((node) => {
            let instance = node[NAME];
            if (!instance) {
               instance = new Tabs(node, settings);
               node[NAME] = instance;
               instance.initialize();
            }
            if (typeof settings === 'string') {
               if (!instance[settings]) {
                  throw new Error(`Invalid method name "${settings}"`);
               }
               instance[settings](argument);
            }
            return instance;
         });
         return tabs;
      }
   }

   static _jQueryInterface(settings, argument) {
      Util.consoleWarning('jQuery', NAME);
      return this.each(() => {
         const nodes = getNodes(this);
         nodes.forEach((node) => {
            Tabs._init(node, settings, argument);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Tabs._jQueryInterface;
   $.fn[NAME].Constructor = Tabs;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Tabs._jQueryInterface;
   };
}

export default async (elements, settings, argument) => {
   return Tabs._init(elements, settings, argument);
};
