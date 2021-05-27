/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import TomSelect from 'tom-select';
import Util from './util/util';
import { getNodes } from './util/nodes';

const defaultSettings = {
      wrapperClass: 'env-select',
      inputClass: 'env-select__input',
      dropdownClass: 'env-select__dropdown',
      dropdownContentClass: 'env-select__dropdown__content',
      itemClass: 'env-select__item',
      optionClass: 'env-select__dropdown__option',
      plugins: {},
      render: {},
      sortField: {
         field: 'text',
         direction: 'asc',
      },
   },
   defaultPlugins = {
      remove_button: {
         title: 'Ta bort val',
         className: 'env-select__item__remove',
      },
      clear_button: {
         title: 'Ta bort alla val',
         className: 'env-select__input__clear',
      },
   },
   defaultRender = {
      option_create: function (data, escape) {
         return (
            '<div class="create">Lägg till <strong>' +
            escape(data.input) +
            '</strong>&hellip;</div>'
         );
      },
      no_results: function () {
         return '<div class="no-results">Inga val matchar sökning</div>';
      },
   },
   defaults = {
      maxItems: null,
      create: false,
      createFilter: function (input) {
         input = input.toLowerCase();
         return !(input in this.options);
      },
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
      onBlur: null, // function(str) { ... }
   };

// Plugin / extension for envision library
export default (elements, options) => {
   const SelectPlugin = function (el, options) {
      this.el = el;

      // Get Envision default settings
      this.settings = Object.assign({}, defaultSettings);
      this.settings.plugins = Object.assign({}, defaultPlugins);
      this.settings.render = Object.assign({}, defaultRender);

      // Handle any Envision specific custom options
      if (!options || !options.clearButton) {
         // Custom option clearButton will activate
         // clear_button plugin. If not set, remove
         // plugin from settings
         delete this.settings.plugins.clear_button;
      }
      if (options && options.data) {
         this.settings.options = JSON.parse(JSON.stringify(options.data));
      }
      if (options && options.items) {
         this.settings.items = options.items;
      }
      if (options && options.placeholder) {
         // Can't have placeholder in defaults
         // - overrides HTML placeholder
         this.settings.placeholder = options.placeholder;
      }

      // Then clean out any other options that we don't support
      // All options passed must be part of defaults if they're
      // not "custom".
      options = Util.cleanOptions(options, defaults);

      // Then handle markup attributes
      if (!options.maxItems) {
         if (
            (this.el.tagName.toUpperCase() === 'SELECT' &&
               this.el.getAttribute('multiple')) ||
            (this.el.tagName.toUpperCase() === 'INPUT' &&
               this.el.value &&
               this.el.value.indexOf(',') >= 0)
         ) {
            options.maxItems = null;
         }
      }

      // Finally, merge options, defaults and settings
      this.settings = Object.assign({}, this.settings, defaults, options);

      this.el.classList.remove('env-form-input');

      let select = new TomSelect(this.el, this.settings);

      // API
      this.addOption = function (data) {
         select.addOption(data);
      };

      this.getOption = function (value) {
         return select.getOption(value);
      };

      this.updateOption = function (value, data) {
         select.removeOption(value, data);
      };

      this.removeOption = function (value) {
         select.removeOption(value);
      };

      this.getItem = function (value) {
         return select.getItem(value);
      };

      this.addItem = function (value, silent) {
         select.addItem(value, silent);
      };

      this.refreshOptions = function (triggerDropdown) {
         select.refreshOptions(triggerDropdown);
      };

      this.getValue = function () {
         return select.getValue();
      };

      this.setValue = function (value, silent) {
         select.setValue(value, silent);
      };

      return this;
   };

   const nodes = getNodes(elements);

   if (nodes.length > 0) {
      const selects = nodes
         .filter((node) => !node.classList.contains('tomselected'))
         .map((node) => new SelectPlugin(node, options));

      return selects;
   }
};
