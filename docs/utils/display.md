---
layout: docs
title: Display
description: Display description
group: utils
---

Use this utility to set an element's display property. Utility classes are named using the format: `{{ site.css_prefix }}-d--{value}`

Valid values 
* `inline`
* `block`
* `flex`
* `inline-block`
* `inline-flex`
* `none`

Examples

{% example html %}

<div class="example-display">
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-d--inline">Inline</div>
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-d--inline">Inline</div>
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-d--block">Block</div>
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-d--flex">Flex</div>
   <div class="{{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-d--none">None</div>
</div>

{% endexample %}

