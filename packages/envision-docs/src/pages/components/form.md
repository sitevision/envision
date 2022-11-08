---
title: Form
---

## Text input element

```html
<label for="text-1" class="env-form-element__label">Input text</label>
<div class="env-form-element__control">
   <input
      type="text"
      class="env-form-input"
      placeholder="Placeholder text"
      id="text-1"
   />
</div>
```

### Search input element

```html
<div class="env-form-element">
   <label for="search1" class="env-form-element__label">Input search</label>
   <div class="env-form-element__control">
      <input
         type="search"
         class="env-form-input"
         placeholder="Placeholder text"
         id="search1"
      />
   </div>
</div>
<div class="env-form-element">
   <label for="search2" class="env-form-element__label"
      >Input search with cancel button</label
   >
   <div class="env-form-element__control">
      <input
         type="search"
         class="env-form-input env-form-input--search"
         placeholder="Placeholder text"
         id="search2"
      />
   </div>
</div>
```

## Textarea element

```html
<label for="textarea" class="env-form-element__label">Textarea</label>
<div class="env-form-element__control">
   <textarea
      class="env-form-input"
      placeholder="Placeholder text"
      id="textarea"
      rows="3"
   ></textarea>
</div>
```

### Contenteditable element <span class="env-badge env-badge--info">8.2</span>

```html
<div class="env-form-element__label" id="contenteditable-header">
   Contenteditable
</div>
<div class="env-form-element__control">
   <div
      class="env-form-input"
      aria-labelledby="contenteditable-header"
      contenteditable
   ></div>
   <div class="env-form-element__contenteditable-placeholder">
      Placeholder text
   </div>
</div>
```

## Select element

```html
<div class="env-form-element">
   <label for="select" class="env-form-element__label">Select</label>
   <div class="env-form-element__control">
      <select class="env-form-input" id="select">
         <option>Item</option>
         <option>Item 2</option>
         <option>Item 3</option>
         <option>Item 4</option>
      </select>
   </div>
</div>
<div class="env-form-element">
   <label for="multiple-select" class="env-form-element__label"
      >Multiple select</label
   >
   <div class="env-form-element__control env-form-multiple-select">
      <select class="env-form-input" id="multiple-select" multiple>
         <option>Item</option>
         <option>Item 2</option>
         <option>Item 3</option>
         <option>Item 4</option>
      </select>
   </div>
</div>
```

### Tag select component <span class="env-badge env-badge--info">9.1</span>

See [Tag select documentation](../select/).

```html
<label for="tag-select" class="env-form-element__label"> Tag select </label>
<div class="env-form-element__control">
   <select class="env-form-input example-tag-select" id="tag-select" multiple>
      <option value="">Select an item...</option>
      <option value="item1" selected>Item</option>
      <option value="item2">Item 2</option>
      <option value="item3">Item 3</option>
      <option value="item4">Item 4</option>
   </select>
</div>
```

## Radiobutton input element <small class="env-badge env-badge--info">10.0</small>

Related radiobutton elements should be wrapped by a fieldset element to indicate group membership of the contained elements.

```html
<fieldset class="env-form-element__control">
   <legend class="env-form-element__label">Radio button</legend>
   <div>
      <label class="env-radio">
         <input type="radio" name="radios" value="1" checked />
         Alternative 1
      </label>
   </div>
   <div>
      <label class="env-radio">
         <input type="radio" name="radios" value="2" />
         Alternative 2
      </label>
   </div>
</fieldset>
```

## Checkbox input element

```html
<fieldset class="env-form-element__control">
   <legend class="env-form-element__label">Checkbox</legend>
   <div class="env-checkbox">
      <input type="checkbox" checked name="options" id="cb1" />
      <label class="env-form-element__label" for="cb1">
         <span class="env-checkbox__fake"></span>
         <span class="env-checkbox__label">Checked</span>
      </label>
   </div>
   <div class="env-checkbox">
      <input type="checkbox" name="options" id="cb2" />
      <label class="env-form-element__label" for="cb2">
         <span class="env-checkbox__fake"></span>
         <span class="env-checkbox__label">Check</span>
      </label>
   </div>
</fieldset>
```

### Switch component <span class="env-badge env-badge--info">8.2</span>

```html
<fieldset class="env-form-element__control">
   <legend class="env-form-element__label">Switch</legend>
   <div class="env-switch">
      <label class="env-switch__label">
         <input type="checkbox" checked />
         <span class="env-switch__text">On</span>
         <span class="env-switch__slider"></span>
      </label>
   </div>
   <div class="env-switch">
      <label class="env-switch__label">
         <input type="checkbox" />
         <span class="env-switch__text">Off</span>
         <span class="env-switch__slider"></span>
      </label>
   </div>
</fieldset>
```

<div id="input-icons"></div>

