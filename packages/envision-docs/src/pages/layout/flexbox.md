---
title: Flexbox
description: Use the Flexbox utility to provide classes for flexible layouts, including direction, alignment, and wrapping.
---

## Flex Container

### Direction

Applicable to flex containers (`env-flex`) to set direction of flex items.
Modifier classes are named using the format: `env-flex--direction-{value}`

Valid modifier values

- `row-reverse`
- `column`
- `column-reverse`

Examples

```html
<div class="example-flex env-flex">
   <div class="env-flex__item">Item 1</div>
   <div class="env-flex__item">Item 2</div>
   <div class="env-flex__item">Item 3</div>
</div>

<div class="example-flex env-flex env-flex--direction-row-reverse">
   <div class="env-flex__item">Item 1</div>
   <div class="env-flex__item">Item 2</div>
   <div class="env-flex__item">Item 3</div>
</div>

<div class="example-flex env-flex env-flex--direction-column">
   <div class="env-flex__item">Item 1</div>
   <div class="env-flex__item">Item 2</div>
   <div class="env-flex__item">Item 3</div>
</div>

<div class="example-flex env-flex env-flex--direction-column-reverse">
   <div class="env-flex__item">Item 1</div>
   <div class="env-flex__item">Item 2</div>
   <div class="env-flex__item">Item 3</div>
</div>
```

### Justify content

Applicable to flex containers (`env-flex`). Modifier classes are named using the format: `env-flex--justify-content-{value}`

Valid values

- `end`
- `center`
- `between`
- `around`

Examples

```html
<div class="example-flex example-flex--align env-flex">
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--justify-content-center"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--justify-content-end"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--justify-content-around"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--justify-content-between"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>
```

### Align items

Applicable to flex containers (`env-flex`).
Modifier classes are named using the format: `env-flex--align-items-{value}`

Valid values

- `stretch`
- `start`
- `end`
- `center`
- `baseline`

```html
<div
   class="example-flex example-flex--align env-flex env-flex--align-items-stretch"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--align-items-center"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--align-items-start"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--align-items-end"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>

<div
   class="example-flex example-flex--align env-flex env-flex--align-items-baseline"
>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
</div>
```

### Flex wrap <span id="flex-wrap" class="offset-anchor"></span>

Modifiers applicable to flex containers (`env-flex`).

Valid modifiers:

- `env-flex--wrap`
- `env-flex--wrap-reverse`

```html
<div class="example-flex env-flex">
   <div class="env-flex__item env-w--50">1</div>
   <div class="env-flex__item env-w--50">2</div>
   <div class="env-flex__item env-w--50">3</div>
   <div class="env-flex__item env-w--50">4</div>
</div>

<div class="example-flex env-flex env-flex--wrap">
   <div class="env-flex__item env-w--50">1</div>
   <div class="env-flex__item env-w--50">2</div>
   <div class="env-flex__item env-w--50">3</div>
   <div class="env-flex__item env-w--50">4</div>
</div>

<div class="example-flex env-flex env-flex--wrap-reverse">
   <div class="env-flex__item env-w--50">1</div>
   <div class="env-flex__item env-w--50">2</div>
   <div class="env-flex__item env-w--50">3</div>
   <div class="env-flex__item env-w--50">4</div>
</div>
```

<span id="flex-gap" class="offset-anchor"></span>

### Flex gap <span class="doc-badge doc-badge--info">2025.07.1</span>

Modifiers applicable to flex containers (`env-flex`).

Valid modifiers:

- `env-flex--gap-{value}`
- `env-flex--column-gap-{value}`
- `env-flex--row-gap-{value}`

Valid values

`xxx-small` (0.125em), `xx-small` (0.25em), `x-small` (0.5em), `small` (0.75em), `medium` (1em), `large` (1.5em), `x-large` (2em), `xx-large` (3em), `xxx-large` (4em)

```html
<div class="example-flex env-flex env-flex--gap-medium">
   <div class="env-flex__item env-flex__item--length-1">1</div>
   <div class="env-flex__item env-flex__item--length-1">2</div>
   <div class="env-flex__item env-flex__item--length-1">3</div>
</div>
```

## Flex Items

### Align self

Applicable to direct children within a flex container (`env-flex__item`).
Modifier classes are named using the format: `env-flex__item--align-{value}`

Valid values

- `stretch`
- `start`
- `end`
- `center`
- `baseline`

```html
<div class="example-flex example-flex--align env-flex">
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item env-flex__item--align-stretch">Aligned</div>
   <div class="env-flex__item">Item</div>
</div>

<div class="example-flex example-flex--align env-flex">
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item env-flex__item--align-start">Aligned</div>
   <div class="env-flex__item">Item</div>
</div>

<div class="example-flex example-flex--align env-flex">
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item env-flex__item--align-end">Aligned</div>
   <div class="env-flex__item">Item</div>
</div>

<div class="example-flex example-flex--align env-flex">
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item env-flex__item--align-center">Aligned</div>
   <div class="env-flex__item">Item</div>
</div>

<div class="example-flex example-flex--align env-flex">
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item env-flex__item--align-baseline">Aligned</div>
   <div class="env-flex__item">Item</div>
</div>
```

### Flex length (`flex` property)

Applicable to direct children within a flex container (`env-flex__item`).
Used to specify the length of the flex item, relative to the rest of the flex items inside the same container.
Modifier classes are named using the format: `env-flex__item--length-{value}`

Valid values `1-10`

```html
<div class="example-flex env-flex">
   <div class="env-flex__item env-flex__item--length-1">Sidebar</div>
   <div class="env-flex__item env-flex__item--length-2">Main</div>
   <div class="env-flex__item env-flex__item--length-1">Sidebar</div>
</div>
```

### Flex grow (`flex-grow` property)

Applicable to direct children within a flex container (`env-flex__item`).
Used to specify how much the item will grow relative to the rest flex items inside the same container.
Modifier classes are named using the format: `env-flex__item--grow-{value}`

Valid values `1-10`

```html
<div class="example-flex env-flex">
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item">Item</div>
   <div class="env-flex__item env-flex__item--grow-1">Item</div>
</div>
```

## Deprecated

[List of deprecated class names](/deprecated/flexbox/)
