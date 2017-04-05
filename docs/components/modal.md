---
layout: docs
title: Modal
description: Modal description
group: components
---

### Default modal ###

{% example html %}

<div class="{{ site.css_prefix }}-modal doc-demo__modal" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="{{ site.css_prefix }}-modal__dialog">
      <section class="{{ site.css_prefix }}-modal__content">
         <header class="{{ site.css_prefix }}-modal__header">
            <h3 class="{{ site.css_prefix }}-modal__header__title">Modal Header</h3>
         </header>
         <div class="{{ site.css_prefix }}-modal__body">
            <p class="{{ site.css_prefix }}-font {{ site.css_prefix }}-font--text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="{{ site.css_prefix }}-modal__footer">
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Save</button>
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

### Optional sizes ###

Uses `{{ site.css_prefix }}-modal-dialog--large` and footer `{{ site.css_prefix }}-modal__footer--right` aligning footer descendents to the right.

{% example html %}

<button id="largeBtn" data-sv-modal data-sv-target="#example1" type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large">Show large</button>

<div id="example1" class="{{ site.css_prefix }}-modal" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="{{ site.css_prefix }}-modal__dialog {{ site.css_prefix }}-modal__dialog--large">
      <section class="{{ site.css_prefix }}-modal__content">
         <header class="{{ site.css_prefix }}-modal__header">
            <h3 class="{{ site.css_prefix }}-modal__header__title">Modal Header</h3>
         </header>
         <div class="{{ site.css_prefix }}-modal__body">
            <p class="{{ site.css_prefix }}-font {{ site.css_prefix }}-font--text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="{{ site.css_prefix }}-modal__footer {{ site.css_prefix }}-modal__footer--right">
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Save</button>
            <button type="button" data-modal-dismiss class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

Uses `{{ site.css_prefix }}-modal-dialog--small` 
{%example html %}
<button id="smallBtn" data-sv-modal data-sv-target="#example2" type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large">Show small</button>

<div id="example2" class="{{ site.css_prefix }}-modal" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="{{ site.css_prefix }}-modal__dialog {{ site.css_prefix }}-modal__dialog--small">
      <section class="{{ site.css_prefix }}-modal__content">
         <header class="{{ site.css_prefix }}-modal__header">
            <h3 class="{{ site.css_prefix }}-modal__header__title">Modal Header</h3>
         </header>
         <div class="{{ site.css_prefix }}-modal__body">
            <p class="{{ site.css_prefix }}-font {{ site.css_prefix }}-font--text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="{{ site.css_prefix }}-modal__footer">
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Save</button>
            <button type="button" data-modal-dismiss class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

## Methods ##

Show  
`$('#myModal').modal('show')`

Hide   
`$('#myModal').modal('hide')`

Toggle   
`$('#myModal').modal('toggle')`

## Events ##
`hide.sv-modal`
```javascript
   $('#myModal').on('hide.sv-modal', function() { 
      // Do something... 
   });
```

`hidden.sv-modal`
```javascript
   $('#myModal').on('hidden.sv-modal', function() { 
      // Do something... 
   });
```
`show.sv-modal`
```javascript
   $('#myModal').on('show.sv-modal', function() { 
      // Do something... 
   });
```

`shown.sv-modal`
```javascript
   $('#myModal').on('shown.sv-modal', function() { 
      // Do something... 
   });
``` 
