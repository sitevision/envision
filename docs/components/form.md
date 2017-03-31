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
<div class="{{ site.css_prefix }}-form">
   <div class="{{ site.css_prefix }}-form-element">
      <label for="text" class="{{ site.css_prefix }}-form-element__label">Input text</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="text">
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="textarea" class="{{ site.css_prefix }}-form-element__label">Textarea</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <textarea class="{{ site.css_prefix }}-form-input" id="textarea" rows="3"></textarea>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="select" class="{{ site.css_prefix }}-form-element__label">Select</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <select class="{{ site.css_prefix }}-form-input" id="select">
            <option>Item</option>
            <option>Item 2</option>
            <option>Item 3</option>
            <option>Item 4</option>
         </select>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="multiple-select" class="{{ site.css_prefix }}-form-element__label">Multiple select</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <select class="{{ site.css_prefix }}-form-input" id="multiple-select" multiple>
            <option>Item</option>
            <option>Item 2</option>
            <option>Item 3</option>
            <option>Item 4</option>
         </select>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <span class="{{ site.css_prefix }}-form-element__label" id="radio-header">Radio button</span>
      <div class="{{ site.css_prefix }}-form-element__control" role="radiogroup" aria-labelledby="radio-header">
         <div class="{{ site.css_prefix }}-form-radio">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="radio" name="radios" checked>
               Alternative
            </label>
         </div>
         <div class="{{ site.css_prefix }}-form-radio">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="radio" name="radios">
               Alternative 2
            </label>
         </div>
         <div class="{{ site.css_prefix }}-form-radio">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="radio" name="radios">
               Alternative 3
            </label>
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <span class="{{ site.css_prefix }}-form-element__label" id="checkbox-header">Checkbox</span>
      <div class="{{ site.css_prefix }}-form-element__control" role="group" aria-labelledby="checkbox-header">
         <div class="{{ site.css_prefix }}-form-checkbox">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox">
               Check
            </label>
         </div>
         <div class="{{ site.css_prefix }}-form-checkbox">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox">
               Check 2
            </label>
         </div>
         <div class="{{ site.css_prefix }}-form-checkbox">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox">
               Check 3
            </label>
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="file-upload" class="{{ site.css_prefix }}-form-element__label">File upload</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="file" id="file-upload">
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <button type="submit" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Submit</button>
   </div>
</div>
{% endexample %}

## Horizontal ##

To create a horizontal form (horizontally align labels with input), apply modifier `.{{ site.css_prefix }}-form--horizontal` to the form wrapper.
The label of the element takes up 20% of the width and the `.{{ site.css_prefix }}-form-element__control` uses the remaining width.

{% example html %}
<div class="{{ site.css_prefix }}-form {{ site.css_prefix }}-form--horizontal">
   <div class="{{ site.css_prefix }}-form-element">
      <label for="first-name" class="{{ site.css_prefix }}-form-element__label">First name</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="first-name">
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="last-name" class="{{ site.css_prefix }}-form-element__label">Last name</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="last-name">
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <span class="{{ site.css_prefix }}-form-element__label" id="subjects-header">Subjects</span>
      <div class="{{ site.css_prefix }}-form-element__control" role="group" aria-labelledby="subjects-header">
         <div class="{{ site.css_prefix }}-form-checkbox">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox">
               Subject
            </label>
         </div>
         <div class="{{ site.css_prefix }}-form-checkbox">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox">
               Subject 2
            </label>
         </div>
         <div class="{{ site.css_prefix }}-form-checkbox">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox">
               Subject 3
            </label>
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <button type="submit" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Submit</button>
   </div>
</div>  
{% endexample %}

## Inline ##

Apply modifier `.{{ site.css_prefix }}-form--inline` to the form wrapper to display elements inline.

{% example html %}
<div class="{{ site.css_prefix }}-form {{ site.css_prefix }}-form--inline">
   <div class="{{ site.css_prefix }}-form-element">
      <label for="country" class="{{ site.css_prefix }}-form-element__label">Country</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="country">
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="city" class="{{ site.css_prefix }}-form-element__label">City</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="city">
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <div class="{{ site.css_prefix }}-form-element__control">
         <div class="{{ site.css_prefix }}-form-checkbox">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox">
               Remember me
            </label>
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <button type="submit" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Submit</button>
   </div>
</div>  
{% endexample %}

## Hybrid ##

To position multiple elements on a row, wrap target elements (`.{{ site.css_prefix }}-form-element`) with a `.{{ site.css_prefix }}-form__row` container.
Use modifer `.{{ site.css_prefix }}-form-element--*` to specify the length of an element, relative to other elements on the row. Valid values `1-6`. Default is `1`

