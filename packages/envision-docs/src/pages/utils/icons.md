---
title: Icons
template: icons
extra:
   icons:
      - icon-arrow-down
      - icon-arrow-left
      - icon-arrow-right
      - icon-arrow-up
      - icon-arrow-fill-down
      - icon-arrow-fill-left
      - icon-arrow-fill-right
      - icon-arrow-fill-up
      - icon-bell
      - icon-cart
      - icon-chat
      - icon-check-blank
      - icon-check-done
      - icon-check-line
      - icon-delete
      - icon-dot-big
      - icon-dot-big-fill
      - icon-dot-small
      - icon-file
      - icon-files
      - icon-grid-big
      - icon-grid-small
      - icon-history
      - icon-image
      - icon-images
      - icon-list
      - icon-menu-dots
      - icon-menu-line
      - icon-minus
      - icon-module
      - icon-pay
      - icon-phone
      - icon-plus
      - icon-search
      - icon-shipping
      - icon-star
      - icon-star-half
      - icon-thumb-up
      - icon-user
      - icon-user-fill
      - icon-user-group
---

## Sizes

Icon size utility classes are named using the format: `env-icon--{size}`

Valid values for _size_

-  `xx-small`
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
         <svg class="env-icon env-icon--xx-small">
            <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-small">
            <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--small">
            <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--medium">
            <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--large">
            <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-large">
            <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--xx-large">
            <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
   </ul>
</div>
```

## Inactive

An icon can be marked as inactive by adding modifier: `env-icon--inactive` which will lower opacity and add a hover effect.

```html
<div class="env-d-flex env-justify-content--center">
   <svg class="env-icon env-icon--xx-large env-icon--inactive">
      <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
   </svg>
</div>
```
