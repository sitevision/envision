---
layout: docs
title: Form
description: Form elements
group: components
---
## Elements ##
{% example html %}
<div class="sv-form">
   <div class="sv-form-element">
      <label for="text" class="sv-form-element__label">Input text</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="text">
      </div>
   </div>
   <div class="sv-form-element">
      <label for="textarea" class="sv-form-element__label">Textarea</label>
      <div class="sv-form-element__control">
         <textarea class="sv-form-input" id="textarea" rows="3"></textarea>
      </div>
   </div>
   <div class="sv-form-element">
      <label for="select" class="sv-form-element__label">Select</label>
      <div class="sv-form-element__control">
         <select class="sv-form-input" id="select">
            <option>Item</option>
            <option>Item 2</option>
            <option>Item 3</option>
            <option>Item 4</option>
         </select>
      </div>
   </div>
   <div class="sv-form-element">
      <label for="multiple-select" class="sv-form-element__label">Multiple select</label>
      <div class="sv-form-element__control">
         <select class="sv-form-input" id="multiple-select" multiple>
            <option>Item</option>
            <option>Item 2</option>
            <option>Item 3</option>
            <option>Item 4</option>
         </select>
      </div>
   </div>
   <div class="sv-form-element">
      <span class="sv-form-element__label" id="radio-header">Radio button</span>
      <div class="sv-form-element__control" role="radiogroup" aria-labelledby="radio-header">
         <div class="sv-form-radio">
            <label class="sv-form-element__label">
               <input type="radio" name="radios" checked>
               Alternative
            </label>
         </div>
         <div class="sv-form-radio">
            <label class="sv-form-element__label">
               <input type="radio" name="radios">
               Alternative 2
            </label>
         </div>
         <div class="sv-form-radio">
            <label class="sv-form-element__label">
               <input type="radio" name="radios">
               Alternative 3
            </label>
         </div>
      </div>
   </div>
   <div class="sv-form-element">
      <span class="sv-form-element__label" id="checkbox-header">Checkbox</span>
      <div class="sv-form-element__control" role="group" aria-labelledby="checkbox-header">
         <div class="sv-form-checkbox">
            <label class="sv-form-element__label">
               <input type="checkbox">
               Check
            </label>
         </div>
         <div class="sv-form-checkbox">
            <label class="sv-form-element__label">
               <input type="checkbox">
               Check 2
            </label>
         </div>
         <div class="sv-form-checkbox">
            <label class="sv-form-element__label">
               <input type="checkbox">
               Check 3
            </label>
         </div>
      </div>
   </div>
   <div class="sv-form-element">
      <label for="file-upload" class="sv-form-element__label">File upload</label>
      <div class="sv-form-element__control">
         <input type="file" id="file-upload">
      </div>
   </div>
   <div class="sv-form-element">
      <button type="submit" class="sv-button sv-button--primary">Submit</button>
   </div>
</div>
{% endexample %}
Related elements (radio buttons and checkboxes in this example) should have a `role="radiogroup"` / `role="group"` 
applied to its container to indicate group membership of the contained elements. 

The `aria-labelledby` is used to reference the `ID` of the text that labels the group.

## Horizontal ##
{% example html %}
<div class="sv-form sv-form--horizontal">
   <div class="sv-form-element">
      <label for="first-name" class="sv-form-element__label">First name</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="first-name">
      </div>
   </div>
   <div class="sv-form-element">
      <label for="last-name" class="sv-form-element__label">Last name</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="last-name">
      </div>
   </div>
   <div class="sv-form-element">
      <span class="sv-form-element__label" id="subjects-header">Subjects</span>
      <div class="sv-form-element__control" role="group" aria-labelledby="subjects-header">
         <div class="sv-form-checkbox">
            <label class="sv-form-element__label">
               <input type="checkbox">
               Subject
            </label>
         </div>
         <div class="sv-form-checkbox">
            <label class="sv-form-element__label">
               <input type="checkbox">
               Subject 2
            </label>
         </div>
         <div class="sv-form-checkbox">
            <label class="sv-form-element__label">
               <input type="checkbox">
               Subject 3
            </label>
         </div>
      </div>
   </div>
   <div class="sv-form-element">
      <button type="submit" class="sv-button sv-button--primary">Submit</button>
   </div>
</div>  
{% endexample %}
To create a horizontal form (horizontally align labels with input), apply modifier `.sv-form--horizontal` to the form wrapper.
The label of the element takes up 20% of the width and the `.sv-form-element__control` uses the remaining width.

## Inline ##
{% example html %}
<div class="sv-form sv-form--inline">
   <div class="sv-form-element">
      <label for="country" class="sv-form-element__label">Country</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="country">
      </div>
   </div>
   <div class="sv-form-element">
      <label for="city" class="sv-form-element__label">City</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="city">
      </div>
   </div>
   <div class="sv-form-element">
      <div class="sv-form-element__control">
         <div class="sv-form-checkbox">
            <label class="sv-form-element__label">
               <input type="checkbox">
               Remember me
            </label>
         </div>
      </div>
   </div>
   <div class="sv-form-element">
      <button type="submit" class="sv-button sv-button--primary">Submit</button>
   </div>