{% example html %}
<div class="{{ site.css_prefix }}-form">
   <div class="{{ site.css_prefix }}-form__row">
      <div class="{{ site.css_prefix }}-form-element">
         <label for="username" class="{{ site.css_prefix }}-form-element__label">Username</label>
         <div class="{{ site.css_prefix }}-form-element__control">
            <input type="text" class="{{ site.css_prefix }}-form-input" id="username">
         </div>
      </div>
      <div class="{{ site.css_prefix }}-form-element">
         <label for="full-name" class="{{ site.css_prefix }}-form-element__label">Full name</label>
         <div class="{{ site.css_prefix }}-form-element__control">
            <input type="text" class="{{ site.css_prefix }}-form-input" id="full-name">
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form__row">
      <div class="{{ site.css_prefix }}-form-element {{ site.css_prefix }}-form-element--2">
         <label for="address" class="{{ site.css_prefix }}-form-element__label">Address</label>
         <div class="{{ site.css_prefix }}-form-element__control">
            <input type="text" class="{{ site.css_prefix }}-form-input" id="address">
         </div>
      </div>
      <div class="{{ site.css_prefix }}-form-element">
         <label for="contact-tel" class="{{ site.css_prefix }}-form-element__label">Telephone</label>
         <div class="{{ site.css_prefix }}-form-element__control">
            <input type="tel" class="{{ site.css_prefix }}-form-input" id="contact-tel">
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="other" class="{{ site.css_prefix }}-form-element__label">Other</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="other">
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <button type="submit" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Submit</button>
   </div>
</div>  
{% endexample %}

## Help text ##

Use `.{{ site.css_prefix }}-form-element__help` for help texts associated with a form element.

The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.

{% example html %}
<div class="{{ site.css_prefix }}-form">
   <div class="{{ site.css_prefix }}-form-element">
      <label for="password" class="{{ site.css_prefix }}-form-element__label">Password</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="password" class="{{ site.css_prefix }}-form-input" id="password" aria-describedby="password-help">
      </div>
      <span id="password-help" class="{{ site.css_prefix }}-form-element__help">Enter a secure password</span>
   </div>
</div>  
{% endexample %}

## States ##

Elements with the `disabled` attribute recieve a `not-allowed` cursor while `readonly` elements maintain the default cursor.
For disabled radio buttons and checkboxes, apply modifier `.{{ site.css_prefix }}-form-radio--disabled` / `.{{ site.css_prefix }}-form-checkbox--disabled` to its wrapper for a lighter label and a `not-allowed` cursor.

{% example html %}
<div class="{{ site.css_prefix }}-form">
   <div class="{{ site.css_prefix }}-form-element">
      <label for="disabled" class="{{ site.css_prefix }}-form-element__label">Disabled text input</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="disabled" placeholder="Disabled" disabled>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="disabled-select" class="{{ site.css_prefix }}-form-element__label">Disabled select</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <select class="{{ site.css_prefix }}-form-input" id="disabled-select" disabled>
            <option>Disabled</option>
         </select>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <div class="{{ site.css_prefix }}-form-element__control">
         <div class="{{ site.css_prefix }}-form-checkbox {{ site.css_prefix }}-form-checkbox--disabled">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="checkbox" disabled>
               Disabled checkbox
            </label>
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <div class="{{ site.css_prefix }}-form-element__control">
         <div class="{{ site.css_prefix }}-form-radio {{ site.css_prefix }}-form-radio--disabled">
            <label class="{{ site.css_prefix }}-form-element__label">
               <input type="radio" disabled>
               Disabled radio button
            </label>
         </div>
      </div>
   </div>
   <div class="{{ site.css_prefix }}-form-element">
      <label for="readonly" class="{{ site.css_prefix }}-form-element__label">Readonly text input</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="readonly" placeholder="Readonly" readonly>
      </div>
   </div>
</div>  
{% endexample %}

## Validation ##

Add modifiers `.{{ site.css_prefix }}-form-element--success`, `.{{ site.css_prefix }}-form-element--warning` or `.{{ site.css_prefix }}-form-element--danger` to define a validation state.

The `aria-describedby` attribute should be used to reference the `ID` of the text that describes the element.

{% example html %}
<div class="{{ site.css_prefix }}-form">
   <div class="{{ site.css_prefix }}-form-element {{ site.css_prefix }}-form-element--success">
      <label for="success" class="{{ site.css_prefix }}-form-element__label">Success</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="success" aria-describedby="sucess-feedback">
      </div>
      <span id="success-feedback" class="{{ site.css_prefix }}-form-element__feedback">Success feedback</span>
   </div>
   <div class="{{ site.css_prefix }}-form-element {{ site.css_prefix }}-form-element--warning">
      <label for="warning" class="{{ site.css_prefix }}-form-element__label">Warning</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="warning" aria-describedby="warning-feedback">
      </div>
      <span id="warning-feedback" class="{{ site.css_prefix }}-form-element__feedback">Warning feedback</span>
   </div>
   <div class="{{ site.css_prefix }}-form-element {{ site.css_prefix }}-form-element--danger">
      <label for="danger" class="{{ site.css_prefix }}-form-element__label">Danger</label>
      <div class="{{ site.css_prefix }}-form-element__control">
         <input type="text" class="{{ site.css_prefix }}-form-input" id="danger" aria-describedby="danger-feedback">
      </div>
      <span id="danger-feedback" class="{{ site.css_prefix }}-form-element__feedback">Danger feedback</span>
   </div>
</div>  
{% endexample %}