## Icons in input fields <span class="env-badge env-badge--info">8.2</span>

```html
<div class="example-input-fields">
   <div class="env-form-element">
      <label for="search3" class="env-form-element__label"
         >Input search with cancel button + icon left</label
      >
      <div class="env-form-element__control env-form-element__control--icon">
         <svg class="env-icon">
            <use xlink:href="/sitevision/envision-icons.svg#icon-search"></use>
         </svg>
         <input
            type="search"
            class="env-form-input env-form-input--search"
            placeholder="Placeholder text"
            id="search3"
         />
      </div>
   </div>

   <div class="env-form-element">
      <label for="text-2" class="env-form-element__label"
         >Input text + icon right</label
      >
      <div class="env-form-element__control env-form-element__control--icon">
         <input
            type="text"
            class="env-form-input"
            placeholder="Placeholder text"
            id="text-2"
         />
         <svg class="env-icon">
            <use xlink:href="/sitevision/envision-icons.svg#icon-star"></use>
         </svg>
      </div>
   </div>
</div>
```

## Input group <span class="env-badge env-badge--info">9.1</span>

Join text, input and button with `env-form-input-group`.

```html
<div class="example-input-fields">
   <div class="env-form-element">
      <label for="email" class="env-form-element__label">Subscribe</label>
      <div class="env-form-element__control env-form-input-group">
         <label for="email" class="env-form-input-group__label">@</label>
         <input
            type="email"
            class="env-form-input"
            placeholder="example@domain.com"
            id="email"
         />
         <button type="submit" class="env-button">Submit</button>
      </div>
   </div>
   <div class="env-form-element">
      <label for="search4" class="env-form-element__label">Search</label>
      <div class="env-form-element__control env-form-input-group">
         <input
            type="search"
            class="env-form-input env-form-input--search"
            placeholder="Search this site"
            id="search4"
         />
         <button
            type="submit"
            class="env-button env-button--primary env-button--ghost"
         >
            Go!
         </button>
      </div>
   </div>
</div>
```

## Form layouts

### Common elements

#### .env-form

By itself the class is only a wrapper that sets the text-size-adjust property to control the text inflation
for some smartphones and tablets.

May be used with modifiers <small>`.env-form--horizontal`</small> and <small>`.env-form--inline`</small> for
variations in form layout.

#### .env-form\_\_row

Wrap <small>`env-form-element`</small> in <small>`env-form__row`</small> to place them horizontally.

#### .env-form-element

Generic form input wrapper that sets spacing between elements.

#### .env-form-element\_\_label

Generic label class to set style and spacing for input labels.

#### .env-form-element\_\_control

