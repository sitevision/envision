---
title: Form elements
description: Form elements structures user inputs with labels, controls, and consistent spacing.
since: 2024.07.1
---

Form classes and markup was updated in 2024.07.1.

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
            <use href="/sitevision/envision-icons.svg#icon-phone"></use>
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
         <use href="/sitevision/envision-icons.svg#icon-search"></use>
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

An optional placeholder may be added using attribute `aria-placeholder` on the contenteditable element.

```html
<div class="env-form-field">
   <div class="env-form-label" id="contenteditable-header">Contenteditable</div>
   <div class="env-form-control">
      <div
         role="textbox"
         class="env-form-input"
         aria-labelledby="contenteditable-header"
         aria-multiline="true"
         aria-placeholder="Placeholder text"
         contenteditable
      ></div>
   </div>
</div>
```

## Select element and component

**Updated in 2025.05.1.**
With the introduction of [Customizable select elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select),
both the Select element and the Select component will use a progressively enhanced approach to use
as much of Envision styling as possible while still keeping the native select element functionality.

<span id="select-component" class="offset-anchor"></span>

### Select component

A `<select>` element wrapped in an element with the class `.env-form-select` will have the
most consistent appearance across browsers. The dropdown arrow uses the `.env-icon` class and can
be customized.

```html
<div class="env-form-field">
   <label for="select-1" class="env-form-label">Select</label>
   <div class="env-form-select">
      <select id="select-1">
         <option>Item</option>
         <option>Item 2</option>
         <option>Item 3</option>
         <option>Item 4</option>
      </select>
      <svg aria-hidden="true" class="env-icon">
         <use href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </div>
</div>
```

### Select component — Customizable <span class="doc-badge doc-badge--info">2025.05.1</span>

If the browser does support customizable select elements, the picker will use fonts and colors from
the theme. Options may also have icons. Should you want to use icons, the `.env-icon` class should be used.
The icon may also be displayed in the selected option if a `button` element is added as a first child and a
`selectedcontent` element is added inside the `button`.

```html
<div class="env-form-field">
   <label for="select-2" class="env-form-label">Customizable select</label>
   <div class="env-form-select">
      <select id="select-2">
         <button>
            <selectedcontent></selectedcontent>
         </button>
         <option>
            <svg class="env-icon" aria-hidden="true">
               <use href="/sitevision/envision-icons.svg#icon-file"></use>
            </svg>
            Option 1
         </option>
         <option>
            <svg class="env-icon" aria-hidden="true">
               <use href="/sitevision/envision-icons.svg#icon-files"></use>
            </svg>
            Option 2
         </option>
         <option>
            <svg class="env-icon" aria-hidden="true">
               <use href="/sitevision/envision-icons.svg#icon-image"></use>
            </svg>
            Option 3
         </option>
         <option>
            <svg class="env-icon" aria-hidden="true">
               <use href="/sitevision/envision-icons.svg#icon-images"></use>
            </svg>
            Option 4
         </option>
      </select>
      <svg aria-hidden="true" class="env-icon">
         <use href="/sitevision/envision-icons.svg#icon-angle-down"></use>
      </svg>
   </div>
</div>
```

### Select element

Native select element with class `.env-form-input`. Only light styling, might look different in different browsers.

```html
<div class="env-form-field">
   <label for="select-3" class="env-form-label">Select</label>
   <select class="env-form-input" id="select-3">
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
            <use href="/sitevision/envision-icons.svg#icon-search"></use>
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
            <use href="/sitevision/envision-icons.svg#icon-star"></use>
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
         <label for="email-1" class="env-form-label">@</label>
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
               <use href="/sitevision/envision-icons.svg#icon-search"></use>
            </svg>
         </button>
      </div>
   </div>
</div>
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

Add modifier `.env-form-field--error` to define error validation state.
The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.

Error validation state uses the Status color [Error text](/colors/status-colors/).

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

## Deprecated

[Deprecated legacy form classes and components can be found here](/deprecated/form/).
