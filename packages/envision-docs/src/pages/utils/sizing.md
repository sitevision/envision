---
title: Sizing
description: The Sizing utility offers classes to define elements’ width and height using preset values.
---

The sizing utility was updated in **2026.01.2** and now uses logical properties.

Sizing utilities are available for both inline-size (width) and block-size (height).

## Usage

Use sizing utilities to define an element’s width or height using preset values.

Classes follow the pattern `env-{property}--{size}`.

### Valid values

#### {property}

- `w` <small>inline-size (width)</small>
- `h` <small>block-size (height)</small>

#### {size}

Available values are percentage-based:

- `25`
- `50`
- `75`
- `100`

### Inline-size examples

```html
<div class="example-sizing">
   <div class="env-w--25 env-p--x-small env-m-block-end--small">25%</div>
   <div class="env-w--50 env-p--x-small env-m-block-end--small">50%</div>
   <div class="env-w--75 env-p--x-small env-m-block-end--small">75%</div>
   <div class="env-w--100 env-p--x-small">100%</div>
</div>
```

### Block-size examples

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

- `env-mw--100` <small>max-inline-size (max-width)</small>
- `env-mh--100` <small>max-block-size (max-height)</small>
