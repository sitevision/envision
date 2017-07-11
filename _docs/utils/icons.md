---
layout: docs
title: Icons
description: Icons description
group: utils
---

## Types ##

<div class="icons-demo">
   <ul class="env-list env-list--horizontal--fixed env-list--horizontal--fixed--6">
      {% for icon in site.data.icons %}
      <li class="env-list__item" title="env{{ icon.className }}"><i class="env{{ icon.className }}"></i></li>
      {% endfor %}
   </ul>
</div>

## Sizes ##

Icon size utility classes are named using the format: `env-icon--{size}`

Valid values for _size_
* `small`
* `medium`
* `large`

{% example html %}

<div class="icons-demo">
   <ul class="env-list env-list--horizontal">
      <li class="env-list__item"><i class="env-icon--user env-icon--small"></i></li>
      <li class="env-list__item"><i class="env-icon--user env-icon--medium"></i></li>
      <li class="env-list__item"><i class="env-icon--user env-icon--large"></i></li>
   </ul>
</div>

{% endexample %}

## Inactive ##

An icon can be marked as inactive by adding modifier: `env-icon--inactive` which will lower opacity and add a hover effect.

{% example html %}

<div class="sv-d--flex sv-justify-content--center">
   <i class="env-icon--user env-icon--large env-icon--inactive"></i>
</div>

{% endexample %}
