---
title: Spacing
description: The Spacing utility provides classes for consistent margin and padding adjustments across elements.
---

Padding and margin utility classes are named using the format: `env-{property}-{specifier}--{size}`
or shorthand `env-{property}--{size}` to apply to all sides.

## Valid values

- **{property}**: `m`, `p` where _m_ is margin and _p_ is padding.

- **{specifier}**: `block`, `inline`, `block-start`, `inline-end`, `block-end`, `inline-start`

- **{size}**: `0`, `a`, `xxx-small`, `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`

### Notes on property, specifier and size

Property `m` is margin and `p` is padding.

Specifier may be omitted for shorthand usage (apply to all sides).

Size `a` means auto and is only applicable to `margin`.

Size values:

- `xxx-small` <small>(0.125em)</small>
- `xx-small` <small>(0.25em)</small>
- `x-small` <small>(0.5em)</small>
- `small` <small>(0.75em)</small>
- `medium` <small>(1em)</small>
- `large` <small>(1.25em)</small>
- `x-large` <small>(1.5em)</small>
- `xx-large` <small>(1.75em)</small>
- `xxx-large` <small>(2em)</small>

### Negative margin

Invert values for margin by adding the negative modifier: `env-m-{specifier}--negative`.

### Spacing examples

<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m--medium env-p--medium">
         <div class="example-spacing__content">
            env-m--medium<br />env-p--medium
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m-inline--xxx-large env-p-block--large">
         <div class="example-spacing__content">
            env-m-inline--xxx-large<br />env-p-block--large
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m-inline--negative env-m-inline--large env-m-block--medium env-p--small">
         <div class="example-spacing__content">
            env-m-inline--large<br />
            env-m-inline--negative<br /> 
            env-m-block--medium<br />
            env-p--small<br />
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-m-block-start--negative env-m-block-start--medium env-m-inline-end--medium env-m-block-end--small env-m-inline-start--xxx-large env-p--medium">
         <div class="example-spacing__content">
            env-m-block-start--negative<br />
            env-m-block-start--medium<br />
            env-m-inline-end--medium<br />
            env-m-block-end--small<br />
            env-m-inline-start--xxx-large<br />
            env-p--medium
         </div>
      </div>
   </div>
</div>
<div class="example-spacing">
   <div class="example-spacing__margin">
      <div class="example-spacing__padding env-w--50 env-m-block--medium env-m-inline--a env-p--medium">
         <div class="example-spacing__content">
            env-w--50<br />
            env-m-block--medium<br />
            env-m-inline--a<br />
            env-p--medium<br />
         </div>
      </div>
   </div>
</div>

## Deprecated

Since 2026.02.1, physical properties `top`, `right`, `bottom` and `left`, and `horizontal`, `vertical`and `around` are deprecated and replaced by logical properties.
