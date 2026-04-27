/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

/**
 * @typedef {Object} SelectOption
 * @property {string} value
 * @property {string} text
 */

/**
 * @typedef {Object} SelectRenderFunctions
 * @property {(data: SelectOption, escape: (str: string) => string) => string} [item]
 * @property {(data: SelectOption, escape: (str: string) => string) => string} [option]
 * @property {(data: SelectOption, escape: (str: string) => string) => string} [option_create]
 * @property {(data: SelectOption, escape: (str: string) => string) => string} [no_results]
 * @property {(data: SelectOption, escape: (str: string) => string) => string} [loading]
 */

/**
 * @typedef {Object} SelectSortField
 * @property {string} field
 * @property {'asc' | 'desc'} [direction]
 */

/**
 * @typedef {Object} SelectConfig
 * @property {number | null} [maxItems] - The max number of items the user can select. Default: null (unlimited). Set to 1 for single select.
 * @property {boolean} [create] - Allow adding new tags. Default: false
 * @property {RegExp | string | ((input: string) => boolean)} [createFilter] - RegExp or function to validate new tags
 * @property {boolean} [clearButton] - Show clear all button. Default: true. Not available in single select.
 * @property {boolean} [allowEmptyOption] - Only available in single select. Option with no value will be selectable if true. Default: false
 * @property {string} [placeholder] - Custom placeholder text
 * @property {string} [dropdownParent] - The element the dropdown menu is appended to
 * @property {SelectOption[]} [options] - Create a Tag select from custom dataset
 * @property {number | null} [maxOptions] - Limits the number of visible options. Default: null (unlimited)
 * @property {string[]} [items] - An array of the initial selected values
 * @property {'sv' | 'en' | 'no' | { add?: string; no_results?: string; remove_button?: string; clear_button?: string }} [i18n] - Translation of UI elements
 * @property {(query: string, callback: (data?: SelectOption[]) => void) => void} [load] - Function to load options from remote source
 * @property {boolean | 'focus'} [preload] - If true, load function will be called on init. Can be 'focus' to call on focus.
 * @property {string} [labelField] - The property name to render as an option/item label
 * @property {string} [valueField] - The property name to use as the value
 * @property {string | string[]} [searchField] - Property name(s) to search when filtering
 * @property {string | SelectSortField[] | ((a: SelectOption, b: SelectOption) => number)} [sortField] - Sort configuration for options
 * @property {SelectRenderFunctions} [render] - Custom render functions
 * @property {() => void} [onInitialize] - Invoked once the control is completely initialized
 * @property {(value: string) => void} [onChange] - Invoked when the value of the control changes
 * @property {(value: string, item: HTMLElement) => void} [onItemAdd] - Invoked when an item is selected
 * @property {(value: string) => void} [onItemRemove] - Invoked when an item is deselected
 * @property {() => void} [onClear] - Invoked when the control is manually cleared
 * @property {(value: string, data: SelectOption) => void} [onOptionAdd] - Invoked when a new option is added
 * @property {(value: string) => void} [onOptionRemove] - Invoked when an option is removed
 * @property {() => void} [onOptionClear] - Invoked when all options are removed
 * @property {(dropdown: HTMLElement) => void} [onDropdownOpen] - Invoked when the dropdown opens
 * @property {(dropdown: HTMLElement) => void} [onDropdownClose] - Invoked when the dropdown closes
 * @property {(str: string) => void} [onType] - Invoked when the user types while filtering options
 * @property {() => void} [onFocus] - Invoked when the control gains focus
 * @property {() => void} [onBlur] - Invoked when the control loses focus
 * @property {() => void} [onLoad] - Invoked when new options have been loaded via the load option
 */

/**
 * @typedef {Object} SelectInstance
 * @property {HTMLElement} el - The original select/input element
 * @property {SelectConfig} settings - The configuration settings for this instance
 * @property {(data: SelectOption | SelectOption[]) => void} addOptions - Adds an available option or array of options
 * @property {(value: string) => HTMLElement | null} getOption - Retrieves the DOM element for the option identified by the given value
 * @property {(value: string, data: SelectOption) => void} updateOption - Updates an option available for selection
 * @property {(value: string) => void} removeOption - Removes the option identified by the given value
 * @property {(triggerDropdown?: boolean) => void} refreshOptions - Refreshes the list of available options
 * @property {(query: string) => void} load - Invoked when new options should be loaded from the server
 * @property {() => void} open - Shows the autocomplete dropdown
 * @property {() => void} close - Closes the autocomplete dropdown
 * @property {(silent?: boolean) => void} clear - Resets/clears all selected items
 * @property {(clearFilter?: boolean) => void} clearOptions - Removes all unselected options
 * @property {(value: string) => HTMLElement | null} getItem - Returns the DOM element of the item matching the given value
 * @property {(value: string, silent?: boolean) => void} addItem - Selects an item
 * @property {() => string | string[]} getValue - Returns the value of the control
 * @property {(value: string | string[], silent?: boolean) => void} setValue - Resets the selected items to the given value
 * @property {() => void} lock - Disables user input on the control (can still receive focus)
 * @property {() => void} unlock - Re-enables user input on the control
 * @property {() => void} disable - Disables user input on the control (cannot receive focus)
 * @property {() => void} enable - Re-enables the control
 * @property {() => void} destroy - Destroys the control and unbinds event listeners
 * @property {() => void} focus - Focuses the control
 * @property {() => void} blur - Blurs the control
 */

