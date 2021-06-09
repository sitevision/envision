/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import Util from './util/util';
import { getNodes } from './util/nodes';

const lang = {
   sv: {
      add: 'Lägg till',
      remove_button: 'Ta bort val',
      clear_button: 'Ta bort alla val',
      no_results: 'Inga alternativ matchar',
   },
   en: {
      add: 'Add',
      remove_button: 'Remove',
      clear_button: 'Clear all',
      no_results: 'No results found',
   },
};

const defaults = {
   staticConfig: {
      wrapperClass: 'env-select',
      inputClass: 'env-select__input',
      dropdownClass: 'env-select__dropdown',
      dropdownContentClass: 'env-select__dropdown__content',
      itemClass: 'env-select__item',
      optionClass: 'env-select__dropdown__option',
      sortField: {
         field: 'text',
         direction: 'asc',
      },
      plugins: {
         remove_button: {
            title: `${lang.sv.remove_button}`,
            className: 'env-select__item__remove',
         },
         clear_button: {
            title: `${lang.sv.clear_button}`,
            className: 'env-select__input__clear',
         },
      },
      render: {
         option_create: function (data, escape) {
            return `<div class="create">${
               this.settings.i18n.add
            } <strong>${escape(data.input)}</strong>&hellip;</div>`;
         },
         no_results: function () {
            return `<div class="no-results">${this.settings.i18n.no_results}</div>`;
         },
         loading: function () {
            return (
               '<div class="env-select__spinner env-spinner-bounce">' +
               '<div class="env-bounce1"></div><div class="env-bounce2"></div>' +
               '<div class="env-bounce3"></div></div>'
            );
         },
      },
   },
   userConfig: {
      valueField: 'value',
      labelField: 'text',
      searchField: ['text'],
      maxItems: null,
      options: null,
      items: null,
      create: false,
      clearButton: true,
      placeholder: null,
      createFilter: function (input) {
         input = input.toLowerCase();
         return !(input in this.options);
      },
      preload: false,
      load: null, // function() { ... }
      onInitialize: null, // function() { ... }
      onChange: null, // function(value) { ... }
      onItemAdd: null, // function(value, $item) { ... }
      onItemRemove: null, // function(value) { ... }
      onClear: null, // function() { ... }
      onOptionAdd: null, // function(value, data) { ... }
      onOptionRemove: null, // function(value) { ... }
      onOptionClear: null, // function() { ... }
      onDropdownOpen: null, // function(dropdown) { ... }
      onDropdownClose: null, // function(dropdown) { ... }
      onType: null, // function(str) { ... }
      onFocus: null, // function(str) { ... }
      onBlur: null, // function(str) { ... },
      onLoad: null, // function(options, optgroup) { ... },
      i18n: 'sv',
   },
};

const SelectPlugin = function (el, settings, TomSelect) {
   this.el = el;
   this.settings = settings;

   // Initialize
   this.el.classList.remove('env-form-input');
   let select = new TomSelect(this.el, this.settings);

   // API
   this.addOptions = select.addOption.bind(select);
   this.load = select.load.bind(select);
   this.getOption = select.getOption.bind(select);
   this.updateOption = select.updateOption.bind(select);
   this.removeOption = select.removeOption.bind(select);
   this.getItem = select.getItem.bind(select);
   this.addItem = select.addItem.bind(select);
   this.refreshOptions = select.refreshOptions.bind(select);
   this.getValue = select.getValue.bind(select);
   this.setValue = select.setValue.bind(select);
   this.lock = select.lock.bind(select);
   this.unlock = select.unlock.bind(select);
   this.disable = select.disable.bind(select);
   this.enable = select.enable.bind(select);
   this.destroy = function () {
      select.destroy();
      for (let key in this) {
         if (Object.prototype.hasOwnProperty.call(this, key)) {
            delete this[key];
         }
      }
      select = null;
   };
   // Locked is similar to readonly
   if (this.el.classList.contains('env-select--locked')) {
      this.el.classList.remove('env-select--locked');
      select.input.classList.remove('env-select--locked');
      this.lock();
   }
   if (this.el.classList.contains('env-select--disabled')) {
      this.el.classList.remove('env-select--disabled');
      select.input.classList.remove('env-select--disabled');
      this.disable();
   }
   return this;
};

const getSettings = (settings) => {
   // Remove unwanted settings
   settings = Util.normalizeOptions(settings, defaults.userConfig);

   // Merge user settings with envision and user defaults
   settings = Object.assign(
      {},
      defaults.staticConfig,
      defaults.userConfig,
      settings
   );

   if (!settings.clearButton) {
      // Custom option clearButton will activate
      // clear_button plugin. If set to false, remove
      // plugin from settings
      delete settings.plugins.clear_button;
   }

   // Must remove from settings to use HTML markup

   if (!settings.items) {
      delete settings.items;
   }
   if (!settings.placeholder) {
      delete settings.placeholder;
   }
   if (!settings.options) {
      delete settings.options;
   }

   // Handle language option
   // May be set to string 'sv', 'en' - use lang variable
   // or set to object with custom text.
   if (
      typeof settings.i18n === 'string' &&
      Object.prototype.hasOwnProperty.call(lang, settings.i18n)
   ) {
      settings.i18n = Object.assign({}, lang[settings.i18n]);
   } else if (Util.isPlainObject(settings.i18n)) {
      settings.i18n = Object.assign({}, lang['sv'], settings.i18n);
   } else {
      settings.i18n = Object.assign({}, lang['sv']);
   }

   // Translate plugin texts
   for (let name in settings.plugins) {
      if (settings.plugins[name].title && settings.i18n[name]) {
         settings.plugins[name].title = settings.i18n[name];
      }
   }

   return settings;
};

// Plugin / extension for envision library
export default async (elements, settings) => {
   const nodes = getNodes(elements);
   settings = getSettings(settings);

   if (nodes.length > 0) {
      const { default: TomSelect } = await import(
         /* webpackChunkName: "tom-select" */ 'tom-select'
      );
      const selects = nodes
         .filter((node) => !node.classList.contains('tomselected'))
         .map((node) => new SelectPlugin(node, settings, TomSelect));
      return selects;
   }
};
