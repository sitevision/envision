---
title: Button
---

## Types

<span class="env-badge env-badge--info">Ghost button added in 8.2</span>

```html
<p>
   <button type="button" class="env-button">Default</button>

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

   <button type="button" class="env-button env-button--invert">Invert</button>

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
```

### Block

```html
<p>
   <button
      type="button"
      class="env-button env-button--primary env-button--large env-button--block"
   >
      Large
   </button>
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
   <button type="button" class="env-button env-button--block">Default</button>
</p>

<p>
   <button
      type="button"
      class="env-button env-button--primary env-button--small env-button--block"
   >
      Small
   </button>
   <button type="button" class="env-button env-button--small env-button--block">
      Small
   </button>
</p>
```

## Icons <span class="env-badge env-badge--info">9.0.1</span>

Support for icons in buttons were added in Envision released with Sitevision 8.2.
Square icon-only button was added with Sitevision 9.0.
Method of adding icons have since been updated as examples below.

All button types and sizes are available.

```html
<h4>Icon button types</h4>

<button type="button" class="env-button env-button--primary env-button--icon">
   Icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--ghost env-button--icon env-button--icon-before"
>
   Icon left
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--secondary env-button--icon env-button--icon-after"
>
   Icon right
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<h4>Icon button sizes</h4>

<button
   type="button"
   class="env-button env-button--small env-button--primary env-button--icon"
>
   Size small, icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--small env-button--primary env-button--icon env-button--icon-before"
>
   Small
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--primary env-button--icon">
   Size medium, icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--icon env-button--icon-before"
>
   Medium
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--large env-button--primary env-button--icon"
>
   Size large, icon only, assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--large env-button--primary env-button--icon env-button--icon-before"
>
   Large
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>
```

## State

### Disabled

```html
<button type="button" class="env-button" disabled>Disabled</button>
```
