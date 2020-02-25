---
layout: docs
title: Form
description: Form elements
group: components
---
## Elements ##

Related elements (radio buttons and checkboxes in this example) should have a `role="radiogroup"` / `role="group"`
applied to its container to indicate group membership of the contained elements.

The `aria-labelledby` is used to reference the `ID` of the text that labels the group.

{% example html %}
<div class="env-form">
   <div class="env-form-element">
      <label for="text" class="env-form-element__label">Input text</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="text">
      </div>
   </div>
   <div class="env-form-element">
      <label for="textarea" class="env-form-element__label">Textarea</label>
      <div class="env-form-element__control">
         <textarea class="env-form-input" id="textarea" rows="3"></textarea>
      </div>
   </div>
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
      <label for="multiple-select" class="env-form-element__label">Multiple select</label>
      <div class="env-form-element__control env-form-multiple-select">
         <select class="env-form-input" id="multiple-select" multiple>
            <option>Item</option>
            <option>Item 2</option>
            <option>Item 3</option>
            <option>Item 4</option>
         </select>
      </div>
   </div>
   <div class="env-form-element">
      <span class="env-form-element__label" id="radio-header">Radio button</span>
      <div class="env-form-element__control" role="radiogroup" aria-labelledby="radio-header">
         <div class="env-form-radio">
            <input id="radio1" type="radio" name="radios" checked>
            <label for="radio1" class="env-form-element__label">
               <span class="env-form-radio__fake"></span>
               <span class="env-form-radio__label">Alternative</span>
            </label>
         </div>
         <div class="env-form-radio">
            <input id="radio2" type="radio" name="radios">
            <label for="radio2" class="env-form-element__label">
               <span class="env-form-radio__fake"></span>
               <span class="env-form-radio__label">Alternative 2</span>
            </label>
         </div>
         <div class="env-form-radio">
            <input id="radio3" type="radio" name="radios">
            <label for="radio3" class="env-form-element__label">
               <span class="env-form-radio__fake"></span>
               <span class="env-form-radio__label">Alternative 3</span>
            </label>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <span class="env-form-element__label" id="checkbox-header">Checkbox</span>
      <div class="env-form-element__control" role="group" aria-labelledby="checkbox-header">
         <div class="env-checkbox">
            <input type="checkbox" checked name="options" id="cb">
            <label class="env-form-element__label" for="cb">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Checked</span>
            </label>
         </div>
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb2">
            <label class="env-form-element__label" for="cb2">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Check</span>
            </label>
         </div>
         <div class="env-checkbox">
            <input type="checkbox" checked disabled name="options" id="cb3">
            <label class="env-form-element__label" for="cb3">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Checked disabled</span>
            </label>
         </div>
         <div class="env-checkbox">
            <input type="checkbox" disabled name="options" id="cb4">
            <label class="env-form-element__label" for="cb4">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Check disabled</span>
            </label>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <label for="file-upload" class="env-form-element__label">File upload</label>
      <div class="env-form-element__control">
         <input type="file" id="file-upload">
      </div>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">Submit</button>
   </div>
</div>
{% endexample %}

## Horizontal ##

To create a horizontal form (horizontally align labels with input), apply modifier `.env-form--horizontal` to the form wrapper.
The label of the element takes up 20% of the width and the `.env-form-element__control` uses the remaining width.

{% example html %}
<div class="env-form env-form--horizontal">
   <div class="env-form-element">
      <label for="first-name" class="env-form-element__label">First name</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="first-name">
      </div>
   </div>
   <div class="env-form-element">
      <label for="last-name" class="env-form-element__label">Last name</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="last-name">
      </div>
   </div>
   <div class="env-form-element">
      <span class="env-form-element__label" id="subjects-header">Subjects</span>
      <div class="env-form-element__control" role="group" aria-labelledby="subjects-header">
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb4">
            <label class="env-form-element__label" for="cb4">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Subject</span>
            </label>
         </div>
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb5">
            <label class="env-form-element__label" for="cb5">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Subject 2</span>
            </label>
         </div>
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb6">
            <label class="env-form-element__label" for="cb6">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Subject 3</span>
            </label>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">Submit</button>
   </div>
</div>
{% endexample %}

## Inline ##

Apply modifier `.env-form--inline` to the form wrapper to display elements inline.

{% example html %}
<div class="env-form env-form--inline">
   <div class="env-form-element">
      <label for="country" class="env-form-element__label">Country</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="country">
      </div>
   </div>
   <div class="env-form-element">
      <label for="city" class="env-form-element__label">City</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="city">
      </div>
   </div>
   <div class="env-form-element">
      <div class="env-form-element__control">
         <div class="env-checkbox">
            <input type="checkbox" name="options" id="cb7">
            <label class="env-form-element__label" for="cb7">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Remember me</span>
            </label>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">Submit</button>
   </div>
