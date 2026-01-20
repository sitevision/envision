---
title: Spacing
description: The Spacing utility provides classes for consistent margin and padding adjustments across elements.
---

The spacing utility was updated in **2026.01.2** to support logical properties alongside physical ones.
See the [logical properties example](/utils/spacing/#logical-properties).

The custom specifiers `horizontal`, `vertical`, and `around` are deprecated.
See [Deprecated](/utils/spacing/#deprecated) for details.

## Usage

Use spacing utilities to apply margin and padding consistently across the system.

Use the pattern `env-{property}-{specifier}--{size}`, or use the shorthand  
`env-{property}--{size}` to apply spacing to all sides.

### Valid values

#### {property}

- `m` <small>margin</small>
- `p` <small>padding</small>

#### {specifier}

Physical and logical properties are both supported.
Logical properties are recommended for spacing within components and internationalized content,
while physical properties remain useful for overall layout and dimensions.

- `top`
- `right`
- `bottom`
- `left`
- `block-start`
- `inline-end`
- `block-end`
- `inline-start`
- `block` <small>block-start & block-end shorthand</small>
- `inline` <small>inline-start & inline-end shorthand</small>
- `{omitted}` <small>block and inline shorthand</small>

#### {size}

- `0` <small>No margin</small>
- `a` <small>auto, only applicable to margin</small>
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

Negative margin is applied by combining a size class with the `--negative` modifier. Negative values are only available for margin.

Example:

`<div class="env-m-inline--large env-m-inline--negative">...</div>`

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

<span id="logical-properties" class="offset-anchor"></span>

## Logical properties example

Logical properties are based on the content’s writing flow instead of physical sides.
This allows spacing to adapt naturally to different languages and writing modes.

All of the examples below use the same classes:

`env-m-block-start--medium`, `env-p--x-small`, `env-p-block-start--0`, `env-p-inline-end--xx-large`

<div class="example-spacing">
<div class="env-flex env-flex--wrap env-flex--gap-medium">
<div class="env-flex__item">
   <div class="example-spacing__margin" style="max-inline-size: 12em">
      <div class="example-spacing__padding env-m-block-start--medium env-p--x-small env-p-block-start--0 env-p-inline-end--xx-large">
         <div class="example-spacing__env-content">
            We believe in making the complex simple.
         </div>
      </div>
   </div>
</div>
<div class="env-flex__item">
   <div class="example-spacing__margin" lang="ar" style="direction: rtl; max-inline-size: 12em">
      <div class="example-spacing__padding env-m-block-start--medium env-p--x-small env-p-block-start--0 env-p-inline-end--xx-large">
         <div class="example-spacing__env-content">نحن نؤمن بضرورة تبسيط الأمور المعقدة.</div>
      </div>
   </div>
</div>
<div class="env-flex__item" >
   <div class="example-spacing__margin" lang="ja" style="writing-mode: vertical-rl; max-inline-size: 8em">
      <div class="example-spacing__padding env-m-block-start--medium env-p--x-small env-p-block-start--0 env-p-inline-end--xx-large">
         <div class="example-spacing__env-content">私たちは複雑なものをシンプルにすることに取り組んでいます。</div>
      </div>
   </div>
</div>
</div>
</div>

Read more about [CSS logical properties and values (MDN)
](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Logical_properties_and_values).

## Deprecated

Since 2026.02.1, the following custom specifiers are deprecated:

- `horizontal` <small>use `inline` for direction-aware spacing, or `left` and `right` for physical spacing</small>
- `vertical` <small>use `block` for direction-aware spacing, or `top` and `bottom` for physical spacing</small>
- `around` <small>use the shorthand by omitting the specifier</small>
