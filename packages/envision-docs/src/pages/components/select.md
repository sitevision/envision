---
title: Tag Select
---

<span class="env-badge env-badge--info">Added in 9.1</span>

Tag select is a JS alternative to `<select>` that allows you to create a nice looking multi-select with cross browser
styling. Tag Select offers an API for creating interacting with the component.

## Configuration and initialization

By default, Tag select will use the HTML markup to generate the data.

```HTML

<div class="env-form-element">
   <label for="example-tag-select-1" class="env-form-element__label">Tag select</label>
   <div class="env-form-element__control">
      <select class="env-form-input" id="example-tag-select-1">
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

**Note:** `envision.select` will always return an array of Tag Select objects.
To access individual controls you must use its array index.

```javascript
tagSelect[0].addOptions({ value: 'newOption', text: 'New option' });
```

## Options

-  `maxItems` _number_
   -  The max number of items the user can select.
   -  Default value: `null` (unlimited)
-  `create` _boolean_

   -  Allow adding new tags
   -  Default value: `false`

-  `createFilter` _RegExp_ | _'string' _ | _function(input)_

   -  Specifies a RegExp or a string containing a regular expression that the current search filter must match to be allowed to be created. May also be a predicate function that takes the filter text and returns whether it is allowed.

-  `clearButton` _boolean_

   -  Show clear all button
   -  Default value: `true`

-  `placeholder` _'string'_

   -  Use a custom placeholder.
   -  Default: Will try to use option with empty value or placeholder attribute from HTML.

-  `options` _[{ value, text }]_

   -  Create a Tag select from custom dataset
   -  By default this is populated from the original element.

-  `items` _['value']_

   -  An array of the initial selected values.
   -  By default this is populated from the original element.

-  `i18n` _'sv'_ | _'en'_ | _{ add, no_results, remove_button, clear_button }_

   -  Translation of remove button, clear button, add item and no results.
      Use predefined strings for swedish or english or write your own translation.

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
var advancedSelect = envision.select('#example-tag-select-2', {
   maxItems: 5,
   placeholder: 'Select or add tags...',
   create: true, // Allow creating tags
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
});

document
   .getElementById('example-tag-select-2-add')
   .addEventListener('click', function () {
      var val = document.getElementById('example-tag-select-2-tag').value;
      advancedSelect[0].addOptions({
         value: val,
         text: val,
      });
      advancedSelect[0].addItem(val);
   });
```

### Options from remote data API

This example fetches repository names from github. It will preload some popular names on page load.
The data does not follow the Tag Select naming standards so value-/label-/searchField must be defined.

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
var tagSelect = envision.select('#tag-select');
tagSelect[0].addOptions({ value: 'test' });
tagSelect[0].addItem('test');
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

-  `destroy()`
   -  Destroys the control and unbinds event listeners so that it can be garbage collected.