</div>
{% endexample %}

## Hybrid ##

To position multiple elements on a row, wrap target elements (`.env-form-element`) with a `.env-form__row` container.
Use modifer `.env-form-element--*` to specify the length of an element, relative to other elements on the row. Valid values `1-6`. Default is `1`

{% example html %}
<div class="env-form">
   <div class="env-form__row">
      <div class="env-form-element">
         <label for="username" class="env-form-element__label">Username</label>
         <div class="env-form-element__control">
            <input type="text" class="env-form-input" id="username">
         </div>
      </div>
      <div class="env-form-element">
         <label for="full-name" class="env-form-element__label">Full name</label>
         <div class="env-form-element__control">
            <input type="text" class="env-form-input" id="full-name">
         </div>
      </div>
   </div>
   <div class="env-form__row">
      <div class="env-form-element env-form-element--2">
         <label for="address" class="env-form-element__label">Address</label>
         <div class="env-form-element__control">
            <input type="text" class="env-form-input" id="address">
         </div>
      </div>
      <div class="env-form-element">
         <label for="contact-tel" class="env-form-element__label">Telephone</label>
         <div class="env-form-element__control">
            <input type="tel" class="env-form-input" id="contact-tel">
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <label for="other" class="env-form-element__label">Other</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="other">
      </div>
   </div>
   <div class="env-form-element">
      <button type="submit" class="env-button env-button--primary">Submit</button>
   </div>
</div>
{% endexample %}

## Help text ##

Use `.env-form-element__help` for help texts associated with a form element.

The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.

{% example html %}
<div class="env-form">
   <div class="env-form-element">
      <label for="password" class="env-form-element__label">Password</label>
      <div class="env-form-element__control">
         <input type="password" class="env-form-input" id="password" aria-describedby="password-help">
      </div>
      <span id="password-help" class="env-form-element__help">Enter a secure password</span>
   </div>
</div>
{% endexample %}

## States ##

Elements with the `disabled` attribute recieve a `not-allowed` cursor while `readonly` elements maintain the default cursor.
For disabled radio buttons and checkboxes, apply modifier `.env-form-radio--disabled` / `.env-checkbox--disabled` to its wrapper for a lighter label and a `not-allowed` cursor.

{% example html %}
<div class="env-form">
   <div class="env-form-element">
      <label for="disabled" class="env-form-element__label">Disabled text input</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="disabled" placeholder="Disabled" disabled>
      </div>
   </div>
   <div class="env-form-element">
      <label for="disabled-select" class="env-form-element__label">Disabled select</label>
      <div class="env-form-element__control">
         <select class="env-form-input" id="disabled-select" disabled>
            <option>Disabled</option>
         </select>
      </div>
   </div>
   <div class="env-form-element">
      <div class="env-form-element__control">
         <div class="env-checkbox env-checkbox--disabled">
            <input type="checkbox" name="options" id="cb8" disabled>
            <label class="env-form-element__label" for="cb8">
               <span class="env-checkbox__fake"></span>
               <span class="env-checkbox__label">Disabled checkbox</span>
            </label>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <div class="env-form-element__control">
         <div class="env-form-radio env-form-radio--disabled">
            <label class="env-form-element__label">
               <input type="radio" disabled>
               Disabled radio button
            </label>
         </div>
      </div>
   </div>
   <div class="env-form-element">
      <label for="readonly" class="env-form-element__label">Readonly text input</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="readonly" placeholder="Readonly" readonly>
      </div>
   </div>
</div>
{% endexample %}

## Validation ##

Add modifiers `.env-form-element--success`, `.env-form-element--warning` or `.env-form-element--danger` to define a validation state.

The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.

{% example html %}
<div class="env-form">
   <div class="env-form-element env-form-element--success">
      <label for="success" class="env-form-element__label">Success</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="success" aria-describedby="success-feedback">
      </div>
      <span id="success-feedback" class="env-form-element__feedback">Success feedback</span>
   </div>
   <div class="env-form-element env-form-element--warning">
      <label for="warning" class="env-form-element__label">Warning</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="warning" aria-describedby="warning-feedback">
      </div>
      <span id="warning-feedback" class="env-form-element__feedback">Warning feedback</span>
   </div>
   <div class="env-form-element env-form-element--danger">
      <label for="danger" class="env-form-element__label">Danger</label>
      <div class="env-form-element__control">
         <input type="text" class="env-form-input" id="danger" aria-describedby="danger-feedback">
      </div>
      <span id="danger-feedback" class="env-form-element__feedback">Danger feedback</span>
   </div>
</div>
{% endexample %}
