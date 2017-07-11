---
layout: docs
title: Flexbox
description: Flexbox description
group: utils
---
## Direction ##

Applicable to flex containers (`display: flex`) to set direction of flex items. Utility classes are named using the format: `env-flex--{value}`

Valid values 
* `row-reverse`
* `column`
* `column-reverse`

Examples

{% example html %}

<div class="example-direction-container"> 
   <div class="env-p-around--x-small">Item 1</div>
   <div class="env-p-around--x-small">Item 2</div>
   <div class="env-p-around--x-small">Item 3</div>
</div>

<div class="example-direction-container env-flex--row-reverse"> 
   <div class="env-p-around--x-small">Item 1</div>
   <div class="env-p-around--x-small">Item 2</div>
   <div class="env-p-around--x-small">Item 3</div>
</div>

<div class="example-direction-container env-flex--column"> 
   <div class="env-p-around--x-small">Item 1</div>
   <div class="env-p-around--x-small">Item 2</div>
   <div class="env-p-around--x-small">Item 3</div>
</div>

<div class="example-direction-container env-flex--column-reverse"> 
   <div class="env-p-around--x-small">Item 1</div>
   <div class="env-p-around--x-small">Item 2</div>
   <div class="env-p-around--x-small">Item 3</div>
</div>

{% endexample %}

## Alignment ##
### Justify content ###

Applicable to flex containers (`display: flex`). Utility classes are named using the format: `env-justify-content--{value}`

Valid values 
* `end`
* `center`
* `between`
* `around`

Examples

{% example html %}

<div class="example-alignment-container"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-justify-content--center"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-justify-content--end"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-justify-content--around"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-justify-content--between"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

{% endexample %}

### Align items ###

Applicable to flex containers (`display: flex`). Utility classes are named using the format: `env-align-items--{value}`

Valid values 
* `start`
* `end`
* `center`
* `baseline`

{% example html %}

<div class="example-alignment-container"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-align-items--center"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-align-items--start"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-align-items--end"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container env-align-items--baseline"> 
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
   <div class="env-p-around--x-small">Item</div>
</div>

{% endexample %}

### Align self ###

Applicable to flex items (items within a flex container). Utility classes are named using the format: `env-align-self--{value}`

Valid values 
* `stretch`
* `start`
* `end`
* `center`
* `baseline`

{% example html %}

<div class="example-alignment-container">
   <div class="env-p-around--x-small">Item</div> 
   <div class="env-p-around--x-small env-align-self--stretch">Aligned</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="env-p-around--x-small">Item</div> 
   <div class="env-p-around--x-small env-align-self--start">Aligned</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="env-p-around--x-small">Item</div> 
   <div class="env-p-around--x-small env-align-self--end">Aligned</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="env-p-around--x-small">Item</div> 
   <div class="env-p-around--x-small env-align-self--center">Aligned</div>
   <div class="env-p-around--x-small">Item</div>
</div>

<div class="example-alignment-container">
   <div class="env-p-around--x-small">Item</div> 
   <div class="env-p-around--x-small env-align-self--baseline">Aligned</div>
   <div class="env-p-around--x-small">Item</div>
</div>

{% endexample %}

### Flex length ###

Applicable to flex items (items within a flex container). Used to specify the length of the flex item, relative to the rest of the flex items inside the same container. 
Utility classes are named using the format: `env-flex-length--{value}`

Valid values `1-10`

{% example html %}

<div class="sv-d--flex">
   <div class="env-flex-length--1 example-list-item">Sidebar</div> 
   <div class="env-flex-length--2 example-list-item">Main</div>
   <div class="env-flex-length--1 example-list-item">Sidebar</div>
</div>

{% endexample %}
