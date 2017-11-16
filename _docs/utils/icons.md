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
      <li class="env-list__item" title="env{{ icon.className }}">
         <svg class="env-icon">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#{{ icon.className }}"></use>
         </svg>
      </li>
      {% endfor %}
   </ul>
</div>

## Sizes ##

Icon size utility classes are named using the format: `env-icon--{size}`

Valid values for _size_
* `x-small`
* `small`
* `medium`
* `large`
* `x-large`
* `xx-large`

{% example html %}

<div class="icons-demo">
   <ul class="env-list env-list--horizontal">
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-small">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--small">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--medium">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--large">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-large">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--xx-large">
            <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
   </ul>
</div>

{% endexample %}

## Inactive ##

An icon can be marked as inactive by adding modifier: `env-icon--inactive` which will lower opacity and add a hover effect.

{% example html %}

<div class="env-d--flex env-justify-content--center">
   <svg class="env-icon env-icon--xx-large env-icon--inactive">
      <use xlink:href="{{ site.baseurl }}/assets/envision/envision-icons.svg#icon-user"></use>
   </svg>
</div>

{% endexample %}
