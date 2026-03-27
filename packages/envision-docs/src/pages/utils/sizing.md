---
title: Sizing
description: The Sizing utility offers classes to define elements’ width and height using preset values.
---

Sizing utilities provide classes for defining an element’s width and height.

## Usage

Use sizing utilities to define an element’s width or height using preset values.

Classes follow the pattern `env-{property}--{size}`.

### Valid values

#### {property}

- `w` <small>(width)</small>
- `h` <small>(height)</small>

#### {size}

Available values are percentage-based:

- `25`
- `50`
- `75`
- `100`

### Width examples

```html
<div class="example-sizing">
   <div class="env-w--25 env-p--x-small env-m-block-end--small">25%</div>
   <div class="env-w--50 env-p--x-small env-m-block-end--small">50%</div>
   <div class="env-w--75 env-p--x-small env-m-block-end--small">75%</div>
   <div class="env-w--100 env-p--x-small">100%</div>
</div>
```

### Height examples

```html
<div class="example-sizing-h">
   <div
      class="env-h--25 env-p--x-small env-m-inline-end--small env-d--inline-block"
   >
      25%
   </div>
   <div
      class="env-h--50 env-p--x-small env-m-inline-end--small env-d--inline-block"
   >
      50%
   </div>
   <div
      class="env-h--75 env-p--x-small env-m-inline-end--small env-d--inline-block"
   >
      75%
   </div>
   <div class="env-h--100 env-p--x-small env-d--inline-block">100%</div>
</div>
```

## Max size

Utility classes are also available for constraining elements to their container:

- `env-mw--100` <small>(max-width)</small>
- `env-mh--100` <small>(max-height)</small>
