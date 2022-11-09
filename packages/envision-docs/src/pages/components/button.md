---
title: Button
---

Button appearance and size have been enhanced in Envision released with Sitevision 10.0.

## Types

<span class="env-badge env-badge--info">Brand button coming soon</span>

```html
<p>
   <button type="button" class="env-button">Default</button>

   <button type="button" class="env-button env-button--brand">Brand</button>

   <button type="button" class="env-button env-button--primary">Primary</button>

   <button type="button" class="env-button env-button--secondary">
      Secondary
   </button>
</p>
<p>
   <button type="button" class="env-button env-button--success">Success</button>

   <button type="button" class="env-button env-button--danger">Danger</button>

   <button type="button" class="env-button env-button--info">Info</button>

   <button type="button" class="env-button env-button--warning">Warning</button>
</p>
<p>
   <button
      type="button"
      class="env-button env-button--primary env-button--ghost"
   >
      Ghost
   </button>

   <button type="button" class="env-button env-button--link">Link</button>
</p>
```

## Sizes

<span class="env-badge env-badge--info">Slim button size available since 10.0</span>

```html
<p>
   <button
      type="button"
      class="env-button env-button--primary env-button--large"
   >
      Large
   </button>
   <button type="button" class="env-button env-button--large">Large</button>
</p>

<p>
   <button type="button" class="env-button env-button--primary">Default</button>
   <button type="button" class="env-button">Default</button>
</p>

<p>
   <button
      type="button"
      class="env-button env-button--primary env-button--small"
   >
      Small
   </button>
   <button type="button" class="env-button env-button--small">Small</button>
</p>

<p>
   <button
      type="button"
      class="env-button env-button--primary env-button--slim"
   >
      Slim
   </button>
   <button type="button" class="env-button env-button--slim">Slim</button>
</p>
```

## Block

```html
<p>
   <button type="button" class="env-button env-button--large env-button--block">
      Large
   </button>
</p>

<p>
   <button
      type="button"
      class="env-button env-button--primary env-button--block"
   >
      Default
   </button>
</p>

<p>
   <button
      type="button"
      class="env-button env-button--secondary env-button--small env-button--block"
   >
      Small
   </button>
</p>

<p>
   <button type="button" class="env-button env-button--slim env-button--block">
      Slim
   </button>
</p>
```

## Icons

Support for icons in buttons were added in Envision released with Sitevision 8.2.
Square icon-only button was added with Sitevision 9.0. Modifier "icon-around" available since Sitevision 10.
Method of adding icons have since been updated as examples below.

All button types and sizes are available.

```html
<h4 class="doc-heading-4">Icon button types</h4>

<button type="button" class="env-button env-button--primary env-button--icon">
   Icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--ghost env-button--icon env-button--icon-before"
>
   Icon left
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--secondary env-button--icon env-button--icon-after"
>
   Icon right
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--icon env-button--icon-around"
>
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-star"></use>
   </svg>
   Icons around
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<h4 class="doc-heading-4">Icon button sizes</h4>

<button
   type="button"
   class="env-button env-button--small env-button--primary env-button--icon"
>
   Size small, icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--small env-button--primary env-button--icon env-button--icon-before"
>
   Small
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--primary env-button--icon">
   Size medium, icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-before"
>
   Medium
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--large env-button--primary env-button--icon"
>
   Size large, icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--large env-button--primary env-button--icon env-button--icon-before"
>
   Large
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<h4 class="doc-heading-4">
   Small icon size <span class="env-badge env-badge--info">10.0</span>
</h4>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-small"
>
   Size medium, icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-small env-button--icon-before"
>
   Medium
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<h4 class="doc-heading-4">
   Icon above
   <span class="env-badge env-badge--warning">Beta since 2022.05.1</span>
</h4>
<p>Available in medium and large size.</p>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-above"
>
   Above
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-above env-button--large"
>
   Above
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>
```

## State

### Disabled

```html
<button type="button" class="env-button" disabled>Disabled</button>
```

## Deprecated

Invert button <span class="env-badge env-badge--danger">10.0</span>
