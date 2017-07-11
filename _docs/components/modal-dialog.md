---
layout: docs
title: Modal dialog
description: Modal dialog description
group: components
---

### Default modal dialog ###

{% example html %}

<div class="{{ site.css_prefix }}-modal-dialog doc-demo__modal" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="{{ site.css_prefix }}-modal-dialog__dialog">
      <section class="{{ site.css_prefix }}-modal-dialog__content">
         <header class="{{ site.css_prefix }}-modal-dialog__header">
            <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-modal-dialog__header__title">Modal Header</h4>
         </header>
         <div class="{{ site.css_prefix }}-modal-dialog__body">
            <p class="{{ site.css_prefix }}-text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="{{ site.css_prefix }}-modal-dialog__footer">
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Save</button>
            <button type="button" data-modal-dialog-dismiss class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

### Optional sizes ###

Uses `{{ site.css_prefix }}-modal-dialog__dialog--large` and footer `{{ site.css_prefix }}-modal-dialog__footer--right` aligning footer descendents to the right.

{% example html %}

<button id="largeBtn" data-modal-dialog data-target="#example1" type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large">Show large</button>

<div id="example1" class="{{ site.css_prefix }}-modal-dialog" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="{{ site.css_prefix }}-modal-dialog__dialog {{ site.css_prefix }}-modal-dialog__dialog--large">
      <section class="{{ site.css_prefix }}-modal-dialog__content">
         <header class="{{ site.css_prefix }}-modal-dialog__header">
            <h4 class="{{ site.css_prefix }}-text {{ site.css_prefix }}-modal-dialog__header__title">Modal Header</h4>
         </header>
         <div class="{{ site.css_prefix }}-modal-dialog__body">
            <p class="{{ site.css_prefix }}-text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="{{ site.css_prefix }}-modal-dialog__footer {{ site.css_prefix }}-modal-dialog__footer--right">
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Save</button>
            <button type="button" data-modal-dialog-dismiss class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

Uses `{{ site.css_prefix }}-modal-dialog__dialog--small` 
{%example html %}
<button id="smallBtn" data-modal-dialog data-target="#example2" type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large">Show small</button>

<div id="example2" class="{{ site.css_prefix }}-modal-dialog" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="{{ site.css_prefix }}-modal-dialog__dialog {{ site.css_prefix }}-modal-dialog__dialog--small">
      <section class="{{ site.css_prefix }}-modal-dialog__content">
         <header class="{{ site.css_prefix }}-modal-dialog__header">
            <h4 class="{{ site.css_prefix }}-modal-dialog__header__title">Modal Header</h4>
         </header>
         <div class="{{ site.css_prefix }}-modal-dialog__body">
            <p class="{{ site.css_prefix }}-text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="{{ site.css_prefix }}-modal-dialog__footer">
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary">Save</button>
            <button type="button" data-modal-dialog-dismiss class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

## Methods ##

Show  
`$('#myModal').modalDialog('show')`

Hide   
`$('#myModal').modalDialog('hide')`

Toggle   
`$('#myModal').modalDialog('toggle')`

## Events ##
`hide.sv-modal-dialog`
```javascript
$('#myModal').on('hide.sv-modal-dialog', function() { 
   // Do something... 
});
```

`hidden.sv-modal-dialog`
```javascript
$('#myModal').on('hidden.sv-modal-dialog', function() { 
   // Do something... 
});
```
`show.sv-modal-dialog`
```javascript
$('#myModal').on('show.sv-modal-dialog', function() { 
   // Do something... 
});
```

`shown.sv-modal-dialog`
```javascript
$('#myModal').on('shown.sv-modal-dialog', function() { 
   // Do something... 
});
``` 
