---
layout: docs
title: List
description: List description
group: components
---
## Overview ##
`.sv-list` resets defaults to `margin: 0`, `padding: 0`, `list-style: none`

## Vertical list ##
{% example html %}
<ul class="sv-list">
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
</ul>
{% endexample %}
### Dividers ###
Apply `.sv-list-dividers--*` to add dividers between items. Valid values: `top`, `bottom`, `around` 
{% example html %}
<ul class="sv-list sv-list-dividers--top">
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
</ul>
{% endexample %}

For a divider on a specific item, apply `.sv-list-item-divider--*`. Valid values: `top`, `bottom`, `around` 
{% example html %}
<ul class="sv-list">
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item sv-list-item-divider--bottom">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
</ul>
{% endexample %}

## Horizontal list ##
{% example html %}
<ul class="sv-list sv-list--horizontal">
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
</ul>
{% endexample %}

### Dividers ###
Apply `.sv-list-dividers--*` to add dividers between items. Valid values: `right`, `left` 
{% example html %}
<ul class="sv-list sv-list--horizontal sv-list-dividers--left">
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
   <li class="sv-list__item">
      Item
   </li>
</ul>
{% endexample %}

## Horizontal list with fixed number of items per row ##
Use `sv-list-horizontal-fixed` in combination with modifer `sv-list-horizontal-fixed--*`. Valid values: `1-12`
 
{% example html %}
<ul class="sv-list sv-list-horizontal-fixed sv-list-horizontal-fixed--4">
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=1">
   </li>
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=2">   
   </li>
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=3">
   </li>
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=4">
   </li>
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=5">
   </li>
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=6">   
   </li>
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=7">
   </li>
   <li class="sv-list__item">
      <img src="https://placehold.it/100x100&text=8">
   </li>
</ul>
{% endexample %}
