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

### Fixed number of items per row ###
Use modifiers `{{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--*`. Valid values: `1-12`
 
{% example html %}
<ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--4">
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">1</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">2</div>      
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">3</div>   
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">4</div>   
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">5</div>   
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">6</div>   
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">7</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item">8</div>
   </li>
</ul>
{% endexample %}

### Responsive horizontal list ###

{% example html %}
<ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal {{ site.css_prefix }}-list--horizontal--responsive">
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">1</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">2</div>   
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">3</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">4</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">5</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">6</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">7</div>
   </li>
   <li class="{{ site.css_prefix }}-list__item">
      <div class="example-list-item-responsive">8</div>
   </li>
</ul>
{% endexample %}
