---
title: Tag Select
---

## Tag Select

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

Initialize from script:

```javascript
var tagSelect = envision.select('#example-tag-select-1');
```

**Note:** `envision.select` will always return an array of Tag Select objects.
To access individual controls you will have to use it's array index.

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

-  `clearButton` _boolean_

   -  Show clear all button
   -  Default value: `false`

-  `placeholder` _'string'_

   -  Use a custom placeholder.
   -  Default: Will try to use option with empty value or placeholder attribute from HTML.

-  `data` _[{ value, text }]_

   -  Create a Tag select from custom dataset
   -  By default this is populated from the original element.

-  `items` _['value']_

   -  An array of the initial selected values.
   -  By default this is populated from the original element.

-  `onEventName`
   -  See Event handlers and Advanced example

## Advanced example

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
   create: true,
   clearButton: true,
   placeholder: 'Select or add tags...',
   items: ['fruit01'],
   data: [
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
      alert('Tag "' + value + '" was added.');
      console.log('Added:', value, data);
   },
});

document
   .getElementById('example-tag-select-2-add')
   .addEventListener('click', function () {
      var val = document.getElementById('example-tag-select-2-tag').value;
      advancedSelect[0].addOption({
         value: val,
         text: val,
      });
      advancedSelect[0].addItem(val);
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

## API functions

Instances of Tag Select may be controlled by the methods described below.

```javascript
var tagSelect = envision.select('#tag-select');
tagSelect[0].addOption({ value: 'test' });
tagSelect[0].addItem('test');
```

### Options

-  `addOptions(data)`

   -  Adds an available option, or array of options. If it already exists, nothing will happen. Note: this does not refresh the options list dropdown (use refreshOptions() for that).

-  `setOptions(data)`

   -  Clear all selected items and replace all options with new data.

-  `getOption(value)`

   -  Retrieves the dom element for the option identified by the given value.

-  `updateOption(value, data)`

   -  Updates an option available for selection. If it is visible in the selected items or options dropdown, it will be re-rendered automatically.

-  `removeOption(value)`

   -  Removes the option identified by the given value.

-  `refreshOptions(triggerDropdown)`
   -  Refreshes the list of available options shown in the autocomplete dropdown menu.

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
