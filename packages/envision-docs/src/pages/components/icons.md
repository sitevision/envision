---
title: Icons
description: The Icon component simplifies icon integration with customizable styles.
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
   - icon-bubble
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
   - icon-zoom-in
   - icon-zoom-out
   - icon-pause
   - icon-download
---

## Usage

Use the `href` attribute to reference the icon in the included sprite.

The name of the icon is the id of the symbol in the sprite.

```html
<svg class="env-icon env-icon--medium">
   <use href="/sitevision/envision-icons.svg#icon-thumb-up"></use>
</svg>
```

For custom SVG icons, set the class `env-icon` on the SVG element.

```html
<svg class="env-icon env-icon--medium" viewBox="0 0 122.88 106.16">
   <path
      d="M4.03 61.56h27.36c2.21 0 4.02-1.81 4.02-4.02V4.03C35.41 1.81 33.6 0 31.39 0H4.03C1.81 0 0 1.81 0 4.03v53.51c0 2.21 1.81 4.02 4.03 4.02zm59.03 40.14c2.12 10.75 19.72.85 20.88-16.48.35-5.3-.2-11.47-1.5-18.36h25.15c10.46-.41 19.59-7.9 13.14-20.2 1.47-5.36 1.69-11.65-2.3-14.13.5-8.46-1.84-13.7-6.22-17.84-.29-4.23-1.19-7.99-3.23-10.88C105.6-.96 102.86.18 97.54.18H55.07c-6.73 0-10.4 1.85-14.8 7.37v47.31c12.66 3.42 19.39 20.74 22.79 32.11v14.73z"
   />
</svg>
```

## Sizes

Icon size utility classes are named using the format: `env-icon--{size}`

Valid values for _size_

- `xx-small`
- `x-small`
- `small`
- `medium`
- `large`
- `x-large`
- `xx-large`

<div class="icons-demo">
   <ul class="env-list env-list--horizontal">
      <li class="env-list__item">
         <svg class="env-icon env-icon--xx-small">
            <use href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-small">
            <use href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--small">
            <use href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--medium">
            <use href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--large">
            <use href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--x-large">
            <use href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
      <li class="env-list__item">
         <svg class="env-icon env-icon--xx-large">
            <use href="/sitevision/envision-icons.svg#icon-user"></use>
         </svg>
      </li>
   </ul>
</div>

## Inactive

An icon can be marked as inactive by adding modifier: `env-icon--inactive` which will lower opacity and add a hover effect.

```html
<div class="env-d--flex env-justify-content--center">
   <svg class="env-icon env-icon--xx-large env-icon--inactive">
      <use href="/sitevision/envision-icons.svg#icon-user"></use>
   </svg>
</div>
```

## Attention <span id="attention" class="offset-anchor"></span>

For Envision icons and custom inline SVG images you may use modifier `env-icon--attention`
on the icon or on part of an icon. The modifier will set the color to Status color Attention.

```html
<svg class="env-icon env-icon--small env-icon--attention">
   <use href="/sitevision/envision-icons.svg#icon-bell"></use>
</svg>

<svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 24 24"
   class="env-icon env-icon--small"
>
   <circle cx="20" cy="4" r="4" class="env-icon--attention"></circle>
   <g transform="matrix(1,0,0,1,0,0)">
      <path
         d="M12,24c-1.23,0-2.36-.8-2.72-2.04-.12-.4,.11-.81,.51-.93,.4-.11,.81,.11,.93,.51,.21,.71,.95,1.11,1.66,.91,.44-.13,.78-.47,.91-.91,.12-.4,.54-.62,.93-.51,.4,.12,.62,.53,.51,.93-.27,.93-.99,1.65-1.92,1.92-.27,.08-.53,.11-.8,.11Z"
      ></path>
      <path
         d="M12,3.75c-.41,0-.75-.34-.75-.75V.75c0-.41,.34-.75,.75-.75s.75,.34,.75,.75V3c0,.41-.34,.75-.75,.75Z"
      ></path>
      <path
         d="M21,19.5H3c-.29,0-.55-.16-.67-.42-.13-.26-.09-.56,.08-.79,0,0,1.34-1.9,1.34-7.79C3.75,5.95,7.45,2.25,12,2.25c.37,0,.74,.02,1.1,.07,.41,.06,.7,.43,.64,.84-.05,.41-.44,.7-.84,.64-.3-.04-.6-.06-.9-.06-3.72,0-6.75,3.03-6.75,6.75,0,3.95-.57,6.26-1.04,7.5h15.5c-.45-1.16-.92-3.26-.96-6.99,0-.41,.33-.75,.74-.76,.42-.03,.75,.33,.76,.74,.06,5.91,1.24,7.19,1.25,7.2,.25,.2,.33,.52,.22,.82-.11,.3-.41,.49-.73,.49Z"
      ></path>
   </g>
</svg>
```
