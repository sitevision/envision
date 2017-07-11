---
layout: docs
title: Sizing
description: Sizing description
group: utils
---
Sizing utility classes are available for width and height. Classes are named using the the format: `{{ site.css_prefix }}-{property}--{size}`

Valid values for _property_
* `w` for `width`
* `h` for `height`

Valid values for _size_ (%)
* `25`
* `50`
* `75`
* `100`

Examples `width`

{% example html %}

<div class="example-sizing"> 
   <div class="{{ site.css_prefix }}-w--25 {{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-m-bottom--small">25%</div>
   <div class="{{ site.css_prefix }}-w--50 {{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-m-bottom--small">50%</div>
   <div class="{{ site.css_prefix }}-w--75 {{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-m-bottom--small">75%</div>
   <div class="{{ site.css_prefix }}-w--100 {{ site.css_prefix }}-p-around--x-small">100%</div>
</div>

{% endexample %}

Examples `height`

{% example html %}

<div class="example-sizing-h"> 
   <div class="{{ site.css_prefix }}-h--25 {{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-m-right--small sv-d--inline-block">25%</div>
   <div class="{{ site.css_prefix }}-h--50 {{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-m-right--small sv-d--inline-block">50%</div>
   <div class="{{ site.css_prefix }}-h--75 {{ site.css_prefix }}-p-around--x-small {{ site.css_prefix }}-m-right--small sv-d--inline-block">75%</div>
   <div class="{{ site.css_prefix }}-h--100 {{ site.css_prefix }}-p-around--x-small sv-d--inline-block">100%</div>
</div>

{% endexample %}

Utility classes are also available for `max-width:100%` and `max-height:100%` and are named using the format: `{{ site.css_prefix }}-m{property}--100` 

Valid values for _property_
* `w` for `width`
* `h` for `height`
