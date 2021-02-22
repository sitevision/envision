---
title: List
---

## Overview

`.env-list` resets defaults to `margin: 0`, `padding: 0`, `list-style: none`

## Vertical list

```html
<ul class="env-list">
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
</ul>
```

### Dividers

Apply `.env-list-dividers--*` to add dividers between items. Valid values: `top`, `bottom`, `around`

```html
<ul class="env-list env-list-dividers--top">
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
</ul>
```

For a divider on a specific item, apply `.env-list-item-divider--*`. Valid values: `top`, `bottom`, `around`

```html
<ul class="env-list">
   <li class="env-list__item">Item</li>
   <li class="env-list__item env-list-item-divider--bottom">Item</li>
   <li class="env-list__item">Item</li>
</ul>
```

## Horizontal list

```html
<ul class="env-list env-list--horizontal">
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
</ul>
```

### Dividers

Apply `.env-list-dividers--*` to add dividers between items. Valid values: `right`, `left`

```html
<ul class="env-list env-list--horizontal env-list-dividers--left">
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
   <li class="env-list__item">Item</li>
</ul>
```

### Fixed number of items per row

Use modifiers `env-list--horizontal--fixed env-list--horizontal--fixed--*`. Valid values:
`1-12`

```html
<ul class="env-list env-list--horizontal--fixed env-list--horizontal--fixed--4">
   <li class="env-list__item">
      <div class="example-list-item">1</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item">2</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item">3</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item">4</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item">5</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item">6</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item">7</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item">8</div>
   </li>
</ul>
```

### Responsive horizontal list

```html
<ul class="env-list env-list--horizontal env-list--horizontal--responsive">
   <li class="env-list__item">
      <div class="example-list-item-responsive">1</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item-responsive">2</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item-responsive">3</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item-responsive">4</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item-responsive">5</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item-responsive">6</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item-responsive">7</div>
   </li>
   <li class="env-list__item">
      <div class="example-list-item-responsive">8</div>
   </li>
</ul>
```

### Definition list

#### Default

```html
<dl class="env-definition-list">
   <dt>First item</dt>
   <dd>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed faucibus
      orci, a tincidunt dui.
   </dd>

   <dt>Second item</dt>
   <dd>Pellentesque bibendum augue sit amet pellentesque ultrices.</dd>

   <dt>Third item</dt>
   <dd>Proin non lorem facilisis, tincidunt mi vitae, consequat justo.</dd>
</dl>
```

#### Horizontal

```html
<dl class="env-definition-list env-definition-list--horizontal">
   <dt>First item</dt>
   <dd>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed faucibus
      orci, a tincidunt dui.
   </dd>

   <dt>Second item</dt>
   <dd>Pellentesque bibendum augue sit amet pellentesque ultrices.</dd>

   <dt>Third item</dt>
   <dd>Proin non lorem facilisis, tincidunt mi vitae, consequat justo.</dd>
</dl>
```
