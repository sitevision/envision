---
title: Spinner
description: The Spinner component displays loading animations with different styles and optional delays.
---

## Standard

```html
<div class="env-spinner">
   <div class="env-rect1"></div>
   <div class="env-rect2"></div>
   <div class="env-rect3"></div>
   <div class="env-rect4"></div>
   <div class="env-rect5"></div>
</div>
```

## Bounce

```html
<div class="env-spinner-bounce">
   <div class="env-bounce1"></div>
   <div class="env-bounce2"></div>
   <div class="env-bounce3"></div>
</div>
```

## Ellipsis <span class="doc-badge doc-badge--info">2026.10.1</span>

A simple text-based spinner that uses three dots to indicate loading.

```html
<p>
   Laddar<span class="env-spinner-ellipsis" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
   </span>
</p>
```

## Spinners in buttons <span class="doc-badge doc-badge--info">2026.10.1</span>

Button and CTAs may include a spinner to indicate loading state. The spinner will inherit the button's text color and size.

For `env-button`, use a fitting combination of `env-flex--gap-` and `env-m-` utility classes
for the gap between the spinner and the button text. The CTA button will not require any additional spacing classes.

```html
<p>
   <button class="env-button env-button--primary">
      Ellipsis<span class="env-spinner-ellipsis" aria-hidden="true">
         <span></span>
         <span></span>
         <span></span>
      </span>
   </button>
   <button class="env-button env-flex--gap-x-small">
      <span class="env-spinner">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </span>
      Spinner
   </button>
   <button
      type="button"
      class="env-button env-button--primary env-button--ghost env-button--icon env-button--icon-before env-flex--gap-x-small"
   >
      <span class="env-m-inline-start--x-small env-m-inline-start--negative"
         >Icon & spinner</span
      >
      <span class="env-spinner-bounce">
         <span></span>
         <span></span>
         <span></span>
      </span>
      <svg class="env-icon">
         <use href="/sitevision/envision-icons.svg#icon-phone"></use>
      </svg>
   </button>
</p>

<p>
   <button class="env-cta">
      Spinner
      <span class="env-spinner-bounce">
         <span></span>
         <span></span>
         <span></span>
      </span>
   </button>
   <a href="javascript:void(0)" class="env-cta">
      <svg class="env-icon env-icon--small">
         <use href="/sitevision/envision-icons.svg#icon-phone"></use>
      </svg>
      Icon & spinner
      <span class="env-spinner">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </span>
   </a>
</p>
```

## Hide spinner

Use modifier `env-spinner--hide`, `env-spinner-bounce--hide` or `env-spinner-ellipsis--hide` to hide the spinner.

## Delayed spinner

Delay showing the spinner to avoid spinner flashing when the content loads fast.

Use modifier `env-spinner--fade-in`, `env-spinner-bounce--fade-in` or `env-spinner-ellipsis--fade-in` for a delayed spinner.
Data attribute `data-delay="short"` may be used to control delay timing. Allowed values are:

- `short` (0.25s delay)
- `medium` (0.5s)
- `long` (1s)

### Delayed spinner demo

```html nocode
<div id="demo-delayed-spinner" class="demo-delayed-spinner">
   <div class="env-spinner env-spinner--hide">
      <div class="env-rect1"></div>
      <div class="env-rect2"></div>
      <div class="env-rect3"></div>
      <div class="env-rect4"></div>
      <div class="env-rect5"></div>
   </div>
</div>
```

<div class="env-m-block-start--x-small">
   <button class="env-button" id="toggle-spinner-1">Short delay</button>
   <button class="env-button" id="toggle-spinner-2">Medium delay</button>
   <button class="env-button" id="toggle-spinner-3">Long delay</button>
</div>
