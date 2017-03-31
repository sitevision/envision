---
layout: docs
title: Modal
description: Modal description
group: components
---

### Default modal ###

{% example html %}

<div class="{{ site.css_prefix }}-modal {{ site.css_prefix }}-demo__modal--default" role="dialog" aria-labelledby="myDialog" aria-hidden="true" tabindex="-1">
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
<button id="largeBtn" data-toggle="modal" type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large">Show large</button>

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
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link" id="demo1">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

Uses `{{ site.css_prefix }}-modal-dialog--small` 
{%example html %}
<button id="smallBtn" data-toggle="modal" type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-button--large">Show small</button>

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
            <button type="button" class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--link" id="demo2">Cancel</button>
         </footer>
      </section>
   </div>
</div>

{% endexample %}

<script>

   var demo1 = document.getElementById("example1");
   var demo2 = document.getElementById("example2");

   document.getElementById("largeBtn").addEventListener("click", function(event) {   
      demo1.classList.toggle("{{ site.css_prefix }}-modal--show");
   }); 

   document.getElementById("demo1").addEventListener("click", function(event) {
      demo1.classList.toggle("{{ site.css_prefix }}-modal--show");
   });

   document.getElementById("smallBtn").addEventListener("click", function(event) {
      demo2.classList.toggle("{{ site.css_prefix }}-modal--show");
   });

   document.getElementById("demo2").addEventListener("click", function(event) {
      demo2.classList.toggle("{{ site.css_prefix }}-modal--show");
   });

</script>
