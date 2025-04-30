---
title: Basic colors
description: The “Basic colors” section defines general colors for backgrounds, text, links, and borders.
---

There are a few general colors that are used for
larger sections or less defined parts of components.
For example, `--env-section-background-color`
is used as background color for Modal dialogs.

- `--env-background-color` - Theme/body background color
- `--env-section-background-color` - Used for larger content sections.
- `--env-section-background-color-05` <span class="doc-badge doc-badge--info">2025.03.1</span>
- `--env-font-color` - Base text color
- `--env-link-font-color` - Base link color
- `--env-link-hover-font-color` - Base link:hover color
- `--env-border-color` - Base border color
- `--env-border-color-05` - Alternative border color <span class="doc-badge doc-badge--info">2025.03.1</span>

`--env-section-background-color-05` is calculated from `--env-section-background-color`.

`--env-border-color-05` is calculated from `--env-border-color`.

## Accessibility

Font and link colors should have at least a 4.5:1 contrast ratio on `--env-background-color` and `--env-section-background-color`.

Depending on design and usage, it´s recommended to try to get at least a 4.5:1 contrast ratio on `--env-section-background-color-05` as well.

## Examples

`--env-background-color` is used outside the centered boxes.

```html
<div class="example-fill example-basic-colors  env-p-around--xx-large">
   <div
      class="env-ui-section env-border env-border--05 env-p-around--large env-m-bottom--large"
   >
      <div class="env-text">
         Base text on section background with a border 05 and
         <a href="javascript:void(0)" class="env-link">a link</a>.
      </div>
   </div>
   <div class="env-ui-section-05 env-border env-p-around--large">
      <div class="env-text">
         Base text on section background 05, standard border and
         <a href="javascript:void(0)" class="env-link">a link</a>.
      </div>
   </div>
</div>
```

## Legacy colors <span class="doc-badge doc-badge--danger">Deprecated</span>

The following colors are deprecated and will be removed.

- env-bg-color--brand
- env-bg-color--success
- env-bg-color--info
- env-bg-color--warning
- env-bg-color--danger
- env-bg-color--hover
- env-bg-color--base
- env-bg-color--darker
- env-bg-color--dark
- env-bg-color--normal
- env-bg-color--light
- env-bg-color--lighter
- env-bg-color--lightest
- env-color--brand
- env-color--success
- env-color--info
- env-color--warning
- env-color--danger
- env-color--hover
- env-color--base
- env-color--darker
- env-color--dark
- env-color--normal
- env-color--light
- env-color--lighter
- env-color--lightest
- env-border-color-light <span class="doc-badge doc-badge--danger">2025.03.1</span>
