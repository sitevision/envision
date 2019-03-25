---
layout: docs
title: Dropdown
description: Dropdown description
group: components
---

### Default Dropdown ###

{% example html %}

<div id="example0" class="env-dropdown">
   <button class="env-button env-button--primary env-button--large env-dropdown--toggle" aria-haspopup="true" data-dropdown type="button" data-target="#example0">Dropdown
      <svg class="env-icon env-icon--small env-dropdown-icon">
         <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-arrow-down"></use>
      </svg>
   </button>
   <ul class="env-dropdown__menu env-dropdown__menu--large">
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Properties</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>

{% endexample %}

### Dropdown divider ###
Add a `<div>` element to menu list with the class `env-dropdown--divider`.
{% example html %}

<div id="example1" class="env-dropdown">
   <button class="env-button env-button--primary env-button--large env-dropdown--toggle" aria-haspopup="true" data-dropdown type="button" data-target="#example1">Dropdown</button>
   <ul class="env-dropdown__menu env-dropdown__menu--large">
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Properties</a>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>

{% endexample %}

### Split button dropdown ###
Use `env-button-group` to split buttons and add `env-dropdown--toggle-split` to desired button.
{% example html %}
<div id="example2" class="env-dropdown env-button-group env_list__item" role="group">
   <button class="env-button env-button--primary" type="button">Button</button>
   <button class="env-button env-button--primary env-dropdown--toggle env-dropdown--toggle-split" type="button" data-dropdown
      aria-haspopup="true" data-target="#example2">
      <svg class="env-icon env-dropdown-icon">
         <use xlink:href="/assets/envision/envision-icons.svg#icon-arrow-down"></use>
      </svg>
      <span class="env-assistive-text">Toggle Dropdown Menu</span>
   </button>
   <ul class="env-dropdown__menu">
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Action</a>
      </li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Properties</a>
      </li>
      <li class="env-dropdown--divider" role="separator"></li>
      <li role="presentation">
         <a href="#" role="menuitem" class="env-dropdown__item">Settings</a>
      </li>
   </ul>
</div>

{% endexample %}
