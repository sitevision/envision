---
title: Tag Select
---

Tag select is a JS alternative to `<select>` that allows you to create a nice looking multi-select with cross browser
styling. A [single select version](#single-select) is also available since Sitevision 2023.04.1.

Tag Select offers an API for creating interaction with the component.

## Configuration and initialization

By default, Tag select will use the HTML markup to generate the data.

```HTML

<div class="env-form-element">
   <label for="example-tag-select-1" class="env-form-element__label">Tag select</label>
   <div class="env-form-element__control">
      <select class="env-form-input" id="example-tag-select-1" aria-label="Tag select">
         <option value="">Select an item ...</option>
         <option value="item-1">Item</option>
         <option value="item-2">Item 2</option>
         <option value="item-3">Item 3</option>
         <option value="item-4">Item 4</option>
      </select>
   </div>
</div>
```

Initialize from script. You may pass any selector as a string, a DOM node or node list.

```javascript
var tagSelect = envision.select('#example-tag-select-1');
```

**Note:** `envision.select` will return a Promise. Use the instance method `.then()` to access individual controls.

```javascript
tagSelect.then(function (selects) {
   selects[0].addOptions({ value: 'newOption', text: 'New option' });
});
```

<span id="single-select" class="offset-anchor"></span>

## Single select <span class="doc-badge doc-badge--info">2023.04.1</span>

Create a Single select by using a Tag select and set `maxItems` to `1`.
Note: Clear and remove buttons will not be available in a single select.

Use `allowEmptyOption` and `sortField` as in second example below to make behaviour similar to native select element.

```HTML
<div class="env-form-element">
   <label for="example-tag-select-single-1" class="env-form-element__label">
      Tag select single
   </label>
   <div class="env-form-element__control">
      <select class="env-form-input" id="example-tag-select-single-1" aria-label="Tag select single">
         <option value="">Select an item ...</option>
         <option value="item-1">Item</option>
         <option value="item-3">Item 3</option>
         <option value="item-2">Item 2</option>
         <option value="item-4">Item 4</option>
      </select>
   </div>
</div>

<div class="env-form-element">
   <label for="example-tag-select-single-2" class="env-form-element__label">
      Tag select single - native-like behaviour
   </label>
   <div class="env-form-element__control">
      <select class="env-form-input" id="example-tag-select-single-2" aria-label="Tag select single - native-like behaviour">
         <option value="">Select an item ...</option>
         <option value="item-1">Item</option>
         <option value="item-3">Item 3</option>
         <option value="item-2">Item 2</option>
         <option value="item-4">Item 4</option>
      </select>
   </div>
</div>
```

```javascript
var singleSelectExample1 = envision.select('#example-tag-select-single-1', {
   maxItems: 1,
});

var singleSelectExample2 = envision.select('#example-tag-select-single-2', {
   maxItems: 1,
   allowEmptyOption: true,
   sortField: [{ field: '$order' }, { field: '$score' }],
});
```

## Options

-  `maxItems` _number_

   -  The max number of items the user can select.
   -  Default value: `null` (unlimited)
   -  Set to `1` to create a Single select.

-  `create` _boolean_

   -  Allow adding new tags
   -  Default value: `false`

-  `createFilter` _RegExp_ | _'string'_ | _function(input)_

   -  Specifies a RegExp or a string containing a regular expression that the current search filter must match to be allowed to be created. May also be a predicate function that takes the filter text and returns whether it is allowed.

-  `clearButton` _boolean_

   -  Show clear all button
   -  Default value: `true`
   -  Not available in Single select

-  `allowEmptyOption` _boolean_ <span class="doc-badge doc-badge--info">since Sitevision 2023.04.1</span>

   -  Only available in Single select
   -  Option with no value will be selectable if set to true.
   -  Default value: `false`

-  `placeholder` _'string'_

   -  Use a custom placeholder.
   -  Default: Will try to use option with empty value or placeholder attribute from HTML first.

-  `dropdownParent` _'string'_

   -  The element the dropdown menu is appended to.
   -  Default: Will be appended as a child of the control.

-  `options` _[{ value, text }]_

   -  Create a Tag select from custom dataset
   -  By default this is populated from the original element.

-  `maxOptions` _number_ <span class="doc-badge doc-badge--info">since Sitevision 2022.10.1</span>

   -  Limits the number of visible options
   -  Default value: `null` (unlimited)

-  `items` _['value']_

   -  An array of the initial selected values.
   -  By default this is populated from the original element.

-  `i18n` _'sv'_ | _'en'_ | _'no'_ | _{ add, no_results, remove_button, clear_button }_

   -  Translation of remove button, clear button, add item and no results.
      Use predefined strings (swedish, english or norwegian) or write your own translation. Default is 'sv'.

-  `load` _function(query, callback)_

   -  Loads options by invoking the provided function. The function should accept two arguments (query, callback)
      and should invoke the callback with the results once they are available.

-  `preload` _boolean_ | _'string'_

   -  If true, the load function will be called upon control initialization with an empty search. Alternatively it can be set to 'focus' to call the load function when control receives focus.

-  `labelField` _'string'_

   -  The name of the property to render as an option / item label when loading remote data.

-  `valueField` _'string'_

   -  The name of the property to use as the value when loading remote data.

-  `searchField` _'string'_ | _['string']_

   -  A string or an array of property names to analyze when filtering options in remote data.

-  `sortField` _'string'_ | _[object]_ | _function(a, b)_ <span class="doc-badge doc-badge--info">since Sitevision 2022.10.1</span>

   -  A string, an array of objects or a function to sort available options.
   -  By default the the order is based on the current locale.
   -  To disable sorting entirely and maintain the original order of options, use:
      `sortField:[{field:'$order'},{field:'$score'}]`

-  `render` _object_ <span class="doc-badge doc-badge--info">since Sitevision 2022.11.1</span>

   -  An object specifications for rendering.
   -  Available options:
      -  `item` _function(data, escape)_
      -  `option` _function(data, escape)_
      -  `option_create` _function(data, escape)_
      -  `no_results` _function(data, escape)_
      -  `loading` _function(data, escape)_
   -  The `escape` argument is a function that takes a string and escapes all special HTML characters. This is very important to use to prevent XSS vulnerabilities.

-  <code class="language-text">on<i>EventName</i></code> _function()_
   -  See Event handlers and Advanced example

## Advanced examples

### Options from JavaScript config

This example sets the options from the config. It will allow adding tags from the Tag Select itself, or from a separate input using the API.

```HTML
<div class="env-form-element">
   <label for="example-tag-select-2" class="env-form-element__label">Advanced select</label>
   <div class="env-form-element__control">
      <input class="env-form-input" id="example-tag-select-2" />
   </div>
</div>

<div class="env-form env-form--inline">
   <div class="env-form-element">
      <label for="country" class="env-form-element__label">Add tag using API</label>
      <div class="env-form-element__control">
         <input id="example-tag-select-2-tag" type="text" class="env-form-input" id="country" />
      </div>
   </div>
   <div class="env-form-element">
      <button id="example-tag-select-2-add" type="submit" class="env-button env-button--primary">
         Add
      </button>
   </div>
</div>
```

```javascript
envision
   .select('#example-tag-select-2', {
      maxItems: 5,
      placeholder: 'Select or add tags...',
      create: true, // Allow creating tags
      render: {
         item: (data, escape) =>
            `<div>
               <svg class="env-icon env-m-right--x-small"><use xlink:href="/sitevision/envision-icons.svg#icon-check-line"></use></svg>
               ${escape(data.text)}
            </div>`,
      },
      items: ['fruit01'], // Preselect one existing option
      options: [
         // Populate options
         {
            value: 'fruit01',
            text: 'Apple',
         },
         {
            value: 'fruit02',
            text: 'Banana',
         },
         {
            value: 'fruit03',
            text: 'Grapefruit',
         },
         {
            value: 'fruit04',
            text: 'Lemon',
         },
         {
            value: 'fruit05',
            text: 'Pear',
         },
      ],
      onOptionAdd: function (value, data) {
         // Event handler, runs when option is added
         console.log('Added:', value, data);
      },
   })
   .then((selects) => {
      document
         .getElementById('example-tag-select-2-add')
         .addEventListener('click', function () {
            var val = document.getElementById('example-tag-select-2-tag').value;
            selects[0].addOptions({
               value: val,
               text: val,
            });
            selects[0].addItem(val);
         });
   });
```

### Options from remote data API

This example fetches repository names from github. It will preload some popular names on page load.
The data does not follow the Tag Select naming standards so value-/label-/search-/sortField must be defined.

```HTML
<div class="env-form-element">
   <label for="example-tag-select-3" class="env-form-element__label">Remote data</label>
   <div class="env-form-element__control">
      <input class="env-form-input" id="example-tag-select-3" />
   </div>
</div>
```

```javascript
envision.select('#example-tag-select-3', {
   maxItems: 5,
   placeholder: 'Select a Github repository...',
   i18n: 'en',
   valueField: 'url',
   labelField: 'name',
   searchField: ['name'],
   sortField: [{ field: 'name', direction: 'desc' }],
   preload: true,
   load: function (query, callback) {
      query = query || 'sitevision';
      var url =
         'https://api.github.com/search/repositories?q=' +
         encodeURIComponent(query);
      fetch(url)
         .then((response) => response.json())
         .then((json) => {
            callback(json.items);
         })
         .catch(() => {
            callback();
         });
   },
});
```

## States

### Disabled

A Tag Select may be disabled by adding the `disabled` attribute in the HTML.
When disabled, the control can not receive focus.

```html
<div class="env-form-element">
   <label for="example-tag-select-4" class="env-form-element__label">
      Disabled
   </label>
   <div class="env-form-element__control">
      <select
         class="env-form-input example-tag-select"
         id="example-tag-select-4"
         aria-label="Disabled"
         multiple
         disabled
      >
         <option value="">Select an item...</option>
         <option value="item1" selected>Item</option>
         <option value="item2">Item 2</option>
      </select>
   </div>
</div>
```

### Locked

A Tag Select may be locked by adding the class `env-select--locked` to the `<input>` or `<select>`,
or by using functions described in the API section.

Locked disables user input on the control, but the control can still receive focus.

_Note: The `readonly` attribute is not supported or relevant to the Tag Select component. An input with the `readonly` attribute will be locked._

```html
<div class="env-form-element">
   <label for="example-tag-select-6" class="env-form-element__label">
      Locked
   </label>
   <div class="env-form-element__control">
      <select
         class="env-select--locked env-form-input example-tag-select"
         id="example-tag-select-6"
         aria-label="Locked"
         multiple
      >
         <option value="">Select an item...</option>
         <option value="item1" selected>Item</option>
         <option value="item2">Item 2</option>
      </select>
   </div>
</div>

<div class="env-form-element">
   <label for="example-tag-select-5" class="env-form-element__label">
      Locked (readonly)
   </label>
   <div class="env-form-element__control">
      <input
         class="example-tag-select env-form-input"
         id="example-tag-select-5"
         value="Item"
         placeholder="Select an item..."
         readonly
      />
   </div>
</div>
```

## Event handlers

-  `onInitialize` _function() { ... }_

   -  Invoked once the control is completely initialized.

-  `onChange` _function(value) { ... }_

   -  Invoked when the value of the control changes.

-  `onItemAdd` _function(value, $item) { ... }_

   -  Invoked when an item is selected.

-  `onItemRemove` _function(value) { ... }_

   -  Invoked when an item is deselected.

-  `onClear` _function() { ... }_

   -  Invoked when the control is manually cleared via the clear() method.

-  `onOptionAdd` _function(value, data) { ... }_

   -  Invoked when a new option is added to the available options list.

-  `onOptionRemove` _function(value) { ... }_

   -  Invoked when an option is removed from the available options.

-  `onOptionClear` _function() { ... }_

   -  Invoked when all options are removed from the control.

-  `onDropdownOpen` _function(dropdown) { ... }_

   -  Invoked when the dropdown opens.

-  `onDropdownClose` _function(dropdown) { ... }_

   -  Invoked when the dropdown closes.

-  `onType` _function(str) { ... }_

   -  Invoked when the user types while filtering options.

-  `onFocus` _function() { ... }_

   -  Invoked when the control gains focus.

-  `onBlur` _function() { ... }_

   -  Invoked when the control loses focus.

-  `onLoad` _function() { ... }_
   -  Invoked when new options have been loaded and added to the control via the load option.

## API functions

Instances of Tag Select may be controlled by the methods described below.

```javascript
envision.select('#tag-select').then(function (selects) {
   selects[0].addOptions({ value: 'test' });
   selects[0].addItem('test');
});
```

### Options

-  `addOptions(data)`

   -  Adds an available option, or array of options. If it already exists, nothing will happen. Note: this does not refresh the options list dropdown (use refreshOptions() for that).

-  `getOption(value)`

   -  Retrieves the dom element for the option identified by the given value.

-  `updateOption(value, data)`

   -  Updates an option available for selection. If it is visible in the selected items or options dropdown, it will be re-rendered automatically.

-  `removeOption(value)`

   -  Removes the option identified by the given value.

-  `refreshOptions(triggerDropdown)`

   -  Refreshes the list of available options shown in the autocomplete dropdown menu.

-  `load(query)`

   -  Invoked when new options should be loaded from the server. Called with the current query string.

-  `open()` <span class="doc-badge doc-badge--info">since Sitevision 2022.11.1</span>

   -  Shows the autocomplete dropdown containing the available options.

-  `close()` <span class="doc-badge doc-badge--info">since Sitevision 2022.11.1</span>

   -  Closes the autocomplete dropdown menu.

-  `clear(silent)` <span class="doc-badge doc-badge--info">since Sitevision 2022.11.1</span>

   -  Resets / clears all selected items from the control. If `silent` is truthy, no change event will be fired on the original input.

-  `clearOptions(clearFilter?)` <span class="doc-badge doc-badge--info">since Sitevision 2022.11.1</span>

   -  Removes all unselected options from the control. To clear selection options, call clear() before calling clearOptions().

-  `clearFilter(option, value)` <span class="doc-badge doc-badge--info">since Sitevision 2022.11.1</span>

   -  Callback used by clearOptions() to decide whether or not an option should be removed. Return true to keep an option, false to remove

### Items

-  `getItem(value)`

   -  Returns the dom element of the item matching the given value.

-  `addItem(value, silent)`
   -  "Selects" an item. Adds it to the list at the current caret position. If silent is truthy, no change event will be fired on the original input.

### Other

-  `getValue()`

   -  Returns the value of the control. If multiple items can be selected with a "select" input tag (e.g. `<select multiple>`), this returns an array. Otherwise, returns a string (separated by delimiter if "multiple").

-  `setValue(value, silent)`

   -  Resets the selected items to the given value.

-  `lock()`

   -  Disables user input on the control. The control can still receive focus.

-  `unlock()`

   -  Re-enables user input on the control.

-  `disable()`

   -  Disables user input on the control. The control can not receive focus.

-  `enable()`

   -  Re-enables the control.

-  `destroy()`

   -  Destroys the control and unbinds event listeners so that it can be garbage collected.

-  `focus()` <span class="doc-badge doc-badge--info">since Sitevision 2023.01.1</span>

   -  Focuses the control.

-  `blur()` <span class="doc-badge doc-badge--info">since Sitevision 2023.01.1</span>

   -  Blurs the control.
