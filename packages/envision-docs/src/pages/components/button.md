---
title: Button
---

## Types

<span class="env-badge env-badge--info">Ghost button added in 8.2</span>

```html
<button type="button" class="env-button">Default</button>

<button type="button" class="env-button env-button--primary">Primary</button>

<button type="button" class="env-button env-button--secondary">
   Secondary
</button>

<button type="button" class="env-button env-button--success">Success</button>

<button type="button" class="env-button env-button--danger">Danger</button>

<button type="button" class="env-button env-button--primary env-button--ghost">
   Ghost
</button>

<button type="button" class="env-button env-button--invert">Invert</button>

<button type="button" class="env-button env-button--link">Link</button>
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

## Icons <span class="env-badge env-badge--info">8.2</span>

```html
<button type="button" class="env-button">
   Default
   <svg class="env-icon env-icon--small env-m-left--xx-small">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--primary">
   <svg class="env-icon env-icon--small env-m-right--xx-small">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
   Primary
</button>

<button type="button" class="env-button env-button--primary env-button--ghost">
   <svg class="env-icon env-icon--small env-m-right--xx-small">
      <use xlink:href="/sitevision/envision-icons.svg#icon-grid-small"></use>
   </svg>
   Ghost
</button>
```

### Icon only <span class="env-badge env-badge--info">9.0</span>

A button with hidden text and equal width/height. All standard button classes for size and style apply.
The button should have text for accessibility reasons. The text will be hidden for the eye but visible to a screenreader.

```html
<h4>Icon button types</h4>

<button type="button" class="env-button env-button--icon">
   Assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--primary env-button--icon">
   Assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--primary env-button--ghost env-button--icon"
>
   Assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--link env-button--icon">
   Assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>
   </svg>
</button>

<h4>Icon button sizes</h4>

<button type="button" class="env-button env-button--small env-button--icon">
   Assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--primary env-button--icon">
   Assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>
   </svg>
</button>

<button
   type="button"
   class="env-button env-button--large env-button--secondary env-button--icon"
>
   Assistive text
   <svg class="env-icon">
      <use xlink:href="/sitevision/envision-icons.svg#icon-check-done"></use>
   </svg>
</button>
```

## State

### Disabled

```html
<button type="button" class="env-button" disabled>Disabled</button>
```
