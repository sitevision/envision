---
title: Borders
---

Set or remove borders.

<span class="env-badge env-badge--danger">Changed in 2023.11.1</span> Previous versions have been using physical properties top, right, bottom and left.
These classes are now deprecated. Please use logical properties as described below.

## Set borders

Use `env-border` or `env-border-{p}` to set border on one or more sides.

<span class="env-badge env-badge--info">Since 2023.11.1</span> Valid values for `{p}` are: `block`, `inline`, `block-start`, `block-end`, `inline-start`, `inline-end`.

```html
<div class="example-borders">
   <span class="env-border"></span>
   <span class="env-border-block"></span>
   <span class="env-border-inline"></span>
   <span class="env-border-block-start"></span>
   <span class="env-border-block-end"></span>
   <span class="env-border-inline-start"></span>
   <span class="env-border-inline-end"></span>
</div>
```

## Remove borders

<span class="env-badge env-badge--info">Since 2023.11.1</span> Use `env-border-none` to remove a border from all sides.

```html
<div class="example-borders">
   <span style="border: 3px dashed red" class="env-border-none"> </span>
</div>
```

## Physical properties & modifiers <span class="env-badge env-badge--danger">Deprecated</span>

Since 2023.11.1, border classes based on physical properties are deprecated.

```html-no-example
<div class="example-borders">
   <span class="env-border-top"></span>
   <span class="env-border-right"></span>
   <span class="env-border-bottom"></span>
   <span class="env-border-left"></span>
</div>
```

Since 2023.11.1, modifiers `env-border--0` and `env-border--{p}-0` are deprecated.

`env-border--0` is replaced by `env-border-none`.

```html-no-example
<div class="example-borders">
   <span class="env-border--0"></span>
   <span class="env-border--t-0"></span>
   <span class="env-border--r-0"></span>
   <span class="env-border--b-0"></span>
   <span class="env-border--l-0"></span>
</div>
```
