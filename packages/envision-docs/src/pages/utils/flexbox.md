---
title: Flexbox
---

<span class="env-badge env-badge--info">New naming format since 9.1</span>

## Flex Container

### Direction

Applicable to flex containers (`env-flex`) to set direction of flex items.
Modifier classes are named using the format: `env-flex--direction-{value}`

Valid modifier values

-  `row-reverse`
-  `column`
-  `column-reverse`

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

Applicable to flex containers (`env-flex). Modifier classes are named using the format: `env-flex--justify-content-{value}`

Valid values

-  `end`
-  `center`
-  `between`
-  `around`

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

-  `stretch`
-  `start`
-  `end`
-  `center`
-  `baseline`

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

### Flex wrap (`flex-wrap` property)

Applicable to direct children within a flex container (`env-flex__item`).
Used to specify whether flex items should wrap onto multiple lines.
Modifier classes are named using the format: `env-flex__item--wrap-{value}`

Valid values

-  `wrap`
-  `wrap-reverse`

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

## Flex Items

### Align self

Applicable to direct children within a flex container (`env-flex__item`).
Modifier classes are named using the format: `env-flex__item-align-{value}`

Valid values

-  `stretch`
-  `start`
-  `end`
-  `center`
-  `baseline`

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

## Previous class names <span class="env-badge env-badge--danger">Deprecated</span>

Direction

-  `env-flex--row-reverse`
-  `env-flex--column`
-  `env-flex--column-reverse`

Justify content

-  `env-justify-content--end`
-  `env-justify-content--center`
-  `env-justify-content--between`
-  `env-justify-content--around`

Align items

-  `env-align-items--stretch`
-  `env-align-items--start`
-  `env-align-items--end`
-  `env-align-items--center`
-  `env-align-items--baseline`

Align self

-  `env-align-self--stretch`
-  `env-align-self--start`
-  `env-align-self--end`
-  `env-align-self--center`
-  `env-align-self--baseline`

Flex length

-  `env-flex-length--{1-10}`

Flex grow

-  `env-flex-grow--{1-10}`

Flex wrap

-  `env-flex-wrap--nowrap`
-  `env-flex-wrap--wrap`
-  `env-flex-wrap--wrap-reverse`
