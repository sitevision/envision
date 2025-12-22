---
title: Button
description: Buttons provide interactive elements with various styles, sizes, and icon options.
---

## Standard button types

Buttons in Envision can be used to trigger actions (for example, save, submit, or close) or to
navigate to other pages or routes.

A button can be implemented as either a `<button>` element or an `<a>` element styled as a button,
depending on whether it triggers an action or navigates the user.

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

## Call to Action button

A call-to-action (CTA) button is a prominently styled button designed to encourage users to take a specific
desired action. It is typically used in marketing-oriented layouts and links to a page, form, or other
important destination.

```html
<p>
   <a href="javascript:void(0)" class="env-cta">Call to Action</a>
</p>
```

### Call to action button color variants

CTA buttons are available in brand and contextual color variants, allowing you to adapt the visual emphasis
to different use cases and content contexts.

Valid modifiers: `brand`, `primary`, `secondary`, `success`, `danger`, `info`, `warning`

```html
<p>
   <a href="javascript:void(0)" class="env-cta env-cta--brand"
      >Call to Action</a
   >
   <a href="javascript:void(0)" class="env-cta env-cta--primary"
      >Call to Action</a
   >
   <a href="javascript:void(0)" class="env-cta env-cta--success"
      >Call to Action</a
   >
</p>
```

## Sizes

Standard buttons are available in four sizes: large, default, small, and slim.

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

A block button spans the full width of its container. All button types and sizes, including CTA buttons,
are available as block buttons.

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

<p>
   <a href="javascript:void(0)" class="env-cta env-cta--block"
      >Call to Action</a
   >
</p>
```

## Standard button icons

For standard buttons, additional modifier classes are used to position icons as desired.

### Icon button types

```html
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
```

### Icon button sizes

```html
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
```

### Small icon size

```html
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
```

### Icon above

Available in medium and large size.

```html
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

## Call to Action button icons

CTA buttons can also include icons, positioned before or after the text. No additional modifier classes
are required for the button itself.

The icons can be sized using the standard icon size modifier classes.

```html
<p>
   <a href="javascript:void(0)" class="env-cta">
      <svg class="env-icon env-icon--small">
         <use href="/sitevision/envision-icons.svg#icon-phone"></use>
      </svg>
      Call to Action
   </a>
   <a href="javascript:void(0)" class="env-cta">
      Call to Action
      <svg class="env-icon env-icon--x-small">
         <use href="/sitevision/envision-icons.svg#icon-phone"></use>
      </svg>
   </a>
</p>
```

## State

### Disabled

The disabled state is available for standard buttons.

```html
<button type="button" class="env-button" disabled>Disabled</button>
```

## Deprecated

Invert button <span class="doc-badge doc-badge--danger">10.0</span>
