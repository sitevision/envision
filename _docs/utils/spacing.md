---
layout: docs
title: Spacing
description: Spacing description
group: utils
---
Padding and margin utility classes are named using the format: `{{ site.css_prefix }}-{property}-{specifier}--{size}`

Valid values for _property_
* `m` for `margin`
* `p` for `padding`

Valid values for _specifier_
* `top`
* `right`
* `bottom`
* `left`
* `around`

Valid values for _size_
* `0`
* `a` auto, only applicble to `margin`
* `xxx-small`
* `xx-small`
* `x-small`
* `small`
* `medium`
* `large`
* `x-large`
* `xx-large`
* `xxx-large`

Examples

{% example html %}

<div class="example-spacing"> 
   <div class="{{ site.css_prefix }}-m-left--small"></div>
   <div class="{{ site.css_prefix }}-m-around--large"></div>
   <div class="{{ site.css_prefix }}-p-top--medium"></div>
</div>

{% endexample %}
