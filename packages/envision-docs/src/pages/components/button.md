---
title: Button
---

## Types

```html
<button type="button" class="env-button">Default</button>

<button type="button" class="env-button env-button--primary">Primary</button>

<button type="button" class="env-button env-button--success">Success</button>

<button type="button" class="env-button env-button--danger">Danger</button>

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

## Using icons

```html
<button type="button" class="env-button">
   Default with icon right
   <svg class="env-icon env-icon--small env-m-left--xx-small">
      <use xlink:href="/images/envision-icons.svg#icon-grid-small"></use>
   </svg>
</button>

<button type="button" class="env-button env-button--primary">
   <svg class="env-icon env-icon--small env-m-right--xx-small">
      <use xlink:href="/images/envision-icons.svg#icon-grid-small"></use>
   </svg>
   Primary with icon left
</button>
```

## State

### Disabled

```html
<button type="button" class="env-button" disabled>Disabled</button>
```
