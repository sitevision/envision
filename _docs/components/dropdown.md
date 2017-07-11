---
layout: docs
title: Dropdown
description: Dropdown description
group: components
---

### Default Dropdown ###

{% example html %}

<div id="example0" class="{{ site.css_prefix }}-dropdown">
   <button class="{{ site.css_prefix }}-button {{ site.css_prefix }}-dropdown--toggle" aria-haspopup="true" aria-expanded="false" data-dropdown type="button" data-target="#example0">Dropdown</button>
   <ul class="{{ site.css_prefix }}-dropdown__menu">
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Properties</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Settings</a>
      </li>
   </ul>
</div>

{% endexample %}

### Dropdown divider ###
Add a `<div>` element to menu list with the class `sv-dropdown--divider`.
{% example html %}

<div id="example1" class="{{ site.css_prefix }}-dropdown">
   <button class="{{ site.css_prefix }}-button {{ site.css_prefix }}-dropdown--toggle" aria-haspopup="true" aria-expanded="false" data-dropdown type="button" data-target="#example1">Dropdown</button>
   <ul class="{{ site.css_prefix }}-dropdown__menu">
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Properties</a>
      </li>
      <li class="{{ site.css_prefix }}-dropdown--divider" role="separator"></li>
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Settings</a>
      </li>
   </ul>
</div>

{% endexample %}

### Split button dropdown ###
Use `sv-button-group` to split buttons and add `sv-dropdown--toggle-split` to desired button.
{% example html %}
<div id="example2" class="{{ site.css_prefix }}-dropdown {{ site.css_prefix }}-button-group {{ site.css_prefix }}_list__item" role="group">
   <button class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary" type="button">Dropdown</button>
   <button class="{{ site.css_prefix }}-button {{ site.css_prefix }}-button--primary {{ site.css_prefix }}-dropdown--toggle {{ site.css_prefix }}-dropdown--toggle-split" type="button" data-dropdown
      aria-haspopup="true" aria-expanded="false" data-target="#example2">
      <span class="{{ site.css_prefix }}-assistive-text">Toggle Dropdown Menu</span>
   </button>
   <ul class="{{ site.css_prefix }}-dropdown__menu">
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Properties</a>
      </li>
      <li class="{{ site.css_prefix }}-dropdown--divider" role="separator"></li>
      <li role="presentation">
         <a href="#" role="menuitem" class="{{ site.css_prefix }}-dropdown__item">Settings</a>
      </li>
   </ul>
</div>

{% endexample %}
