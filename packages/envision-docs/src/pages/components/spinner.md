---
title: Spinner
description: The Spinner component displays loading animations with standard or bounce styles and optional delays.
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

## Hide spinner

Use modifier `env-spinner--hide` or `env-spinner-bounce--hide` to hide the spinner. i.e `env-spinner env-spinner--hide`

## Delayed spinner <span class="doc-badge doc-badge--info">2023.07.1</span>

Delay showing the spinner to avoid spinner flashing when the content loads fast.

Use modifier `env-spinner--fade-in` or `env-spinner-bounce--fade-in` for a delayed spinner.
Data attribute `data-delay="short"` may be used to control delay timing. Allowed values are:

-  `short` (0.25s delay)
-  `medium` (0.5s)
-  `long` (1s)

### Delayed spinner demo

```html-nocode
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

<div class="env-m-top--x-small">
   <button class="env-button" id="toggle-spinner-1">Short delay</button>
   <button class="env-button" id="toggle-spinner-2">Medium delay</button>
   <button class="env-button" id="toggle-spinner-3">Long delay</button>
</div>