</div>  
{% endexample %}
Apply modifier `.sv-form--inline` to the form wrapper to display elements inline.

## Hybrid ##
{% example html %}
<div class="sv-form">
   <div class="sv-form__row">
      <div class="sv-form-element">
         <label for="username" class="sv-form-element__label">Username</label>
         <div class="sv-form-element__control">
            <input type="text" class="sv-form-input" id="username">
         </div>
      </div>
      <div class="sv-form-element">
         <label for="full-name" class="sv-form-element__label">Full name</label>
         <div class="sv-form-element__control">
            <input type="text" class="sv-form-input" id="full-name">
         </div>
      </div>
   </div>
   <div class="sv-form__row">
      <div class="sv-form-element sv-form-element--2">
         <label for="address" class="sv-form-element__label">Address</label>
         <div class="sv-form-element__control">
            <input type="text" class="sv-form-input" id="address">
         </div>
      </div>
      <div class="sv-form-element">
         <label for="contact-tel" class="sv-form-element__label">Telephone</label>
         <div class="sv-form-element__control">
            <input type="tel" class="sv-form-input" id="contact-tel">
         </div>
      </div>
   </div>
   <div class="sv-form-element">
      <label for="other" class="sv-form-element__label">Other</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="other">
      </div>
   </div>
   <div class="sv-form-element">
      <button type="submit" class="sv-button sv-button--primary">Submit</button>
   </div>
</div>  
{% endexample %}
To position multiple elements on a row, wrap target elements (`.sv-form-element`) with a `.sv-form__row` container.
Use modifer `.sv-form-element--*` to specify the length of an element, relative to other elements on the row. Valid values `1-6`. Default is `1`

## Help text ##
{% example html %}
<div class="sv-form">
   <div class="sv-form-element">
      <label for="password" class="sv-form-element__label">Password</label>
      <div class="sv-form-element__control">
         <input type="password" class="sv-form-input" id="password" aria-describedby="password-help">
      </div>
      <span id="password-help" class="sv-form-element__help">Enter a secure password</span>
   </div>
</div>  
{% endexample %}
Use `.sv-form-element__help` for help texts associated with a form element.

The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.

## States ##
{% example html %}
<div class="sv-form">
   <div class="sv-form-element">
      <label for="disabled" class="sv-form-element__label">Disabled text input</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="disabled" placeholder="Disabled" disabled>
      </div>
   </div>
   <div class="sv-form-element">
      <label for="disabled-select" class="sv-form-element__label">Disabled select</label>
      <div class="sv-form-element__control">
         <select class="sv-form-input" id="disabled-select" disabled>
            <option>Disabled</option>
         </select>
      </div>
   </div>
   <div class="sv-form-element">
      <div class="sv-form-element__control">
         <div class="sv-form-checkbox sv-form-checkbox--disabled">
            <label class="sv-form-element__label">
               <input type="checkbox" disabled>
               Disabled checkbox
            </label>
         </div>
      </div>
   </div>
   <div class="sv-form-element">
      <div class="sv-form-element__control">
         <div class="sv-form-radio sv-form-radio--disabled">
            <label class="sv-form-element__label">
               <input type="radio" disabled>
               Disabled radio button
            </label>
         </div>
      </div>
   </div>
   <div class="sv-form-element">
      <label for="readonly" class="sv-form-element__label">Readonly text input</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="readonly" placeholder="Readonly" readonly>
      </div>
   </div>
</div>  
{% endexample %}
Elements with the `disabled` attribute recieve a `not-allowed` cursor while `readonly` elements maintain the default cursor.
For disabled radio buttons and checkboxes, apply modifier `.sv-form-radio--disabled` / `.sv-form-checkbox--disabled` to its wrapper for a lighter label and a `not-allowed` cursor.     

## Validation ##
{% example html %}
<div class="sv-form">
   <div class="sv-form-element sv-form-element--success">
      <label for="success" class="sv-form-element__label">Success</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="success" aria-describedby="sucess-feedback">
      </div>
      <span id="success-feedback" class="sv-form-element__feedback">Success feedback</span>
   </div>
   <div class="sv-form-element sv-form-element--warning">
      <label for="warning" class="sv-form-element__label">Warning</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="warning" aria-describedby="warning-feedback">
      </div>
      <span id="warning-feedback" class="sv-form-element__feedback">Warning feedback</span>
   </div>
   <div class="sv-form-element sv-form-element--danger">
      <label for="danger" class="sv-form-element__label">Danger</label>
      <div class="sv-form-element__control">
         <input type="text" class="sv-form-input" id="danger" aria-describedby="danger-feedback">
      </div>
      <span id="danger-feedback" class="sv-form-element__feedback">Danger feedback</span>
   </div>
</div>  
{% endexample %}
Add modifiers `.sv-form-element--success`, `.sv-form-element--warning` or `.sv-form-element--danger` to define a validation state.

The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.
