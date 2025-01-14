---
title: Button
description: Button provides interactive elements with various styles, sizes, and icon options.
---

## Types

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

   <button type="button" class="env-button env-button--warning">Warning</button>

   <button type="button" class="env-button env-button--danger">Danger</button>

   <button type="button" class="env-button env-button--info">Info</button>
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

All button types and sizes are available.

```html
<h3 class="doc-heading-3">Icon button types</h3>

<button type="button" class="env-button env-button--primary env-button--icon">
   Icon only, assistive text
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--ghost env-button--icon env-button--icon-before"
>
   Icon left
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--secondary env-button--icon env-button--icon-after"
>
   Icon right
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--icon env-button--icon-around"
>
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-star"></use>
   </svg>
   Icons around
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<h3 class="doc-heading-3">Icon button sizes</h3>

<button
   type="button"
   class="env-button env-button--small env-button--primary env-button--icon"
>
   Size small, icon only, assistive text
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--small env-button--primary env-button--icon env-button--icon-before"
>
   Small
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--primary env-button--icon">
   Size medium, icon only, assistive text
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-before"
>
   Medium
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--large env-button--primary env-button--icon"
>
   Size large, icon only, assistive text
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--large env-button--primary env-button--icon env-button--icon-before"
>
   Large
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<h3 class="doc-heading-3">Small icon size</h3>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-small"
>
   Size medium, icon only, assistive text
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-small env-button--icon-before"
>
   Medium
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<h3 class="doc-heading-3">Icon above</h3>
<p>Available in medium and large size.</p>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-above"
>
   Above
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-above env-button--large"
>
   Above
   <svg class="env-icon">
      <use href="/sitevision/envision-icons.svg#icon-phone"></use>
   </svg>
</button>
```

## State

### Disabled

```html
<button type="button" class="env-button" disabled>Disabled</button>
```

## Deprecated

Invert button <span class="doc-badge doc-badge--danger">10.0</span>
