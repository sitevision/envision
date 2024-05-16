---
title: Form
since: 2024.07.1
---

Form classes and markup has been updated in 2024.07.1.
[Deprecated legacy form classes and components can be found here](/deprecated/form/).

## Basics

Wrap the form in `.env-form`.

Each form field combination of text label and form control may optionally be wrapped in
`.env-form-field` for consistent spacing.
The form field wrapper may also contain a help text using `.env-form-field-help`.

```html
<form class="env-form" action="/">
   <div class="env-form-field">
      <label for="text-1" class="env-form-label">Input text</label>
      <input
         type="text"
         class="env-form-input"
         placeholder="Placeholder text"
         aria-describedby="text-1-help"
         id="text-1"
      />
      <p id="text-1-help" class="env-form-field-help">Form field help</p>
   </div>
   <button class="env-button env-button--primary">Submit</button>
</form>
```

### Form control container

The class `.env-form-control` creates a multi purpose container used to enhance single form controls.

It can only contain elements of the following types:

-  `.env-form-label`
-  `.env-form-input`
-  `.env-button`
-  `.env-icon`
-  `[aria-hidden="true"]`

#### Usages

Create an [input group](#input-group) with label, input and button with a combinations of
elements using `.env-form-input`, `.env-button` and `.env-form-label`.

```html
<div class="env-form-field">
   <label for="text-2" class="env-form-label">Phone number</label>
   <div class="env-form-control">
      <label for="text-2" class="env-form-label" aria-hidden="true">
         <svg class="env-icon env-icon--x-small">
            <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
         </svg>
      </label>
      <input
         type="tel"
         class="env-form-input"
         placeholder="+46 19 123 45 67"
         id="text-2"
      />
      <button class="env-button env-button--primary">Submit</button>
   </div>
</div>
```

[Option elements](#option-elements), such as radio buttons, checkboxes and switches in combination with a label
should use the wrapper for alignment and spacing.

Use the combination of `.env-radio`, `.env-checkbox` or `.env-switch` and `.env-form-label`.

```html
<div class="env-form-control">
   <input class="env-checkbox" type="checkbox" id="checkbox-1" checked />
   <label class="env-form-label" for="checkbox-1">Checkbox</label>
</div>
```

Add [icons](#input-icons) to input fields using the combination of `.env-form-input` and `.env-icon`.

```html
<div class="env-form-field">
   <label for="search-1" class="env-form-label">Search</label>
   <div class="env-form-control">
      <svg aria-hidden="true" class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-search"></use>
      </svg>
      <input
         type="search"
         class="env-form-input env-form-input--search"
         placeholder="Placeholder text"
         id="search-1"
      />
   </div>
</div>
```

For [contenteditable elements](#contenteditable), add a placeholder with a combination
of `.env-form-input[contenteditable="true"]` and `[aria-hidden="true"]`.

## Input elements

```html
<div class="env-form-field">
   <label for="text-3" class="env-form-label">Text input</label>
   <input
      type="text"
      class="env-form-input"
      placeholder="Placeholder text"
      id="text-3"
   />
</div>
```

### Search input element

Use `.env-form-input` and `[type="search"]` for search input elements.
Add modifier class `.env-form-input--search` to display a clear button.

```html
<div class="env-form-field">
   <label for="search-2" class="env-form-label">Search input</label>
   <input
      type="search"
      class="env-form-input env-form-input--search"
      placeholder="Placeholder text"
      id="search-2"
   />
</div>
```

### Textarea element

Use `.env-form-input` for a textarea element. Add `rows` attribute to specify the number of visible text lines.
The textarea will be resizable vertically.

```html
<div class="env-form-field">
   <label for="textarea-1" class="env-form-label">Textarea</label>
   <textarea
      class="env-form-input"
      placeholder="Placeholder text"
      id="textarea-1"
      rows="3"
   ></textarea>
</div>
```

<span id="contenteditable" class="offset-anchor"></span>

### Contenteditable element

Make sure to add `role="textbox"` and `aria-multiline="true"` to the contenteditable element.
The contenteditable element should also have `aria-label` or `aria-labelledby` attribute since a native label element
is not allowed.

An optional placeholder may be added using an element with attribute `aria-hidden="true"` inside the `.env-form-control` element.

```html
<div class="env-form-field">
   <div class="env-form-label" id="contenteditable-header">Contenteditable</div>
   <div class="env-form-control">
      <div
         role="textbox"
         class="env-form-input"
         aria-labelledby="contenteditable-header"
         aria-multiline="true"
         contenteditable
      ></div>
      <div aria-hidden="true">Placeholder text</div>
   </div>
</div>
```

### Select element

Native select element with class `.env-form-input`. Only light styling, might look different in different browsers.

```html
<div class="env-form-field">
   <label for="select-1" class="env-form-label">Select</label>
   <select class="env-form-input" id="select-1">
      <option>Item</option>
      <option>Item 2</option>
      <option>Item 3</option>
      <option>Item 4</option>
   </select>
</div>
<div class="env-form-field">
   <label for="multiple-select-1" class="env-form-label">Multiple select</label>
   <select class="env-form-input" id="multiple-select-1" multiple>
      <option>Item</option>
      <option>Item 2</option>
      <option>Item 3</option>
      <option>Item 4</option>
   </select>
</div>
```

<span id="select-component" class="offset-anchor"></span>

## Select component <span class="env-badge env-badge--info">2023.04.1</span>

A select element wrapped in an element with class `.env-form-select` will have the same appearance cross browsers.
Use an `.env-icon` for the arrow.

For more advanced usage, see [Single select documentation](/components/select/#single-select)

```html
<div class="env-form-field">
   <label for="select-2" class="env-form-label">Select</label>
   <div class="env-form-select">
      <select id="select-2">
         <option>Item</option>
         <option>Item 2</option>
         <option>Item 3</option>
         <option>Item 4</option>
      </select>
      <svg aria-hidden="true" class="env-icon">
         <use xlink:href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </div>
</div>
```

### Tag select component

See [Tag select documentation](../select/).

```html
<div class="env-form-field">
   <label for="tag-select-1" class="env-form-label"> Tag select </label>
   <select
      class="env-form-input example-tag-select"
      id="tag-select-1"
      aria-label="Tag select"
      multiple
   >
      <option value="">Select an item...</option>
      <option value="item1" selected>Item</option>
      <option value="item2">Item 2</option>
      <option value="item3">Item 3</option>
      <option value="item4">Item 4</option>
   </select>
</div>
```

<span id="option-elements" class="offset-anchor"></span>

## Option elements

### Radiobutton input element

Related radiobutton elements should be wrapped by a fieldset element to indicate group membership of the contained elements.

Use `.env-form-control` to wrap `.env-radio` and `.env-form-label.

```html
<fieldset class="env-form-fieldset">
   <legend class="env-form-legend">Radio button</legend>
   <div class="env-form-field">
      <div class="env-form-control">
         <input
            class="env-radio"
            type="radio"
            id="radio-1"
            name="radios"
            value="1"
            checked
         />
         <label class="env-form-label" for="radio-1">Alternative 1</label>
      </div>
   </div>
   <div class="env-form-field">
      <div class="env-form-control">
         <input
            class="env-radio"
            type="radio"
            id="radio-2"
            name="radios"
            value="2"
         />
         <label class="env-form-label" for="radio-2">Alternative 2</label>
      </div>
   </div>
</fieldset>
```

### Checkbox input element

Related checkbox elements should be wrapped by a fieldset element to indicate group membership of the contained elements.

Use `.env-form-control` to wrap `.env-checkbox` and `.env-form-label`.

```html
<fieldset class="env-form-fieldset">
   <legend class="env-form-legend">Checkbox</legend>
   <div class="env-form-field">
      <div class="env-form-control">
         <input
            class="env-checkbox"
            type="checkbox"
            id="checkbox-2"
            name="checkboxes"
            checked
         />
         <label class="env-form-label" for="checkbox-2">One option</label>
      </div>
   </div>
   <div class="env-form-field">
      <div class="env-form-control">
         <input
            class="env-checkbox"
            type="checkbox"
            id="checkbox-3"
            name="checkboxes"
         />
         <label class="env-form-label" for="checkbox-3">Another option</label>
      </div>
   </div>
</fieldset>
```

### Switch component

Use `.env-form-control` to wrap an `.env-switch` checkbox and `.env-form-label`.

```html
<div class="env-form-control">
   <input
      class="env-switch"
      type="checkbox"
      id="switch-1"
      name="switches"
      checked
   />
   <label class="env-form-label" for="switch-1">One option</label>
</div>
```

<div id="input-icons"></div>

## Icons in input fields

Use `.env-form-control` to wrap `.env-icon` and `.env-form-input`.

```html
<div class="example-input-fields">
   <div class="env-form-field">
      <label for="search-3" class="env-form-label"
         >Input search with cancel button + icon left</label
      >
      <div class="env-form-control">
         <svg aria-hidden="true" class="env-icon">
            <use xlink:href="/sitevision/envision-icons.svg#icon-search"></use>
         </svg>
         <input
            type="search"
            class="env-form-input env-form-input--search"
            placeholder="Placeholder text"
            id="search-3"
         />
      </div>
   </div>
   <div class="env-form-field">
      <label for="text-4" class="env-form-label">Input text + icon right</label>
      <div class="env-form-control">
         <input
            type="text"
            class="env-form-input"
            placeholder="Placeholder text"
            id="text-4"
         />
         <svg aria-hidden="true" class="env-icon">
            <use xlink:href="/sitevision/envision-icons.svg#icon-star"></use>
         </svg>
      </div>
   </div>
</div>
```

<span id="input-group" class="offset-anchor"></span>

## Input group

Wrap text, input and button with `.env-form-control` to create an input group.
Use `.env-form-control` to wrap `.env-checkbox` and `.env-form-label`.

```html
<div class="example-input-fields">
   <div class="env-form-field">
      <label for="email-1" class="env-form-label">Subscribe</label>
      <div class="env-form-control">
         <label for="email" class="env-form-label">@</label>
         <input
            type="email"
            class="env-form-input"
            placeholder="example@domain.com"
            id="email-1"
         />
         <button type="submit" class="env-button env-button--primary">
            Submit
         </button>
      </div>
   </div>
   <div class="env-form-field">
      <label for="search-4" class="env-form-label">Search</label>
      <div class="env-form-control">
         <input
            type="search"
            class="env-form-input env-form-input--search"
            placeholder="Search this site"
            id="search-4"
         />
         <button
            type="submit"
            class="env-button env-button--secondary env-button--icon"
         >
            Search
            <svg aria-hidden="true" class="env-icon">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-search"
               ></use>
            </svg>
         </button>
      </div>
   </div>
</div>
```

## Form layouts

The class `.env-form-row` creates a multi purpose container used to create form layouts. The class `.env-form-column-{n}` inside a row will control the sizing of the columns.

When using form layouts, generally the `.env-form-field` wrapper is not needed.

### Form columns

Use `.env-form-row` as a wrapper for multiple `.env-form-column-{n}` elements to place form fields horizontally.

Use `.env-form-column-{n}` to specify the width of an element relative to other elements on the row.
Valid values are `1-6`. Default is `1`.

Form fields may optionally be stacked below a certain container width. Use `.env-form-row--stack-{width}` to activate.
Valid values for `{width}` is `s`, `m` and `l`.

```html
<form class="env-form" action="/">
   <div class="env-form-row env-form-row--stack-m">
      <div class="env-form-column-1">
         <label for="text-5" class="env-form-label">First name</label>
         <input type="text" class="env-form-input" id="text-5" />
      </div>
      <div class="env-form-column-1">
         <label for="text-6" class="env-form-label">Last name</label>
         <input type="text" class="env-form-input" id="text-6" />
      </div>
   </div>
   <div class="env-form-row">
      <button type="submit" class="env-button env-button--primary">
         Submit
      </button>
   </div>
</form>
```

### Horizontal form field

Combine `.env-form-column-{n}` with `.env-form-label` and `.env-form-control` inside an `.env-form-row` element to place
label and control horizontally.

Use `.env-form-column-{n}` on the label or control element to specify the width of
label and control relative to each other. Valid values are `1-6`. Default is `1`.

Stacking is supported using `.env-form-row--stack-{width}`. Valid values for `{width}` is `s`, `m` and `l`.

```html
<form class="env-form" action="/">
   <div class="env-form-row env-form-row--stack-m">
      <label for="first-name" class="env-form-label env-form-column-1"
         >First name</label
      >
      <div class="env-form-control env-form-column-4">
         <input type="text" class="env-form-input" id="first-name" />
      </div>
   </div>
   <div class="env-form-row env-form-row--stack-m">
      <label for="last-name" class="env-form-label env-form-column-1"
         >Last name</label
      >
      <div class="env-form-control env-form-column-4">
         <input type="text" class="env-form-input" id="last-name" />
      </div>
   </div>
</form>
```

### Inline option elements

Use `.env-form-row` as a wrapper for multiple `.env-form-control` elements containing `.env-radio` or `.env-checkbox`
to create a inline form layout for option inputs with consistent spacing vetically and horizontally.

```html
<fieldset class="env-form-fieldset">
   <legend class="env-form-legend">Radio buttons inline</legend>
   <div class="env-form-row">
      <div class="env-form-control">
         <input
            class="env-radio"
            type="radio"
            id="radio-inline-1"
            name="inlineradios"
            value="1"
         />
         <label class="env-form-label" for="radio-inline-1"
            >Alternative 1</label
         >
      </div>
      <div class="env-form-control">
         <input
            class="env-radio"
            type="radio"
            id="radio-inline-2"
            name="inlineradios"
            value="2"
            checked
         />
         <label class="env-form-label" for="radio-inline-2"
            >Alternative 2</label
         >
      </div>
      <div class="env-form-control">
         <input
            class="env-radio"
            type="radio"
            id="radio-inline-3"
            name="inlineradios"
            value="2"
         />
         <label class="env-form-label" for="radio-inline-3"
            >Alternative 3</label
         >
      </div>
   </div>
</fieldset>
```

## States

### Disabled & Readonly

Attribute `[disabled]` may be placed on form elements or fieldset elements to disable the form control(s).
Attribute `[readonly]` is also available for input elements.

```html
<form class="env-form" action="/">
   <div class="env-form-field">
      <label for="text-disabled" class="env-form-label"
         >Disabled text input</label
      >
      <input
         type="text"
         class="env-form-input"
         id="text-disabled"
         placeholder="Disabled"
         disabled
      />
   </div>
   <div class="env-form-field">
      <div class="env-form-control">
         <input
            class="env-checkbox"
            type="checkbox"
            name="options"
            id="checkbox-disabled"
            checked
            disabled
         />
         <label for="checkbox-disabled" class="env-form-label">
            Disabled checkbox
         </label>
      </div>
   </div>
   <div class="env-form-field">
      <div class="env-form-control">
         <input
            id="radio-disabled-1"
            class="env-radio"
            type="radio"
            checked
            disabled
         />
         <label for="radio-disabled-1" class="env-form-label">
            Disabled radio button
         </label>
      </div>
   </div>
   <fieldset class="env-form-fieldset" disabled>
      <legend class="env-form-legend">Disabled radio button group</legend>
      <div class="env-form-field">
         <div class="env-form-control">
            <input id="radio-disabled-2" class="env-radio" type="radio" />
            <label for="radio-disabled-2" class="env-form-label">
               Disabled radio button group
            </label>
         </div>
      </div>
      <div class="env-form-field">
         <div class="env-form-control">
            <input
               id="radio-disabled-3"
               class="env-radio"
               type="radio"
               checked
            />
            <label for="radio-disabled-3" class="env-form-label">
               Disabled radio button group
            </label>
         </div>
      </div>
   </fieldset>
   <div class="env-form-field">
      <div class="env-form-control">
         <label for="switch-disabled" class="env-form-label">
            Disabled switch
         </label>
         <input
            class="env-switch"
            type="checkbox"
            name="options"
            id="switch-disabled"
            checked
            disabled
         />
      </div>
   </div>
   <div class="env-form-field">
      <label for="text-readonly" class="env-form-label"
         >Readonly text input</label
      >
      <input
         type="text"
         class="env-form-input"
         id="text-readonly"
         placeholder="Readonly"
         readonly
      />
   </div>
</form>
```

<span id="validation" class="offset-anchor"></span>

## Validation error

<span class="env-badge env-badge--info">2023.07.1</span>

Add modifier `.env-form-field--error` to define error validation state.
The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.

Error validation state uses the Status color [Error text](/utils/colors/#status-colors).

```html
<div class="env-form-field env-form-field--error">
   <label for="text-error" class="env-form-label">Error</label>
   <input
      type="text"
      class="env-form-input"
      id="text-error"
      aria-describedby="error-feedback"
   />
   <p id="error-feedback" class="env-form-field-help">Error feedback</p>
</div>
```
