---
layout: docs
title: CSS variables
description: CSS variables
group: utils
---

CSS variables are available with the format: `--env-{variable}`

Only works in browsers that support <a class="doc-link" href="https://caniuse.com/#feat=css-variables" target="_blank" rel="noopener">CSS variables.</a>

## Examples

```html
<div class="example-color">
   <div class="example-css-variables-brand">Brand</div>
   <div class="example-css-variables-success">Success</div>
   <div class="example-css-variables-info">Info</div>
   <div class="example-css-variables-warning">Warning</div>
   <div class="example-css-variables-danger">Danger</div>
</div>

<style>
   .example-css-variables-brand {
      background-color: var(--env-color-brand);
      color: var(--env-color-lightest);
   }

   .example-css-variables-success {
      background-color: var(--env-color-success);
      color: var(--env-color-lightest);
   }

   .example-css-variables-info {
      background-color: var(--env-color-info);
      color: var(--env-color-lightest);
   }

   .example-css-variables-warning {
      background-color: var(--env-color-warning);
   }

   .example-css-variables-danger {
      background-color: var(--env-color-danger);
      color: var(--env-color-lightest);
   }
</style>
```

Available CSS variables

-  `--font-family`
-  `--font-size-base`
-  `--font-size-x-small`
-  `--font-size-small`
-  `--font-size-medium`
-  `--font-size-large`
-  `--font-size-x-large`
-  `--font-size-xx-large`
-  `--font-size-xxx-large`
-  `--font-size-xxxx-large`
-  `--color-page-bg`
-  `--color-element-bg`
-  `--color-brand`
-  `--color-brand-light`
-  `--color-brand-dark`
-  `--color-warning`
-  `--color-warning-dark`
-  `--color-danger`
-  `--color-success`
-  `--color-info`
-  `--color-hover`
-  `--font-color`
-  `--font-color-light`
-  `--font-color-lighter`
-  `--font-color-invert`
-  `--color-base`
-  `--color-darker`
-  `--color-dark`
-  `--color-normal`
-  `--color-light`
-  `--color-lighter`
-  `--color-lightest`
-  `--default-button-color`
-  `--focus-background-color`
-  `--focus-color`
-  `--spinner-color`

