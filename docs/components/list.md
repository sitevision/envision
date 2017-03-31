---
layout: docs
title: List
description: List description
group: components
---
## Overview ##
`.{{ site.css_prefix }}-list` resets defaults to `margin: 0`, `padding: 0`, `list-style: none`

## Vertical list ##
{% example html %}
<ul class="{{ site.css_prefix }}-list">
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
</ul>
{% endexample %}
### Dividers ###

Apply `.{{ site.css_prefix }}-list-dividers--*` to add dividers between items. Valid values: `top`, `bottom`, `around` 
{% example html %}
<ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list-dividers--top">
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
</ul>
{% endexample %}

For a divider on a specific item, apply `.{{ site.css_prefix }}-list-item-divider--*`. Valid values: `top`, `bottom`, `around` 
{% example html %}
<ul class="{{ site.css_prefix }}-list">
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item {{ site.css_prefix }}-list-item-divider--bottom">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
</ul>
{% endexample %}

## Horizontal list ##
{% example html %}
<ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
</ul>
{% endexample %}

### Dividers ###
Apply `.{{ site.css_prefix }}-list-dividers--*` to add dividers between items. Valid values: `right`, `left` 
{% example html %}
<ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list-dividers--left">
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      Item
   </li>
</ul>
{% endexample %}

## Horizontal list with fixed number of items per row ##
Use modifiers `{{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--*`. Valid values: `1-12`
 
{% example html %}
<ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--4">
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=1">
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=2">   
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=3">
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=4">
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=5">
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=6">   
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=7">
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <img src="https://placehold.it/100x100&text=8">
   </li>
</ul>
{% endexample %}
