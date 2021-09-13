---
title: Icons 2
template: icons
extra:
   icons2:
      - icon-add
      - icon-alert-triangle
      - icon-arrow-down-2
      - icon-arrow-reply
      - icon-arrow-right-2
      - icon-arrow-up-2
      - icon-article
      - icon-attachment
      - icon-bell-2
      - icon-bookmark
      - icon-calendar
      - icon-send
      - icon-comment
      - icon-download
      - icon-edit
      - icon-email
      - icon-file-2
      - icon-file-bmp
      - icon-file-doc
      - icon-file-gif
      - icon-file-jpg
      - icon-file-pdf
      - icon-file-png
      - icon-file-ppt
      - icon-file-rtf
      - icon-file-svg
      - icon-file-txt
      - icon-file-xls
      - icon-file-zip
      - icon-gif
      - icon-group
      - icon-like
      - icon-like-bold
      - icon-link
      - icon-monitor
      - icon-more
      - icon-page
      - icon-poll
      - icon-remove
      - icon-search-2
      - icon-send
      - icon-share
      - icon-smiley
      - icon-smiley-hypnotized
      - icon-trashcan
      - icon-view
      - icon-view-off
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
         <svg class="env-icon-2 env-icon-2--xx-small">
            <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon-2 env-icon-2--x-small">
            <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon-2 env-icon-2--small">
            <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon-2 env-icon-2--medium">
            <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon-2 env-icon-2--large">
            <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon-2 env-icon-2--x-large">
            <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon-2 env-icon-2--xx-large">
            <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
         </svg>
      </li>
   </ul>
</div>
```

## Inactive

An icon can be marked as inactive by adding modifier: `env-icon-2--inactive` which will lower opacity and add a hover effect.

```html
<div class="env-d--flex env-justify-content--center">
   <svg class="env-icon-2 env-icon-2--xx-large env-icon-2--inactive">
      <use xlink:href="/sitevision/envision-icons-2.svg#icon-send"></use>
   </svg>
</div>
```

## Icons <span class="env-badge env-badge--danger">Deprecated</span>

Since Sitevision 9.2 class env-icon and envision-icons.svg is deprecated.
Please use env-icon-2 and envision-icons-2.svg.

<span class="env-badge env-badge--info">Changes in 9.1</span>

The SVG viewport has been changed. Previously there has been whitespace inside the visible area of all icons.
The viewport has been adjusted so the icon now will fill up the available space. The result is icons that appear
larger even though they're not. Usage of icons in Envision components and code examples has been adjusted accordingly.

<div class="env-icon env-icon--xx-large demo-icon-change" data-demo-text="Before">
<svg viewBox="0 0 32 32">
<path d="M16 23.901l-7.799 4.099 1.49-8.683-6.31-6.15 8.719-1.267 3.899-7.901 3.899 7.901 8.719 1.267-6.31 6.15 1.49 8.683z"></path>
</svg>
</div>

<div class="env-icon env-icon--xx-large demo-icon-change" data-demo-text="After">
<svg viewBox="3.5 3.5 25 25">
<path d="M16 23.901l-7.799 4.099 1.49-8.683-6.31-6.15 8.719-1.267 3.899-7.901 3.899 7.901 8.719 1.267-6.31 6.15 1.49 8.683z"></path>
</svg>
</div>
