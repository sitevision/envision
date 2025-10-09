---
title: Form layout
description: Form Layout offers structured classes for creating accessible, consistent, and responsive form layouts.
since: 2024.07.1
new: true
---

The class `.env-form-row` creates a multi purpose container used to create form layouts. The class `.env-form-column-{n}` inside a row will control the sizing of the columns.

When using form layouts, generally the `.env-form-field` wrapper is not needed.

### Form columns

Use `.env-form-row` as a wrapper for multiple `.env-form-column-{n}` elements to place form fields horizontally.

Use `.env-form-column-{n}` to specify the width of an element relative to other elements on the row.
Valid values are `1-6`. Default is `1`.

Form fields may optionally be stacked below a certain container width. Use `.env-form-row--stack-{width}` to activate.
Valid values for `{width}` is `s`, `m` and `l`.

```html resizeable
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

```html resizeable
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

```html resizeable
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
