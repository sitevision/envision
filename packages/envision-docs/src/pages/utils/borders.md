---
title: Borders
description: Use the Borders utility to set or remove borders.
---

Set or remove borders.

## Set borders

Use `env-border` or `env-border-{p}` to set border on one or more sides.

Valid values for `{p}` are: `block`, `inline`, `block-start`, `block-end`, `inline-start`, `inline-end`.

You can use `env-border--05` to set a muted border color.

```html
<div class="example-borders">
   <span class="env-border"></span>
   <span class="env-border env-border--05"></span>
   <span class="env-border-block"></span>
   <span class="env-border-inline"></span>
   <span class="env-border-block-start"></span>
   <span class="env-border-block-end"></span>
   <span class="env-border-inline-start"></span>
   <span class="env-border-inline-end"></span>
</div>
```

## Remove borders

Use `env-border-none` to remove a border from all sides.

```html
<div class="example-borders">
   <span style="border: 3px dashed red" class="env-border-none"> </span>
</div>
```

## Deprecated

### Physical properties & modifiers

Classnames `env-border-top`, `env-border-right`, `env-border-bottom` and `env-border-left` are deprecated and replaced by logical properties.

Modifiers `env-border--0` and `env-border--{p}-0` are deprecated, where `env-border--0` is replaced by `env-border-none`.

Variable `--env-border-color-light` is deprecated and replaced by `--env-border-color-05`.