NEW

    --env-font-family: inherit;
    --env-font-size-base: 1em;
    --env-font-size-x-small: calc(var(--env-font-size-base)*0.75);
    --env-font-size-small: calc(var(--env-font-size-base)*0.875);
    --env-font-size-medium: var(--env-font-size-base);
    --env-font-size-large: calc(var(--env-font-size-base)*1.25);
    --env-font-size-x-large: calc(var(--env-font-size-base)*1.5);
    --env-font-size-xx-large: calc(var(--env-font-size-base)*1.75);
    --env-font-size-xxx-large: calc(var(--env-font-size-base)*2);
    --env-font-size-xxxx-large: calc(var(--env-font-size-base)*2.5);
    --env-font-color: #202330;
    --env-page-background-color: #fff;
    --env-section-background-color: #fff;
    --env-font-color-primary: #202330;
    --env-background-color-primary: #e5f1ff;
    --env-background-color-primary-light: #f4f9ff;
    --env-background-color-primary-dark: #d6e9ff;
    --env-border-color-primary: #a7bed0;
    --env-font-color-secondary: #202330;
    --env-background-color-secondary: #f4f4f4;
    --env-background-color-secondary-light: #fcfcfc;
    --env-background-color-secondary-dark: #ececec;
    --env-border-color-secondary: #bfbfbf;
    --env-font-color-tertiary: #fff;
    --env-background-color-tertiary: #00214d;
    --env-background-color-tertiary-light: #00285c;
    --env-background-color-tertiary-dark: #001a3e;
    --env-border-color-tertiary: #000b1a;
    --env-element-font-color: #202330;
    --env-element-background-color: #f2f2f2;
    --env-element-background-color-dark: #e5e5e5;
    --env-element-background-color-light: #fafafa;
    --env-element-primary-font-color: #fff;
    --env-element-primary-background-color: #006dff;
    --env-element-primary-background-color-dark: #0057cc;
    --env-element-primary-background-color-light: #338aff;
    --env-element-secondary-font-color: #fff;
    --env-element-secondary-background-color: #4f5153;
    --env-element-secondary-background-color-dark: #434446;
    --env-element-secondary-background-color-light: #56595b;
    --env-element-success-font-color: #fff;
    --env-element-success-background-color: #318731;
    --env-element-success-background-color-dark: #2a742a;
    --env-element-success-background-color-light: #359235;
    --env-element-warning-font-color: #202330;
    --env-element-warning-background-color: #c59219;
    --env-element-warning-background-color-dark: #ae8116;
    --env-element-warning-background-color-light: #d39c1b;
    --env-element-danger-font-color: #fff;
    --env-element-danger-background-color: #e22c2c;
    --env-element-danger-background-color-dark: #d71e1e;
    --env-element-danger-background-color-light: #e43939;
    --env-element-info-font-color: #fff;
    --env-element-info-background-color: #1d818b;
    --env-element-info-background-color-dark: #196d76;
    --env-element-info-background-color-light: #208d98;
    --env-element-common-background-color: #f2f2f2;
    --env-element-common-background-color-dark: #909090;
    --env-spacing-xxx-small: .125em;
    --env-spacing-xx-small: .25em;
    --env-spacing-x-small: .5em;
    --env-spacing-small: .75em;
    --env-spacing-medium: 1em;
    --env-spacing-large: 1.25em;
    --env-spacing-x-large: 1.5em;
    --env-spacing-xx-large: 1.75em;
    --env-spacing-xxx-large: 2em;
    --env-box-shadow: 0 0.5em 1em rgba(0,0,0,0.15);
    --env-box-shadow-large: 0 1em 3em rgba(0,0,0,0.175);
    --env-box-shadow-small: 0 0.125em 0.25em rgba(0,0,0,0.075);
    --env-border-radius: .25em;
    --env-border-radius-small: calc(var(--env-border-radius)*0.5);
    --env-border-radius-medium: var(--env-border-radius);
    --env-border-radius-large: calc(var(--env-border-radius)*1.5);
    --env-border-color: #999;
    --env-border-color-light: #ccc;
    --env-border-success-color: #318731;
    --env-border-warning-color: #987013;
    --env-border-danger-color: #e22c2c;
    --env-spinner-color: #5cb3fd;
    --env-popover-width: 300px;
    --env-modal-small-width: 300px;
    --env-modal-medium-width: 450px;
    --env-modal-large-width: 900px;
    --env-breadcrumb-divider-color: #999;
    --env-badge-font-family: var(--env-font-family);
    --env-badge-font-size: 75%;
    --env-badge-border-radius: .2em;
    --env-image-control-color: #fff;
    --env-image-control-inactive-color: #fff;
    --env-button-font-family: var(--env-font-family);
    --env-button-border-radius: .125em;
    --env-form-font-family: var(--env-font-family);
    --env-form-input-border-radius: .25em;
    --env-form-input-font-color: var(--env-font-color);
    --env-form-input-border-color: var(--env-border-color-light);
    --env-form-input-background-color: #fff;
    --env-collapse-border-style: solid;
    --env-collapse-border-width: 1px;
    --env-collapse-icon-width: 15px;
    --env-collapse-icon-height: 3px;
    --env-collapse-toggle-duration: .3s;
    --env-pagination-font-family: var(--env-font-family);
    --env-pagination-border-width: 1px;
    --env-pagination-border-style: solid;
    --env-alert-font-family: var(--env-font-family);
    --env-alert-border-radius: 0;
    --env-alert-background-color: #fff;
    --env-profile-image-border-radius: 50%;
    --env-font-color-light: #34394f;
    --env-font-color-lighter: #49506d;
    --env-font-color-invert: #fff;
    --env-color-page-bg: #fff;
    --env-color-element-bg: #fff;
    --env-color-primary: #006dff;
    --env-color-primary-light: #338aff;
    --env-color-primary-dark: #0057cc;
    --env-color-secondary: #6c757d;
    --env-color-secondary-light: #868e96;
    --env-color-secondary-dark: #545b62;
    --env-color-brand: var(--env-color-primary);
    --env-color-brand-light: var(--env-color-primary-light);
    --env-color-brand-dark: var(--env-color-primary-dark);
    --env-color-warning: #c59219;
    --env-color-warning-dark: #987013;
    --env-color-danger: #e22c2c;
    --env-color-success: #318731;
    --env-color-info: #1d818b;
    --env-color-hover: #f7f7f7;
    --env-color-base: #000;
    --env-color-darker: #0d0d0d;
    --env-color-dark: #333;
    --env-color-normal: #666;
    --env-color-light: #999;
    --env-color-lighter: #ccc;
    --env-color-lightest: #e6e6e6;
    --env-focus-color: #5cb3fd;
    --env-focus-background-color: rgba(0,0,0,0.2);
