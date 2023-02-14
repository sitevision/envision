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
      - icon-angle-down
---

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
<div class="env-d--flex env-justify-content--center">
   <svg class="env-icon env-icon--xx-large env-icon--inactive">
      <use xlink:href="/sitevision/envision-icons.svg#icon-user"></use>
   </svg>
</div>
```

## Attention <span id="attention" class="offset-anchor"></span>

<span class="env-badge env-badge--info">2023.02.1</span>

For Envision icons and custom inline SVG images you may use modifier `env-icon--attention`
on the icon or on part of an icon. The modifier will set the color to Status color Attention.

<svg class="env-icon env-icon--small env-icon--attention">
   <use xlink:href="/sitevision/envision-icons.svg#icon-bell"></use>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="env-icon env-icon--small">
   <circle cx="20" cy="4" r="4" class="env-icon--attention"></circle>
   <g transform="matrix(1,0,0,1,0,0)"><path d="M12,24c-1.23,0-2.36-.8-2.72-2.04-.12-.4,.11-.81,.51-.93,.4-.11,.81,.11,.93,.51,.21,.71,.95,1.11,1.66,.91,.44-.13,.78-.47,.91-.91,.12-.4,.54-.62,.93-.51,.4,.12,.62,.53,.51,.93-.27,.93-.99,1.65-1.92,1.92-.27,.08-.53,.11-.8,.11Z"></path><path d="M12,3.75c-.41,0-.75-.34-.75-.75V.75c0-.41,.34-.75,.75-.75s.75,.34,.75,.75V3c0,.41-.34,.75-.75,.75Z"></path><path d="M21,19.5H3c-.29,0-.55-.16-.67-.42-.13-.26-.09-.56,.08-.79,0,0,1.34-1.9,1.34-7.79C3.75,5.95,7.45,2.25,12,2.25c.37,0,.74,.02,1.1,.07,.41,.06,.7,.43,.64,.84-.05,.41-.44,.7-.84,.64-.3-.04-.6-.06-.9-.06-3.72,0-6.75,3.03-6.75,6.75,0,3.95-.57,6.26-1.04,7.5h15.5c-.45-1.16-.92-3.26-.96-6.99,0-.41,.33-.75,.74-.76,.42-.03,.75,.33,.76,.74,.06,5.91,1.24,7.19,1.25,7.2,.25,.2,.33,.52,.22,.82-.11,.3-.41,.49-.73,.49Z"></path></g>
</svg>
