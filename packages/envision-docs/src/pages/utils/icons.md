---
title: Icons
---

## Sizes

Icon size utility classes are named using the format: `env-icon--{size}`

Valid values for _size_

-  `x-small`
-  `small`
-  `medium`
-  `large`
-  `x-large`
-  `xx-large`

```html
<div class="icons-demo">
   <ul class="env-list env-list--horizontal">
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-small">
            <use xlink:href="/images/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--small">
            <use xlink:href="/images/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--medium">
            <use xlink:href="/images/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--large">
            <use xlink:href="/images/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-large">
            <use xlink:href="/images/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--xx-large">
            <use xlink:href="/images/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
   </ul>
</div>
```

## Access envision icons in SiteVision

To access envision icons within SiteVision use _"/sitevision/envision-icons.svg#icon-"_

```html
<svg class="env-icon">
   <use xlink:href="/images/envision-icons.svg#icon-user"></use>
</svg>

<svg class="env-icon">
   <use xlink:href="/images/envision-icons.svg#icon-user-fill"></use>
</svg>
```

## Inactive

An icon can be marked as inactive by adding modifier: `env-icon--inactive` which will lower opacity and add a hover effect.

```html
<div class="env-d--flex env-justify-content--center">
   <svg class="env-icon env-icon--xx-large env-icon--inactive">
      <use xlink:href="/images/envision-icons.svg#icon-user"></use>
   </svg>
</div>
```
