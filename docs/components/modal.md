---
layout: docs
title: Modal
description: Modal description
group: components
---

### Default modal ###

{% example html %}

<div class="sv-modal sv-demo__modal--default" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="0">
   <div class="sv-modal__dialog">
      <section class="sv-modal__content">
         <header class="sv-modal__header">
            <h3 class="sv-modal__header__title">Modal Header</h3>
         </header>
         <div class="sv-modal__body">
            <p class="sv-font sv-font--text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="sv-modal__footer">
            <button type="button" class="sv-button sv-button--primary">Save</button>
            <button type="button" class="sv-button sv-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

### Optional sizes ###

Uses `sv-modal-dialog--large` and footer `sv-modal__footer--right` aligning footer descendents to the right.

{% example html %}
<button id="largeBtn" data-sv-modal type="button" data-sv-target="#example1" class="sv-button sv-button--primary sv-button--large">Show large</button>

<div id="example1" class="sv-modal" role="dialog" aria-labelledby="myDialogLarge" aria-hidden="true" tabindex="-1">
   <div class="sv-modal__dialog sv-modal__dialog--large">
      <section class="sv-modal__content">
         <header class="sv-modal__header">
            <h3 class="sv-modal__header__title">Modal Header</h3>
         </header>
         <div class="sv-modal__body">
            <p class="sv-font sv-font--text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="sv-modal__footer sv-modal__footer--right">
            <button type="button" data-sv-modal-dismiss class="sv-button sv-button--primary">Save</button>
            <button type="button" data-sv-modal-dismiss class="sv-button sv-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

Uses `sv-modal-dialog--small` 
{%example html %}
<button id="smallBtn" data-sv-modal type="button" class="sv-button sv-button--primary sv-button--large" data-sv-target="#example2">Show small</button>

<div id="example2" class="sv-modal" role="dialog" aria-labelledby="myDialogSmall" aria-hidden="true" tabindex="-1">
   <div class="sv-modal__dialog sv-modal__dialog--small">
      <section class="sv-modal__content">
         <header class="sv-modal__header">
            <h3 class="sv-modal__header__title">Modal Header</h3>
         </header>
         <div class="sv-modal__body">
            <p class="sv-font sv-font--text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="sv-modal__footer">
            <button type="button" data-sv-modal-dismiss class="sv-button sv-button--primary">Save</button>
            <button type="button" data-sv-modal-dismiss class="sv-button sv-button--link">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

## Methods ##

<p>Show</p> `$('#myModal').modal('show')`
<p>Hide</p> `$('#myModal').modal('hide')`
<p>Toggle</p> `$('#myModal').modal('toggle')`

## Events ##

<p></p>`hide.sv-modal`
<p></p>`hidden.sv-modal`
<p></p>`show.sv-modal`
<p></p>`shown.sv-modal`