Wrapper for form elements.
Required for inputs with [icons](#input-icons) and a few other cases.

```html
<form class="env-form" action="/">
   <div class="env-form__row">
      <div class="env-form-element">
         <label for="form-input-1" class="env-form-element__label"
            >Text input</label
         >
         <div class="env-form-element__control">
            <input type="text" class="env-form-input" id="form-input-1" />
         </div>
      </div>
      <div class="env-form-element">
         <label for="form-input-2" class="env-form-element__label"
            >Text input w. icon</label
         >
         <div class="env-form-element__control env-form-element__control--icon">
            <input type="text" class="env-form-input" id="form-input-2" />
            <svg class="env-icon">
               <use xlink:href="/sitevision/envision-icons.svg#icon-star"></use>
            </svg>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">
         Submit
      </button>
   </div>
</form>
```

### Horizontal

To create a horizontal form (horizontally align labels with input), apply modifier `.env-form--horizontal` to the form
wrapper. The label of the element takes up 20% of the width and the `.env-form-element__control` uses the remaining
width.

```html
<form class="env-form env-form--horizontal" action="/">
   <div class="env-form-element">
      <label for="first-name" class="env-form-element__label">First name</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="first-name" />
      </div>
   </div>
   <div class="env-form-element">
      <label for="last-name" class="env-form-element__label">Last name</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="last-name" />
      </div>
   </div>
   <div class="env-form-element">
      <fieldset class="env-form-element__control">
         <legend class="env-form-element__label">Subjects</legend>
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb5" />
            <label class="env-form-element__label" for="cb5">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Subject 1</span>
            </label>
         </div>
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb6" />
            <label class="env-form-element__label" for="cb6">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Subject 2</span>
            </label>
         </div>
      </fieldset>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">
         Submit
      </button>
   </div>
</form>
```

### Inline

Apply modifier `.env-form--inline` to the form wrapper to display elements inline.

```html
<form class="env-form env-form--inline" action="/">
   <div class="env-form-element">
      <label for="country" class="env-form-element__label">Country</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="country" />
      </div>
   </div>
   <div class="env-form-element">
      <label for="city" class="env-form-element__label">City</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="city" />
      </div>
   </div>
   <div class="env-form-element">
      <div class="env-form-element__control">
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb8" />
            <label class="env-form-element__label" for="cb8">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Remember me</span>
            </label>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">
         Submit
      </button>
   </div>
</form>
```

### Hybrid

To position multiple elements on a row, wrap target elements (`.env-form-element`) with a `.env-form__row` container.
Use modifer `.env-form-element--*` to specify the length of an element, relative to other elements on the row. Valid
values `1-6`. Default is `1`

```html
<form class="env-form" action="/">
   <div class="env-form__row">
      <div class="env-form-element">
         <label for="username" class="env-form-element__label">Username</label>
         <div class="env-form-element__control">
            <input type="text" class="env-form-input" id="username" />
         </div>
      </div>
      <div class="env-form-element">
         <label for="full-name" class="env-form-element__label"
            >Full name</label
         >
         <div class="env-form-element__control">
            <input type="text" class="env-form-input" id="full-name" />
         </div>
      </div>
   </div>
   <div class="env-form__row">
      <div class="env-form-element env-form-element--2">
         <label for="address" class="env-form-element__label">Address</label>
         <div class="env-form-element__control">
            <input type="text" class="env-form-input" id="address" />
         </div>
      </div>
      <div class="env-form-element">
         <label for="contact-tel" class="env-form-element__label"
            >Telephone</label
         >
         <div class="env-form-element__control">
            <input type="tel" class="env-form-input" id="contact-tel" />
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <label for="other" class="env-form-element__label">Other</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="other" />
      </div>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">
         Submit
      </button>
   </div>
</form>
```

## Help text

Use `.env-form-element__help` for help texts associated with a form element. The `aria-describedby` attribute should be
used to reference the `ID` of the text that describes the element.

```html
<label for="password" class="env-form-element__label">Password</label>
<div class="env-form-element__control">
   <input
      type="password"
      class="env-form-input"
      id="password"
      aria-describedby="password-help"
   />
</div>
<span id="password-help" class="env-form-element__help"
   >Enter a secure password</span
>
```

## States

For disabled legacy radio buttons, apply modifier `.env-radio--disabled` to its wrapper for a muted label.

```html
<div class="env-form-element">
   <label for="disabled" class="env-form-element__label"
      >Disabled text input</label
   >
   <div class="env-form-element__control">
      <input
         type="text"
         class="env-form-input"
         id="disabled"
         placeholder="Disabled"
         disabled
      />
   </div>
</div>
<div class="env-form-element">
   <label for="disabled-select" class="env-form-element__label"
      >Disabled select</label
   >
   <div class="env-form-element__control">
      <select class="env-form-input" id="disabled-select" disabled>
         <option>Disabled</option>
      </select>
   </div>
</div>
<div class="env-form-element">
   <div class="env-form-element__control">
      <div class="env-checkbox env-checkbox--disabled">
         <input type="checkbox" name="options" id="cb9" checked disabled />
         <label class="env-form-element__label" for="cb9">
            <span class="env-checkbox__fake"></span>
            <span class="env-checkbox__label">Disabled checkbox</span>
         </label>
      </div>
   </div>
</div>
<div class="env-form-element">
   <div class="env-form-element__control">
      <label class="env-radio env-radio--disabled">
         <input class="env-radio" type="radio" disabled checked />
         Disabled radio button
         <span class="env-badge env-badge--info">10.0</span>
      </label>
   </div>
</div>
<div class="env-form-element">
   <div class="env-switch">
      <label class="env-switch__label">
         <input type="checkbox" checked disabled />
         <span class="env-switch__text">On disabled</span>
         <span class="env-switch__slider"></span>
      </label>
   </div>
</div>
<div class="env-form-element">
   <label for="readonly" class="env-form-element__label"
      >Readonly text input</label
   >
   <div class="env-form-element__control">
      <input
         type="text"
         class="env-form-input"
         id="readonly"
         placeholder="Readonly"
         readonly
      />
   </div>
</div>
```

## Validation

Add modifiers `.env-form-element--success` or `.env-form-element--danger` to define a
validation state. The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the
element.

```html
<div class="env-form-element env-form-element--success">
   <label for="success" class="env-form-element__label">Success</label>
   <div class="env-form-element__control">
      <input
         type="text"
         class="env-form-input"
         id="success"
         aria-describedby="success-feedback"
      />
   </div>
   <span id="success-feedback" class="env-form-element__feedback"
      >Success feedback</span
   >
</div>
<div class="env-form-element env-form-element--danger">
   <label for="danger" class="env-form-element__label">Danger</label>
   <div class="env-form-element__control">
      <input
         type="text"
         class="env-form-input"
         id="danger"
         aria-describedby="danger-feedback"
      />
   </div>
   <span id="danger-feedback" class="env-form-element__feedback"
      >Danger feedback</span
   >
</div>
```
