---
layout: docs
title: Alignment
description: Alignment description
group: utils
---

## Justify content ##

Applicable to flex containers (`display: flex`). Utility classes are named using the format: `{{ site.css_prefix }}-justify-content--{value}`

Valid values 
* `end`
* `center`
* `between`
* `around`

Examples

{% example html %}

<div class="example-alignment-container"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-justify-content--center"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-justify-content--end"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-justify-content--around"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-justify-content--between"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

{% endexample %}

## Align items ##

Applicable to flex containers (`display: flex`). Utility classes are named using the format: `{{ site.css_prefix }}-align-items--{value}`

Valid values 
* `start`
* `end`
* `center`
* `baseline`

{% example html %}

<div class="example-alignment-container"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-align-items--center"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-align-items--start"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-align-items--end"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container {{ site.css_prefix }}-align-items--baseline"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

{% endexample %}

## Align self ##

Applicable to flex items (items within a flex container). Utility classes are named using the format: `{{ site.css_prefix }}-align-self--{value}`

Valid values 
* `stretch`
* `start`
* `end`
* `center`
* `baseline`

{% example html %}

<div class="example-alignment-container">
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div> 
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-align-self--stretch">Aligned</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div> 
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-align-self--start">Aligned</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div> 
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-align-self--end">Aligned</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div> 
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-align-self--center">Aligned</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div> 
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-align-self--baseline">Aligned</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item</div>
</div>

{% endexample %}
