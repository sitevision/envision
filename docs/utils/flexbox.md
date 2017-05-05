---
layout: docs
title: Flexbox
description: Flexbox description
group: utils
---
## Direction ##

Applicable to flex containers (`display: flex`) to set direction of flex items. Utility classes are named using the format: `{{ site.css_prefix }}-flex--{value}`

Valid values 
* `row-reverse`
* `column`
* `column-reverse`

Examples

{% example html %}

<div class="example-direction-container"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 1</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 2</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 3</div>
</div>

<div class="example-direction-container {{ site.css_prefix }}-flex--row-reverse"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 1</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 2</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 3</div>
</div>

<div class="example-direction-container {{ site.css_prefix }}-flex--column"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 1</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 2</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 3</div>
</div>

<div class="example-direction-container {{ site.css_prefix }}-flex--column-reverse"> 
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 1</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 2</div>
   <div class="{{ site.css_prefix }}-p-around--x-small">Item 3</div>
</div>

{% endexample %}

## Alignment ##
### Justify content ###

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

### Align items ###

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

### Align self ###

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

### Flex length ###

Applicable to flex items (items within a flex container). Used to specify the length of the flex item, relative to the rest of the flex items inside the same container. 
Utility classes are named using the format: `{{ site.css_prefix }}-flex-length--{value}`

Valid values `1-10`

{% example html %}

<div class="sv-d--flex">
   <div class="{{ site.css_prefix }}-flex-length--1 example-list-item">Sidebar</div> 
   <div class="{{ site.css_prefix }}-flex-length--2 example-list-item">Main</div>
   <div class="{{ site.css_prefix }}-flex-length--1 example-list-item">Sidebar</div>
</div>

{% endexample %}
