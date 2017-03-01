---
layout: docs
title: Modal
description: Modal description
group: components
---

## Modal ##

### Default modal ###


{% example html %}

<div class="sv-modal sv-demo__modal--regular" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
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
<br/>

### Optional sizes ###

<button id="largeBtn" data-toggle="modal" type="button" class="sv-button sv-button--primary sv-button--large">Show large</button>
<button id="smallBtn" data-toggle="modal" type="button" class="sv-button sv-button--primary sv-button--large">Show small</button>
<br />

Uses `sv-modal-dialog--large` and footer `sv-modal__footer--right` aligning footer descendents to the right.

{% example html %}
<div id="example1" class="sv-modal" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="sv-modal__dialog--large">
      <section class="sv-modal__content">
         <header class="sv-modal__header">
            <h3 class="sv-modal__header__title">Modal Header</h3>
         </header>
         <div class="sv-modal__body">
            <p class="sv-font sv-font--text">Caticus cuteicus wake up wander around the house making large amounts of noise jump on top of your human's bed
               and fall asleep.</p>
         </div>
         <footer class="sv-modal__footer sv-modal__footer--right">
            <button type="button" class="sv-button sv-button--primary">Save</button>
            <button type="button" class="sv-button sv-button--link" id="demo1">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

Uses `sv-modal-dialog--small` 
{%example html %}

<div id="example2" class="sv-modal" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
   <div class="sv-modal__dialog--small">
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
            <button type="button" class="sv-button sv-button--link" id="demo2">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

<script>

   var demo1 = document.getElementById("example1");
   var demo2 = document.getElementById("example2");

   document.getElementById("largeBtn").addEventListener("click", function(event) {   
      demo1.classList.toggle("sv-modal--show");
   }); 

   document.getElementById("demo1").addEventListener("click", function(event) {
      demo1.classList.toggle("sv-modal--show");
   });

   document.getElementById("smallBtn").addEventListener("click", function(event) {
      demo2.classList.toggle("sv-modal--show");
   });

   document.getElementById("demo2").addEventListener("click", function(event) {
      demo2.classList.toggle("sv-modal--show");
   });

</script>



