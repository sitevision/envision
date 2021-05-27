/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';

const ARIA_SELECTED = 'aria-selected';
const ARIA_HIDDEN = 'aria-hidden';
const ENTER_KEY = 13;
const IDENTIFIER = 'env.tabs';
const IS_ACTIVE = 'env-tabs__link--active';
const NAME = 'envTabs';
const NO_CONFLICT = $.fn[NAME];
const TAB_SELECTOR = '.env-tabs__link';

const DEFAULTS = {
   active: 0,
};

class Tabs {
   constructor(element, config) {
      this.el = element;
      this.$el = $(element);
      this.$tabs = this.$el.find(TAB_SELECTOR);
      this.config = $.extend({}, DEFAULTS, config);
      this.$panels = {};
      this.$activeTab = undefined;

      this._bindEvents();
   }

   initialize() {
      this.$tabs.each((i, tab) => {
         const $tab = $(tab);
         const $panel = $($tab.attr('href'));
         this.$panels[$tab.attr('id')] = $panel;

         $tab.removeClass(IS_ACTIVE).attr(ARIA_SELECTED, false);

         $panel.attr(ARIA_HIDDEN, true).hide();
      });

      this._setActive(this.$tabs.eq(this.config.active), false);
   }

   activate(index) {
      this._setActive(this.$tabs.eq(index), true);
   }

   destroy() {
      this.$tabs.off('click keydown');
      this.$activeTab = undefined;
      this.$tabs = undefined;
      this.$panels = undefined;
      this.$el.removeData(IDENTIFIER);
   }

   // Private

   _bindEvents() {
      this.$tabs.on('click', (e) => {
         e.preventDefault();
         this._setActive($(e.currentTarget), true);
      });

      this.$tabs.on('keydown', (e) => {
         if (e.which === ENTER_KEY) {
            this._setActive($(e.currentTarget), true);
         }
      });
   }

   _setActive($tab, initialized) {
      this._resetActive();

      $tab.addClass(IS_ACTIVE).attr(ARIA_SELECTED, true);

      if (initialized) {
         $tab.trigger('focus');
      }

      this._getPanelForTab($tab).attr(ARIA_HIDDEN, false).show();

      this.$activeTab = $tab;
   }

   _getPanelForTab($tab) {
      return this.$panels[$tab.attr('id')];
   }

   _resetActive() {
      if (this.$activeTab) {
         this.$activeTab.removeClass(IS_ACTIVE).attr(ARIA_SELECTED, false);

         this._getPanelForTab(this.$activeTab).attr(ARIA_HIDDEN, true).hide();
      }
   }

   static _jQuery(config, argument) {
      return this.each(() => {
         const $this = $(this);
         let tabs = $this.data(IDENTIFIER);

         if (!tabs) {
            tabs = new Tabs(this, config);
            $this.data(IDENTIFIER, tabs);
            tabs.initialize();
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

$.fn[NAME] = Tabs._jQuery;
$.fn[NAME].Constructor = Tabs;
$.fn[NAME].noConflict = () => {
   $.fn[NAME] = NO_CONFLICT;
   return Tabs._jQuery;
};

export default Tabs;
