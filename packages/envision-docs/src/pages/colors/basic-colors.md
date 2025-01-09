---
title: Basic colors
---

There are a few general colors that are used for
larger sections or less defined parts of components.
For example, `--env-section-background-color`
is used as background color for Modal dialogs.

-  `--env-background-color` - Theme background color
-  `--env-section-background-color` - Used for larger sections
-  `--env-font-color` - Generic text color
-  `--env-link-font-color` - Generic link color
-  `--env-link-hover-font-color` - Generic link:hover color
-  `--env-border-color` - Generic border color
-  `--env-border-color-light` - Calculated from `--env-border-color`

`--env-font-color` should have at least a 4.5:1 contrast ratio on both `--env-background-color` and `--env-section-background-color`.

The following example uses `--env-background-color` outside the centered box and the following colors inside the box
`--env-section-background-color`, `--env-border-color`, `--env-font-color`, `--env-link-font-color`, `--env-link-hover-font-color`

```html
<div class="example-fill example-basic-colors  env-p-around--xx-large">
   <div class="env-ui-section env-border env-p-around--large">
      <div class="env-text">
         Generic text with
         <a href="javascript:void(0)" class="env-link">a link</a>.
      </div>
   </div>
</div>
```

## Legacy colors <span class="doc-badge doc-badge--danger">Deprecated</span>

The following colors are deprecated and will be removed.

-  env-bg-color--brand
-  env-bg-color--success
-  env-bg-color--info
-  env-bg-color--warning
-  env-bg-color--danger
-  env-bg-color--hover
-  env-bg-color--base
-  env-bg-color--darker
-  env-bg-color--dark
-  env-bg-color--normal
-  env-bg-color--light
-  env-bg-color--lighter
-  env-bg-color--lightest
-  env-color--brand
-  env-color--success
-  env-color--info
-  env-color--warning
-  env-color--danger
-  env-color--hover
-  env-color--base
-  env-color--darker
-  env-color--dark
-  env-color--normal
-  env-color--light
-  env-color--lighter
-  env-color--lightest