import Util from './util/util';
import { getNodes } from './util/nodes';

const NAME = 'envSelect';
const XML_NS = 'http://www.w3.org/2000/svg';
const XLINK_NS = 'http://www.w3.org/1999/xlink';

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
   no: {
      add: 'Legg til',
      remove_button: 'Fjern',
      clear_button: 'Fjern alt',
      no_results: 'Ingen resultater funnet',
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
      plugins: {
         caret_position: {},
         remove_button: {
            title: `${lang.sv.remove_button}`,
            className: 'env-select__item__remove',
         },
         clear_button: {
            title: `${lang.sv.clear_button}`,
            className: 'env-select__input__clear',
         },
      },
   },
   userConfig: {
      allowEmptyOption: false,
      valueField: 'value',
      labelField: 'text',
      searchField: ['text'],
      dropdownParent: null,
      maxItems: null,
      options: null,
      maxOptions: null,
      items: null,
      create: false,
      clearButton: true,
      placeholder: null,
      sortField: function (a, b) {
         const aText = this.items[a.id].text;
         const bText = this.items[b.id].text;
         return aText && bText ? aText.localeCompare(bText) : 0;
      },
      createFilter: function (input) {
         input = input.toLowerCase();
         return !(input in this.options);
      },
      preload: false,
      render: {
         option: function (data, escape) {
            return '<div>' + escape(data[this.settings.labelField]) + '</div>';
         },
         item: function (data, escape) {
            return '<div>' + escape(data[this.settings.labelField]) + '</div>';
         },
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

   select.control.classList.add('env-select__input');
   select.input.classList.add('env-assistive-text');

   if (this.settings.maxItems === 1) {
      // Add arrow down icon for single select.
      const svgEl = document.createElementNS(XML_NS, 'svg');
      const useEl = document.createElementNS(XML_NS, 'use');
      useEl.setAttributeNS(
         XLINK_NS,
         'href',
         '/sitevision/envision-icons.svg#icon-angle-down'
      );
      svgEl.appendChild(useEl);
      svgEl.classList.add('env-icon');
      select.wrapper.appendChild(svgEl);
   }

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
   this.open = select.open.bind(select);
   this.close = select.close.bind(select);
   this.clear = select.clear.bind(select);
   this.clearOptions = select.clearOptions.bind(select);
   this.clearFilter = select.clearFilter.bind(select);
   this.lock = function () {
      select.lock();
      if (select.input.tagName === 'SELECT') {
         select.input.disabled = true;
      }
      select.input.readOnly = true;
      select.control_input.readOnly = true;
   };
   this.unlock = function () {
      select.unlock();
      if (select.input.tagName === 'SELECT') {
         select.input.disabled = false;
      }
      select.input.readOnly = false;
      select.control_input.readOnly = false;
   };
   this.focus = select.focus.bind(select);
   this.blur = select.blur.bind(select);
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
   if (
      this.el.classList.contains('env-select--locked') ||
      this.el.getAttribute('readonly') !== null
   ) {
      select.control_input.classList.remove('env-select--locked');
      select.input.classList.remove('env-select--locked');
      this.lock();
   }
   return this;
};

const getSettings = (options, node) => {
   // Remove unwanted settings
   options = Util.normalizeOptions(options, defaults.userConfig);

   // Merge user settings with envision and user defaults
   let settings = Util.extend(
      true,
      {},
      defaults.staticConfig,
      defaults.userConfig,
      options
   );

   if (settings.maxItems === 1) {
      // Settings not allowed in Single select
      delete settings.plugins.clear_button;
      delete settings.plugins.remove_button;
   } else {
      // Setting only allowed for Single select
      delete settings.allowEmptyOption;
   }

   if (!settings.clearButton) {
      // Custom option clearButton will activate
      // clear_button plugin. If set to false, remove
      // plugin from settings
      delete settings.plugins.clear_button;
   }

   // Must remove from settings to use HTML markup

   ['items', 'placeholder', 'options'].forEach((prop) => {
      if (!settings[prop]) {
         delete settings[prop];
      }
   });

   // Handle language option
   // May be set to string 'sv', 'en' - use lang variable
   // or set to object with custom text.
   settings.i18n = Util.getLanguageOptions(settings?.i18n, lang, node);

   // Translate plugin texts
   for (let name in settings.plugins) {
      if (settings.plugins[name].title && settings.i18n[name]) {
         settings.plugins[name].title = settings.i18n[name];
      }
   }

   return settings;
};

/**
 * @param {string | HTMLElement | NodeList} elements - CSS selector, DOM node, or node list
 * @param {SelectConfig} [options] - Configuration options
 * @returns {Promise<SelectInstance[] | undefined>}
 */
export default async (elements, options) => {
   const nodes = getNodes(elements);
   if (nodes.length > 0) {
      const { default: TomSelect } = await import(
         /* webpackChunkName: "tom-select" */ 'tom-select'
      );
      return nodes.map((node) => {
         if (!node[NAME]) {
            node[NAME] = new SelectPlugin(
               node,
               getSettings(options, node),
               TomSelect
            );
         }
         return node[NAME];
      });
   }
};
