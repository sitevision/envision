---
layout: docs
title: Icons
description: Icons description
group: utils
---

## Types ##

<div class="icons-demo">
   <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal--fixed {{ site.css_prefix }}-list--horizontal--fixed--6">
      {% for icon in site.data.icons %}
      <li class="{{ site.css_prefix }}-list__item" title="{{ site.css_prefix }}{{ icon.className }}"><i class="{{ site.css_prefix }}{{ icon.className }}"></i></li>
      {% endfor %}
   </ul>
</div>

## Sizes ##

Icon size utility classes are named using the format: `{{ site.css_prefix }}-icon--{size}`

Valid values for _size_
* `small`
* `medium`
* `large`

{% example html %}

<div class="icons-demo">
   <ul class="{{ site.css_prefix }}-list {{ site.css_prefix }}-list--horizontal">
      <li class="{{ site.css_prefix }}-list__item"><i class="{{ site.css_prefix }}-icon--user {{ site.css_prefix }}-icon--small"></i></li>
      <li class="{{ site.css_prefix }}-list__item"><i class="{{ site.css_prefix }}-icon--user {{ site.css_prefix }}-icon--medium"></i></li>
      <li class="{{ site.css_prefix }}-list__item"><i class="{{ site.css_prefix }}-icon--user {{ site.css_prefix }}-icon--large"></i></li>
   </ul>
</div>

{% endexample %}

## Inactive ##

An icon can be marked as inactive by adding modifier: `{{ site.css_prefix }}-icon--inactive` which will lower opacity and add a hover effect.

{% example html %}

<div class="sv-d--flex sv-justify-content--center">
   <i class="{{ site.css_prefix }}-icon--user {{ site.css_prefix }}-icon--large {{ site.css_prefix }}-icon--inactive"></i>
</div>

{% endexample %}
