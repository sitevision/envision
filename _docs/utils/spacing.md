---
layout: docs
title: Spacing
description: Spacing description
group: utils
---
Padding and margin utility classes are named using the format: `env-{property}-{specifier}--{size}`

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
   <div class="env-m-left--small"></div>
   <div class="env-m-around--large"></div>
   <div class="env-p-top--medium"></div>
</div>

{% endexample %}
