---
layout: docs
title: Dropdown
description: Dropdown description
group: components
---

### Default Dropdown ###

{% example html %}

<div class='sv-dropdown'>
   <button class='sv-button sv-dropdown--toggle' aria-haspopup='true' aria-expanded='false' data-sv-dropdown type='button'>Dropdown</button>
   <div class='sv-dropdown__menu'>
      <a href='#' role='menuitem' class='sv-dropdown__item'>Action</a>
      <a href='#' role='menuitem' class='sv-dropdown__item'>Properties</a>
      <a href='#' role='menuitem' class='sv-dropdown__item'>Settings</a>
   </div>
</div>


{% endexample %}

### Dropdown with ul/li elements ###
{% example html %}

<div class='sv-dropdown'>
   <button class='sv-button sv-dropdown--toggle' data-sv-dropdown aria-haspopup='true' aria-expanded='false' type='button'>Dropdown</button>
   <ul class='sv-dropdown__menu'>
      <li class='sv-dropdown__item'><a href='#'>Action</a></li>
      <li class='sv-dropdown__item'><a href='#'>Properties</a></li>
      <div class='sv-dropdown--divider'></div>
      <li class='sv-dropdown__item'><a href='#'>Settings</a></li>
   </ul>
</div>


{% endexample %}

### Dropdown divider ###
Add a `<div>` element to menu list with the class `sv-dropdown--divider`.
{% example html %}

<div class='sv-dropdown'>
   <button class='sv-button sv-dropdown--toggle' aria-haspopup='true' aria-expanded='false' data-sv-dropdown type='button'>Dropdown</button>
   <div class='sv-dropdown__menu'>
      <a href='#' role='menuitem' class='sv-dropdown__item'>Action</a>
      <a href='#' role='menuitem' class='sv-dropdown__item'>Properties</a>
      <div class='sv-dropdown--divider'></div>
      <a href='#' role='menuitem' class='sv-dropdown__item'>Settings</a>
   </div>
</div>


{% endexample %}

### Split button dropdown ###
Use `sv-button-group` to split buttons and add `sv-dropdown--toggle-split` to desired button.
Use `sv-dropdown--toggle-split--space` to create space between button and dropdown menu.
{% example html %}
<div class="sv-list sv-list--horizontal">
   <div class='sv-dropdown sv-button-group sv_list__item'>
      <button class='sv-button sv-button--primary' type='button'>Dropdown</button>
      <button class="sv-button sv-button--primary sv-dropdown--toggle sv-dropdown--toggle-split sv-dropdown--toggle-split--space" type="button" data-sv-dropdown
         aria-haspopup="true" aria-expanded="false">
         <span class="sv-assistive-text">Toggle Dropdown Menu</span>
      </button>
      <div class='sv-dropdown__menu'>
         <a href='#' role='menuitem' class='sv-dropdown__item'>Action</a>
         <a href='#' role='menuitem' class='sv-dropdown__item'>Properties</a>
         <div class='sv-dropdown--divider'></div>
         <a href='#' role='menuitem' class='sv-dropdown__item'>Settings</a>
      </div>
   </div>

   <div class='sv-dropdown sv-button-group sv-list__item'>
      <button class='sv-button sv-button--danger' type='button'>Dropdown</button>
      <button class="sv-button sv-button--danger sv-dropdown--toggle sv-dropdown--toggle-split sv-dropdown--toggle-split--space" type="button" data-sv-dropdown
         aria-haspopup="true" aria-expanded="false">
         <span class="sv-assistive-text">Toggle Dropdown Menu</span>
      </button>
      <div class='sv-dropdown__menu'>
         <a href='#' role='menuitem' class='sv-dropdown__item'>Action</a>
         <a href='#' role='menuitem' class='sv-dropdown__item'>Properties</a>
         <div class='sv-dropdown--divider'></div>
         <a href='#' role='menuitem' class='sv-dropdown__item'>Settings</a>
      </div>
   </div>
</div>


{% endexample %}
